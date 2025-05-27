import React, { useState, useCallback, useRef } from 'react';
import { Upload, FileIcon, ArrowRight, Check, X, AlertCircle } from 'lucide-react';
import FileUpload from './FileUpload';
import FormatSelector from './FormatSelector';
import AdModal from './AdModal';
import { getFormatGroups } from '../utils/formatUtils';
import "../css/FileConvert.css";

const FileConvert = () => {
  const [fileInfo, setFileInfo] = useState(null);
  const [targetFormat, setTargetFormat] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);
  const [error, setError] = useState(null);

  const downloadLinkRef = useRef(null);

  const handleFileSelected = (selectedFile) => {
    setFileInfo(selectedFile);
    setTargetFormat('');
    setIsConverted(false);
    setError(null);
  };

  const handleTargetFormatChange = (format) => {
    setTargetFormat(format);
    setIsConverted(false);
  };

  const handleConvert = useCallback(async () => {
    if (!fileInfo || !targetFormat) {
      alert("Please upload a file and select target format");
      return;
    }
  
    const formData = new FormData();
    const fileToSend = fileInfo.file || fileInfo;
    formData.append('file', fileToSend);
    formData.append('targetFormat', targetFormat);
  
    console.log([...formData.entries()]); // Logs what's actually in the formData
  
    try {
      const response = await fetch('http://localhost:4000/convert', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) throw new Error('Conversion failed');
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `converted-file.${targetFormat}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error(error);
      alert('Conversion failed');
    }
  
    setError(null);
  
    if (fileInfo.size > 50 * 1024 * 1024) {
      setShowAdModal(true);
      return;
    }
  
    await convertFile();
  }, [fileInfo, targetFormat]);
  

  const convertFile = async () => {
    try {
      setIsConverting(true);

      // Simulate conversion process
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsConverting(false);
      setIsConverted(true);

      if (downloadLinkRef.current) {
        const url = URL.createObjectURL(fileInfo.file);
        downloadLinkRef.current.href = url;
        downloadLinkRef.current.download = `converted-file.${targetFormat}`;
      }
    } catch (err) {
      setIsConverting(false);
      setError('Conversion failed. Please try again.');
      console.error(err);
    }
  };

  const handleAdCompleted = () => {
    setShowAdModal(false);
    convertFile();
  };

  const clearFile = () => {
    setFileInfo(null);
    setTargetFormat('');
    setIsConverted(false);
    setError(null);
  };

  return (
    <div className="file-convert-container">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Convert Any File Format
      </h1>

      <div className="mb-6">
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Convert your files between formats with just a few clicks. We support image, video, audio, document, and more formats.
        </p>
      </div>

      <div className="space-y-8">
        {!fileInfo ? (
          <FileUpload onFileSelected={handleFileSelected} />
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <div className="h-6 w-6 text-blue-500">
                    <FileIcon />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-800 truncate max-w-[200px] md:max-w-xs">
                    {fileInfo.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(fileInfo.size / (1024 * 1024)).toFixed(2)} MB • {fileInfo.type || 'Unknown type'}
                  </p>
                </div>
              </div>
              <button
                onClick={clearFile}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <div className="h-5 w-5">
                  <X />
                </div>
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-3">Select Target Format</h3>
              <FormatSelector
                currentFormat={fileInfo.extension}
                onFormatChange={handleTargetFormatChange}
                selectedFormat={targetFormat}
              />
            </div>

            {targetFormat && (
              <div className="flex justify-center">
                <button
                  onClick={handleConvert}
                  disabled={isConverting || !targetFormat}
                  className={`py-3 px-6 rounded-lg text-white font-medium flex items-center space-x-2 shadow-sm transition-all
                    ${isConverting
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600 active:transform active:scale-95'
                    }`}
                >
                  {isConverting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-opacity-20 border-t-white rounded-full"></div>
                      <span>Converting...</span>
                    </>
                  ) : (
                    <>
                      <span>Convert Now</span>
                      <div className="h-5 w-5">
                        <ArrowRight />
                      </div>
                    </>
                  )}
                </button>
              </div>
            )}

            {isConverted && (
              <div className="bg-green-50 p-4 rounded-lg animate-fade-in">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="h-5 w-5 text-green-500">
                    <Check />
                  </div>
                  <h3 className="font-medium text-green-800">Conversion Complete!</h3>
                </div>
                <a
                  ref={downloadLinkRef}
                  href="#"
                  onClick={(e) => !downloadLinkRef.current?.href && e.preventDefault()}
                  className={`block w-full py-2 text-center bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors mt-2 ${!downloadLinkRef.current?.href ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Download Converted File
                </a>
              </div>
            )}

            {error && (
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="h-5 w-5 text-red-500">
                    <AlertCircle />
                  </div>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-12 border-t border-gray-100 pt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Why Choose Our Converter?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Fast Conversion", "Secure Processing", "Multiple Formats"].map((title, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="h-6 w-6 text-blue-500">
                  <Upload />
                </div>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">
                {title === "Fast Conversion" && "Convert your files in seconds with our lightning-fast processing."}
                {title === "Secure Processing" && "Your files are processed securely and deleted after conversion."}
                {title === "Multiple Formats" && "Support for hundreds of file formats for all your conversion needs."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showAdModal && (
        <AdModal onClose={() => setShowAdModal(false)} onAdCompleted={handleAdCompleted} />
      )}
    </div>
  );
};

export default FileConvert;

import React, { useCallback, useState } from 'react';
import { Upload, Image, FileText, Film, Music, File } from 'lucide-react';
import { getFileExtension, getFileType } from '../utils/fileUtils';
import "../css/FileUpload.css";

const FileUpload = ({ onFileSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const processFile = useCallback((file) => {
    const extension = getFileExtension(file.name);
    const fileType = getFileType(file);

    const fileInfo = {
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      extension
    };

    setError(null);
    onFileSelected(fileInfo);
  }, [onFileSelected]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      processFile(file);
    }
  }, [processFile]);

  const handleFileChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      processFile(file);
    }
  }, [processFile]);

  const getFileIcon = (type) => {
    if (type.startsWith('image/')) return <Image className="h-8 w-8 text-blue-500" />;
    if (type.startsWith('video/')) return <Film className="h-8 w-8 text-blue-500" />;
    if (type.startsWith('audio/')) return <Music className="h-8 w-8 text-blue-500" />;
    if (type.startsWith('text/') || type.includes('pdf')) return <FileText className="h-8 w-8 text-blue-500" />;
    return <File className="h-8 w-8 text-blue-500" />;
  };

  return (
    <div 
  className={`file-upload-container ${isDragging ? 'dragging' : 'default-style'}`}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
>
  <div className="upload-content">
    <div className="upload-icon-wrapper">
      <Upload className="upload-icon" />
    </div>
    <div className="upload-text">
      <h3 className="upload-title">Drag & Drop Your File Here</h3>
      <p className="upload-subtitle">or click to browse from your computer</p>
    </div>

    <div className="supported-formats">
      {['jpg', 'pdf', 'mp4', 'webp', 'doc'].map((format, index) => (
        <div key={index} className="format-item">
          <div className="format-icon-wrapper">
            {getFileIcon(
              format === 'jpg' || format === 'webp'
                ? 'image/jpeg'
                : format === 'pdf'
                ? 'application/pdf'
                : format === 'mp4'
                ? 'video/mp4'
                : 'text/plain'
            )}
          </div>
          <p className="format-label">.{format}</p>
        </div>
      ))}
    </div>

    <div className="file-types-text">
      <span>Images</span>
      <span>•</span>
      <span>Videos</span>
      <span>•</span>
      <span>Audio</span>
      <span>•</span>
      <span>Documents</span>
      <span>•</span>
      <span>And More</span>
    </div>

    <input 
      type="file" 
      className="file-input-hidden" 
      id="file-upload" 
      onChange={handleFileChange}
    />

    <label 
      htmlFor="file-upload" 
      className="file-select-button"
    >
      Select File
    </label>

    {error && (
      <p className="file-error">{error}</p>
    )}

    <p className="file-info">
      Max file size: 100MB. For larger files, we may show ads to support our service.
    </p>
  </div>
    </div>

  );
};

export default FileUpload;

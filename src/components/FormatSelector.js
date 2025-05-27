import React, { useMemo } from 'react';
import '../css/FormatSelector.css';
import { getFormatGroups, getCompatibleFormats } from '../utils/formatUtils';

const FormatSelector = ({ currentFormat, onFormatChange, selectedFormat }) => {
  const formatGroups = useMemo(() => getFormatGroups(), []);
  const compatibleFormats = useMemo(() => getCompatibleFormats(currentFormat), [currentFormat]);

  return (
    <div className="format-selector">
      {Object.entries(formatGroups).map(([groupName, formats]) => {
        const filteredFormats = formats.filter(
          (format) => compatibleFormats.includes(format) && format !== currentFormat
        );

        if (filteredFormats.length === 0) return null;

        return (
          <div key={groupName} className="format-group">
            <h4 className="format-group-title">{groupName}</h4>
            <div className="format-buttons">
              {filteredFormats.map((format) => (
                <button
                  key={format}
                  onClick={() => onFormatChange(format)}
                  className={`format-button ${
                    selectedFormat === format
                      ? 'format-button-selected'
                      : 'format-button-default'
                  }`}
                >
                  {format.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        );
      })}

      {compatibleFormats.length === 0 && (
        <div className="format-alert">
          No compatible formats available for {currentFormat.toUpperCase()} files.
        </div>
      )}
    </div>
  );
};

export default FormatSelector;

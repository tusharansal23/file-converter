/**
 * Gets format groups categorized by type
 */
 export const getFormatGroups = () => {
    return {
      'Image Formats': ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'tiff', 'ico'],
      'Document Formats': ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'rtf', 'odt'],
      'Video Formats': ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'webm', '3gp'],
      'Audio Formats': ['mp3', 'wav', 'ogg', 'aac', 'flac', 'm4a', 'wma'],
      'Archive Formats': ['zip', 'rar', '7z', 'tar', 'gz'],
      'Ebook Formats': ['epub', 'mobi', 'azw', 'fb2']
    };
  };
  
  /**
   * Gets compatible formats for a given file format
   */
  export const getCompatibleFormats = (format) => {
    const formats = {
      // Image formats
      'jpg': ['png', 'webp', 'gif', 'bmp', 'tiff', 'pdf'],
      'jpeg': ['png', 'webp', 'gif', 'bmp', 'tiff', 'pdf'],
      'png': ['jpg', 'webp', 'gif', 'bmp', 'tiff', 'pdf'],
      'webp': ['jpg', 'png', 'gif'],
      'gif': ['jpg', 'png', 'webp'],
      'svg': ['png', 'jpg', 'pdf'],
  
      // Document formats
      'pdf': ['doc', 'docx', 'txt', 'jpg', 'png'],
      'doc': ['pdf', 'docx', 'txt', 'rtf'],
      'docx': ['pdf', 'doc', 'txt', 'rtf'],
      'txt': ['pdf', 'doc', 'docx', 'rtf'],
      'rtf': ['pdf', 'doc', 'docx', 'txt'],
  
      // Video formats
      'mp4': ['avi', 'mov', 'wmv', 'flv', 'mkv', 'webm', 'gif'],
      'avi': ['mp4', 'mov', 'wmv', 'flv', 'mkv', 'webm'],
      'mov': ['mp4', 'avi', 'wmv', 'flv', 'mkv', 'webm'],
      'webm': ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv'],
  
      // Audio formats
      'mp3': ['wav', 'ogg', 'aac', 'flac', 'm4a', 'wma'],
      'wav': ['mp3', 'ogg', 'aac', 'flac', 'm4a', 'wma'],
      'ogg': ['mp3', 'wav', 'aac', 'flac', 'm4a', 'wma'],
      'flac': ['mp3', 'wav', 'ogg', 'aac', 'm4a', 'wma'],
  
      // Spreadsheet formats
      'xls': ['xlsx', 'csv', 'pdf'],
      'xlsx': ['xls', 'csv', 'pdf'],
      'csv': ['xls', 'xlsx', 'pdf', 'txt'],
  
      // Presentation formats
      'ppt': ['pptx', 'pdf'],
      'pptx': ['ppt', 'pdf'],
  
      // Archive formats
      'zip': ['rar', '7z', 'tar', 'gz'],
      'rar': ['zip', '7z', 'tar', 'gz'],
      '7z': ['zip', 'rar', 'tar', 'gz'],
  
      // Ebook formats
      'epub': ['mobi', 'pdf', 'txt'],
      'mobi': ['epub', 'pdf', 'txt']
    };
  
    return formats[format] || [];
  };
  
  /**
   * Get file icon based on format
   */
  export const getFormatIcon = (format) => {
    const imageFormats = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'tiff', 'ico'];
    const documentFormats = ['pdf', 'doc', 'docx', 'txt', 'rtf', 'odt'];
    const videoFormats = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'webm', '3gp'];
    const audioFormats = ['mp3', 'wav', 'ogg', 'aac', 'flac', 'm4a', 'wma'];
  
    if (imageFormats.includes(format)) return 'image';
    if (documentFormats.includes(format)) return 'document';
    if (videoFormats.includes(format)) return 'video';
    if (audioFormats.includes(format)) return 'audio';
  
    return 'file';
  };
  
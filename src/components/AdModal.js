import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import "../css/AdModal.css";

const AdModal = ({ onClose, onAdCompleted }) => {
  const [countdown, setCountdown] = useState(5);
  const [adViewed, setAdViewed] = useState(false);

  useEffect(() => {
    if (countdown > 0 && !adViewed) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !adViewed) {
      setAdViewed(true);
    }
  }, [countdown, adViewed]);

  return (
    <div className="ad-modal-backdrop">
  <div className="ad-modal-content">
    <button onClick={onClose} className="ad-close-btn">
      <X className="h-5 w-5" />
    </button>

    <div className="ad-header">
      <h3>Almost There!</h3>
      <p>Watch this ad to convert files larger than 50MB</p>
    </div>

    <div className="ad-box">
      <div>
        <p>Advertisement</p>
        <p>(Google Ad would appear here)</p>
      </div>
    </div>

    <div className="text-center">
      {!adViewed ? (
        <button disabled className="ad-btn disabled">
          Please wait {countdown} seconds
        </button>
      ) : (
        <button onClick={onAdCompleted} className="ad-btn active">
          Continue to Conversion
        </button>
      )}
      <p className="ad-footer-note">
        By viewing this ad, you support our free service. Thank you!
      </p>
    </div>
  </div>
</div>
  );
};

export default AdModal;

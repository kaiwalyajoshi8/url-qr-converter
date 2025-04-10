// src/App.jsx
import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [showQR, setShowQR] = useState(false);

  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    downloadLink.click();
  };

  return (
    <div className="container">
      <h1>URL to QR Code Converter</h1>
      <input
        type="text"
        placeholder="Enter a valid URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={() => setShowQR(true)} disabled={!url.trim()}>
        Generate QR
      </button>

      {showQR && (
        <div className="qr-container">
          <QRCode value={url} size={256} />
          <button onClick={downloadQRCode}>Download QR Code</button>
        </div>
      )}
    </div>
  );
}

export default App;


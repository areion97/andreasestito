import React, { useState } from "react";

function Image({ src, alt, width, height, ...props }) {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ position: "relative", width: width, height: height }}>
      {loading && (
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)", zIndex: 1
        }}>
          <span className="spinner" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoading(false)}
        style={loading ? { opacity: 0 } : { opacity: 1, transition: "opacity 0.3s" }}
        {...props}
      />
    </div>
  );
}

export default Image;
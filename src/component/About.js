import React, { useState } from "react";

function getAssetUrl(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const publicUrl = process.env.PUBLIC_URL || "";
  return publicUrl ? `${publicUrl}/${clean}` : `/${clean}`;
}

function ToolLogo({ src, alt, fallbackSrc, inlineFallback, width = "100rem" }) {
  const [errorCount, setErrorCount] = useState(0);

  const handleError = () => {
    setErrorCount((prev) => prev + 1);
  };

  // Jika gagal memuat dari path lokal dan fallback CDN, gunakan inline vector SVG
  if (errorCount >= 2 && inlineFallback) {
    return inlineFallback;
  }

  // Jika tidak ada fallback URL sekunder, langsung tampilkan inline SVG saat error
  if (errorCount === 1 && !fallbackSrc && inlineFallback) {
    return inlineFallback;
  }

  const currentSrc = errorCount === 0 ? getAssetUrl(src) : fallbackSrc;

  return (
    <img
      width={width}
      src={currentSrc}
      alt={alt}
      onError={handleError}
      className="img-fluid"
      style={{ maxHeight: "100px", objectFit: "contain" }}
    />
  );
}

export default function About(props) {
  // Vector SVG Fallback untuk React (warna brand #23ACFF)
  const reactSvgFallback = (
    <svg width="100" height="100" viewBox="0 0 223 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="111.5" cy="100" rx="20" ry="20" fill="#23ACFF" />
      <ellipse cx="111.5" cy="100" rx="100" ry="38" stroke="#23ACFF" strokeWidth="8" />
      <ellipse cx="111.5" cy="100" rx="100" ry="38" stroke="#23ACFF" strokeWidth="8" transform="rotate(60 111.5 100)" />
      <ellipse cx="111.5" cy="100" rx="100" ry="38" stroke="#23ACFF" strokeWidth="8" transform="rotate(120 111.5 100)" />
    </svg>
  );

  // Vector SVG Fallback untuk Bootstrap (ikon B khas)
  const bootstrapSvgFallback = (
    <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="36" fill="#23ACFF" />
      <path
        d="M150 109C146.5 104 141.3 100.5 134.6 98.6C140.3 96.6 145.4 88.9 148.4 84C150 78.1 150 71.2 150 59.3C145.7 50.1 137 43.8 128.3 37.6C118.6 33.3 102 33.3 102 33.3H50V166.7H108C123.7 166.6 135.5 163.2 143.6 156.7C151.6 150.1 155.6 140.3 155.6 127.2C155.6 120 153.8 113.9 150 109ZM83.3 55.6H107C115.4 55.6 122.2 62.4 122.2 70.8C122.2 79.3 115.4 86.1 107 86.1H83.3V55.6ZM111.1 144.4H83.3V111.1H111.1C120.3 111.1 127.8 118.6 127.8 127.8C127.8 137 120.3 144.4 111.1 144.4Z"
        fill="white"
      />
    </svg>
  );

  // Vector SVG Fallback untuk JSON ({ } icon)
  const jsonSvgFallback = (
    <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="36" fill="#23ACFF" />
      <text
        x="100"
        y="125"
        textAnchor="middle"
        fontFamily="monospace, sans-serif"
        fontSize="72"
        fontWeight="bold"
        fill="#FFFFFF"
      >
        &#123; &#125;
      </text>
    </svg>
  );

  return (
    <section className="bg-graylight py-5" ref={props.refAbout}>
      <div className="container-md">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 size-medium ">
            <h1 className="third-color">Tools used for build this web</h1>
            <p className="p-style">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com/icon"
                className="secondary-color"
              >
                React, Bootstrap, JSON
              </a>{" "}
              icon by{" "}
              <a
                className="secondary-color"
                target="_blank"
                rel="noreferrer"
                href="https://icons8.com"
              >
                Icons8
              </a>
              <br />
              <a className="secondary-color" href="https://storyset.com/web">
                Web illustrations by Storyset
              </a>
            </p>
          </div>
          <div className="col-md d-flex justify-content-between align-items-center">
            <ToolLogo
              src="images/ic_react.svg"
              fallbackSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              inlineFallback={reactSvgFallback}
              alt="logo react"
              width="100rem"
            />
            <ToolLogo
              src="images/ic_bootstrap.svg"
              fallbackSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
              inlineFallback={bootstrapSvgFallback}
              alt="logo bootstrap"
              width="100rem"
            />
            <ToolLogo
              src="images/ic_jsoon.svg"
              fallbackSrc={getAssetUrl("images/ic_jsoon.jpg")}
              inlineFallback={jsonSvgFallback}
              alt="logo JSON"
              width="100rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

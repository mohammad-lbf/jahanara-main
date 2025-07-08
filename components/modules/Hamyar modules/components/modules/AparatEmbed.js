import React from "react";

const AparatEmbed = ({ videoSrc }) => {
  return (
    <div>
      <style jsx>{`
        .h_iframe-aparat_embed_frame {
          position: relative;
        }
        .h_iframe-aparat_embed_frame .ratio {
          display: block;
          width: 100%;
          height: auto;
        }
        .h_iframe-aparat_embed_frame iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <div className="h_iframe-aparat_embed_frame">
        <span style={{ display: "block", paddingTop: "57%" }}></span>
        <iframe
          src={videoSrc}
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
};

export default AparatEmbed;

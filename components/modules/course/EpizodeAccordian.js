import React from "react";
import { Accordion } from "react-bootstrap";

const EpizodeAccordian = ({ caption, videoSrc }) => {
  return (
    <Accordion className="w-100 mb-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ direction: "rtl" }} className="d-flex w-100 align-items-center">
          <span className="w-100 text-end fw-bold ps-3">{caption}</span>
        </Accordion.Header>
        <Accordion.Body className="rounded" style={{ backgroundColor: "#f0f0f0" }}>
          <video controls width="100%">
            <source src={videoSrc} type="video/mp4" />
            مرورگر شما از ویدیو پشتیبانی نمی‌کند.
          </video>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default EpizodeAccordian;

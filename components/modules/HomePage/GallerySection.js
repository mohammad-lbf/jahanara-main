"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const GallerySection = () => {
  return (
    <section
      className="container my-3 rounded shadow-sm p-4 border"
      style={{
        background: "linear-gradient(135deg, rgb(180,243,251), #ffffff)",
        border: "1px solid #b2ebf2"
      }}
    >
      <div className="row py-4 justify-content-center align-items-center">
        {/* متن */}
        <div className="col-12 col-md-6 text-center">
          <h2
            className="pt-0 fw-bold text-center lh-lg fs-4 d-flex justify-content-center align-items-center gap-2"
            style={{
              fontSize: "30px",
              fontFamily: "KalamehWeb-Bold",
              color: "#03004e"
            }}
          >
            <FaChevronDown className="fs-5" />
            آلبوم تصاویر دبستان
            <FaChevronDown className="fs-5" />
          </h2>
          <p
            className="mt-2 lh-lg text-center text-muted mb-4"
            style={{
              fontFamily: "KalamehWeb-Medium",
              fontSize: "15px"
            }}
          >
            قاب‌های ماندگار دبستان شهید جهان آرا
          </p>
          <div className="d-flex justify-content-center">
            <Link
              href="/gallery"
              className="btn-main-2 text-white d-flex align-items-center"
              style={{ width: "fit-content" }}
              aria-label="مشاهده تصاویر آلبوم دبستان شهید جهان آرا"
            >
              <span style={{ fontFamily: "KalamehWeb-Bold" }}>
                مشاهده تصاویر
              </span>
              <i className="bi bi-chevron-double-left me-2 pt-2 animated-icon"></i>
            </Link>
          </div>
        </div>

        {/* تصاویر */}
        <div className="col-12 col-md-6 d-flex justify-content-center mt-4 pt-4 pt-md-0 mt-md-0">
          <div
            className="position-relative d-flex justify-content-center"
            style={{ height: "220px" }}
          >
            {/* کارت پشتی اول */}
            <Image
              src="/images/components/modules/msg41806884-3080.jpg"
              alt="تصویر آلبوم اول"
              width={280}
              height={200}
              style={{
                borderRadius: "15px",
                position: "absolute",
                top: "10px",
                left: "10px",
                transform: "rotate(8deg)",
                zIndex: 0,
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                objectFit: "cover"
              }}
            />

            {/* کارت پشتی دوم */}
            <Image
              src="/images/components/modules/msg41806884-3082.jpg"
              alt="تصویر آلبوم دوم"
              width={280}
              height={200}
              style={{
                borderRadius: "15px",
                position: "absolute",
                top: "10px",
                left: "10px",
                transform: "rotate(0deg)",
                zIndex: 0,
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                objectFit: "cover"
              }}
            />

            {/* کارت اصلی */}
            <div
              className="bg-white p-1"
              style={{
                width: "250px",
                borderRadius: "15px",
                zIndex: 1,
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                overflow: "hidden",
                transform: "rotate(-8deg)"
              }}
            >
              <Image
                src="/images/components/modules/msg41806884-3081.jpg"
                alt="تصویر اصلی آلبوم"
                width={250}
                height={210}
                style={{
                  borderRadius: "12px",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

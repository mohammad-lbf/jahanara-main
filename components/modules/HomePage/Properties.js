"use client";

import React from 'react';
import { FaSchool, FaChartLine, FaUserGraduate, FaChevronDown } from 'react-icons/fa';

const cardStyle = {
  overflow: "hidden",
  maxWidth: "350px",
  height: "350px",
  borderRadius: "10px",
  borderTop: "3px solid #d7141a",
  borderBottom: "3px solid rgb(0, 65, 155)",
  borderLeft: "3px solid #d7141a",
  borderRight: "3px solid rgb(0, 65, 155)",
  background: "linear-gradient(135deg,rgb(255, 230, 239),rgb(222, 245, 255))"
};

const iconStyle = {
  fontSize: "50px",
  color: "#03004e",
};

const headingStyle = {
  fontSize: "27px",
  fontFamily: "KalamehWeb-Bold",
};

const paragraphStyle = {
  fontFamily: "KalamehWeb-Medium",
};

const Properties = () => {
  return (
    <div className='container px-0 mt-0 mt-lg-4'>
      <h3
        style={{
          fontSize: "30px",
          fontFamily: "KalamehWeb-Bold",
          color: "#03004e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
        className="pt-0 fw-bold text-center lh-lg fs-4"
      >
        <FaChevronDown className='fs-5' />
        اهداف دبستان شهید جهان‌آرا
        <FaChevronDown className='fs-5' />
      </h3>

      <div className='row justify-content-center align-items-center pt-4'>

        {/* کارت ۱ */}
        <div className='col-12 col-lg-4 d-flex justify-content-lg-end justify-content-center'>
          <div
            style={cardStyle}
            className="px-4 property-card shadow mb-3 mb-lg-0"
          >
            <div className='text-center w-100 mt-4 pt-3' style={iconStyle}>
              <FaSchool />
            </div>
            <h2 className='mt-4 text-center lh-lg mb-4 fs-4' style={headingStyle}>
              محیط امن و دوستانه
            </h2>
            <p className='mt-3 lh-lg' style={paragraphStyle}>
              دبستان شهید جهان‌آرا با ایجاد فضایی امن، دوستانه و شاد، بستری مناسب برای رشد شخصیتی و عاطفی دانش‌آموزان فراهم می‌کند.
            </p>
          </div>
        </div>

        {/* کارت ۲ */}
        <div className='col-12 col-lg-4 d-flex justify-content-center'>
          <div
            style={cardStyle}
            className="px-4 property-card shadow mb-3 mb-lg-0"
          >
            <div className='text-center w-100 mt-4 pt-3' style={iconStyle}>
              <FaChartLine />
            </div>
            <h2 className='mt-4 text-center lh-lg mb-4 fs-4' style={headingStyle}>
              پیشرفت علمی و تربیتی
            </h2>
            <p className='mt-3 lh-lg' style={paragraphStyle}>
              این دبستان با ارائه برنامه‌های آموزشی و پرورشی متنوع، پیشرفت علمی و رشد تربیتی دانش‌آموزان را هدف‌گذاری کرده است.
            </p>
          </div>
        </div>

        {/* کارت ۳ */}
        <div className='col-12 col-lg-4 d-flex justify-content-lg-start justify-content-center'>
          <div
            style={cardStyle}
            className="px-4 property-card shadow mb-3 mb-lg-0"
          >
            <div className='text-center w-100 mt-4 pt-3' style={iconStyle}>
              <FaUserGraduate />
            </div>
            <h2 className='mt-4 text-center lh-lg mb-4 fs-4' style={headingStyle}>
              تربیت اخلاق‌مدار
            </h2>
            <p className='mt-3 lh-lg' style={paragraphStyle}>
              هدف اصلی مدرسه، تربیت دانش‌آموزانی خلاق، اخلاق‌مدار و مسئولیت‌پذیر است تا در آینده نقش مؤثری در جامعه ایفا کنند.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Properties;

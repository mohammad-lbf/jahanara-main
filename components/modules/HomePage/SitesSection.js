"use client";

import Link from 'next/link';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const sitesData = [
  {
    href: "/hamyar",
    bgColor: "#ff544d",
    boxShadow: "1px 3px 12px 1px #ff544d",
    iconClass: "bi bi-pencil-square",
    title: "سامانه همیار",
    description: "نمونه سوال، محتوا و درسنامه آموزشی",
    linkText: "ورود به سامانه",
  },
  {
    href: "/mostamar",
    bgColor: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(179,241,220,1) 0%, rgba(109,228,188,1) 0%, rgba(13,209,143,1) 0%)",
    boxShadow: "1px 3px 12px 1px rgba(13,209,143,1)",
    iconClass: "bi bi-journal-bookmark-fill",
    title: "سامانه یادگیری مستمر",
    description: "دوره ها و مقالات آموزشی",
    linkText: "ورود به سامانه",
  }
];

const SiteCard = ({ site }) => (
  <div className='col-12 col-sm-6 col-lg-4 mb-4 mt-2 d-flex justify-content-center'>
    <Link href={site.href} className='w-100' aria-label={site.title}>
      <div
        className='scale-up-element'
        style={{
          boxShadow: site.boxShadow,
          background: site.bgColor,
          position: "relative",
          borderRadius: "15px",
          width: "100%",
          height: "200px"
        }}
      >
        {/* Icon */}
        <div
          className='d-flex justify-content-center w-100'
          style={{ position: "absolute", top: "15px" }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.35)",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "50%"
            }}
          >
            <i
              className={`${site.iconClass} text-white mx-auto`}
              style={{ fontSize: "30px", marginTop: "10px" }}
            ></i>
          </div>
        </div>

        {/* Title and Description */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            width: "100%",
            textAlign: "center"
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontFamily: "KalamehWeb-Bold",
              color: "#fff",
              lineHeight: "1.9rem",
              margin: "auto"
            }}
          >
            {site.title}
          </p>
          <p
            style={{
              fontSize: "15px",
              fontFamily: "KalamehWeb-Bold",
              color: "#fff",
              lineHeight: "1.9rem",
              margin: "auto"
            }}
          >
            {site.description}
          </p>
        </div>

        {/* Bottom link */}
        <div
          style={{
            borderTop: "2px solid rgba(255,255,255,0.4)",
            position: "absolute",
            top: "150px",
            width: "100%"
          }}
        >
          <div style={{ position: "relative" }}>
            <p
              style={{
                position: "absolute",
                right: "10px",
                top: "7px",
                fontSize: "14px",
                fontFamily: "KalamehWeb-Medium",
                color: "#fff",
                lineHeight: "1.9rem"
              }}
            >
              {site.linkText}
            </p>
            <i
              className="bi bi-caret-left-fill text-white"
              style={{
                position: "absolute",
                left: "10px",
                top: "14px",
                fontSize: "20px"
              }}
            ></i>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

const SitesSection = () => {
  return (
    <section
      className="container rounded shadow-sm p-4 border mt-0 mt-lg-4"
      style={{
        background: "linear-gradient(225deg, rgb(255, 255, 255), rgb(232, 255, 233))"
      }}
    >
      <h2
        className="pt-0 fw-bold text-center lh-lg fs-4 d-flex justify-content-center align-items-center gap-2"
        style={{
          fontSize: "30px",
          fontFamily: "KalamehWeb-Bold",
          color: "#03004e"
        }}
      >
        <FaChevronDown className='fs-5' />
        سامانه های دبستان
        <FaChevronDown className='fs-5' />
      </h2>
      <p
        className="mt-2 lh-lg text-center text-muted mb-4"
        style={{
          fontFamily: "KalamehWeb-Medium",
          fontSize: "15px"
        }}
      >
        دستاوردهای فناورانه دبستان شهید جهان آرا
      </p>

      <div className='row justify-content-center'>
        {sitesData.map((site, index) => (
          <SiteCard site={site} key={index} />
        ))}
      </div>
    </section>
  );
};

export default SitesSection;

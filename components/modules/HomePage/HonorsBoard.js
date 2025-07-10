"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaChalkboardTeacher,
  FaUserTie,
  FaGraduationCap,
  FaUserFriends,
  FaBookOpen,
  FaChevronDown,
  FaUser,
} from "react-icons/fa";

// تبدیل اعداد انگلیسی به فارسی
const toPersianNumber = (num) => {
  return num
    .toString()
    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
};

// آیتم شمارنده
function CounterItem({
  icon: Icon,
  label,
  endValue,
  showPlus = false,
  bgColor,
  textColor,
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      const duration = 5000; // انیمیشن ۵ ثانیه
      const stepCount = 100;
      const increment = endValue / stepCount;
      const interval = duration / stepCount;

      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.round(current));
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [hasStarted, endValue]);

  return (
    <div
      ref={containerRef}
      className="text-center d-flex flex-column align-items-center mb-4 border p-3 rounded shadow"
      style={{
        width: "100%",
        height: "160px",
        background: bgColor,
        border: `2px solid ${textColor}`,
      }}
    >
      <Icon
        size={30}
        color={textColor}
        className="mb-2"
        style={{ flexShrink: 0 }}
      />
      <span
        style={{
          fontFamily: "KalamehWeb-Bold",
          color: textColor,
          fontSize: "16px",
          margin: "5px 0 15px 0",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "KalamehWeb-Bold",
          color: textColor,
          fontSize: "24px",
        }}
      >
        {toPersianNumber(count)}
        {showPlus && "+"}
      </span>
    </div>
  );
}

export default function HonorsBoard() {
  return (
    <div className="container my-3 rounded">
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
        className="pt-0 mb-3 fw-bold text-center lh-lg fs-4"
      >
        <FaChevronDown className="fs-5" />
        دبستان شهید جهان آرا در یک نگاه
        <FaChevronDown className="fs-5" />
      </h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-2">
          <CounterItem
            icon={FaChalkboardTeacher}
            label="آموزگاران"
            endValue={13}
            bgColor="#E0F7FA"
            textColor="#00796B"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-2">
          <CounterItem
            icon={FaUser}
            label="معاونین"
            endValue={4}
            bgColor="#FFF9C4"
            textColor="#F57F17"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-2">
          <CounterItem
            icon={FaGraduationCap}
            label="فارغ التحصیلان"
            endValue={40000}
            showPlus={true}
            bgColor="#E8F5E9"
            textColor="#388E3C"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-2">
          <CounterItem
            icon={FaUserFriends}
            label="دانش آموزان"
            endValue={500}
            showPlus={true}
            bgColor="#FCE4EC"
            textColor="#C2185B"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-2">
          <CounterItem
            icon={FaBookOpen}
            label="مقالات آموزشی"
            endValue={10}
            showPlus={true}
            bgColor="#E1F5FE"
            textColor="#0288D1"
          />
        </div>
      </div>
    </div>
  );
}

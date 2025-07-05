"use client";

import { useEffect, useRef, useState } from "react";

// تابع تبدیل عدد انگلیسی به فارسی
const toPersianNumber = (num) => {
  return num
    .toString()
    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
};

export default function AutoCounterPersian() {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);

  // استفاده از Intersection Observer
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [hasStarted]);

  // استارت شمارش
  useEffect(() => {
    if (hasStarted && count < 80) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [hasStarted, count]);

  return (
    <div
      ref={containerRef}
      className="container mt-4 rounded"
      style={{
        textAlign: "center",
        background: "linear-gradient(to left, #009b3a, #ffffff, #d7141a)",
        padding: "40px",
        fontFamily: "KalamehWeb-Bold",
        color: "#4a2700",
        marginInline: "auto",
        borderTop: "1px solid #d7141a",
        borderBottom: "1px solid #009b3a",
        borderLeft: "1px solid #d7141a",
        borderRight: "1px solid #009b3a",
        borderRadius: "12px",
      }}
    >
      <h1
        className="lh-lg fs-3"
        style={{
          margin: "0 0 20px",
          fontFamily: "KalamehWeb-Bold",
        }}
      >
        {toPersianNumber(count)}+ سال خدمت و آموزش به فرزندان ایران
      </h1>
      <p
        style={{
          fontSize: "20px",
          marginTop: "10px",
          fontFamily: "KalamehWeb-Bold",
          color: "#d7141a",
        }}
      >
        افتخار ایرانی بودن...
      </p>
    </div>
  );
}

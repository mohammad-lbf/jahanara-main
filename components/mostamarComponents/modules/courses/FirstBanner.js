import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const FirstBanner = () => {
    return (
<div className="">

<div>
<div className="pt-4">
  <div className="container">
    <div style={{boxShadow: "5px 5px 15px rgba(0, 123, 255, 0.64) , -5px -5px 15px rgba(217, 0, 255, 0.64) "}} className="row align-items-center bg-white justify-content-center justify-content-lg-between p-4 mt-4 mt-lg-2">
      
      {/* متن سمت راست (در حالت دسکتاپ) */}
      <div className="col-12 col-lg-6 text-center text-lg-end">
        <div className="d-flex flex-column justify-content-center justify-content-lg-start">
          <h3
            style={{
                fontFamily: "KalamehWeb-Bold",
                color: "#090736",
                fontSize: "30px",
            }}
            className="pt-4 lh-lg"
            >
           دوره‌ها و کلاس‌های آموزشی سامانه یادگیری مستمر دبستان شهید جهان‌آرا
          </h3>

          <div className="d-flex justify-content-center">
            <Image
              style={{ borderRadius: "10px" }}
              className="img-fluid d-lg-none mt-3"
              alt="Articles-coverphoto"
              width={1305}
              height={683}
              src="/images/mostamar/courses/courses-tumbnail.jpg"
              />
          </div>
        </div>

        <h3
          style={{
              fontFamily: "KalamehWeb-Medium",
              fontSize: "18px",
              color: "#090736",
            }}
          className="mt-3"
        >
          یادگیری مؤثر و کاربردی مهارت‌های تدریس نوین
        </h3>

        <p
          style={{
              fontFamily: "KalamehWeb-Medium",
              fontSize: "17px",
              color: "#000",
            }}
            className="text-center text-lg-end lh-lg my-3"
            >
          با کلیک بر روی هر یک از دوره‌ها می‌توانید اطلاعات و جزئیات کامل آن دوره که شامل موضوعات, سرفصل‌ها, مدت زمان و نحوه ثبت نام می‌باشد را مشاهده کنید.
        </p>
      </div>

      {/* تصویر سمت چپ (در حالت دسکتاپ) */}
      <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
        <Image
          style={{ borderRadius: "10px" }}
          className="img-fluid d-none d-lg-flex"
          alt="Articles-coverphoto"
          width={1305}
          height={683}
          src="/images/mostamar/courses/courses-tumbnail.jpg"
          />
      </div>
      
    </div>
  </div>
</div>
</div>
          </div>
    );
};

export default FirstBanner;
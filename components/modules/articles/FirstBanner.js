import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FirstBanner = () => {
  return (
    <div>
      <div className="pt-4">
        <div className="container">
          <div className="row align-items-center bg-white shadow-sm justify-content-center justify-content-lg-between p-4 mt-4 mt-lg-2">
            
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
                  مقالات آموزشی دبستان شهید جهان آرا
                </h3>

                <div className="d-flex justify-content-center">
                  <Image
                    style={{ borderRadius: "10px" }}
                    className="img-fluid d-lg-none mt-3"
                    alt="Articles-coverphoto"
                    width={1305}
                    height={683}
                    src="/images/articles/articles-tumbnail.png"
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
                مطالعه علمی و توسعه فردی
              </h3>

              {/* 
              <h3
                style={{
                  fontFamily: "KalamehWeb-Medium",
                  fontSize: "17px",
                  color: "#090736",
                }}
                className="mt-3"
              >
                تعیین سطح زبان چیست و دقیقا چه کاربردهایی دارد؟
              </h3> 
              */}

              <p
                style={{
                  fontFamily: "KalamehWeb-Medium",
                  fontSize: "17px",
                  color: "#000",
                }}
                className="text-center text-lg-end lh-lg my-3"
              >
                در دبستان شهید جهان‌آرا، باور داریم آموزش زمانی ماندگار است که
                همراه با رشد فکری و پژوهش فردی باشد. این مجموعه مقالات با هدف
                توسعه سواد آموزشی، ارتقای خلاقیت و پاسخ به نیازهای یادگیری
                دانش‌آموزان، خانواده‌ها و معلمان تهیه شده‌اند.
              </p>
            </div>

            {/* تصویر سمت چپ (در حالت دسکتاپ) */}
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
              {/* 
              <Image
                style={{ borderRadius: "10px", width: "250px", height: "180px" }}
                className="d-none d-lg-flex"
                alt="html-logo"
                width={450}
                height={450}
                src="/images/components/modules/7622025.webp"
              /> 
              */}

              <Image
                style={{ borderRadius: "10px" }}
                className="img-fluid d-none d-lg-flex"
                alt="Articles-coverphoto"
                width={1305}
                height={683}
                src="/images/articles/articles-tumbnail.png"
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;

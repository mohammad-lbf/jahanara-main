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
                  سامانه‌های دبستان شهید جهان آرا
                </h3>

                <div className="d-flex justify-content-center">
                  <Image
                    style={{ borderRadius: "10px" }}
                    className="img-fluid d-lg-none mt-3"
                    alt="Systems-coverphoto"
                    width={1305}
                    height={683}
                    src="/images/sites-tumbnail.jpg"
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
                دسترسی سریع، ساده و هوشمند
              </h3>

              <p
                style={{
                  fontFamily: "KalamehWeb-Medium",
                  fontSize: "17px",
                  color: "#000",
                }}
                className="text-center text-lg-end lh-lg my-3"
              >
                دبستان شهید جهان‌آرا با هدف تسهیل خدمات آموزشی و ارتباطی، سامانه‌های
                متنوعی را در اختیار دانش‌آموزان، اولیا و معلمان قرار داده است. از
                محتوای آموزشی گرفته تا نمونه سوالات، همه چیز تنها چند
                کلیک لازم دارد.
              </p>
            </div>

            {/* تصویر سمت چپ (در حالت دسکتاپ) */}
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <Image
                style={{ borderRadius: "10px" }}
                className="img-fluid d-none d-lg-flex"
                alt="Systems-coverphoto"
                width={1305}
                height={683}
                src="/images/sites-tumbnail.jpg"
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;

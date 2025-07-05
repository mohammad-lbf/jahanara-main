import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InstagramBanner = () => {
  return (
    <div
      style={{
        borderRadius: "18px",
        background: "linear-gradient(135deg, #A8E063, #FEDD58)",
      }}
      className="container border-gray-800 my-5 my-lg-5 py-4 py-lg-2"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center justify-content-lg-end">
          <div className="col-12 col-lg-8">
            <div className="d-flex justify-content-center align-items-center justify-content-lg-start">
              <h5
                style={{
                  fontFamily: "KalamehWeb-Bold",
                  color: "#000",
                  fontSize: "22px",
                }}
                className="text-center text-lg-end lh-lg mb-4 mb-lg-0"
              >
                برای ورود به کانال شاد دبستان{" "}
                <Link
                  href="https://hamyarjahan.netlify.app/"
                  style={{
                    fontFamily: "KalamehWeb-Bold",
                    color: "#16277B",
                    textDecoration: "underline",
                  }}
                >
                  اینجا
                </Link>{" "}
                کلیک کنید
              </h5>
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
            <Image
              src="/images/components/modules/shad-icon.png"
              alt="YouTube-logo"
              width={1080}
              height={1080}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramBanner;

import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HamyarLayout from "@/components/layout/HamyarLayout";

const Bases = () => {
  const router = useRouter();
  const canonicalUrl = `https://jahanaraschool.ir${router.asPath}`;

  return (
    <>
      <Head>
        <title>پایه‌های تحصیلی | سامانه همیار دبستان شهید جهان‌آرا | jahanaraschool.ir</title>
        <meta
          name="description"
          content="در سامانه همیار دبستان شهید جهان‌آرا، به ابزارها، محتوای آموزشی و منابع پایه‌های تحصیلی سوم، چهارم، پنجم و ششم دسترسی پیدا کنید. روی پایه موردنظر کلیک کنید و مسیر آموزش خود را آسان‌تر کنید."
        />
        <meta name="author" content="محمد لبافی" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="سامانه همیار, پایه سوم, پایه چهارم, پایه پنجم, پایه ششم, دبستان شهید جهان آرا, کتاب درسی, آموزش ابتدایی"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta
          property="og:title"
          content="پایه‌های تحصیلی | سامانه همیار دبستان شهید جهان‌آرا | jahanaraschool.ir"
        />
        <meta
          property="og:description"
          content="در سامانه همیار دبستان شهید جهان‌آرا، به ابزارها، محتوای آموزشی و منابع پایه‌های تحصیلی سوم، چهارم، پنجم و ششم دسترسی پیدا کنید. روی پایه موردنظر کلیک کنید و مسیر آموزش خود را آسان‌تر کنید."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />
        <meta property="og:image" content="https://jahanaraschool.ir/images/hamyar/og-image.jpg" />

        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta
          name="twitter:title"
          content="پایه‌های تحصیلی | سامانه همیار دبستان شهید جهان‌آرا | jahanaraschool.ir"
        />
        <meta
          name="twitter:description"
          content="در سامانه همیار دبستان شهید جهان‌آرا، به ابزارها، محتوای آموزشی و منابع پایه‌های تحصیلی سوم، چهارم، پنجم و ششم دسترسی پیدا کنید. روی پایه موردنظر کلیک کنید و مسیر آموزش خود را آسان‌تر کنید."
        />
        <meta name="twitter:image" content="https://jahanaraschool.ir/images/hamyar/og-image.jpg" />
      </Head>

      <HamyarLayout>
        <div style={{ minHeight: "100vh" }} className="page-padding-tops">
          <div
            style={{
              marginTop: "50px",
              paddingTop: "50px",
              paddingBottom: "50px",
              boxShadow: "2px 2px 15px rgba(0, 123, 255, 0.64) , -2px -2px 15px rgba(217, 0, 255, 0.64) "  
            }}
            className="container bg-white rounded border" 
          >
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <h2
                  className="text-center text-lg-end"
                  style={{
                    fontSize: "25px",
                    fontFamily: "KalamehWeb-Bold",
                    color: "#03004e",
                    lineHeight:"40px"
                  }}
                >
                 پایه های تحصیلی | سامانه همیار دبستان شهید جهان آرا
                </h2>
                <p
                  className="mt-3 mb-4 mb-lg-0 text-center text-lg-end"
                  style={{
                    fontSize: "15px",
                    fontFamily: "KalamehWeb-Medium",
                    color: "#000",
                    lineHeight: "1.6rem",
                  }}
                >
                  برای مشاهده ابزار پایه ی تحصیلی خود، روی پایه مورد نظر کلیک کنید
                </p>
              </div>
              <div className="col-12 col-lg-5 text-center text-lg-start">
                <Image
                  style={{ width: "100px", height: "100px" }}
                  src={"/images/hamyar/components/modules/bases.png"}
                  height={512}
                  width={512}
                  alt="پایه های تحصیلی"
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "50px" }} className="container mb-4">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center">
                <div
                  className="bg-white rounded border d-flex flex-column align-items-center mb-3"
                  style={{ width: "300px",boxShadow: "0 1px 5px rgba(0, 123, 255, 0.64)",background: "linear-gradient(135deg,rgb(226, 251, 255), #ffffff)", height: "185px" }}
                >
                  <Link
                    className="py-3 text-center"
                    style={{ width: "300px", height: "185px" }}
                    href={"/hamyar/sevom"}
                  >
                    <Image
                      style={{ width: "100px", height: "100px" }}
                      src={"/images/hamyar/components/modules/number-3.png"}
                      width={512}
                      height={512}
                      alt="پایه سوم"
                    />
                    <p
                      className="mt-4"
                      style={{
                        fontSize: "20px",
                        fontFamily: "KalamehWeb-Bold",
                        color: "#03004e",
                      }}
                    >
                      پایه سوم
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center">
                <div
                  className="bg-white rounded border d-flex flex-column align-items-center mb-3"
                  style={{ width: "300px",boxShadow: "0 1px 5px rgba(0, 123, 255, 0.64)",background: "linear-gradient(135deg,rgb(226, 251, 255), #ffffff)", height: "185px" }}
                >
                  <Link
                    className="py-3 text-center"
                    style={{ width: "300px", height: "185px" }}
                    href={"/hamyar/chaharom"}
                  >
                    <Image
                      style={{ width: "100px", height: "100px" }}
                      src={"/images/hamyar/components/modules/number-4.png"}
                      width={512}
                      height={512}
                      alt="پایه چهارم"
                    />
                    <p
                      className="mt-4"
                      style={{
                        fontSize: "20px",
                        fontFamily: "KalamehWeb-Bold",
                        color: "#03004e",
                      }}
                    >
                      پایه چهارم
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center">
                <div
                  className="bg-white rounded border d-flex flex-column align-items-center mb-3"
                  style={{ width: "300px",boxShadow: "0 1px 5px rgba(0, 123, 255, 0.64)",background: "linear-gradient(135deg,rgb(226, 251, 255), #ffffff)", height: "185px" }}
                >
                  <Link
                    className="py-3 text-center"
                    style={{ width: "300px", height: "185px" }}
                    href={"/hamyar/panjom"}
                  >
                    <Image
                      style={{ width: "100px", height: "100px" }}
                      src={"/images/hamyar/components/modules/number-5.png"}
                      width={512}
                      height={512}
                      alt="پایه پنجم"
                    />
                    <p
                      className="mt-4"
                      style={{
                        fontSize: "20px",
                        fontFamily: "KalamehWeb-Bold",
                        color: "#03004e",
                      }}
                    >
                      پایه پنجم
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center">
                <div
                  className="bg-white rounded border d-flex flex-column align-items-center mb-3"
                  style={{ width: "300px",boxShadow: "0 1px 5px rgba(0, 123, 255, 0.64)",background: "linear-gradient(135deg,rgb(226, 251, 255), #ffffff)", height: "185px" }}
                >
                  <Link
                    className="py-3 text-center"
                    style={{ width: "300px", height: "185px" }}
                    href={"/hamyar/sheshom"}
                  >
                    <Image
                      style={{ width: "100px", height: "100px" }}
                      src={"/images/hamyar/components/modules/number-6.png"}
                      width={512}
                      height={512}
                      alt="پایه ششم"
                    />
                    <p
                      className="mt-4"
                      style={{
                        fontSize: "20px",
                        fontFamily: "KalamehWeb-Bold",
                        color: "#03004e",
                      }}
                    >
                      پایه ششم
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HamyarLayout>
    </>
  );
};

export default Bases;

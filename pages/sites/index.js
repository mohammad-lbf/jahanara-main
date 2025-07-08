import Head from "next/head";
import React from "react";
import Image from "next/image";
import { FaLink, FaUserCircle, FaClipboardList, FaChalkboardTeacher } from "react-icons/fa";
import { useRouter } from "next/router";
import SitesPage from "@/components/templates/SitesPage";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Link from "next/link";

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
      bgColor:
        "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(179,241,220,1) 0%, rgba(109,228,188,1) 0%, rgba(13,209,143,1) 0%)",
      boxShadow: "1px 3px 12px 1px rgba(13,209,143,1)",
      iconClass: "bi bi-journal-bookmark-fill",
      title: "سامانه یادگیری مستمر",
      description: "دوره ها و مقالات آموزشی",
      linkText: "ورود به سامانه",
    },
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

const SystemsPage = () => {
  const router = useRouter();
  const canonicalUrl = `https://jahanaraschool.ir${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <>
      <Head>
        <title>سامانه‌های دبستان شهید جهان‌آرا | jahanaraschool.ir</title>
        <meta
          name="description"
          content="
                دبستان شهید جهان‌آرا، پیشرو در فناوری با هدف تسهیل خدمات آموزشی و ارتباطی، سامانه‌های
                متنوعی را در اختیار دانش‌آموزان، اولیا و معلمان قرار داده است."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="محمد لبافی" />
        <meta
          name="keywords"
          content="سامانه دبستان شهید جهان آرا, سامانه همیار دبستان شهید جهان آرا، سامانه یادگیری مستمر دبستان شهید جهان آرا، محمد لبافی"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:title" content="سامانه‌های دبستان شهید جهان‌آرا | jahanaraschool.ir" />
        <meta
          property="og:description"
          content="
                دبستان شهید جهان‌آرا، پیشرو در فناوری با هدف تسهیل خدمات آموزشی و ارتباطی، سامانه‌های
                متنوعی را در اختیار دانش‌آموزان، اولیا و معلمان قرار داده است."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />
        <meta
          property="og:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="سامانه‌های دبستان شهید جهان‌آرا | jahanaraschool.ir"
        />
        <meta
          name="twitter:description"
          content="
                دبستان شهید جهان‌آرا، پیشرو در فناوری با هدف تسهیل خدمات آموزشی و ارتباطی، سامانه‌های
                متنوعی را در اختیار دانش‌آموزان، اولیا و معلمان قرار داده است."
        />
        <meta
          name="twitter:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />
      </Head>
      <DefaultLayout>
          <main className="container page-padding-tops pb-4">
                <SitesPage />
          </main>
      </DefaultLayout>
    </>
  );
};

export default SystemsPage;

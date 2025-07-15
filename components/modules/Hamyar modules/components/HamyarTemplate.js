import React from "react";
import Link from "next/link";
import Image from "next/image";
import FirstBanner from "./modules/HomePage/FirstBanner";
import BasesMenu from "./modules/BasesMenu";

const SectionTitle = ({ title, description }) => (
  <div className="container bg-white rounded shadow border py-4 my-3">
    <div className="row align-items-center">
      <div className="col-12 col-lg-7">
        <h2
          className="text-center text-lg-end"
          style={{
            fontSize: "25px",
            fontFamily: "KalamehWeb-Bold",
            color: "#03004e",
          }}
        >
          {title}
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
          {description}
        </p>
      </div>
      <div className="col-12 col-lg-5 text-center text-lg-start">
        {title.includes("پایه") ? (
          <Image
            style={{ width: "100px", height: "100px" }}
            src={"/images/hamyar/components/modules/bases.png"}
            width={512}
            height={512}
            alt="bases"
          />
        ) : (
          <Image
            style={{ width: "100px", height: "100px" }}
            src={"/images/hamyar/components/modules/books.png"}
            width={512}
            height={512}
            alt="books"
          />
        )}
      </div>
    </div>
  </div>
);

const CardsGrid = ({ cards }) => (
  <div className="container my-5">
    <div className="row align-items-center justify-content-center">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center"
        >
<div
  className="bg-white rounded border d-flex flex-column align-items-center mb-3"
  style={{
    width: "300px",
    height: "185px",
    boxShadow: "0 1px 5px rgba(0, 123, 255, 0.64)",
    background: "linear-gradient(135deg,rgb(226, 251, 255), #ffffff)",
  }}
>

            <Link
              className="py-3 text-center"
              style={{ width: "300px", height: "185px" }}
              href={card.href}
            >
              <Image
                style={{ width: "100px", height: "100px" }}
                src={card.image}
                width={512}
                height={512}
                alt={card.title}
              />
              <p
                className="mt-4"
                style={{
                  fontSize: "20px",
                  fontFamily: "KalamehWeb-Bold",
                  color: "#03004e",
                }}
              >
                {card.title}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AboutDeveloperSection = () => (
  <div className="container bg-white rounded shadow border py-5 px-5 mb-3">
    <div className="row align-items-center">
      <div className="col-12 col-lg-7">
        <h2
          className="text-center text-lg-end mb-3"
          style={{
            fontSize: "25px",
            fontFamily: "KalamehWeb-Bold",
            color: "#03004e",
          }}
        >
          درباره توسعه‌دهنده
        </h2>
        <p
          className=" mb-4"
          style={{
            fontSize: "15px",
            fontFamily: "KalamehWeb-Medium",
            color: "#464749",
            lineHeight: "1.9",
            direction:"rtl",
            textAlign:"justify"
          }}
        >
          سامانه همیار توسط محمد لبافی، آموزگار و توسعه‌دهنده ارشد وب
          (Senior MERN Stack Developer) طراحی و پیاده‌سازی شده است تا مسیر
          آموزش را برای معلمان و دانش‌آموزان دبستان شهید جهان‌آرا آسان‌تر
          و حرفه‌ای‌تر کند.
        </p>
        <div className="text-center text-lg-end">
        <Link
  href="/hamyar/about-developer"
  className="mt-3 btn-main-2 text-white d-flex align-items-center justify-content-center"
  style={{
    padding: "10px 16px",
    minWidth: "200px",
    maxWidth: "100%",
    width: "auto",
    whiteSpace: "nowrap",
    fontSize:"15px"
  }}
  aria-label="درباره محمد لبافی توسعه دهنده سامانه همیار دبستان شهید جهان آرا"
>
  <span style={{ fontFamily: "KalamehWeb-Bold" }}>
    اطلاعات بیشتر درباره توسعه دهنده
  </span>
  <i className="bi bi-chevron-double-left me-2 pt-2 animated-icon"></i>
</Link>

        </div>
      </div>
      <div className="col-12 col-lg-5 text-center mt-4 mt-lg-0">
              <Image
                src="/images/20220719_222926.jpg"
                alt="محمد لبافی"
                width={1280}
                height={1280}
                className=""
                style={{ borderRadius: "50%" , width:"160px" , height:"160px" , boxShadow: "5px 5px 15px rgba(0, 123, 255, 0.64) , -5px -5px 15px rgba(217, 0, 255, 0.64) "  }}
              />
      </div>
    </div>
  </div>
);

const HamyarTemplate = () => {
  const baseCards = [
    {
      title: "پایه سوم",
      href: "/hamyar/sevom",
      image: "/images/hamyar/components/modules/number-3.png",
    },
    {
      title: "پایه چهارم",
      href: "/hamyar/chaharom",
      image: "/images/hamyar/components/modules/number-4.png",
    },
    {
      title: "پایه پنجم",
      href: "/hamyar/panjom",
      image: "/images/hamyar/components/modules/number-5.png",
    },
    {
      title: "پایه ششم",
      href: "/hamyar/sheshom",
      image: "/images/hamyar/components/modules/number-6.png",
    },
  ];

  const booksCards = [
    {
      title: "کتابهای درسی پایه سوم",
      href: "/hamyar/sevom/books",
      image: "/images/hamyar/components/modules/number-3.png",
    },
    {
      title: "کتابهای درسی پایه چهارم",
      href: "/hamyar/chaharom/books",
      image: "/images/hamyar/components/modules/number-4.png",
    },
    {
      title: "کتابهای درسی پایه پنجم",
      href: "/hamyar/panjom/books",
      image: "/images/hamyar/components/modules/number-5.png",
    },
    {
      title: "کتابهای درسی پایه ششم",
      href: "/hamyar/sheshom/books",
      image: "/images/hamyar/components/modules/number-6.png",
    },
  ];

  return (
    <div className="page-padding-tops">
      <FirstBanner />

      {/* منوی ابزار پایه ها */}
      <div className="container">
        <div className="row justify-content-center">
          <div className=" pt-2">
            <h3
              style={{
                fontSize: "24px",
                fontFamily: "KalamehWeb-Bold",
                color: "#03004e",
              }}
              className="mb-4 mt-3 pt-2 text-center"
            >
              ورود به پایه تحصیلی:
            </h3>
            <BasesMenu />
          </div>
        </div>
      </div>

      {/* سکشن کتاب های درسی */}
      <SectionTitle
        title="کتابهای درسی"
        description="برای دریافت جدیدترین ویرایش کتابهای درسی پایه خود، روی پایه مورد نظر کلیک کنید"
      />
      <CardsGrid cards={booksCards} />

      {/* سکشن درباره توسعه دهنده */}
      <AboutDeveloperSection />
    </div>
  );
};

export default HamyarTemplate;

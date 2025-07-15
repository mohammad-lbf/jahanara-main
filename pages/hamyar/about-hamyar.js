import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Skills from "@/components/modules/Skills";
import HamyarLayout from "@/components/layout/HamyarLayout";

export default function AboutHamyarPage() {
  const canonicalUrl = "https://jahanaraschool.ir/hamyar/about-hamyar";

  return (
    <>
      <Head>
        <title>درباره سامانه همیار دبستان شهید جهان آرا | محمد لبافی | jahanaraschool.ir</title>
        <meta
          name="description"
          content="معرفی سامانه همیار دبستان شهید جهان آرا و توسعه‌دهنده آن، محمد لبافی. این سامانه برای تسهیل آموزش معلمان و دانش‌آموزان طراحی شده است."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="محمد لبافی" />
        <meta
          name="keywords"
          content="سامانه همیار, محمد لبافی, توسعه‌دهنده وب, MERN Stack Developer, Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta
          property="og:title"
          content="درباره سامانه همیار دبستان شهید جهان آرا | محمد لبافی"
        />
        <meta
          property="og:description"
          content="اطلاعات جامع درباره سامانه همیار و توسعه‌دهنده آن، محمد لبافی."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />
        <meta
          property="og:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />

        <meta
          name="twitter:title"
          content="درباره سامانه همیار دبستان شهید جهان آرا | محمد لبافی"
        />
        <meta
          name="twitter:description"
          content="اطلاعات جامع درباره سامانه همیار و توسعه‌دهنده آن، محمد لبافی."
        />
        <meta
          name="twitter:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />
      </Head>

      <HamyarLayout>
        <div className="container page-padding-tops">
          <div className="pt-4 mt-2 mb-2 row justify-content-center">
            <div className="col-12 col-lg-10 py-4 border my-4 rounded bg-white shadow-sm">
              {/* بخش معرفی شخصی */}
              <h2
                className="text-center my-4 pb-2"
                style={{
                  fontSize: "24px",
                  color: "#464749",
                  fontFamily: "KalamehWeb-Bold",
                }}
              >
                درباره توسعه‌دهنده سامانه همیار
              </h2>

              <div className="text-center mb-4">
                <Image
                  src="/images/20220719_222926.jpg"
                  alt="محمد لبافی"
                  width={1280}
                  height={1280}
                  className="shadow border"
                  style={{ borderRadius: "50%", width: "160px", height: "160px" }}
                />
              </div>

              <p
                className="text-center my-4"
                style={{
                  fontSize: "17px",
                  color: "#464749",
                  fontFamily: "KalamehWeb-Bold",
                }}
              >
                نام و نام خانوادگی توسعه‌دهنده: محمد لبافی
              </p>

              <p
                className="text-end mt-3 mb-2"
                style={{
                  fontSize: "15px",
                  color: "#464749",
                  lineHeight: "1.9",
                  fontFamily: "KalamehWeb-Medium",
                }}
              >
                من محمد لبافی هستم؛ آموزگار، طراح، برنامه‌نویس و توسعه‌دهنده ارشد وب (Senior MERN Stack Developer). این سامانه را برای تسهیل فرآیندهای آموزشی و ارتقاء کیفیت یادگیری طراحی کرده‌ام.
              </p>

              <p
                className="text-end mt-3 mb-2"
                style={{
                  fontSize: "15px",
                  color: "#464749",
                  lineHeight: "1.9",
                  fontFamily: "KalamehWeb-Medium",
                }}
              >
                سامانه همیار دبستان شهید جهان آرا با هدف ارائه محتوای آموزشی، نمونه سؤالات، طرح درس‌ها و تسهیل دسترسی معلمان و دانش‌آموزان به منابع درسی توسعه یافته است.
              </p>

              <p
                className="text-start mt-3 mb-1"
                style={{
                  fontSize: "15px",
                  color: "#464749",
                  fontFamily: "KalamehWeb-Medium",
                }}
              >
                با احترام
              </p>
              <p
                className="text-start mb-1"
                style={{
                  fontSize: "15px",
                  color: "#464749",
                  fontFamily: "KalamehWeb-Medium",
                }}
              >
                محمد لبافی
              </p>
              <p
                className="text-start mb-4"
                style={{
                  fontSize: "15px",
                  color: "#464749",
                  fontFamily: "KalamehWeb-Medium",
                }}
              >
                زمستان ۱۴۰۳
              </p>

              {/* مهارت‌ها */}
              <Skills />

              {/* مستندات فنی */}
              <h2
                className="text-center my-4"
                style={{ fontSize: "23px", fontFamily: "KalamehWeb-Bold" }}
              >
                مستندات فنی سامانه همیار
              </h2>

              <p
                className="p-3"
                style={{
                  fontSize: "14px",
                  fontFamily: "KalamehWeb-Medium",
                  lineHeight: "1.9",
                }}
              >
                این پروژه با استفاده از Next.js 14 توسعه داده شده و به عنوان وب اپلیکیشن سمت سرور (SSR) طراحی شده است. اطلاعات در فولدر استراکچر سامانه با فرمت JSON ذخیره شده‌اند و احراز هویت کاربران با کوکی‌ها مدیریت می‌شود.
              </p>

              <h3
                className="text-center my-3"
                style={{ fontSize: "20px", fontFamily: "KalamehWeb-Bold" }}
              >
                اطلاعات کلی پروژه
              </h3>

              <table className="table border rounded table-bordered table-striped text-center">
                <thead className="table-primary">
                  <tr>
                    <th>ویژگی</th>
                    <th>مقدار</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>پلتفرم</td>
                    <td>Web Application</td>
                  </tr>
                  <tr>
                    <td>فریمورک</td>
                    <td>Next.js <span className="badge bg-success">14.2.3</span></td>
                  </tr>
                  <tr>
                    <td>زبان برنامه‌نویسی</td>
                    <td>JavaScript (React-based)</td>
                  </tr>
                  <tr>
                    <td>نسخه React</td>
                    <td>React <span className="badge bg-info">18</span></td>
                  </tr>
                  <tr>
                    <td>احراز هویت</td>
                    <td>کوکی (js-cookie@3.0.5)</td>
                  </tr>
                  <tr>
                    <td>UI Library</td>
                    <td>Bootstrap 5.3.3 + React-Bootstrap 2.10.5</td>
                  </tr>
                </tbody>
              </table>

              <h3
                className="text-center my-4"
                style={{ fontSize: "20px", fontFamily: "KalamehWeb-Bold" }}
              >
                لینک‌های مهم
              </h3>

              <div className="d-flex flex-column align-items-center pb-4 border-bottom">
                <Link href="/hamyar/developer/itemCreator" className="btn btn-danger mb-2" style={{ width: "250px" }}>
                  🔗 تولیدکننده کد JSON
                </Link>
                <a href="https://github.com/mohammad-lbf/hamyar.jahanara.git" target="_blank" rel="noopener noreferrer"
                  className="btn-main-2 text-white mb-2 d-flex justify-content-center align-items-center" style={{ width: "250px" }}>
                  🔗 مشاهده ریپازیتوری در GitHub
                </a>
                <a href="https://github.com/mohammad-lbf" target="_blank" className="btn-main-2 text-white d-flex justify-content-center align-items-center" style={{ width: "250px" }}>
                  📑 مشاهده صفحه GitHub توسعه‌دهنده
                </a>
              </div>

              <h3
                className="text-center my-4"
                style={{ fontSize: "20px", fontFamily: "KalamehWeb-Bold" }}
              >
                نحوه راه‌اندازی پروژه
              </h3>
              <pre
                className="p-3 rounded"
                style={{
                  backgroundColor: "black",
                  color: "#00ff00",
                  fontSize: "13px",
                  borderRadius: "5px",
                }}
              >
{`git clone https://github.com/mohammad-lbf/hamyar.jahanara.git
cd project-folder
npm install
npm run dev`}
              </pre>

              <h3
                className="text-center my-4"
                style={{ fontSize: "20px", fontFamily: "KalamehWeb-Bold" }}
              >
                صفحات اصلی سامانه
              </h3>
              <table className="table table-bordered text-center table-striped">
                <thead className="table-primary">
                  <tr>
                    <th>عنوان</th>
                    <th>لینک</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>🏠 صفحه اصلی</td>
                    <td><Link href="/">/</Link></td>
                  </tr>
                  <tr>
                    <td>📚 پایه‌ها</td>
                    <td><Link href="/bases">/bases</Link></td>
                  </tr>
                  <tr>
                    <td>📖 کتاب‌های درسی</td>
                    <td><Link href="/books">/books</Link></td>
                  </tr>
                  <tr>
                    <td>👨‍💻 درباره سامانه همیار</td>
                    <td><Link href="/hamyar/about-hamyar">/hamyar/about-hamyar</Link></td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center mt-4">
                <Link href="/hamyar" className="btn btn-primary">
                  بازگشت به صفحه اصلی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HamyarLayout>
    </>
  );
}

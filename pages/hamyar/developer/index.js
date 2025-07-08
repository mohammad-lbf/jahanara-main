import Head from "next/head";
import DeveloperPage from "@/components/modules/Hamyar modules/components/templates/DeveloperPage";
import HamyarLayout from "@/components/layout/HamyarLayout";

export default function Home() {
  const canonicalUrl = "https://jahanaraschool.ir/developer";

  return (
    <>
      <Head>
        <title>مستندات فنی سامانه همیار معلم دبستان شهید جهان‌آرا | jahanaraschool.ir</title>
        <meta
          name="description"
          content="مستندات فنی سامانه همیار معلم دبستان شهید جهان آرا شامل توضیحات کامل معماری پروژه، تکنولوژی‌های استفاده شده، نحوه راه‌اندازی، احراز هویت و لینک‌های مفید برای توسعه‌دهندگان بعدی است."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="محمد لبافی" />
        <meta
          name="keywords"
          content="مستندات فنی سامانه همیار معلم, Next.js, React, MERN Stack, توسعه وب, دبستان شهید جهان آرا"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta
          property="og:title"
          content="مستندات فنی سامانه همیار معلم دبستان شهید جهان‌آرا | jahanaraschool.ir"
        />
        <meta
          property="og:description"
          content="مستندات فنی سامانه همیار معلم دبستان شهید جهان آرا شامل توضیحات کامل معماری پروژه، تکنولوژی‌های استفاده شده، نحوه راه‌اندازی، احراز هویت و لینک‌های مفید برای توسعه‌دهندگان بعدی است."
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
          content="مستندات فنی سامانه همیار معلم دبستان شهید جهان‌آرا | jahanaraschool.ir"
        />
        <meta
          name="twitter:description"
          content="مستندات فنی سامانه همیار معلم دبستان شهید جهان آرا شامل توضیحات کامل معماری پروژه، تکنولوژی‌های استفاده شده، نحوه راه‌اندازی، احراز هویت و لینک‌های مفید برای توسعه‌دهندگان بعدی است."
        />
        <meta
          name="twitter:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />
      </Head>
      <HamyarLayout>
      <main style={{ minHeight: "100vh" }}>
        <DeveloperPage />
      </main>
      </HamyarLayout>
    </>
  );
}

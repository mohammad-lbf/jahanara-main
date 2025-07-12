import Head from "next/head";
import HamyarLayout from "@/components/layout/HamyarLayout";
import HamyarTemplate from "@/components/modules/Hamyar modules/components/HamyarTemplate";

export default function Home() {
  const canonicalUrl = "https://jahanaraschool.ir/hamyar";

  return (
    <>
      <Head>
        <title>سامانه همیار معلم دبستان شهید جهان‌آرا | jahanaraschool.ir</title>
        <meta
          name="description"
          content="سامانه همیار معلم دبستان جهان آرا یک پلتفرم نوین و کارآمد است که به منظور ارتقاء کیفیت آموزش و تسهیل فرآیند یادگیری در این دبستان طراحی شده است."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="محمد لبافی" />
        <meta
          name="keywords"
          content="سامانه دبستان شهید جهان آرا, سامانه همیار معلم, سامانه آموزشی دبستان شهید جهان آرا, یادگیری آنلاین دبستان, محمد لبافی"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta
          property="og:title"
          content="سامانه همیار معلم دبستان شهید جهان‌آرا | jahanaraschool.ir"
        />
        <meta
          property="og:description"
          content="سامانه همیار معلم دبستان جهان آرا یک پلتفرم نوین و کارآمد است که به منظور ارتقاء کیفیت آموزش و تسهیل فرآیند یادگیری در این دبستان طراحی شده است."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />
        <meta
          property="og:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />

        {/* Twitter Card */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta
          name="twitter:title"
          content="سامانه همیار معلم دبستان شهید جهان‌آرا | jahanaraschool.ir"
        />
        <meta
          name="twitter:description"
          content="سامانه همیار معلم دبستان جهان آرا یک پلتفرم نوین و کارآمد است که به منظور ارتقاء کیفیت آموزش و تسهیل فرآیند یادگیری در این دبستان طراحی شده است."
        />
        <meta
          name="twitter:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />
      </Head>

      <HamyarLayout>
        <main style={{ minHeight: "100vh" }}>
          <HamyarTemplate />
        </main>
      </HamyarLayout>
    </>
  );
}

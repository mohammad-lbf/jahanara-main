import Head from "next/head";
import { useRouter } from 'next/router';
import HomePage from "@/components/templates/HomePage";

export default function Home() {
  const router = useRouter();
  const canonicalUrl = `https://jahanaraschool.ir${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <>
      <Head>
        {/* Title */}
        <title>دبستان دولتی پسرانه شهید جهان آرا | jahanaraschool.ir</title>

        {/* Meta Description */}
        <meta 
          name="description" 
          content="دبستان شهید جهان‌آرا یکی از مدارس برجسته و فعال در منطقه ۱۲ تهران است که با فراهم آوردن محیطی امن و دوستانه، نقش مهمی در ارتقای کیفیت آموزش ابتدایی ایفا می‌کند." 
        />

        {/* Author */}
        <meta name="author" content="محمد لبافی" />
        
        <meta name="robots" content="index, follow" />

        {/* Keywords (اختیاری) */}
        <meta 
          name="keywords" 
          content="دبستان شهید جهان آرا, دبستان دولتی, مدرسه ابتدایی تهران, مدرسه پسرانه, ثبت نام مدرسه, آموزش ابتدایی" 
        />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:title" content="دبستان دولتی پسرانه شهید جهان آرا | jahanaraschool.ir" />
        <meta property="og:description" content="دبستان شهید جهان‌آرا یکی از مدارس برجسته و فعال در منطقه ۱۲ تهران است که با فراهم آوردن محیطی امن و دوستانه، نقش مهمی در ارتقای کیفیت آموزش ابتدایی ایفا می‌کند." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />
        <meta property="og:image" content="https://jahanaraschool.ir/images/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="دبستان دولتی پسرانه شهید جهان آرا | jahanaraschool.ir" />
        <meta name="twitter:description" content="دبستان شهید جهان‌آرا یکی از مدارس برجسته و فعال در منطقه ۱۲ تهران است که با فراهم آوردن محیطی امن و دوستانه، نقش مهمی در ارتقای کیفیت آموزش ابتدایی ایفا می‌کند." />
        <meta name="twitter:image" content="https://jahanaraschool.ir/images/og-image.jpg" />
      </Head>
      <main style={{ minHeight: "100vh" }}>
        <HomePage />
      </main>
    </>
  );
}

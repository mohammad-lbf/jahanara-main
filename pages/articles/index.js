import Head from "next/head";
import { useRouter } from 'next/router';
import ArticlesPage from "../../components/templates/ArticlesPage";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function Articles() {
  const router = useRouter();
  const canonicalUrl = `https://jahanaraschool.ir${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <>
      <Head>
        {/* Title */}
        <title>مقالات آموزشی دبستان شهید جهان آرا | jahanaraschool.ir</title>

        {/* Meta Description */}
        <meta 
          name="description" 
          content="مطالعات علمی، پژوهش‌ها و مقالات آموزشی دبستان شهید جهان آرا. مجموعه‌ای ارزشمند از مطالب آموزشی برای معلمان، دانش‌آموزان و والدین جهت ارتقای دانش و یادگیری." 
        />

        {/* Author */}
        <meta name="author" content="محمد لبافی" />
        
        <meta name="robots" content="index, follow" />

        {/* Keywords (اختیاری) */}
        <meta 
          name="keywords" 
          content="مقالات آموزشی, دبستان شهید جهان آرا, پژوهش‌های آموزشی, آموزش ابتدایی, آموزش معلمان, مقاله علمی, مدرسه ابتدایی تهران" 
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
        <meta property="og:title" content="مقالات آموزشی دبستان شهید جهان آرا | jahanaraschool.ir" />
        <meta property="og:description" content="مطالعات علمی، پژوهش‌ها و مقالات آموزشی دبستان شهید جهان آرا. مجموعه‌ای ارزشمند از مطالب آموزشی برای معلمان، دانش‌آموزان و والدین جهت ارتقای دانش و یادگیری." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />
        <meta property="og:image" content="https://jahanaraschool.ir/images/articles/articles-tumbnail.png" />

        {/* Twitter Card */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content="مقالات آموزشی دبستان شهید جهان آرا | jahanaraschool.ir" />
        <meta name="twitter:description" content="مطالعات علمی، پژوهش‌ها و مقالات آموزشی دبستان شهید جهان آرا. مجموعه‌ای ارزشمند از مطالب آموزشی برای معلمان، دانش‌آموزان و والدین جهت ارتقای دانش و یادگیری." />
        <meta name="twitter:image" content="https://jahanaraschool.ir/images/articles/articles-tumbnail.png" />
      </Head>
      <DefaultLayout>
      <main className="page-padding-tops pb-4" style={{ minHeight: "100vh" }}>
        <ArticlesPage />
      </main>
      </DefaultLayout>
    </>
  );
}

import Head from "next/head";
import { useRouter } from 'next/router';
import HomePage from "@/components/mostamarComponents/templates/HomePage";
import articles from '@/DB/articles/index'; 
import courses from '@/DB/courses';

export async function getStaticProps() {
  return {
    props: {
      articles,
      courses,
    }
  };
}

export default function Home() {
  const router = useRouter();
  const canonicalUrl = `https://jahanaraschool.ir${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <>
      <Head>
        <title>سامانه یادگیری مستمر | دبستان شهید جهان‌آرا</title>
        <meta 
          name="description" 
          content="سامانه یادگیری مستمر دبستان شهید جهان‌آرا بستری آموزشی ویژه معلمان این مدرسه است که با هدف توسعه حرفه‌ای و ارتقای مهارت‌های آموزشی طراحی شده است. این سامانه دوره‌های آموزشی ضمن خدمت را به‌صورت ساختاریافته و کاربردی ارائه می‌دهد تا معلمان بتوانند به دانش و روش‌های نوین تدریس دسترسی داشته باشند و سطح کیفی آموزش را بهبود بخشند."
        />
        <meta 
          name="keywords" 
          content="آموزش معلمان, سامانه یادگیری مستمر, دبستان شهید جهان آرا, دوره‌های ضمن خدمت, آموزش آنلاین معلمان, توسعه حرفه‌ای معلمان" 
        />
        <meta name="author" content="محمد لبافی" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:title" content="سامانه یادگیری مستمر دبستان شهید جهان‌آرا" />
        <meta property="og:description" content="سامانه یادگیری مستمر دبستان شهید جهان‌آرا بستری آموزشی ویژه معلمان این مدرسه است که با هدف توسعه حرفه‌ای و ارتقای مهارت‌های آموزشی طراحی شده است." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سامانه یادگیری مستمر دبستان شهید جهان‌آرا" />
        <meta name="twitter:description" content="سامانه یادگیری مستمر دبستان شهید جهان‌آرا بستری آموزشی ویژه معلمان این مدرسه است که با هدف توسعه حرفه‌ای و ارتقای مهارت‌های آموزشی طراحی شده است." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </Head>

      <main style={{ minHeight: "100vh" }}>
        <HomePage articles={articles} courses={courses} />
      </main>
    </>
  );
}

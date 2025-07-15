import Head from 'next/head';
import CoursesPage from '@/components/mostamarComponents/templates/CoursesPage';
import coursesData from '@/DB/courses/index'; // مسیر دیتای دوره‌ها را درست کن
import MostamarLayout from '@/components/layout/MostamarLayout';

export const getStaticProps = async () => {
  // اگر دیتات ثابت هست همین کافیست:
  const courses = coursesData;

  return {
    props: {
      courses,
    },
  };
};

const Courses = ({ courses }) => {
  const canonicalUrl = "https://jahanaraschool.ir/courses";
  const pageTitle = "دوره ها و کلاس های آموزشی | دبستان شهید جهان آرا";
  const pageDescription =
    "معرفی دوره ها و کلاس های آموزشی دبستان شهید جهان آرا شامل فناوری، روانشناسی تربیتی، آموزش ابتدایی و سایر حوزه های مرتبط با آموزش.";

  return (
    <div className="page-padding-tops">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="author" content="محمد لبافی" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="دوره آموزشی, کلاس آموزشی, مدرسه ابتدایی, فناوری در تدریس, روانشناسی تربیتی" />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />
        <meta property="og:image" content="https://jahanaraschool.ir/images/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://jahanaraschool.ir/images/og-image.jpg" />
      </Head>
      <MostamarLayout>
      <CoursesPage courses={courses} />
      </MostamarLayout>
    </div>
  );
};

export default Courses;

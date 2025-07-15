import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import courses from '@/DB/courses';
import CourseTemplate from '@/components/modules/course/CourseTemplate';
import MostamarLayout from '@/components/layout/MostamarLayout';

export async function getStaticPaths() {
  const paths = courses.map((course) => {
    const slugSegments = course.courseSlug.split("/");
    const id = slugSegments[slugSegments.length - 1];
    return {
      params: { id }
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const courses = (await import('@/DB/courses')).default;

  const courseData = courses.find(course => {
    const slugSegments = course.courseSlug.split("/");
    return slugSegments[slugSegments.length - 1] === id;
  });

  if (!courseData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      courseData,
    },
  };
}

const CoursePage = ({ courseData }) => {
  const router = useRouter();

  const pageTitle = `${courseData.courseName} - مدرس: ${courseData.courseTeacher} | سامانه یادگیری مستمر دبستان شهید جهان‌آرا`;
  const description = courseData.courseCaption.replace(/<br\s*\/?>/g, ' ').substring(0, 160) + "...";
  const url = `https://jahanaraschool.ir${router.asPath}`;
  const image = `https://jahanaraschool.ir${courseData.courseCoverPhoto}`;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <div className=''>
        <MostamarLayout>
          <CourseTemplate courseData={courseData} />
        </MostamarLayout>
      </div>
    </div>
  );
};

export default CoursePage;

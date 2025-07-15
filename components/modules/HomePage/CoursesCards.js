import React from 'react';
import CourseCard from '@/components/mostamarComponents/modules/CourseCard';
import courses from '@/DB/courses';
import { FaChevronDown } from 'react-icons/fa';

const CoursesCards = () => {
  return (
    <>
      <div className="">
        <h2
          className="pt-0 fw-bold text-center lh-lg fs-4 mb-3 d-flex justify-content-center align-items-center gap-2"
          style={{
            fontFamily: 'KalamehWeb-Bold',
            color: '#03004e',
          }}
        >
          <FaChevronDown className="fs-5" />
          آخرین دوره ها
          <FaChevronDown className="fs-5" />
        </h2>

        <div className="row justify-content-center row-cols-xxl-4 row-cols-lg-2 row-cols-sm-1 row-cols-md-2 row-cols-xs-1">
          {courses.slice(-4).map((course) => (
            <div key={course.courseSlug} className="col-sm d-flex justify-content-center">
              <CourseCard
                slug={course.courseSlug}
                coverPhoto={course.courseCoverPhoto}
                title={course.courseName}
                caption={course.courseCaption}
                courseTeacher={course.courseTeacher}
                courseTeacherProfileImage={course.courseTeacherProfileImage}
                buttonText={course.courseStatus === 'finished' ? 'مشاهده ی دوره' : 'به زودی...'}
                finishStatus={course.courseStatus === 'finished'}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesCards;

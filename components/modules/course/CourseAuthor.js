import Image from 'next/image';
import React from 'react';

const toPersianNumber = (num) => {
  return num.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
};

const CourseAuthor = ({ coursePublishDate, courseTeacher, courseTeacherProfileImage }) => {
  const persianDate = toPersianNumber(coursePublishDate);

  return (
    <div className='d-flex justify-content-between align-items-center w-100'>
      <div className='d-flex align-items-center'>
        <Image
          style={{
            width: "50px",
            height: "50px",
            boxShadow:
              "2px 2px 5px rgba(0, 123, 255, 0.64) , -2px -2px 5px rgba(217, 0, 255, 0.64)",
          }}
          className='rounded-circle ms-2'
          alt='author-image'
          width={1280}
          height={1280}
          src={courseTeacherProfileImage}
        />
        <span className='fw-bold gray-text-color'>{`مدرس: ${courseTeacher}`}</span>
      </div>
      <span className='fw-bold gray-text-color'>{persianDate}</span>
    </div>
  );
};

export default CourseAuthor;

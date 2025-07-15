import React from 'react';
import CourseAuthor from './CourseAuthor';
import CourseTumbnailContainer from './CourseTumbnailContainer';
import CourseContent from './CourseContent';

const CourseMainSection = ({testStarted,courseTeacher ,courseTeacherProfileImage , courseCoverPhoto, setTestStarted , testFinished , setTestFinished , courseName,coursePublishDate,courseTumbnailSrc,courseCaption,courseQuestions,courseSlug,courseTime,courseVideos,courseEpizodes}) => {
    

    return (
        <div className='pt-4 pt-sm-0 bg-white border rounded px-3'>
            <h3
             style={{fontFamily:"KalamehWeb-Bold" , color: "#03004e" , fontSize: "27px"}}
              className='mb-4 mt-0 mt-sm-4'>
                {courseName}
            </h3>
            <div className='d-flex justify-content-between align-items-center'>
                <CourseAuthor
                 coursePublishDate={coursePublishDate}
                 courseTeacher={courseTeacher}
                 courseTeacherProfileImage={courseTeacherProfileImage} />
                <span className='fw-bold gray-text-color'></span>
            </div>

                <CourseContent
                testStarted={testStarted}
                setTestStarted={setTestStarted}
                testFinished={testFinished}
                setTestFinished={setTestFinished}
                courseName={courseName}
                coursePublishDate={coursePublishDate}
                courseTumbnailSrc={courseTumbnailSrc}
                courseCaption={courseCaption}
                courseQuestions={courseQuestions}
                courseSlug={courseSlug}
                courseTime={courseTime}
                courseVideos={courseVideos}
                courseEpizodes={courseEpizodes}
                courseCoverPhoto={courseCoverPhoto}  
                />
        </div>
    );
};

export default CourseMainSection;
import React, { useState } from 'react';
// import GrammerTestLevels from './BasicWordTestLevels';
import ShareSecton from './ShareSecton';
import CourseCaption from './CourseCaption';
import CourseEpizodes from './CourseEpizodes';
import Test from './Test/Test';
// import testData from '@/assets/Tests/sampleTest';
import CourseTumbnailContainer from './CourseTumbnailContainer';
// import testData from '@/assets/Tests/Grammar/A1Level';

const CourseContent = ({testStarted , setTestStarted , testFinished , setTestFinished ,courseName,coursePublishDate,courseTumbnailSrc,courseCaption,courseQuestions,courseSlug,courseTime,courseVideos,courseEpizodes}) => {

    return (
        <div className='mt-2'>
            {
                !testStarted ?
                <>
                <CourseTumbnailContainer courseTumbnailSrc={courseTumbnailSrc} />
                <CourseCaption captionText={courseCaption} />
                </>
                 : <></>
            }
            <Test courseTime={courseTime} courseName={courseName} courseQuestions={courseQuestions} testStarted={testStarted} setTestStarted={setTestStarted} testFinished={testFinished} setTestFinished={setTestFinished}  />
           {
            !testStarted ?
            <>
             <CourseEpizodes courseEpizodes={courseEpizodes} />
            </> 
            :<></>
           }
            <ShareSecton />
        </div>
    );
};

export default CourseContent;
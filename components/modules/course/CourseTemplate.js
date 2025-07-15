import React , {useEffect , useState} from 'react';
import { useDispatch } from 'react-redux';
import CourseAsideSection from './CourseAsideSection';
import CourseBreadcrumb from './CourseBreadCrumb';
import CourseMainSection from './CourseMainSection';

const CourseTemplate = ({courseData}) => {

    const [testStarted, setTestStarted] = useState(false);
    const [testFinished, setTestFinished] = useState(false);

    const {
        courseName,
        courseTeacher,
        courseTeacherProfileImage,
        coursePublishDate,
        courseTumbnailSrc,
        courseCaption,
        courseQuestions,
        courseSlug,
        courseTime,
        courseVideos,
        courseCoverPhoto,
        courseEpizodes
    } = courseData;
    console.log(courseVideos)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:"RESET"})
    } , [])

    return (
        <div className='page-padding-tops'>
            <div className='pt-4'>
                <div className='container mt-4 mt-sm-0 mt-lg-2'>
                                <CourseBreadcrumb courseSlug={courseSlug} courseName={courseName} />
                            <div className={`col-12 ${testStarted ? "d-none" : "d-flex"} d-xl-none`}>
                                <CourseAsideSection courseName={courseName} courseTime={courseTime} courseVideos={courseVideos} />
                            </div>    
                        <div className='row justify-content-between flex-lg-row-reverse'>
                            <div className='col-12 col-xl-4 d-none d-xl-block '>
                                <CourseAsideSection courseName={courseName} courseTime={courseTime} courseVideos={courseVideos} />
                            </div>
                            <div  className='col-12 col-xl-8'>
                                <CourseMainSection
                                courseTeacher={courseTeacher} 
                                courseTeacherProfileImage={courseTeacherProfileImage}
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
                        </div>
                </div>
            </div>
        </div>
    );
};

export default CourseTemplate;
import React, { useEffect , useState} from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import ReportQuestion from './ReportQuestion';
import { useRouter } from 'next/router';
import DownloadPdfButton from './DownloadPdfButton';
import ReportQuestions from './ReportQuestions';
import CertificateGenerator from './CertificateGenerator';

const Report = (props) => {
    const { questions, noAnswers, corrects, incorrects } = useSelector(state => state);

    const courseName = props.courseName;
    const courseTime = props.courseTime;

    // const { testLevel, categoryInp, category , nextLevel , nextLevelName , reading ,readingCaption , listening } = props.testData;
    const passPoint = 12;
    const [userLocalName , setUserLocalName] = useState("")
    const pointPercent = corrects.length;
    const router = useRouter();

  const refreshPage = () => {
    router.reload();
  };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserData = localStorage.getItem('userData');
            
            let userData = {};

            if (storedUserData) {
                userData = JSON.parse(storedUserData);
                setUserLocalName(localStorage.getItem('userName'))
            } else {
                // اگر userData وجود ندارد، یک شیء جدید ایجاد کنید
                userData = {
                    userName,
                    userTests: {
                        
                    },
                  };
            }

            const newUserStatus = pointPercent < passPoint ? 'failed' : 'passed';
            const newUserMark = pointPercent;

            // به‌روزرسانی داده‌های آزمون کاربر
            if (!userData.userTests[courseName]) {
                userData.userTests[courseName] = {};
            }
            userData.userTests[courseName] = { userStatus: newUserStatus, userMark: newUserMark };

            localStorage.setItem('userData', JSON.stringify(userData));
        }
    }, [pointPercent, passPoint, courseName]);

    const handleBack = () => {
        router.back();
    };
    const reportData = {
        userLocalName,
        pointPercent,
        passPoint,
        questions,
        corrects,
        incorrects,
        noAnswers,
        courseName,
        courseTime
        
    };

    return (
        <div className="d-flex flex-column align-items-center text-dark w-100 mt-3">
            <div id='TEST_REPORT' className="d-flex flex-column align-items-center text-dark w-100 mt-3">
            <h5 style={{fontSize:"24px",color:"#464749" , 
                                    fontFamily:"KalamehWeb-Bold" , }} 
                                    className='text-center mb-4'>
                                    نتیجه آزمون:
            </h5>
            <div style={{ width: "300px", backgroundColor: "#151d38", fontSize: "16px" }} className="text-center py-3 rounded">
                <p  style={{fontSize:"15px" , 
                    lineHeight:"2em" , 
                    textAlign:"justify" , 
                    fontFamily:"KalamehWeb-Medium"}}
                    className="text-light text-center mb-2"
                    >آزمون پایان یافت</p>
                    <p  style={{fontSize:"15px" , 
                    lineHeight:"2em" , 
                    textAlign:"justify" , 
                    fontFamily:"KalamehWeb-Medium"}}
                    className="text-light text-center"
                    >آزمون دهنده: {userLocalName}</p>
                <p 
                style={{fontSize:"15px" , 
                    lineHeight:"2em" , 
                    textAlign:"justify" , 
                    fontFamily:"KalamehWeb-Medium"}}
                    className="text-light text-center mt-2"
                >نمره شما {pointPercent} از 20</p>
                <p 
                style={{fontSize:"15px" , 
                    lineHeight:"2em" , 
                    textAlign:"justify" , 
                    fontFamily:"KalamehWeb-Medium"}}
                    className="text-light text-center mt-2"
                > وضعیت  : {pointPercent < passPoint ? "مردود" : "قبول"}</p>
            </div>
            <p  style={{fontSize:"15px" , 
                    lineHeight:"2em" , 
                    textAlign:"justify" , 
                    fontFamily:"KalamehWeb-Medium"}}
                    className="text-center mt-3"
                    >{userLocalName} عزیز،</p>

            {
                pointPercent < passPoint ?
                <p 
                style={{fontSize:"15px" , 
                color:"#474d52" ,lineHeight:"2em" , 
                textAlign:"center" , 
                fontFamily:"KalamehWeb-Medium"}} 
                className="mt-3">{`متاسفیم، شما در آزمون ${courseName} مردود شده اید`}</p> :
                <>
                <p 
                style={{fontSize:"15px" , 
                color:"#474d52" ,lineHeight:"2em" , 
                textAlign:"center" , 
                fontFamily:"KalamehWeb-Medium"}} 
                className="mt-3">{`تبریک! شما یادگیری ${courseName} را با موفقیت پشت سر گذاشتید`}</p>

                            <h5
            style={{fontSize:"24px",color:"#464749" , 
                fontFamily:"KalamehWeb-Bold" , }} 
                className='text-center mt-2 pt-3 mb-3 border-top w-100'>
                پس از انجام آزمون...
            </h5>
                <p 
                style={{fontSize:"15px" , 
                    color:"#474d52" ,lineHeight:"3em" , 
                    textAlign:"center" , 
                    fontFamily:"KalamehWeb-Medium"}}>
                    در صورت قبولی در آزمون، با زدن دکمه ی دریافت گواهی، گواهی یادگیری دوره را دریافت کنید.
                </p>
            <div className='w-100 text-center'>
                <CertificateGenerator reportData={reportData} />
            </div>
                    </>
                }
                <button className='text-center rounded border-0 fs-15 mt-3 btn-main-2 mb-3' onClick={refreshPage}>بازگشت به صفحه دوره</button>

            <div className="text-center fs-15 w-100 d-flex  justify-content-center align-items-center flex-column">
                <p style={{ width: "250px", height: "40px", direction: "ltr", paddingTop: "13px" , fontFamily:"KalamehWeb-Medium" }} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-light text-dark border"> {questions.length} : تعداد کل سوالات</p>
                <p style={{ width: "250px", height: "40px", direction: "ltr", paddingTop: "13px" , fontFamily:"KalamehWeb-Medium" }} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-success text-white">{corrects.length} : تعداد پاسخ های درست</p>
                <p style={{ width: "250px", height: "40px", direction: "ltr", paddingTop: "13px" , fontFamily:"KalamehWeb-Medium" }} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-danger  text-white">{incorrects.length} : تعداد پاسخ های نادرست</p>
                <p style={{ width: "250px", height: "40px", direction: "ltr", paddingTop: "13px" , fontFamily:"KalamehWeb-Medium" }} className="my-1 mx-1 mx-sm-2 px-3 rounded bg-warning text-main-1">{noAnswers.length} : تعداد سوالات بدون پاسخ</p>
            </div>
            </div>
            <div className="w-100 text-end mt-3">
            <h5 style={{fontSize:"24px",color:"#464749" , 
                                    fontFamily:"KalamehWeb-Bold" , }} 
                                    className='text-center border-bottom py-4 mb-2 mt-3 border-top'>
                                    پاسخنامه سوالات:
            </h5>
                <ReportQuestions data={questions} />
            </div>
        </div>
    );
};

export default Report;

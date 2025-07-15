import React, { useEffect, useState } from "react";
import CertificateGenerator from "./CertificateGenerator";

const TestStartButton = ({ setShowModal, courseName , courseTime }) => {
  const [userLocalName , setUserLocalName] = useState("")
  const [userStatus, setUserStatus] = useState(null);
  const [userMark, setUserMark] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUserLocalName(localStorage.getItem('userName'))
    if (userData && userData.userTests[courseName]) {
      console.log("Course Data:", userData[courseName]); // بررسی مقدار آزمون موردنظر
      setUserStatus(userData.userTests[courseName].userStatus);
      setUserMark(userData.userTests[courseName].userMark);
    }
    console.log("Course Name:", courseName);
  }, [courseName]);

  const reportData = {
    userLocalName,
    pointPercent: userMark,
    courseName,
    courseTime
    
};
  return (
    <div>
      <div className="text-center shadow-sm border p-3 mt-3">
        <p style={{ fontFamily: "KalamehWeb-Medium", fontSize: "17px" }}>شرکت در آزمون دوره</p>
        <p
          className="mt-3 lh-lg"
          style={{ fontFamily: "KalamehWeb-Medium", fontSize: "13px" }}
          >
          در صورتی که یادگیری را به پایان رسانده‌اید، جهت شرکت در آزمون دوره، روی شروع آزمون کلیک کنید
        </p>
            {userStatus && userStatus !== "not-passed" && (
                <>
              <p className="mb-2 mt-3" style={{ fontFamily: "KalamehWeb-Medium", fontSize: "15px", color: "red" }}>
                شما قبلاً در این آزمون شرکت کردید. 
              </p>
              <p style={{ fontFamily: "KalamehWeb-Medium", fontSize: "15px", color: "red" }}>
              نمره شما: {userMark}
             </p>
                </>
            )}
        <button
            // style={{backgroundColor:`${userStatus && userStatus !== "not-passed" && "red"}}`}}
          className={` w-50 text-center rounded border-0 fs-15 mt-3 ${userStatus && userStatus !== "not-passed" ? "btn btn-danger" : "btn-main-2"}`}
          onClick={() => setShowModal(true)}
        >
          {userStatus && userStatus !== "not-passed" ? "آزمون مجدد" : "شروع آزمون"}
        </button>
        {
          userStatus === "passed" && 
          <>
              <CertificateGenerator reportData={reportData} />
          </>
        }
      </div>
    </div>
  );
};

export default TestStartButton;

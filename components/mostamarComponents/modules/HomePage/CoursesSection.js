import React from 'react';
import Link from 'next/link';
import CoursesCards from './CoursesCards';

const CoursesSection = () => {
    return (
        <div className='container shadow-sm border my-4 py-4 rounded'
               style={{
            // background: "linear-gradient(135deg,rgb(255, 249, 231) 0%,rgb(232, 255, 238) 100%)",
          }}>
        
        <div className='row align-items-center'>
                    <div className='col-12 text-center'>
                        <h3 style={{fontFamily:"KalamehWeb-Bold" , fontSize:"30px" , color:"#090736" , lineHeight:"40px"}} className='mb-1 mx-auto text-center fs-4'>دوره ها و کلاس‌های آموزشی</h3>
                        <div style={{maxWidth:"330px"}} className="lbf-after-card-img mx-auto"></div>
                            <p
                              className="mt-2 lh-lg text-center text-muted mb-2"
                              style={{
                                fontFamily: "KalamehWeb-Medium",
                                fontSize: "15px"
                              }}
                            >
                            با آموزش‌های سامانه یادگیری مستمر دبستان شهید جهان‌آرا، با اطمینان و مهارت روش‌های نوین تدریس را اجرا کنید!
                            </p>
                            <CoursesCards />
                            <Link style={{ width: "fit-content" }} href={'/mostamar/courses'} className="mx-auto btn-main-2 mt-3 text-white d-flex align-items-center">
                                <span style={{ fontFamily: "KalamehWeb-Bold" }}>
                                    مشاهده همه دوره ها
                                </span>
                                <i className="bi bi-chevron-double-left me-2 pt-2 animated-icon"></i>
                            </Link>

                    </div>        
        </div>
        </div>
    );
};

export default CoursesSection;
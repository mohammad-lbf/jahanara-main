import React from 'react';

const Properties = () => {
    return (
        <div className='container px-0 mt-0 mt-lg-4'>
            <h3 style={{fontSize:"30px", fontFamily:"KalamehWeb-Bold", color:"#03004e"}} className="pt-0 pt-lg-4 fw-bold text-center mb-4 lh-lg fs-2">جدیدترین روش‌های آموزش معلمان در سامانه یادگیری مستمر</h3>
            <p className='text-secondary text-center mb-0 mb-lg-4 lh-lg' style={{fontSize:"20px", fontFamily:"KalamehWeb-Medium", }}>موثرترین روش‌های آموزش نوین</p>
        <div className='row justify-content-center align-items-center pt-4'>
            <div className='col-12 col-lg-4 d-flex justify-content-lg-end justify-content-center'>
                <div style={{overflow:"hidden" , maxWidth:"350px" , height:"400px" , borderRadius:"10px" , backgroundColor:"#fCBF3F"}} className="px-4 property-card shadow mb-3 mb-lg-0">
                    <div className='text-center w-100 mt-4 pt-3' style={{fontSize:"50px"}}>
                    <i class="bi bi-clipboard-check-fill text-success"></i>
                    </div>
                    <h2 className='mt-4 text-center lh-lg mb-4' style={{fontSize:"27px" , fontFamily:"KalamehWeb-Bold"}}>آموزش اصولی</h2>
                    <p className='mt-3 lh-lg ' style={{fontFamily:"KalamehWeb-Medium"}}>
                    با شرکت در دوره‌های آموزشی سامانه یادگیری مستمر دبستان شهید جهان‌آرا معلمان با به‌روزترین منابع آموزشی و روش‌های نوین تدریس، مهارت‌های خود را به‌صورت اصولی ارتقا می‌دهند.
                    </p>
                </div>
            </div>
            <div className='col-12 col-lg-4 d-flex justify-content-center'>
            <div style={{overflow:"hidden" , maxWidth:"350px" , height:"400px" , borderRadius:"10px" , backgroundColor:"#CBF3F0"}} className="px-4 property-card mb-3 shadow mb-lg-0">
                    <div className='text-center w-100 mt-4 pt-3' style={{fontSize:"50px"}}>
                    <i class="bi bi-journal-bookmark-fill text-success"></i>
                    </div>
                    <h2 className='mt-4 text-center lh-lg mb-4' style={{fontSize:"27px" , fontFamily:"KalamehWeb-Bold"}}>تمرکز بر نکات کاربردی</h2>
                    <p className='mt-3 lh-lg ' style={{fontFamily:"KalamehWeb-Medium"}}>
                    یادگیری عملی مهارت‌های تدریس از طریق کاربرد در کلاس، باعث تثبیت دانش معلمان شده و انگیزه آن‌ها را برای بهبود روش‌های آموزشی افزایش می‌دهد.
                    </p>
                </div>
            </div>
            <div className='col-12 col-lg-4 d-flex justify-content-lg-start justify-content-center'>
            <div style={{overflow:"hidden" , maxWidth:"350px" , height:"400px" , borderRadius:"10px" , backgroundColor:"#a9def9"}} className="px-4 property-card shadow mb-3 mb-lg-0">
                    <div className='text-center w-100 mt-4 pt-3' style={{fontSize:"50px"}}>
                    <i class="bi bi-ui-checks-grid text-success"></i>
                    </div>
                    <h2 className='mt-4 text-center lh-lg mb-4' style={{fontSize:"27px" , fontFamily:"KalamehWeb-Bold"}}>آزمون های استاندارد</h2>
                    <p className='mt-3 ' style={{fontFamily:"KalamehWeb-Medium" , lineHeight:"25px"}}>
                    با شرکت در ارزیابی‌های دقیق و استاندارد سامانه یادگیری مستمر دبستان شهید جهان‌آرا، معلمان می‌توانند میزان پیشرفت خود را سنجیده و مهارت‌های آموزشی‌شان را بهبود بخشند.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Properties;
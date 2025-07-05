import React from 'react';
import Card from '../Card';

const CoursesSection = () => {
    return (
        <>
            {/* <h3 className="color-linear text-center text-lg-end">آزمون ها</h3> */}
            <div className="container px-0">
            <h3 style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"27px"}} className='lh-lg text-center mb-2'>دوره ها و کلاسهای آموزشی</h3>
            <div style={{maxWidth:"300px"}} className="lbf-after-card-img mb-4 mt-0 mx-auto"></div>
                <div className="row justify-content-center row-cols-xxl-4 row-cols-lg-2 row-cols-sm-1 row-cols-md-2 row-cols-xs-1">
                <div className='col-sm d-flex justify-content-center'>
                    <Card
                     slug={`/courses/basicWord`}
                     coverPhoto={`/images/courses/basicWord/Tumbnail.png`}
                     title={`آموزش مقدماتی ورد`}
                     caption={"در دوره مقدماتی ورد، اصول اولیه و کاربردهای اصلی Microsoft Word را می‌آموزید و مهارت‌های لازم برای ایجاد و ویرایش اسناد را کسب می‌کنید..."}
                     buttonText="مشاهده ی دوره"
                     finishStatus={true}
                     />
                    </div>
                    <div className='col-sm d-flex justify-content-center'>
                    <Card
                     slug={`/courses/Page-layout-tutorial-in-Word`}
                     coverPhoto={`/images/courses/Page-layout-tutorial-in-Word/Tumbnail.png`}
                     title={`آموزش صفحه آرایی در ورد`}
                     caption={"دوره‌ی آموزش صفحه‌آرایی در ورد ویژه‌ی معلمان طراحی شده است تا به آن‌ها کمک کند اسناد آموزشی، جزوات، آزمون‌ها و گزارش‌های خود را به شکلی حرفه‌ای و منظم تهیه کنند..."}
                     buttonText="به زودی..."
                     finishStatus={false}
                     />
                    </div>
                    <div className='col-sm d-flex justify-content-center'>
                    <Card
                     slug={`/courses/research-with-ai`}
                     coverPhoto={`/images/courses/research-with-ai/Tumbnail.png`}
                     title={`پژوهش با هوش مصنوعی`}
                     caption={"دوره‌ی پژوهش با هوش مصنوعی به معلمان و پژوهشگران کمک می‌کند تا با استفاده از ابزارهای مبتنی بر هوش مصنوعی، تحقیقات خود را سریع‌تر، دقیق‌تر و کارآمدتر انجام دهند..."}
                     buttonText="به زودی..."
                     finishStatus={false}
                     />
                    </div>
                    <div className='col-sm d-flex justify-content-center'>
                    <Card
                     slug={`/courses/action-research`}
                     coverPhoto={`/images/courses/action-research/Tumbnail.png`}
                     title={`اقدام پژوهی (۱)`}
                     caption={"دوره‌ی اقدام‌پژوهی (۱) به معلمان کمک می‌کند تا با روش‌های علمی و عملی، مسائل و چالش‌های آموزشی کلاس درس خود را شناسایی و برای بهبود آن‌ها راهکارهای مؤثر ارائه دهند...."}
                     buttonText="به زودی..."
                     finishStatus={false}
                     />
                    </div>

          
                </div>
            </div>
        </>
    );
};

export default CoursesSection;
import Teacher from "./Teacher";

const Teachers = () => {
    return (
        <div className="container">
            <div className="row flex-lg-row-reverse justify-content-center">
                <div className="col-12 px-lg-0 py-3 d-flex justify-content-center flex-column align-items-center">
                <h4 style={{fontSize:"17px" , fontFamily:"KalamehWeb-Bold"}} className=" text-center text-lg-end px-0">معرفی کادر مدرسه</h4>
                <div style={{width:"170px"}} className="lbf-after-card-img mx-lg-0 mx-auto"></div>
                </div>
                <div className="col-12 d-flex justify-content-center">
            <div style={{borderRadius:"12px" , marginBottom:"23px" , width:"250px"}} className="d-flex flex-column align-items-center justify-content-end border-gray-800 p-3 shadow-sm">
                <img style={{}} className={`rounded mb-3 border`} loading="lazy" width={150} height={150} src={"/images/components/modules/teachers/حمیدرضا بادینلو.png"} />
                <p style={{fontSize:"17px" , fontFamily:"KalamehWeb-Bold"}} className="fw-bold text-center mb-0">جناب آقای بادینلو</p>
                <p style={{fontSize:"15px" , color:"green" , fontFamily:"KalamehWeb-Bold"}} className="fw-bold mt-2 mb-0">مدیریت مدرسه</p>
            </div>
                </div>
                <div className="col-12 px-lg-0 py-3 d-flex justify-content-center flex-column align-items-center">
                <h4 style={{fontSize:"17px" , fontFamily:"KalamehWeb-Bold"}} className=" text-center text-lg-end px-0">معاونین مدرسه</h4>
                <div style={{width:"170px"}} className="lbf-after-card-img mx-lg-0 mx-auto"></div>
                </div>

            </div>
            <div className="row flex-lg-row justify-content-center">
                <Teacher image={"/images/components/modules/teachers/ابراهیمی.jpg"} teacher={"سرکار خانم ابراهیمی"} post={"معاونت آموزشی"} md={"6"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/رستمی.jpg"} teacher={"جناب آقای رستمی"} post={"معاونت آموزشی"} md={"6"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/جوادی.jpg"} teacher={"جناب آقای جوادی"} post={"معاونت پرورشی"} md={"6"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/khatibi.jpg"} teacher={"سرکار خانم خطیبی"} post={"معاونت اجرایی"} md={"6"} lg={"3"} />
            </div>
            <div className="row flex-lg-row justify-content-center">
            <div className="col-12 px-lg-0 py-3 d-flex justify-content-center flex-column align-items-center">
                <h4 style={{fontSize:"17px" , fontFamily:"KalamehWeb-Bold"}} className=" text-center text-lg-end px-0"> آموزگاران پایه سوم</h4>
                <div style={{width:"170px"}} className="lbf-after-card-img mx-lg-0 mx-auto"></div>
                </div>
                <Teacher image={"/images/components/modules/teachers/امراللهی.jpg"} teacher={"سرکار خانم امراللهی"} post={"آموزگار"} md={"4"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/حدیث مرادی پور.jpg"} teacher={"سرکار خانم مرادی پور"} post={"آموزگار"} md={"4"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/زینب شاه علی.jpg"} teacher={"سرکار خانم شاه علی"} post={"آموزگار"} md={"4"} lg={"3"} />
            </div>
            <div className="row flex-lg-row justify-content-center">
            <div className="col-12 px-lg-0 py-3 d-flex justify-content-center flex-column align-items-center">
                <h4 style={{fontSize:"17px" , fontFamily:"KalamehWeb-Bold"}} className=" text-center text-lg-end px-0"> آموزگاران پایه چهارم</h4>
                <div style={{width:"170px"}} className="lbf-after-card-img mx-lg-0 mx-auto"></div>
                </div>
                <Teacher image={"/images/components/modules/teachers/محمد لبافی.jpg"} teacher={"جناب آقای لبافی"} post={"آموزگار"} md={"4"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/سید حسین قریشیان.jpg"} teacher={"جناب آقای قریشیان"} post={"آموزگار"} md={"4"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/یونس علمداری.jpg"} teacher={"جناب آقای علمداری"} post={"آموزگار"} md={"4"} lg={"3"} />
            </div>
            <div className="row flex-lg-row justify-content-center">
            <div className="col-12 px-lg-0 py-3 d-flex justify-content-center flex-column align-items-center">
                <h4 style={{fontSize:"17px" , fontFamily:"KalamehWeb-Bold"}} className=" text-center text-lg-end px-0"> آموزگاران پایه پنجم</h4>
                <div style={{width:"170px"}} className="lbf-after-card-img mx-lg-0 mx-auto"></div>
                </div>
                <Teacher image={"/images/components/modules/teachers/ابراهیم پور.jpg"} teacher={"جناب آقای ابراهیم پور"} post={"آموزگار"} md={"6"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/حاجتی.jpeg"} teacher={"جناب آقای حاجتی"} post={"آموزگار"} md={"6"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/bagherian.jpg"} teacher={"سرکار خانم باقریان"} post={"آموزگار"} md={"6"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/soltani.jpg"} teacher={"سرکار خانم سلطانی"} post={"آموزگار"} md={"6"} lg={"3"} />
            </div>
            <div className="row flex-lg-row justify-content-center">
            <div className="col-12 px-lg-0 py-3 d-flex justify-content-center flex-column align-items-center">
                <h4 style={{fontSize:"17px" , fontFamily:"KalamehWeb-Bold"}} className=" text-center text-lg-end px-0"> آموزگاران پایه ششم</h4>
                <div style={{width:"170px"}} className="lbf-after-card-img mx-lg-0 mx-auto"></div>
                </div>
                <Teacher image={"/images/components/modules/teachers/نوری.jpg"} teacher={"جناب آقای نوری"} post={"آموزگار"} md={"4"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/nikfekr.jpg"} teacher={"جناب آقای نیک فکر"} post={"آموزگار"} md={"4"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/yekta.jpg"} teacher={"جناب آقای یکتا"} post={"آموزگار"} md={"4"} lg={"3"} />
            </div>
            <div className="row flex-lg-row justify-content-center">
            <div className="col-12 px-lg-0 py-3 d-flex justify-content-center flex-column align-items-center">
                <h4 style={{fontSize:"17px" , fontFamily:"KalamehWeb-Bold"}} className=" text-center text-lg-end px-0"> عوامل  اجرایی مدرسه</h4>
                <div style={{width:"170px"}} className="lbf-after-card-img mx-lg-0 mx-auto"></div>
                </div>
                <Teacher image={"/images/components/modules/teachers/atefi.jpg"} teacher={"جناب آقای عاطفی"} post={"کادر اجرایی"} md={"4"} lg={"3"} />
                <Teacher image={"/images/components/modules/teachers/shams.jpg"} teacher={"جناب آقای شمس"} post={"کادر اجرایی"} md={"4"} lg={"3"} />
            </div>
        </div>
    );
};

export default Teachers;
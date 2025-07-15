import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const FirstBanner = () => {

  return (
    <div className="pt-4 mt-0 mt-lg-4 mb-0 pb-0 pb-lg-4">
      <div className="container pt-4 pt-lg-0">
        <div style={{backgroundColor:"#2813ec"}} className="row  rounded align-items-center justify-content-center shadow p-4">
          <div className="col-lg-6 col-12">
            <div className="pt-20">
              <motion.div 
                className="box-banner-4 d-flex flex-column align-items-center align-items-lg-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <div className="banner-info d-flex flex-column align-items-center align-items-lg-start">
                  <motion.span
                    style={{ fontFamily: "Vazirmatn" , direction:"ltr" }}
                    className="text-sm-bold text-warning text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                  >
                    دبستان شهید جهان آرا | سامانه یادگیری مستمر
                  </motion.span>
                  <br />
                  <motion.h3
                    style={{ fontFamily: "KalamehWeb-Bold", fontSize: "22px", color: "#fff", lineHeight: "55px" }}
                    className="d-inline-block mt-10 mb-15 text-center text-lg-end"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                      سامانه یادگیری مستمر دبستان شهید جهان‌آرا، فضای آموزشی ویژه معلمان برای رشد حرفه‌ای و به‌روزرسانی دانش
                  </motion.h3>
                  
                </div>

                {/* <motion.button className='btn-main-2 mt-3' style={{fontFamily: "KalamehWeb-Bold"}} onClick={scrollToIntroSection}>
                      شروع یادگیری<i class="bi bi-chevron-double-down me-2"></i>
                  </motion.button> */}

              </motion.div>
            </div>
          </div>
          <div className='col-lg-6 col-12 mt-4 mt-lg-0'>
            <motion.div
              className="box-banner-4 d-flex justify-content-center justify-content-lg-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div className="">
                <Image width={"450"} height={"450"} alt="first-banner-image" style={{width:"250px" , height:"250px"}} src={`/images/components/modules/e-learning-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--online-education-study-graduation-book-pack-illustrations-3337503.png`} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;

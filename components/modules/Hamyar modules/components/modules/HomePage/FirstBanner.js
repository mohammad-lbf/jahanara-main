import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const FirstBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container rounded shadow px-4"
      style={{
        marginTop: "50px",
        paddingTop: "50px",
        paddingBottom: "50px",
        background: "linear-gradient(135deg,rgb(0, 158, 18),rgb(0, 66, 11))",
      }}
    >
      <div className="row align-items-center">
        <div className="col-12 col-lg-7">
          <h2
            className="text-center text-lg-end lh-lg"
            style={{
              fontSize: "28px",
              fontFamily: "KalamehWeb-Bold",
              color: "#ffffff",
            }}
          >
            سامانه همیار معلم | دبستان شهید جهان آرا
          </h2>
          <p
            className="mt-3 mb-4 mb-lg-0 text-center text-lg-end"
            style={{
              fontSize: "16px",
              fontFamily: "KalamehWeb-Medium",
              color: "#f0f0f0",
              lineHeight: "1.8rem",
              maxWidth: "700px",
              margin: "0",
            }}
          >
            سامانه همیار معلم دبستان شهید جهان آرا یک پلتفرم نوین و کارآمد است
            که با هدف ارتقاء کیفیت آموزش و تسهیل فرآیند یادگیری برای معلمان و
            دانش‌آموزان طراحی شده است. این سامانه ابزارهایی نظیر مشاهده کتب
            درسی، نمونه سؤالات، طرح درس‌ها و محتوای آموزشی را به‌صورت ساختاریافته
            ارائه می‌دهد تا فرآیند تدریس و یادگیری را ساده‌تر و جذاب‌تر کند.
          </p>
        </div>
        <div className="col-12 col-lg-5 text-center text-lg-start mt-4 mt-lg-0">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/hamyar/components/modules/logo-light.png"
              alt="لوگوی سامانه همیار دبستان شهید جهان آرا"
              width={275}
              height={65}
              style={{
                width: "200px",
                height: "auto",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FirstBanner;

"use client";

import dynamic from "next/dynamic";
import { FaMapMarkerAlt, FaPhone, FaMapPin } from "react-icons/fa";

const DynamicMap = dynamic(() => import("./MapLeaflet"), {
  ssr: false,
});

export default function ContactInfo() {
  return (
    <div className="container border my-3 bg-white rounded shadow-sm p-4">

      <div className="row align-items-center">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
      <h2
        className="text-center text-lg-end mb-4 fs-4"
        style={{
          fontFamily: "KalamehWeb-Bold",
          fontSize: "28px",
          color: "#03004e",
        }}
      >
        تماس با دبستان شهید جهان آرا
      </h2>
          <ul
            className="list-unstyled"
            style={{ fontFamily: "KalamehWeb-Bold", fontSize: "14px" }}
          >
            <li className="mb-3 d-flex align-items-center border-bottom pb-3" style={{ fontFamily: "KalamehWeb-Bold", fontSize: "14px" }}>
              <FaMapMarkerAlt color="#16277B" size={20} className="ms-1" />
          آدرس: میدان خراسان، خیابان خراسان، خیابان لرزاده، بعد از درمانگاه خیریه شهدای لرزاده، پلاک ۲۶
            </li>
            <li className="mb-3 d-flex align-items-center border-bottom pb-3" style={{ fontFamily: "KalamehWeb-Bold", fontSize: "14px" }}>
              <FaPhone color="#16277B" size={20} className="ms-2" />
              شماره تماس: ۳۳۵۴۳۱۴۱ - ۳۳۵۴۳۱۴۱
            </li>
            <li className="mb-3 d-flex align-items-center border-bottom pb-3" style={{ fontFamily: "KalamehWeb-Bold", fontSize: "14px" }}>
              <FaMapPin color="#16277B" size={20} className="ms-2" />
              کد پستی: ۱۱۷۷۹۳۵۳۱۱
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-6">
          <DynamicMap />
        </div>
      </div>
    </div>
  );
}

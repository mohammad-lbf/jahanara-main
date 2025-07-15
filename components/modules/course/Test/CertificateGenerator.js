"use client";

import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import moment from "moment-jalaali";

export default function CertificateGenerator({ reportData }) {
  const generateAndDownloadCertificate = async () => {
    const existingPdf = await fetch("/govahi.pdf").then((res) =>
      res.arrayBuffer()
    );
    const fontBytes = await fetch("/fonts/Vazir-Bold.ttf").then((res) =>
      res.arrayBuffer()
    );
    
    const pdfDoc = await PDFDocument.load(existingPdf);
    pdfDoc.registerFontkit(fontkit);
    
    const customFont = await pdfDoc.embedFont(fontBytes);
    const firstPage = pdfDoc.getPages()[0];
    
    const getTextWidth = (text, font, size) => {
      return font.widthOfTextAtSize(text, size);
    };
    // 📌 دریافت تاریخ شمسی با moment-jalaali
    const persianDate = moment().format("jYYYY/jMM/jDD").replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]).split('').reverse().join('');
    function generateLetterNumber(unitCode = '12') {
      const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // عدد 8 رقمی تصادفی
      const resultNumber = `${unitCode}/${randomNumber}`
      return resultNumber.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]).split('').reverse().join('');
  }
  const adjustedXName = 640 - getTextWidth(reportData.userLocalName, customFont, 14 );
  const adjustedXCourseName = 365 - getTextWidth(reportData.courseName, customFont, 14 );
  
    firstPage.drawText(reportData.userLocalName , {
      x: adjustedXName,
      y: 277,
      size: 14,
      font: customFont,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(reportData.courseName , {
        x: adjustedXCourseName,
        y: 275,
        size: 13,
        font: customFont,
        color: rgb(0, 0, 0),
      });

    firstPage.drawText(reportData.courseTime.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]).split('').reverse().join('') , {
        x: 670,
        y: 235,
        size: 14,
        font: customFont,
        color: rgb(0, 0, 0),
      });

    firstPage.drawText(reportData.pointPercent.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]).split('').reverse().join('') , {
        x: 100,
        y: 233,
        size: 14,
        font: customFont,
        color: rgb(0, 0, 0),
      });
    
    // 📌 افزودن تاریخ شمسی به گواهی
    firstPage.drawText(persianDate , {
        x: 130,
        y: 367,
        size: 14,
        font: customFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(generateLetterNumber() , {
        x: 113,
        y: 338,
        size: 14,
        font: customFont,
        color: rgb(0, 0, 0),
      });
      
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    // 📌 ایجاد لینک مجازی برای دانلود خودکار
    const link = document.createElement("a");
    link.href = url;
    link.download = "certificate.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        // disabled={reportData.pointPercent < 12 ? "true" : "false"}
        onClick={generateAndDownloadCertificate}
        className=" text-center rounded border-0 fs-15 mb-3 btn-main-2 mt-3"
      >
        دریافت گواهی
      </button>
    </div>
  );
}

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

    // 📌 دریافت تاریخ شمسی با moment-jalaali
    const persianDate = moment().format("jYYYY/jMM/jDD").replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]).split('').reverse().join('');

    firstPage.drawText(reportData.userLocalName , {
      x: 518,
      y: 271,
      size: 14,
      font: customFont,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(reportData.courseName , {
        x: 253,
        y: 271,
        size: 13,
        font: customFont,
        color: rgb(0, 0, 0),
      });

    firstPage.drawText(reportData.courseTime.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]).split('').reverse().join('') , {
        x: 130,
        y: 271,
        size: 14,
        font: customFont,
        color: rgb(0, 0, 0),
      });

    firstPage.drawText(reportData.pointPercent.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]).split('').reverse().join('') , {
        x: 250,
        y: 228,
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
        className=" text-center rounded border-0 fs-15 mt-3 btn-main-2"
      >
        دریافت گواهی
      </button>
    </div>
  );
}

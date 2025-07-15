import jsPDF from 'jspdf';
import 'jspdf-autotable';
import VazirFont from '../../../../assets/functions/VazirBase64';
import ImageBase64 from '../../../../assets/functions/ImageBase64';

const DownloadPdfButton = ({ fileName, reportData }) => {

    // ایجاد یک شیء جدید Date برای دریافت تاریخ و زمان کنونی
    const now = new Date();

    // دریافت سال، ماه و روز
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // ماه‌ها از 0 شروع می‌شوند
    const day = now.getDate();

    // فرمت کردن تاریخ به میلادی
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    const generatePDF = () => {
        const doc = new jsPDF();

        // Add Persian font
        doc.addFileToVFS('Vazir.ttf', VazirFont);
        doc.addFont('Vazir.ttf', 'Vazir', 'normal');
        doc.setFont('Vazir');

        // Page dimensions
        const lineThickness = 0.15;
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
        const margin = 20; // Margin for the border
        const borderRadius = 10; // Radius for the corners

        // Draw rounded border
        const drawRoundedRect = (x, y, width, height, radius) => {
            doc.setLineWidth(1);
            doc.setDrawColor(0);
            doc.setLineWidth(0.2);
            doc.setFillColor(255, 255, 255); // Optional: Set fill color to white
            doc.roundedRect(x, y, width, height, radius, radius, 'S');
        };

        drawRoundedRect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin, borderRadius);

        const title = 'Report Form';
        const titleFontSize = 20;
        doc.setFontSize(titleFontSize);
        doc.setFont('Vazir', 'bold');
        const titleWidth = doc.getStringUnitWidth(title) * titleFontSize / doc.internal.scaleFactor;
        const centerX = (pageWidth - titleWidth) / 2;
        doc.text(title, margin + 5, 35); // Main title

        const imgWidth = 45; // Set image width
        const imgHeight = 15; // Set image height
        const imgX = (pageWidth - imgWidth) / 2; // Center the image horizontally
        doc.addImage(ImageBase64, 'PNG', margin + 119, 25, imgWidth, imgHeight);


        doc.setLineWidth(0.15); // Set line width
        doc.line(margin, 43, pageWidth - margin, 43);

        // Add type of test
        doc.setFontSize(12);
        doc.setFont('Vazir', 'normal');
        doc.setTextColor('black'); // Black color for the type of test title
        const typeOfTest = 'Type of test:';
        doc.setLineWidth(lineThickness);
        doc.rect(margin + 5 , 46, 78, 12);
        const typeOfTestWidth = doc.getStringUnitWidth(typeOfTest) * 12 / doc.internal.scaleFactor;
        doc.text(typeOfTest, margin + 7, 53);

        const Date = 'Date:';
        doc.setLineWidth(lineThickness);
        doc.rect(margin + 119.5 , 46, 43.5, 12);
        doc.text(Date, margin + 123, 53);

        // Red color for the type of test value
        doc.setTextColor('red');
        doc.text(reportData.category + ' assessment', margin + typeOfTestWidth + 10, 53);

        doc.setTextColor('red');
        doc.text(formattedDate, margin + 135, 53);

        const boxWidth = 100;
        const boxHeight = 12;
        let startY = margin + 40;

        doc.setTextColor('black'); // Black color for the info title
        doc.text('Name:', margin + 5, 70);
        doc.setLineWidth(lineThickness);
        doc.rect((pageWidth / 2) - 45, 62, 110, boxHeight); // کشیدن مستطیل
        doc.setTextColor('red'); // Red color for the info value
        doc.text(reportData.userLocalName, pageWidth / 2 - 40, 69);

        doc.setTextColor('black'); // Black color for the info title
        doc.text('Country / Town:', margin + 5, 85);
        doc.setLineWidth(lineThickness);
        doc.rect((pageWidth / 2) - 45, 77, 110, boxHeight); // کشیدن مستطیل
        doc.setTextColor('red'); // Red color for the info value
        doc.text('Iran', pageWidth / 2 - 40, 84);

        doc.setTextColor('black'); // Black color for the info title
        doc.text('First language:', margin + 5, 100);
        doc.setLineWidth(lineThickness);
        doc.rect((pageWidth / 2) - 45, 92, 110, boxHeight); // کشیدن مستطیل
        doc.setTextColor('red'); // Red color for the info value
        doc.text('Farsi', pageWidth / 2 - 40, 99);


        // Draw line above "Test Results"
        doc.setLineWidth(0.15); // Set line width
        doc.line(margin, 110, pageWidth - margin, 110); // Line above "Test Results"

        doc.setFontSize(titleFontSize);
        doc.setFont('Vazir', 'bold');
        doc.setTextColor('black');
        doc.text('Test Results:', margin + 5, 123);

        // Test Results
        startY += 10;

        doc.setFontSize(12);
        doc.setFont('Vazir', 'normal');

        doc.setTextColor('black'); // Black color for the info title
        doc.text('Test Level:', margin + 5, 140);
        doc.setLineWidth(lineThickness);
        doc.rect((pageWidth / 2) - 45, 132, 110, boxHeight); // کشیدن مستطیل
        doc.setTextColor('red'); // Red color for the info value
        doc.text(reportData.testLevel, pageWidth / 2 - 40, 139);

        doc.setTextColor('black'); // Black color for the info title
        doc.text('Total questions:', margin + 5, 155);
        doc.setLineWidth(lineThickness);
        doc.rect((pageWidth / 2) - 45, 147, 110, boxHeight); // کشیدن مستطیل
        doc.setTextColor('red'); // Red color for the info value
        doc.text(reportData.questions.length.toString(), pageWidth / 2 - 40, 154);

        doc.setTextColor('black'); // Black color for the info title
        doc.text('Correct:', margin + 5, 170);
        doc.setLineWidth(lineThickness);
        doc.rect((pageWidth / 2) - 45, 162, 110, boxHeight); // کشیدن مستطیل
        doc.setTextColor('red'); // Red color for the info value
        doc.text(reportData.corrects.length.toString(), pageWidth / 2 - 40, 169);

        doc.setTextColor('black'); // Black color for the info title
        doc.text('Incorrect:', margin + 5, 185);
        doc.setLineWidth(lineThickness);
        doc.rect((pageWidth / 2) - 45, 177, 110, boxHeight); // کشیدن مستطیل
        doc.setTextColor('red'); // Red color for the info value
        doc.text(reportData.incorrects.length.toString(), pageWidth / 2 - 40, 184);

        doc.setTextColor('black'); // Black color for the info title
        doc.text('Blank:', margin + 5, 200);
        doc.setLineWidth(lineThickness);
        doc.rect((pageWidth / 2) - 45, 192, 110, boxHeight); // کشیدن مستطیل
        doc.setTextColor('red'); // Red color for the info value
        doc.text(reportData.noAnswers.length.toString(), pageWidth / 2 - 40, 199);

        doc.setTextColor('black'); // Black color for the info title
        doc.text('Percentage:', margin + 5, 215);
        doc.setLineWidth(lineThickness);
        doc.rect((pageWidth / 2) - 45, 207, 110, boxHeight); // کشیدن مستطیل
        doc.setTextColor('red'); // Red color for the info value
        doc.text(`${reportData.pointPercent.toFixed(2)}%`, pageWidth / 2 - 40, 214);

        doc.setTextColor('black'); // Black color for the info title
        doc.text('Status:', margin + 5, 230);
        doc.setLineWidth(lineThickness);
        doc.rect((pageWidth / 2) - 45, 222, 110, boxHeight); // کشیدن مستطیل
        doc.setTextColor('red'); // Red color for the info value
        doc.text(reportData.pointPercent < reportData.passPoint ? 'Failed' : 'Pass', pageWidth / 2 - 40, 229);

        // Draw line below "Test Results"
        doc.setLineWidth(0.15); // Set line width
        doc.line(margin, 240, pageWidth - margin, 240); // Line below "Test Results"

        const imgY = startY + 10; // Position the image above the footer

        // Add footer text
        startY = imgY + imgHeight + 20;
        doc.setFontSize(18);
        doc.setFont('Vazir', 'bold');
        doc.setTextColor('black'); // Black color for footer text
        const footerText = 'Mobash.ir';
        const footerTextWidth = doc.getStringUnitWidth(footerText) * 16 / doc.internal.scaleFactor;
        doc.text(footerText, margin + 5, 261);

        // Add bottom note with two lines
        startY += 10;
        doc.setFontSize(10);
        doc.setFont('Vazir', 'normal');
        doc.setTextColor('red'); // Red color for bottom note

        const bottomNoteLine1 = 'To view information about your current level, check out the';
        const bottomNoteLine2 = 'CEFR article on our website.';

        const bottomNoteLine1Width = doc.getStringUnitWidth(bottomNoteLine1) * 12 / doc.internal.scaleFactor;
        const bottomNoteLine2Width = doc.getStringUnitWidth(bottomNoteLine2) * 12 / doc.internal.scaleFactor;
        doc.rect((pageWidth / 2) - 45, 247, 110, 25);
        doc.text(bottomNoteLine1, (pageWidth / 2) - 42, 256);
        doc.text(bottomNoteLine2, (pageWidth / 2) - 42, 266);

        doc.setTextColor(0, 0, 255);
        const link = "https://www.mobash.ir/articles/cefr-scales";
        doc.textWithLink("Check it now!", 111, 266, { url: link });

        doc.setDrawColor(0, 0, 255); // تنظیم رنگ خط به آبی
        doc.line(111, 267 , 134, 267); // کشیدن خط زیر متن

        // Save the PDF file
        doc.save(`${fileName}.pdf`);
    };

    return (
        <button onClick={generatePDF} style={{ fontSize: "15px", fontFamily: 'KalamehWeb-SemiBold' }} 
            className="btn-main-2 text-decoration-none text-white mt-2 mb-2 px-3 rounded" >
            دریافت گواهی به صورت PDF
        </button>
    );
};

export default DownloadPdfButton;

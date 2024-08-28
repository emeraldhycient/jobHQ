import { useCallback } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const useGeneratePDF = (elementRef: React.RefObject<HTMLElement>) => {
    const generatePDF = useCallback(async () => {
        const element = elementRef.current;
        if (element) {
            try {
                const canvas = await html2canvas(element, {
                    scale: 2, // Increase the scale to enhance image quality
                    logging: true, // Enable logging for debugging
                    useCORS: true // Use CORS to handle cross-origin requests
                });
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = 190; // A4 size width in mm
                const pageHeight = 290; // A4 size height in mm
                const imgHeight = (canvas.height * imgWidth) / canvas.width;

                let position = 0;

                // Add the image to the first page
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);

                // If the content is longer than one page, add more pages
                if (imgHeight > pageHeight) {
                    let newPageHeight = imgHeight - pageHeight;
                    position = -pageHeight;

                    while (newPageHeight > 0) {
                        pdf.addPage();
                        position += pageHeight;
                        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, pageHeight);
                        newPageHeight -= pageHeight;
                    }
                }

                pdf.save('resume.pdf'); // Save the generated PDF
            } catch (error) {
                console.error('Error generating PDF:', error);
                alert('There was an error generating the PDF. Please try again.');
            }
        }
    }, [elementRef]);

    return { generatePDF };
};

export default useGeneratePDF;



/*
usage 

 const printRef = useRef<HTMLDivElement | null>(null);
 const generatePDF = useGeneratePDF(printRef);

*/

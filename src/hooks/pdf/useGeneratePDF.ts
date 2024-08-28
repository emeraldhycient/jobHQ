import { useCallback } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const useGeneratePDF = (elementRef: React.RefObject<HTMLElement>) => {
    const generatePDF = useCallback(async () => {
        const element = elementRef.current;
        if (element) {
            const canvas = await html2canvas(element);
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 190; // Scale image width for A4 size
            const pageHeight = 290; // Scale page height for A4 size
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);

            // If content is longer than one page, add more pages
            while (position + imgHeight <= pageHeight) {
                pdf.addPage();
                position = 0;
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            }

            pdf.save('resume.pdf'); // Download the PDF
        }
    }, [elementRef]);

    return generatePDF;
};

export default useGeneratePDF;


/*
usage 

 const printRef = useRef<HTMLDivElement | null>(null);
 const generatePDF = useGeneratePDF(printRef);

*/

import { WINC_LOGO_DATA_URI } from '../constants';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function generatePDF(student, reviewer, status, positives = [], improvements = [], remarks = null) {
  const name = `review-${student}-${Date.now()}`;
  const content = [];
  const styles = {
    title: { fontSize: 24, bold: true, lineHeight: 2 },
    subtitle: { fontSize: 12, bold: true, lineHeight: 1.4 },
    line: { lineHeight: 1.1 },
    list: { lineHeight: 1.2 },
  };

  // Heading
  content.push({
    columns: [
      { text: 'Review', style: 'title', width: '*' },
      { image: WINC_LOGO_DATA_URI, width: 96, height: 29 }
    ]
  });

  // Introduction
  content.push(
    { text: `Beste ${student},\n\n`, style: 'line' },
    { text: `Je hebt het project [beoordeling] gedaan, je krijgt van ons een ${status} status.\n\n`, style: 'line' }
  );

  // Positive and improvement points
  content.push(
    { text: 'Wat je goed hebt gedaan', style: 'subtitle' },
    { ul: positives, style: 'list' },
    { text: '\nWat beter kan',  style: 'subtitle' },
    { ul: improvements, style: 'list' }
  );

  // Optional remarks
  if (remarks) {
    content.push(
      { text: '\nPersoonlijke opmerking\n', style: 'subtitle' },
      { text: remarks, style: 'line' }
    );
  }

  content.push(
    { text: '\nMet vriendelijke groet,\n\n', style: 'line' },
    { text: 'Namens de Winc docenten,\n\n', style: 'line' },
    { text: reviewer },
  );

  pdfMake.createPdf({ content, styles }).download(name);
}

import { AnalyticsData } from "@/schemas/AnalyticsData";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Papa from "papaparse";

function triggerDownload(blob: Blob, fileName: string) {
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
}

export function downloadCsv(fileName: string, headers: string[], data: any[][]) {
  const csv = Papa.unparse({
    fields: headers,
    data: data,
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  triggerDownload(blob, `${fileName}.csv`);
}

export function downloadPdf(fileName: string, title: string, headers: string[], data: any[][]) {
  const doc = new jsPDF();

  doc.text(title, 14, 20);

  autoTable(doc, {
    head: [headers],
    body: data,
    startY: 30,
  });

  doc.save(`${fileName}.pdf`);
}


export function transformDataForExport(analyticsData: AnalyticsData, t: (key: string) => string) {
  const headers = [
    t('analytics.category'),
    t('analytics.analysis'),
    t('analytics.item'),
    t('analytics.value_count')
  ];
  const rows: (string | number)[][] = [];

  for (const [categoryKey, insights] of Object.entries(analyticsData)) {
    const categoryName = t(`analytics.categories.${categoryKey}`) || categoryKey;

    if (insights && typeof insights === 'object') {
      for (const [insightTitle, insightData] of Object.entries(insights)) {
        const analysisName = t(`analytics.analyses.${insightTitle}`) || insightTitle;

        if (insightTitle === 'documentation' && typeof insightData === 'object' && insightData) {
          for (const [docTitle, docData] of Object.entries(insightData)) {
            const docAnalysisName = t(`analytics.analyses.${docTitle}`) || docTitle;
            if (docData && typeof docData === 'object') {
              for (const [key, value] of Object.entries(docData)) {
                rows.push([categoryName, docAnalysisName, key, value as string | number]);
              }
            }
          }
        } else if (insightData && typeof insightData === 'object' && !Array.isArray(insightData)) {
          for (const [key, value] of Object.entries(insightData)) {
            rows.push([categoryName, analysisName, key, value as string | number]);
          }
        }
      }
    }
  }

  return { headers, rows };
}
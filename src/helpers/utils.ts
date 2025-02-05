import Papa from "papaparse";
import * as XLSX from "xlsx";

export const importCSV = (file: File, spreadsheet: any) => {
  Papa.parse(file, {
    complete: (results) => {
      console.log('Imported CSV data:', results.data);
      spreadsheet?.setData(results.data);
    }
  });
};

export const importXLSX = (file: File, spreadsheet: any) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const bstr = event.target?.result;
    const wb = XLSX.read(bstr, { type: 'binary' });
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
    console.log('Imported XLSX data:', data);
    spreadsheet?.setData(data);
  };
  reader.readAsBinaryString(file);
};
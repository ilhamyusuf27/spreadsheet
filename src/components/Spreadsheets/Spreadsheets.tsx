import React, { useRef, useEffect, useState } from "react";
import jspreadsheet from "jspreadsheet-ce";
import "jspreadsheet-ce/dist/jexcel.css";
import { spreadsheetOptions } from './config';
import { containerStyle, buttonStyle } from './styles';
import FormulaGuide from "../FormulaGuide/FormulaGuide";
import { importCSV, importXLSX } from "../../helpers/utils";

const Spreadsheet = () => {
  const jRef = useRef<any>(null);
  const [spreadsheet, setSpreadsheet] = useState<any>(null);

  useEffect(() => {
    if (jRef.current && !jRef.current.jspreadsheet) {
      const instance = jspreadsheet(jRef.current, spreadsheetOptions(spreadsheet));
      setSpreadsheet(instance);
    }
  }, []);

  const addRow = () => {
    if (spreadsheet) {
      spreadsheet.insertRow();
    }
  };

  const addColumn = () => {
    if (spreadsheet) {
      spreadsheet.insertColumn();
    }
  };


  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (fileExtension === "csv") {
        importCSV(file, spreadsheet);
      } else if (fileExtension === "xlsx" || fileExtension === "xls") {
        importXLSX(file, spreadsheet);
      }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileUpload}
          style={{ marginBottom: '10px' }}
        />
        <FormulaGuide />
      </div>
      <div>
        <button
          onClick={addRow}
          style={buttonStyle}
        >
          Add new row
        </button>
        <button
          onClick={addColumn}
          style={buttonStyle}
        >
          Add new Column
        </button>
      </div>
      <div ref={jRef} />
      <br />
    </div>
  );
};

export default Spreadsheet;
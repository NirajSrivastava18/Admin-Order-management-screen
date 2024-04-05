import React from 'react';
import './Topbar.css';
import exportBtn from '../assets/images/_Switch_.svg';
import pdfexport from '../assets/images/_Switch_ (1).svg';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface TopbarProps {
  tableRef: React.RefObject<HTMLTableElement>;
  fileName: string;
}

const Topbar: React.FC<TopbarProps> = ({ tableRef, fileName }) => {
  const exportToExcel = () => {
    if (!tableRef.current) {
      console.error('Table ref is not defined');
      return;
    }

    const worksheet = XLSX.utils.table_to_sheet(
      tableRef.current as HTMLTableElement
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, fileName);
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };
  const saveAsPdf = () => {
    if (!tableRef.current) {
      console.error('Table ref is not defined');
      return;
    }

    html2canvas(tableRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 15, 15, 180, 180);
      pdf.save(`${fileName}.pdf`);
    });
  };

  return (
    <div className="top-bar">
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="right-items">
        <button onClick={exportToExcel} className="icon">
          <img src={exportBtn} />
        </button>
        <button className="icon" onClick={saveAsPdf}>
          <img src={pdfexport} />
        </button>
      </div>
    </div>
  );
};

export default Topbar;

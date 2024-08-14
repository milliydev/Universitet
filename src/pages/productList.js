import React, { useState } from 'react';
import jsPDF from 'jspdf';

import html2canvas from 'html2canvas';
import '../style/productList.css';

function CertificateGenerator() {
  const [courseName, setCourseName] = useState('');

  const handleGeneratePDF = () => {
    const input = document.getElementById('certificate-content');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save(`${courseName}_certificate.pdf`);
    });
  };

  const handleInputChange = (e) => {
    setCourseName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleGeneratePDF();
    }
  };

  return ( 

    <div className='productList-container'>
    <div className="certificate-generator">
      <input
        type="text"
        placeholder="Kurs nomini kiriting"
        value={courseName}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="course-input"
      />
      <div id="certificate-content" className="certificate">
        <h1 className="certificate-title">Sertifikat</h1>
        <p className="certificate-text">Ushbu sertifikat</p>
        <h2 className="course-name">{courseName}</h2>
        <p className="certificate-text">kursini muvaffaqiyatli tamomlaganligi uchun taqdim etiladi.</p>
      </div>
    </div>
    </div>
  );
}

export default CertificateGenerator;

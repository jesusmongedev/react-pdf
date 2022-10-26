import React from 'react';
import './style.css';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Document
        file="https://prod-assignments.s3.ap-south-1.amazonaws.com/student/mgmt11learn156/23558/1633438144000.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        className="pdf-document"
      >
        <Page pageNumber={pageNumber} />
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            className="pdf-page"
            pageNumber={index + 1}
            width="200"
          />
        ))}
      </Document>
      <p></p>
    </div>
  );
}

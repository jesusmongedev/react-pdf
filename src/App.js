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

  const NextPage = () =>
    setPageNumber((prevPage) => (prevPage === numPages ? 1 : prevPage + 1));

  return (
    <div>
      <Document
        file="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f0840bed-35e1-4028-b454-d5968a06a825/Prueba_Tcnica_Practica.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221027T002303Z&X-Amz-Expires=86400&X-Amz-Signature=b3f6110a7a1fcda69f82eb972f45830c642b8bf239b38689555eba2c0b50499a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Prueba%2520T%25C3%25A9cnica%2520Practica.pdf%22&x-id=GetObject"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        className="pdf-document"
      >
        <Page pageNumber={pageNumber} />
        {/* {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            className="pdf-page"
            pageNumber={index + 1}
            width="200"
          />
        ))} */}
      </Document>
      <button onClick={NextPage}>NextPage</button>
    </div>
  );
}

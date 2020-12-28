import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/AnnotationLayer'

import '../assets/scss/components/_resumecannabis.scss'
import cannabisResumeFile from '../images/Ashton_S_Hellwig_Resume_Cannabis.pdf'

const options = {
    cMapsUrl: 'cmaps/',
    cMapPacked: false
}

export default function ResumeCannabis() {
  const [file, setFile] = useState(
    cannabisResumeFile
  )
  const [numPages, setNumPages] = useState(null)

  function onFileChange(event) {
    setFile(file)
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
  }

  return (
    <div className="ResumeCannabis">
      <div className="ResumeCannabis__container">
        <div className="Example__container__document">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  )
}

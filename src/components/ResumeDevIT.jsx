// Copyright (C) 2024 Ash Hellwig
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer'

import '../assets/scss/components/_resumedevit.scss'
import devITResumeFile from '../assets/pdf/Ashton_S_Hellwig_Resume_Cloud.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const options = {
  cMapsUrl: 'cmaps/',
  cMapPacked: false
}

export default function ResumeDevIT() {
  const [file] = useState(devITResumeFile)
  const [numPages, setNumPages] = useState(null)

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
  }

  return (
    <div className="ResumeDevIT">
      <div className="ResumeDevIT__container">
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

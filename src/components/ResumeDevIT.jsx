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

import React, { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import '../assets/scss/components/_resumedevit.scss'
import devITResumeFile from '../assets/pdf/Ashton_S_Hellwig_Resume.pdf'

// Bundle the pdf.js worker with the site instead of pulling it from a CDN.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

export default function ResumeDevIT() {
  const [file] = useState(devITResumeFile)
  const [numPages, setNumPages] = useState(null)
  const containerRef = useRef(null)
  const [pageWidth, setPageWidth] = useState(null)

  // Render pages at the container's width so the PDF never overflows the
  // article on narrow viewports.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return undefined
    const update = () => {
      // .react-pdf__Page carries 1em of margin on each side (see SCSS).
      const em = parseFloat(window.getComputedStyle(el).fontSize) || 16
      setPageWidth(
        Math.max(100, Math.floor(el.getBoundingClientRect().width - 2 * em))
      )
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
  }

  return (
    <div className="ResumeDevIT">
      <div className="ResumeDevIT__container">
        <div className="Example__container__document" ref={containerRef}>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {pageWidth &&
              Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={pageWidth}
                />
              ))}
          </Document>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import type { PDFDocumentProxy } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

interface MenuPDFProps {
  pdfPath?: string;
  width?: number;
}

export default function MenuPDF({
  pdfPath = "/menu/menu.pdf",
  width = 1000,
}: MenuPDFProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy): void {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error): void {
    console.error("❌ Błąd ładowania PDF:", error);
    setError(`Błąd: ${error.message}`);
    setLoading(false);
  }

  function changePage(offset: number): void {
    setPageNumber((prev) => prev + offset);
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto h-[1000px]">
        <div className="flex-col text-center h-[200px]">
          <h1 className="text-red-700 font-bold text-4xl">
            Bład ładowania Menu
          </h1>
          <div>
            <a
              href={pdfPath}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-all duration-200 shadow-md mt-10"
            >
              📄 Otwórz PDF bezpośrednio
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[1000px] mx-auto">
      {loading && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-12 text-center">
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="animate-spin inline-block w-12 h-12 border-4 border-gray-200 border-t-black rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-gray-600 text-lg font-medium">
              Ładowanie menu...
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={
            <div className="text-center py-16">
              <div className="animate-pulse">
                <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-96 w-full mb-6 rounded-lg"></div>
                <div className="bg-gray-200 h-4 w-48 mx-auto rounded"></div>
                <div className="bg-gray-200 h-3 w-32 mx-auto rounded mt-2"></div>
              </div>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            width={width}
            className="mx-auto"
            loading={
              <div className="text-center py-12">
                <div className="animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-96 w-full rounded-lg"></div>
              </div>
            }
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {numPages && numPages > 1 && (
        <div className="mt-8 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <button
              disabled={pageNumber <= 1}
              onClick={() => changePage(-1)}
              className="flex items-center gap-3 px-6 py-3 bg-black text-white disabled:bg-gray-300 disabled:text-gray-500 hover:bg-gray-800 disabled:hover:bg-gray-300 transition-all duration-200 rounded-lg font-medium shadow-md hover:shadow-lg disabled:shadow-none"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Poprzednia
            </button>

            <div className="flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
              <span className="text-gray-600 font-medium">Strona</span>
              <select
                value={pageNumber}
                onChange={(e) => setPageNumber(Number(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm bg-white shadow-sm focus:ring-2 focus:ring-black focus:border-black transition-all duration-200"
              >
                {Array.from({ length: numPages }, (_, i) => i + 1).map(
                  (page) => (
                    <option key={page} value={page}>
                      {page}
                    </option>
                  )
                )}
              </select>
              <span className="text-gray-600 font-medium">z {numPages}</span>
            </div>

            <button
              disabled={pageNumber >= numPages}
              onClick={() => changePage(1)}
              className="flex items-center gap-3 px-6 py-3 bg-black text-white disabled:bg-gray-300 disabled:text-gray-500 hover:bg-gray-800 disabled:hover:bg-gray-300 transition-all duration-200 rounded-lg font-medium shadow-md hover:shadow-lg disabled:shadow-none"
            >
              Następna
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-4 bg-white rounded-xl shadow-lg border border-gray-100 p-2">
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-all duration-200 font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Otwórz w nowej karcie
          </a>
          <a
            href={pdfPath}
            download="Menu_SAND_Bistro.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Pobierz menu
          </a>
        </div>
      </div>
    </div>
  );
}

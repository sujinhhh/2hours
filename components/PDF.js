import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";

const MyDoc = () => (
  <Document>
    <Page>my pdf</Page>
  </Document>
);

const Pdf = () => (
  <div>
    <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  </div>
);

import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

const ResumeViewer: React.FC = () => {
  const navigate = useNavigate();
  const resumePdfUrl = "/resume/ARTUGUE-RESUME.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdfUrl;
    link.download = "ARTUGUE-RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(resumePdfUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-accent via-dark-accent/90 to-primary/20">
      {/* Header */}
      <header className="bg-dark-accent/80 backdrop-blur-sm border-b border-primary/30 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center space-x-2 text-primary hover:text-soft-highlight transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Portfolio</span>
            </button>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleOpenInNewTab}
                className="flex items-center space-x-2 bg-primary/20 hover:bg-primary/30 text-white px-4 py-2 rounded-lg transition-all duration-300 border border-primary/30"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Open in New Tab</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* PDF Viewer */}
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <iframe
            src={`${resumePdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
            className="w-full h-[calc(100vh-12rem)]"
            title="Resume PDF Viewer"
            style={{ border: "none" }}
          >
            <p className="p-8 text-center">
              Your browser does not support PDF viewing.{" "}
              <button
                onClick={handleDownload}
                className="text-primary hover:underline"
              >
                Click here to download the PDF
              </button>
              .
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;

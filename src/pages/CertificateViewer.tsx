import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Award } from "lucide-react";
import { certificates } from "../data/certificateData";
import { certifications } from "../data/certificationsData";

const CertificateViewer: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Combine both data sources
  const allCertificates = [...certificates, ...certifications];

  const certificate = allCertificates.find((cert) => cert.id === id);

  if (!certificate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-accent via-dark-accent/90 to-primary/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Credential Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg transition-all duration-300"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const handleOpenInNewTab = () => {
    window.open(certificate.certificateLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-accent via-dark-accent/90 to-primary/20">
      {/* Header */}
      <header className="bg-dark-accent/80 backdrop-blur-sm border-b border-primary/30 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/#certifications")}
              className="flex items-center space-x-2 text-primary hover:text-soft-highlight transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Credentials</span>
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

      {/* Certificate Details & Viewer */}
      <div className="container mx-auto px-6 py-8">
        {/* Certificate Info Card */}
        <div className="bg-gradient-to-r from-primary/20 to-soft-highlight/20 backdrop-blur-sm border border-primary/30 rounded-lg p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="bg-primary p-3 rounded-lg">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                {certificate.title}
              </h1>
              <div className="space-y-1 text-gray-300">
                <p>
                  <span className="font-semibold text-soft-highlight">
                    Issuer:
                  </span>{" "}
                  {certificate.issuer}
                </p>
                <p>
                  <span className="font-semibold text-soft-highlight">
                    Date:
                  </span>{" "}
                  {certificate.date}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="bg-primary/30 text-soft-highlight border border-soft-highlight/50 px-3 py-1 rounded-full text-sm font-medium">
                    {certificate.category}
                  </span>
                  {certificate.type === "certification" &&
                    (certificate as any).verificationLink && (
                      <a
                        href={(certificate as any).verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-soft-highlight hover:text-primary transition-colors duration-200 text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Verify Certification</span>
                      </a>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Image Viewer */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="relative bg-gray-100 flex items-center justify-center p-4">
            <img
              src={certificate.certificateLink}
              alt={certificate.title}
              className="max-w-full h-auto rounded shadow-lg"
              style={{ maxHeight: "calc(100vh - 20rem)" }}
            />
          </div>
        </div>

        {/* Navigation to Other Certificates */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/#certifications")}
            className="text-soft-highlight hover:text-primary transition-colors duration-300 font-medium"
          >
            ← View All Credentials
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;

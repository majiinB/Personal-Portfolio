import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ResumeViewer from "./pages/ResumeViewer";
import CertificateViewer from "./pages/CertificateViewer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/resume" element={<ResumeViewer />} />
          <Route path="/certificate/:id" element={<CertificateViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

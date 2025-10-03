import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import StandaloneLayout from "./layouts/StandaloneLayout";
import FichaProp from "./pages/fichaProp";
import ContactForm from "./pages/contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-color-white">
      <Router basename="/react-template-project-rs">
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>}/>
          <Route path="/contact" element={<MainLayout><ContactForm /></MainLayout>}/>
          <Route path="/fichaProp/:id" element={<StandaloneLayout><FichaProp /></StandaloneLayout>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/home";
import StudentsPage from "./pages/students/students";
import AboutUsPage from "./pages/about us/about_us";
import AdmissionsPage from "./pages/admissions/admissions";
import FacultyPage from "./pages/faculty/faculty";
import ContactUsPage from "./pages/contact us/contact_us";
import GalleryPage from "./pages/gallery/gallery";
import AcademicsPage from "./pages/academics/academics";
import Navbar from "./components/navbar";
import GalleryView from "./pages/gallery_view/gallery_view";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/academics" element={<AcademicsPage />}></Route>
          <Route path="/admissions" element={<AdmissionsPage/>}></Route>
          <Route path="/students" element={<StudentsPage />}></Route>
          <Route path="/faculty" element={<FacultyPage />}></Route>
          <Route path="/gallery" element={<GalleryPage />}></Route>
          <Route path="/about" element={<AboutUsPage />}></Route>
          <Route path="/contact" element={<ContactUsPage />}></Route>
          <Route path="/gallery_view" element={<GalleryView />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

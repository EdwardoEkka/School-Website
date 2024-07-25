import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import { navselect } from "./store/actions/navActions";

const AppRoutes = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const pathMap = {
      '/': 1,
      '/academics': 3,
      '/admissions': 2,
      '/students': 5,
      '/faculty': 4,
      '/gallery': 6,
      '/about': 8,
      '/contact': 7,
      '/gallery_view': 6,
    };

    const selectedNavId = pathMap[location.pathname] || 1;
    console.log(selectedNavId);
    dispatch(navselect(selectedNavId));
  }, [location.pathname, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/academics" element={<AcademicsPage />} />
      <Route path="/admissions" element={<AdmissionsPage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/faculty" element={<FacultyPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/gallery_view" element={<GalleryView />} />
    </Routes>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

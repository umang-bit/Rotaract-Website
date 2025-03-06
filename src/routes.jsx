import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import GalleryPage from "./pages/GalleryPage";
import EventsPage from "./pages/EventsPage";
import OurTeamPage from "./pages/OurTeamPage";
import ContactUsPage from "./pages/ContactUsPage";
import Layout from "./layout/Layout";

function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRoutes;


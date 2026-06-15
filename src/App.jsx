import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import SolutionSingle from "./pages/SolutionSingle";
import Products from "./pages/Products";
import ProductSingle from "./pages/ProductSingle";
import Brands from "./pages/Brands";
import BrandSingle from "./pages/BrandSingle";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import useScrollToTop from "./hooks/useScrollToTop";

function AppRoutes() {
  useScrollToTop();

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:slug" element={<SolutionSingle />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductSingle />} />

        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:slug" element={<BrandSingle />} />

        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
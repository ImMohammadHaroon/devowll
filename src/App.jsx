import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import ScrollToTop from './components/common/ScrollToTop';
import About from './pages/About';
import Article from './pages/Article';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import InsightsPage from './pages/Insights';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';
import PricingPage from './pages/PricingPage';
import Project from './pages/Project';
import Services from './pages/Services';
import Work from './pages/Work';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<Article />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

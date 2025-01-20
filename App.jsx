import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './components/navbar/Navbar';
import theme from './theme';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Footer from './components/footer/footer';
import Blog from './pages/Blog';
import Offer from './pages/Offer';
import Contact from './pages/Contact';

// Dodajemy scroll-to-top funkcjonalność
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;

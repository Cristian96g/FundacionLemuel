// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Activities from './pages/Activities';
import DetailPage from './pages/DetailPage';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Importa ScrollToTop

/**
 * Componente principal de la aplicación.
 * Incluye el enrutador y los componentes de encabezado, pie de página y rutas.
 *
 * @returns {JSX.Element} El componente renderizado.
 */
function App() {
  return (
    <div className='min-h-full'>
      <BrowserRouter>
        <ScrollToTop /> {/* Utiliza ScrollToTop para manejar el desplazamiento */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/details/:id' element={<DetailPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

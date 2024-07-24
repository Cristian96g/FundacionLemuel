import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Activities from './pages/Activities';
import DetailPage from './pages/DetailPage';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-full'>
      <BrowserRouter>
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

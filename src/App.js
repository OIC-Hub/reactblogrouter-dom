 import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Home from './components/pages/Index';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/services' element={ <Services />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
      <Footer />
      </div>
      </BrowserRouter>
  )
}

export default App
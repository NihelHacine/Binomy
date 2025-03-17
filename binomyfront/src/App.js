import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarr from './Components/Navbarr';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Pubs from './Components/Pubs';
import Register from './Components/Register';
import Footer from './Components/Footer';


function App() {
  return (
   <>
   <Navbarr/> 
   <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="about" element={ <About/>} />
    <Route path="contact" element={ <Contact/>} />
    <Route path="actualites" element={ <Pubs/>} />
    <Route path="register" element={ <Register/>} />
   </Routes>
   <Footer/>
   </>
  );
}

export default App;

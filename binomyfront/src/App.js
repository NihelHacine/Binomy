import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarr from './Components/Navbarr';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Pubs from './Components/Pubs';
import Register from './Components/Register';
import Footer from './Components/Footer';
import UserProfile from './Components/UserProfile';
import PrivateRoute from './Components/route/PrivateRoute';
import Signin from './Components/Signin';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getusers } from './Components/redux/usersSlice';
import { userCurrent } from './Components/redux/userSlice';



function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(getusers());
    dispatch(userCurrent());
  }, [ping])
  return (
   <>
   <Navbarr/> 
   <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="about" element={ <About/>} />
    <Route path="contact" element={ <Contact/>} />
    <Route path="actualites" element={ <Pubs/>} />
    <Route path="register" element={ <Register/>} />
    <Route path="signin" element={ <Signin/>} />
    <Route path="profile" element={ <PrivateRoute><UserProfile/></PrivateRoute>} />
   </Routes>
   <Footer/>
   </>
  );
}

export default App;

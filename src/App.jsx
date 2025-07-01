import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
import Error from './pages/Error';
import ScrollTop from './components/ScrollTop';
import './App.css';
import Funding from './pages/Funding';



function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollTop/>
         <Routes>
            <Route path = '/auth/signup' element = {<SignUp/>}/>
            <Route path = '/auth/signin' element = {<SignIn/>}/>
            <Route path = '*' element = {<Error/>}/>
            <Route path = '/applyfunding' element = {<Funding/>}/>
            <Route element = {<Nav/>}>
              <Route path = '/' element = {<Home/>}/>
              <Route path = '/aboutus' element = {<AboutUs/>}/>
              <Route path = '/ourwork' element = {<OurWork/>}/>
              <Route path = '/contactus' element = {<ContactUs/>}/>
            </Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

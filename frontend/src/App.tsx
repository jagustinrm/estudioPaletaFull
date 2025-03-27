
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import LandingPage from "./components/LandingPage";
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import "./styles/global.css";
import NavBar from "./components/NavBar";
import Whatsapp from "./components/Whatsapp";
function App() {
 

  return (
    <BrowserRouter>
      <NavBar /> 
      <Whatsapp/>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        
        {/* <Route path="/product/:id" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App

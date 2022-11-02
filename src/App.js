import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";


function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <SocialLinks/>
    <AboutUs/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    {/* <h1 className='text-4xl font-bold font-signature'>shubham</h1> */}
   </div>
  );
}

export default App;

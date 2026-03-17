import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Your component imports
import Navbar from './Nav.jsx';
import Hero from './Hero.jsx';
import About from './about.jsx';
import Skills from './skills.jsx';
import Project from './project.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Certificate from './Certificate.jsx';

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,   // Increase to 1000ms for a more elegant feel
      easing: "ease-out-back", // Adds a slight "bounce" effect at the end
      once: false,      // Set to false if you want it to animate every time you scroll up/down
      mirror: true,     // Animates elements out while scrolling past them
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* Pass handleOrderPopup to Navbar if your 'Order' button is there */}
      <Navbar handleOrderPopup={handleOrderPopup} />
      
      <Hero handleOrderPopup={handleOrderPopup} />
      <About />
      <Skills />
      <Project />
      <Certificate />
      {/* <Contact /> */}
      <Footer />
      
      {/* If you have a Popup component, you would render it here conditionally */}
      {/* <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
    </div>
  );
}

export default App;
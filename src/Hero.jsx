
import React from 'react';

import GitHubIcon from './assets/icons8-github-logo-24.png';
import SplitText from "./SplitText";
import { useState, useEffect } from 'react';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
const Hero = () => {
  const words = ["FullStack Developer" , "Frontend Developer" , "Backend Developer" , "MERN Stack Developer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);
  return (
   // Hero.jsx
<section 
  className="min-h-[75vh]  bg-black text-white text-left py-[120px] px-6 md:py-[140px] md:px-[50px]" 
  id="hero"
>
  <SplitText
        text="Hello, I'm Aryan Yadav"
        className="text-xl md:text-2xl font-bold text-white mb-2"
        delay={60}
        animationFrom={{ opacity: 0, y: 20 }}
        animationTo={{ opacity: 1, y: 0 }}
        easing="power3.out"
      />
  
  
 <h1 className="text-2xl md:text-4xl mt-2 font-extrabold leading-tight">
  <span className="text-blue-600 min-h-[1em]">
    I am a {`${words[index].substring(0, subIndex)}`}
    <span className="animate-pulse font-light">_</span>
  </span>
</h1>
 
          <a href="/My_Resume.pdf" download="My_Resume1.docx">
            <button className="px-7 py-3.5 mt-4 text-base rounded cursor-pointer text-white bg-blue-500 transition duration-300 ease-in-out hover:rotate-2 hover:scale-110 block">
              Download Resume
            </button>
          </a>
        
  
  
  <div className='flex mt-5 gap-4'>
   <a href="https://linkedin.com/in/aryan-yadav-1937522b4" target="_blank" rel="noreferrer">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    className="w-8 h-8 md:w-10 md:h-10" // This keeps your original sizing
  >
    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
    <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
  </svg>
</a>
    <a href="https://github.com/aryanyadav-cr" target="_blank" rel="noopener noreferrer">
      <img src={GitHubIcon} alt="GitHub" className="w-8 h-8 md:w-10 md:h-10" />
    </a>
  </div>
</section>
  );
};

export default Hero;
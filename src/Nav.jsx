import { useState } from "react";

export default function Nav() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <nav className="bg-gradient-to-r from-transparent to-transparent flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full z-20 shadow-md">
            <h1 className="font-bold text-white text-xl">Aryan yadav</h1>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white text-2xl">
                {isMenuOpen ? '✕' : '☰'}
            </button>
            {/* Hidden on small screens, flex on medium (768px) and up */}
            <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static text-white top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-6 md:p-0 gap-6 transition-all`}>
                <li ><a href="#hero" onClick={() => setIsMenuOpen(false)} >Home</a></li>
                <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                <li><a href="#Certificates" onClick={() => setIsMenuOpen(false)}>Certificates</a></li>
                <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>

            
        </nav>
    );
}

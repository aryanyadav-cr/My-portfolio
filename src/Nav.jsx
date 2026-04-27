
import { useState } from "react";

export default function Nav() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
    <div className=" justify-center items-center flex h-16 bg-black" > 
        <nav className=" rounded-xl mt-2 flex items-center justify-center px-6 py-4 fixed top-0 left-1/2 -translate-x-1/2 w-1/2 z-20 shadow-md">
           
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white text-2xl">
                {isMenuOpen ? '✕' : '☰'}
            </button>
           
           <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-6 md:p-0 gap-6 transition-all`}>
                <li><a href="#hero" onClick={() => setIsMenuOpen(false)} className="text-sky-500 hover:text-sky-700 transition duration-300 cursor-pointer" >Home</a></li>
                <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="text-sky-500 hover:text-sky-700 transition duration-300 cursor-pointer" >About</a></li>
                <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-sky-500 hover:text-sky-700 transition duration-300 cursor-pointer" >Skills</a></li>
                <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-sky-500 hover:text-sky-700 transition duration-300 cursor-pointer" >Projects</a></li>
                <li><a href="#Certificates" onClick={() => setIsMenuOpen(false)} className="text-sky-500 hover:text-sky-700 transition duration-300 cursor-pointer" >Certificates</a></li>
                <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-sky-500 hover:text-sky-700 transition duration-300 cursor-pointer" >Contact</a></li>
            </ul>

            
        </nav>
    </div>
    );
}

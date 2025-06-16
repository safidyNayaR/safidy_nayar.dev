import { useState } from "react";
import { Link } from "react-scroll"

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return(
        <section className="p-2 w-full bg-neutral-900/95 fixed top-0 z-100 shadow-xl/30 max-sm:fixed max-sm:top-0">
            <div className="flex justify-evenly items-center place-items-start px-25 max-md:px-5">
                <div className="w-35 flex-1 hover:animate-pulse">
                    <div className="flex items-center">
                        <img src="dev.png" alt="Logo" className="max-w-10" />
                        <a href="#">
                            <span className="px-5 text-yellow-400 text-2xl font-bold font-Space link-underline">
                                <Link to="hero" smooth={true} duration={500}>NayaR</Link>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="w-65 flex-1 text-yellow-200 font-Inter">                    
                    <ul className="flex justify-between text-stone-400 max-lg:hidden">
                        <li class="link-underline">
                            <Link to="hero" smooth={true} duration={800}>Acceuil</Link>
                        </li>
                        <li class="link-underline">
                            <Link to="a_propos" smooth={true} duration={800}>A Propos</Link>
                        </li>
                        <li class="link-underline">
                            <Link to="competences" smooth={true} duration={800}>Compétences</Link>
                        </li>
                        <li class="link-underline">
                            <Link to="projets" smooth={true} duration={800}>Projets</Link>
                        </li>
                        <li class="link-underline">
                            <Link to="contacts" smooth={true} duration={800}>Contacts</Link>
                        </li>
                    </ul>
                    <div onClick={toggleMenu} className="lg:hidden max-lg:absolute max-lg:right-8 max-lg:bottom-3.5">
                        <img src="menu.png" alt="Barre de Menu" className="w-8 h-8" />
                    </div>
                </div>
            </div>
            {menuOpen && (
                <ul className="flex justify-between text-stone-400 flex-col absolute w-full bg-neutral-900/75 top-0 left-0 py-5 lg:hidden">
                    <li class="link-underline">
                        <Link to="hero" smooth={true} duration={800} onClick={toggleMenu} className="max-w">Acceuil</Link>
                    </li>
                    <li class="link-underline">
                        <Link to="a_propos" smooth={true} duration={800} onClick={toggleMenu}>A Propos</Link>
                    </li>
                    <li class="link-underline">
                        <Link to="competences" smooth={true} duration={800} onClick={toggleMenu}>Compétences</Link>
                    </li>
                    <li class="link-underline">
                        <Link to="projets" smooth={true} duration={800} onClick={toggleMenu}>Projets</Link>
                    </li>
                    <li class="link-underline">
                        <Link to="contacts" smooth={true} duration={800} onClick={toggleMenu}>Contacts</Link>
                    </li>
                </ul>
            )}
        </section>
    )
}
import { Link } from "react-scroll"

export default function Hero() {
    return (
        <section id="hero" className="text-white font-Courier px-30 pt-40 max-lg:px-10 max-md:px-5">
            <div className="flex items-start flex-col pb-15 max-md:pb-10">
                <div className="flex items-start flex-col pb-6 text-sky-400 animate-slide-down delay-1 max-md:pb-4">
                    <p className="text-2xl pb-2 font-bold max-md:text-xl max-md:pb-2">👋🏼 Salut, je suis</p>
                    <h2 className="text-4xl font-bold tracking-wide leading-relaxed max-md:text2xl">RAMANANTSOA Aina Safidy <span className="max-lg:hidden">(NayaR)</span></h2>
                </div>
                <div className="text-lg text-stone-300 animate-slide-down delay-2 max-md:text-base max-md:tracking-tight">
                    <p>Développeur Full-Stack Web & Desktop — Autonome, passionné et compétent.</p>
                    <p>Je transforme les idées en interfaces fonctionnelles et élégantes.</p>
                </div>
            </div>
            <div className="flex pb-15 max-sm:flex-col max-md:pb-10">
                <a href="./Aina_Safidy_RAMANANTSOA_CV.pdf" download="Aina_Safidy_RAMANANTSOA_CV" className="flex items-center gap-2 px-4 py-2 text-white rounded-xl border-2 border-sky-400 hover:bg-sky-400/5 animate-fade-in delay-3 hover:cursor-pointer max-md:mx-5 max-sm:max-w-max max-sm:mb-6">
                    Télécharger mon CV
                    <img src="download.png" className="h-5 w-5" />
                </a>
                <button className="px-4 py-2 text-white rounded-xl border-2 border-white mx-20 hover:bg-white/5 animate-fade-in delay-4 hover:cursor-pointer max-md:mx-5 max-sm:max-w-max">
                    <Link to="contacts" smooth={true} duration={800}>Me Contacter</Link>                    
                </button>
            </div>
            <div className="flex gap-2">
                <a href="https://github.com/safidyNayaR">
                    <img src="github.png" alt="github_logo" className="h-12 w-12 animate-fade-in delay-3" />
                </a>
                <a href="https://www.linkedin.com/in/safidy-nayar-095868332/">
                    <img src="linkedin.png" alt="linkedin_logo" className="h-12 w-12 animate-fade-in delay-4" />
                </a>
            </div>
            <div className="absolute right-30 bottom-50 animate-pulse delay-5 max-sm:hidden">
                <img src="image_1.jpg" alt="coding" className="rounded-full h-75 w-75 opacity-50 max-lg:opacity-25" />
            </div>
        </section>
    )
}
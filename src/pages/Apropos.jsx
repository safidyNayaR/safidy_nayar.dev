import Experience from "../components/experience"
import Titre from "../components/section"

export default function Apropos() {
    return (
        <section id="a_propos" className="flex flex-col items-center px-30 pt-25 font-Inter max-lg:px-10 max-md:px-4">
            <h2 className="text-3xl font-bold font-Courier tracking-wide max-w-max mb-4 max-md:tracking-normal">
                <Titre un="A Propos" deux="de NayaR" />               
            </h2>
            <div className="relative flex mb-6">
                <div className="text-stone-400 tracking-wider text-lg w-5/6 text-start border-3 hover:bg-white/2 px-8 py-10 rounded-2xl font-Inter mb-10 hover:cursor-text max-lg:w-full max-md:tracking-tight max-md:px-3 max-md:py-4 max-md:bg-white/2">
                    <p>
                        Je m'appelle <span className="text-white">RAMANANTSOA Aina Safidy</span>, 20 ans née le 06 mars 2005. Je suis un développeur informatique passionnée par les nouvelles téchnologies et la création de solutions innovantes.
                    </p>
                    <br />
                    <p>
                        Dans une société, j'ai pu évoluer et me familiariser avec différents langages de développement ainsi que de nombreux frameworks.
                    </p>
                    <br />
                    <p>
                        <span className="text-white">Je suis à la recherche active d’un stage ou d’un emploi</span> dans le domaine du support informatique ainsi qu’en développement Front-end ou Back-end. Débutant mais très polyvalent, je m’adapte rapidement aux environnements techniques et fonctionnels. Curieux de nature, j’apprends vite et suis constamment motivé à développer mes compétences pour relever de nouveaux défis.
                    </p>
                </div>
                <div className="max-lg:hidden">
                    <div className="absolute right-0 top-10 origin-top-left rotate-15">
                        <img src="inconnu.png" className="w-30 opacity-25" />
                    </div>
                    <div className="absolute right-0 top-40 origin-top-left rotate-12 animate-bounce delay-all">
                        <img src="inconnu.png" className="w-30 opacity-25" />
                    </div>
                    <div className="absolute right-0 top-60 origin-top-left rotate-10">
                        <img src="inconnu.png" className="w-30 opacity-25" />
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-col">
                <h3 className="text-sky-300 text-2xl font-bold font-Courier tracking-wide max-w-max mb-8">
                    <Titre un="Expérience" deux="Proféssionnelle" />                     
                </h3>
                <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
                    <Experience 
                        delay="0.5"
                        stage="Développeur Full-Stack."
                        societe="Centre Hospitalier de Référence de District"
                        date="Juin - Août 2024"
                        tech="JavaScript | PHP | JQuery | MysQl | Docker">
                            Création d'une Application pour gérer la gestion du Pharmacie chez la CHRD.
                    </Experience>
                    <Experience 
                        delay="1"
                        stage="Développeur Back-end."
                        societe="Anonyme"
                        date="Novembre 2024 - Février 2025"
                        tech="Python | MySql | Git">
                            Coder, Assister et apporter des solutions efficaces aux encadreur.
                    </Experience>
                    <Experience 
                        delay="0.5"
                        stage="Développeur Front-end."
                        societe="Anonyme"
                        date="Avril 2025 - Maintenant"
                        tech="HTML | Css | React | TailwindCss">
                            Devéloppement d'applications Web basées sur l'interface utilisateur et l'expérience utilisateur (UI/UX)
                    </Experience>
                </div>
            </div>
        </section>
    )
}
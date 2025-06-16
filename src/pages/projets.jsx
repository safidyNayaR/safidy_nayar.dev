import Realisation from "../components/realisation"
import Titre from "../components/section"

export default function Projet() {
    return (
        <section id="projets" className="flex flex-col items-center px-20 pt-25 max-lg:px-10 max-md:px-4">
            <h1 className="text-3xl font-bold font-Courier tracking-wide max-w-max mb-2 max-md:tracking-normal">
                <Titre un="Mes" deux="Créations" />
            </h1>
            <p className="text-lg font-Courier self-center tracking-wide text-stone-300 mb-10 max-md:tracking-normal">La plus part des choses que j'ai construites jusqu'à présent</p>
            <div className="grid grid-cols-3 place-content-between w-full gap-10 mb-12 max-md:grid-cols-1">                
                <Realisation
                    delay="0.5"
                    image="CNTEMAD.png"
                    titre="Landing Page CNTEMAD"
                    tech="HTML | Css | TailwindCss | JavaScript"
                    src="https://github.com/safidyNayaR/LandingPage-CNTEMAD.git"
                >
                    Création du site en mettant l’accent sur l’optimisation de l’UI/UX.
                </Realisation>
                <Realisation
                    delay="0.8"
                    image="chrd.png"
                    titre="Gestion de la Pharmacie"
                    tech="JavaScript | PHP | MySql | JQuery"
                    src="#"
                >
                    Conception d’une application de gestion de pharmacie (projet confidentiel), développée dans le cadre de mon stage.
                </Realisation>
                <Realisation
                    delay="1.1"
                    image="mon_site.png"
                    titre="Mon Portfolio"
                    tech="React | TailwindCss"
                    src="#"
                >
                    Un portfolio web conçu pour valoriser mes compétences technologiques, mes projets réalisés et mon expérience professionnelle.
                </Realisation>
                <Realisation
                    delay="1.4"
                    image="student_registration.png"
                    titre="Student's Registration"
                    tech="Python | TKinter | MySql"
                    src="https://github.com/safidyNayaR/Student-Registrator-Tkinter.git"
                >
                    Conception d'une interface graphique (GUI) pour l'inscription des étudiants.
                </Realisation>
                <Realisation
                    delay="1.7"
                    image="car_accessoirs.png"
                    titre="Car Accessoirs"
                    tech="DJango | BootsTrap"
                    src="#"
                >
                    Création d’un site vitrine à partir d’une maquette conçue par une amie.
                </Realisation>
                <Realisation
                    delay="2"
                    image="carnet_adresse.png"
                    titre="Carnet d'Adresse"
                    tech="DJango | TailwindCss | MySql"
                    src="https://github.com/safidyNayaR/Carnet-d-Adresse.git"
                >
                    Projet CRM réalisé durant une formation Udemy, me permettant de maîtriser les bases de la programmation orientée objet
                </Realisation>
            </div>            

            <button className="text-xl text-white font-Courier rounded-3xl px-20 py-2 text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                <a href="https://github.com/safidyNayaR" target="_blank">Voir Plus <span className="go">⇉</span></a>
            </button>
        </section>
    )
}
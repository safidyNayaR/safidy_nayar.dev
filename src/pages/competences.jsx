import Tech_Diff from "../components/tech_diff"
import Titre from "../components/section";

export default function Competences() {
    const   front = ['HTML', 'JavaScript', 'React'],
            back = ['PHP', 'Python', 'DJango'],
            gui = ['Tkinter', 'PySide6'],
            base = ['Sql', 'MySql'],
            ui = ['Css-3', 'TailwindCss', 'BootsTrap'],
            devOps = ['Git', 'Docker'];


    return (
        <section id="competences" className="flex flex-col items-start px-20 pt-25 max-lg:px-10 max-md:px-4">
            <h1 className="text-3xl font-bold font-Courier tracking-wide max-w-max mb-2 self-center max-md:tracking-normal">
                <Titre un="Mes" deux="Compétences" />
            </h1>
            <p className="text-lg font-Courier self-center tracking-wide text-stone-300 mb-10 max-md:tracking-normal">Technologie avec lesquelles j'ai travaillé récement</p>
            <div className="grid grid-cols-2 place-content-between w-full gap-20 max-md:grid-cols-1 max-md:gap-10">
                <Tech_Diff items={front}>Développement Front-End</Tech_Diff>
                <Tech_Diff items={back}>Stack Back-End</Tech_Diff>
                <Tech_Diff items={gui}>Bibliothèque GUI</Tech_Diff>
                <Tech_Diff items={base}>Systèmes de Base de Données</Tech_Diff>
                <Tech_Diff items={ui}>Frameworks UI</Tech_Diff>
                <Tech_Diff items={devOps}>Outils DevOps</Tech_Diff>
            </div>
        </section>
    )
}
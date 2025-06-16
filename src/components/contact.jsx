export default function Contact({ image, type, lien, children }) {
    return (        
        <a href={lien}>
            <div className="flex items-center mb-6 hover:cursor-grab">
                <img src={ image } alt="e-mail" className="w-10 h-10 mr-6 opacity-75" />
                <p className="text-start">
                    <span className="text-lg font-bold"> { type } </span><br />
                    <a href={ lien } className="text-stone-300 text-sm"> { children } </a>
                </p>
            </div>
        </a>
    )
}
import { useEffect, useRef } from "react";

export default function Realisation({ image, titre, children, tech, src, delay }) {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            element.classList.add("animate-grow");
            element.classList.remove("opacity-0")
            
            observer.unobserve(element);
            }
        },
        {
            threshold: 0.1, 
        }
        );

        if (element) observer.observe(element);

        
        return () => {
        if (element) observer.unobserve(element);
        };
    }, []);


    const colors = [
        "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
        "bg-gradient-to-r from-sky-500 from-10% via-emerald-500 via-30% to-indigo-500 to-90%",
        "bg-gradient-to-r from-emerald-500 from-10% via-indigo-500 via-30% to-sky-500 to-90%"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];


    return (        
        <div ref={elementRef} class="relative bg-cover bg-center h-92 rounded-2xl hover:cursor-grab" style={{ backgroundImage: `url('/projet/${image}')`, animationDelay: `${delay}s`, opacity: 0 }}>
            <div class="absolute inset-0 bg-zinc-900/55 rounded-2xl"></div> 
            <div class="relative z-10 text-white p-5 w-full h-full">
                <div className="absolute bottom-6 text-start mr-4">
                    <h2 className="font-bold text-2xl font-Inter mb-3 border-b-2 max-w-max text-shadow-lg/40">
                        { titre } 
                    </h2>
                    <p className="mb-6 text-stone-300 font-Montserrat"> { children } </p>
                    <p className={`${randomColor} rounded-3xl pl-4 py-1 font-Inter mb-8 mx-2`}>
                        { tech } 
                    </p>
                    <button className={src=="#" ? "bg-gray-400 text-white cursor-not-allowed opacity-50 px-8 py-2 rounded-3xl" : "px-8 py-2 text-center rounded-3xl hover:cursor-pointer bg-linear-to-bl from-violet-500 to-fuchsia-500"}>
                        <a href={ src } target="_blank">Voir</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
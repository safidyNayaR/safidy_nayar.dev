import { useEffect, useRef } from "react";

export default function Experience({stage, societe, date, tech, delay, children}) {
    const elementRef = useRef(null);
    
    useEffect(() => {
        const element = elementRef.current;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            element.classList.add("animate-grow");
            element.classList.remove("opacity-0");
        
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

    const styles = "text-xl border-b-2 text-sky-400 font-Courier tracking-wide"


    return (
        <div ref={elementRef} className="flex flex-col justify-center h-auto border-2 rounded-2xl text-start p-6 text-stone-400 text-lg font-Inter hover:bg-white/4 hover:cursor-all-scroll max-md:bg-white/2 opacity-0" style={{ animationDelay: `${delay}s`, opacity: 0 }}>
            <h2>
                ◈ <span className={styles}>Stage</span> : 
                <span> { stage } </span>
            </h2> <br />
            <h3>
                △ <span className={styles}>Société</span> : 
                <span> { societe } </span>
            </h3> <br />
            <h3>
                ⇹ <span className={styles}>Période</span> : 
                <span> { date } </span>
                </h3>   <br />
            <h3>
                ◉ <span className={styles}>Description</span> : 
                <span> {children} </span>
            </h3> <br />
            <h3>
                🛠 <span className={styles}>Tech Stack</span> : 
                <span> { tech } </span>
            </h3><br />
        </div>
    )
}
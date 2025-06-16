import { useEffect, useRef } from "react";

export default function Technologie({ src, delay, children }) {
    const elementRef = useRef(null);
    
    useEffect(() => {
        const element = elementRef.current;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            element.classList.add("animate-slide-down", delay);
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

    const colors = [
        "bg-red-500",
        "bg-orange-500",
        "bg-amber-500",
        "bg-yellow-500",
        "bg-lime-500",
        "bg-green-500",
        "bg-emerald-500",
        "bg-teal-500"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div  ref={elementRef} className="flex flex-col justify-center items-center h-50 bg-white/5 rounded-2xl p-4 text-xl hover:bg-white/5 relative opacity-0">
            <div className="w-full h-full flex justify-center items-center z-50 hover:animate-ping hover:cursor-grab">
                <img src={src} alt="logo" className="w-15 pb-4" />
            </div>
            <h4 className={`${randomColor} text-white font-Montserrat absolute bottom-6 px-6 rounded-3xl max-md:tracking-tighter max-md:px-2 max-md:text-sm`}> { children } </h4>
        </div>
    )
}
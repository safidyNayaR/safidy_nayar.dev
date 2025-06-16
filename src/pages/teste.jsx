import { useEffect, useRef } from "react";

export default function Teste() {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("animate-slide-down");
          // Optionnel : arrêter l'observation après la première animation
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1, // L'élément est considéré "visible" à 10% dans le viewport
      }
    );

    if (element) observer.observe(element);

    // Cleanup
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="opacity-0 transition-opacity duration-1000"
    >
      Je sors de l'ombre 🎉
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TextCarousel = () => {
    const messages = [
        "BIENVENUE DANS LA BOUTIQUE OFFICIELLE DE SAINT MICHEL",
        "NOUVELLE COLLECTION: FAISEUR D'ARGENT",
        "TROUVEZ VOTRE STYLE DANS NOS VÊTEMENTS"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad durante la transición
    const intervalRef = useRef<NodeJS.Timeout | null>(null); // Referencia para el intervalo
    const startInterval = () => {
        // Limpiar el intervalo si ya existe
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        // Establecer un nuevo intervalo
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 3000);
    };
    const handleNext = () => {
        setIsVisible(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
            setIsVisible(true);
        }, 300); // Tiempo de la transición
        if (intervalRef.current) {
           startInterval()
       }
    };

    const handlePrevious = () => {
        setIsVisible(false);
       

        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
            setIsVisible(true);
        }, 300); // Tiempo de la transición
        if (intervalRef.current) {
            startInterval()
        }
    };
    useEffect(() => {
        // Iniciar el intervalo y almacenarlo en la referencia
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 3000);

        
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []); 

   


    return (
        <div className="flex w-screen items-center justify-center space-x-4 p-2 bg-white ">
            {/* Flecha izquierda */}
            <button
                onClick={handlePrevious}
                className="p-2 rounded-full transition-all"
            >
                <ChevronLeft className="w-6 h-6 text-black" />
            </button>

            {/* Mensaje actual con transición */}
            <p className={`text-sm font-bold text-gray-700 w-2/4 md:w-1/4 text-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {messages[currentIndex]}
            </p>

            {/* Flecha derecha */}
            <button
                onClick={handleNext}
                className="p-2 rounded-full transition-all"
            >
                <ChevronRight className="w-6 h-6 text-black" />
            </button>
        </div>
    );
};

export default TextCarousel;

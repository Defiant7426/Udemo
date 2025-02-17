import { useState, useEffect, useRef } from 'react';
import ChevronLeft from '../../../icons/ChevronLeft';

export default function DynamicBG() {
  const [activeSlide, setActiveSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef(0);
  const endX = useRef(0);

  const slides = [
    {
      image: 'fondo1.jpg',
      image_sm: 'fondo1-sm.jpg',
      title: 'Un aprendizaje interesante',
      content: 'Habilidades para tu presente (y tu futuro). Da tus primeros pasos con nosotros.',
      buttons: false
    },
    {
      image: 'fondo2.jpg',
      image_sm: 'fondo2-sm.jpg',
      title: 'Habilidades que te ayudan a avanzar',
      content: 'La tecnología y el mundo laboral evolucionan muy rápido, pero con nosotros, podrás mantener el ritmo. Consigue las habilidades que necesitas para lograr tus objetivos y garantizar la competitividad.',
      buttons: true
    }
  ];

  useEffect(() => {
    const nextSlide = () => {
      setActiveSlide(prev => (prev === 0 ? 1 : 0));
    };

    timeoutRef.current = setTimeout(nextSlide, 7000);
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeSlide]);

  const handleNext = () => {
    setActiveSlide(prev => (prev === 0 ? 1 : 0));
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handlePrev = () => {
    setActiveSlide(prev => (prev === 0 ? 1 : 0));
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      handleNext();
    } else if (endX.current - startX.current > 50) {
      handlePrev();
    }
  };

  return (
    <div
      className="relative lg:w-[90%] max-w-8xl mx-auto overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            {/* Contenedor principal de la imagen */}
            <div className="relative h-[50vh] lg:h-[400px] w-full">
              {/* Imagen de fondo */}
              <div
                className="absolute hidden sm:block inset-0 bg-cover bg-right sm:bg-center md:bg-cover lg:bg-right"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                }}
              />

              <div
                className="absolute block sm:hidden inset-0 bg-cover bg-right sm:bg-center md:bg-cover lg:bg-right"
                style={{ 
                  backgroundImage: `url(${slide.image_sm})`,
                }}
              />
              
              {/* Tarjeta para desktop */}
              <div className="hidden lg:block absolute left-15 top-15 h-full w-1/2 p-8">
                <div className="bg-white p-6 rounded-sm shadow-lg max-w-md">
                  <h2 className="text-4xl font-semibold mb-4">{slide.title}</h2>
                  <p className="text-gray-600 mb-4">{slide.content}</p>
                  {slide.buttons && (
                    <div className="flex gap-4">
                      <button className="hidden font-bold lg:inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-registro text-white hover:bg-purple-700">
                        Plan individual
                      </button>
                      <button className="font-bold lg:inline-flex items-center justify-center px-3 py-2.5 rounded-md border border-registro text-registro bg-white hover:bg-purple-50">
                        Plan para empresas
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tarjeta para mobile */}
            <div className="lg:hidden p-1 bg-white">
              <div className="bg-white rounded-lg px-6 py-3">
                <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                <p className="text-gray-600 mb-2 text-sm">{slide.content}</p>
                {slide.buttons && (
                  <div className="flex flex-col gap-3">
                    <button className="font-bold lg:inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-registro text-white hover:bg-purple-700">
                      Plan individual
                    </button>
                    <button className="font-bold lg:inline-flex items-center justify-center px-3 py-2.5 rounded-md border border-registro text-registro bg-white hover:bg-purple-50">
                      Plan para empresas
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas de navegación para desktop */}
      <div className="hidden lg:block">
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft className='w-5 text-iconos' stroke='3'/>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Siguiente slide"
        >
          <ChevronLeft className='w-5 text-iconos rotate-180' stroke='3'/>
        </button>
      </div>
    </div>
  );
}
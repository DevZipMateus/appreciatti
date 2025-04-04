
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Flame, Music } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);
  
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const slides = [
    {
      image: "/lovable-uploads/7976b302-d24d-406f-b1c8-a82c97713a9f.png",
      title: "PRIMEIRA COMPRA?",
      subtitle: "Te damos 10% off",
      alignment: "left"
    },
    {
      image: "/lovable-uploads/0b95ba42-a88d-4a59-a202-e30c2e01120e.png",
      title: "VELA 100% VEGETAL",
      subtitle: "Cruelty Free",
      description: "ESSÊNCIA PRÊMIUM\nPRODUTO VEGANO\nFEITO À MÃO",
      alignment: "right"
    }
  ];

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Carousel container */}
      <div className="absolute inset-0 z-0">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full w-full">
                  <img 
                    src={slide.image} 
                    alt={`Appreciatti - ${slide.title}`} 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className={`absolute inset-0 flex flex-col justify-center ${
                    slide.alignment === 'left' ? 'items-start pl-8 md:pl-16 lg:pl-24' : 'items-end pr-8 md:pr-16 lg:pr-24'
                  }`}>
                    <div className={`max-w-md text-${slide.alignment} text-white`}>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-2">{slide.title}</h2>
                      <p className="text-xl md:text-2xl mb-4">{slide.subtitle}</p>
                      {slide.description && (
                        <div className="text-lg md:text-xl whitespace-pre-line">
                          {slide.description}
                        </div>
                      )}
                      <p className="mt-8 text-sm">@APPRECIATTI</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
            <CarouselPrevious className="relative left-0 translate-y-0 bg-white/20 hover:bg-white/40 border-none" />
            <CarouselNext className="relative right-0 translate-y-0 bg-white/20 hover:bg-white/40 border-none" />
          </div>
        </Carousel>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-secondary/60 backdrop-blur-md rounded-full text-secondary-foreground font-medium mb-6 animate-slide-up [animation-delay:300ms]">
            Velas artesanais para momentos especiais
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms] drop-shadow-lg">
            Transforme momentos cotidianos em <span className="text-muted">rituais de bem-estar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:700ms] drop-shadow-md">
            Velas aromáticas artesanais que combinam sofisticação, design minimalista e fragrâncias exclusivas 
            para proporcionar uma experiência sensorial completa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:900ms] mb-16">
            <Button size="lg" className="rounded-md shadow-md transition-all duration-300 bg-muted hover:bg-muted/90 text-white">
              Conheça Nossas Coleções
            </Button>
            <Button size="lg" variant="secondary" className="quote-btn hover:border-primary hover:bg-secondary/70 group rounded-md shadow-md transition-all duration-300 flex gap-2 text-primary">
              <Music size={20} className="group-hover:animate-pulse" />
              <span>Playlists para Relaxar</span>
            </Button>
          </div>

          <div className="text-white/80 animate-slide-up [animation-delay:1100ms]">
            <p className="text-sm italic drop-shadow-md">Acenda. Inspire-se. Conecte-se.</p>
          </div>
        </div>
      </div>

      {/* Scroll down indicator - Adjusted to be lower */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce z-20" onClick={scrollToNextSection}>
        <ChevronDown size={32} className="drop-shadow-md" />
      </div>
    </section>
  );
};

export default HeroSection;

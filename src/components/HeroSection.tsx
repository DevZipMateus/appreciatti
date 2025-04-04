import { useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Flame, Music } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1
  });
  
  const [emblaMobileRef, emblaMobileApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1
  });
  
  const autoplay = useCallback((api, intervalTime = 5000) => {
    let scrolling = true;
    let intervalId: NodeJS.Timeout | null = null;

    const scroll = () => {
      if (!scrolling) return;
      api?.scrollNext({ animation: { duration: 2000 } });
    };

    const play = () => {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(scroll, intervalTime);
    };

    const onSelect = () => {
      play();
    };

    api?.on('select', onSelect);
    play();

    return () => {
      scrolling = false;
      if (intervalId) clearInterval(intervalId);
      api?.off('select', onSelect);
    };
  }, []);

  useEffect(() => {
    if (emblaApi) {
      const stopAutoplay = autoplay(emblaApi, 5000);
      return () => {
        stopAutoplay();
      };
    }
  }, [emblaApi, autoplay]);

  useEffect(() => {
    if (emblaMobileApi) {
      const stopAutoplay = autoplay(emblaMobileApi, 5000);
      return () => {
        stopAutoplay();
      };
    }
  }, [emblaMobileApi, autoplay]);
  
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

  const scrollToCollections = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const slides = [
    {
      image: "/lovable-uploads/7976b302-d24d-406f-b1c8-a82c97713a9f.png",
    },
    {
      image: "/lovable-uploads/0b95ba42-a88d-4a59-a202-e30c2e01120e.png",
    }
  ];

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center pt-16 bg-gradient-to-r from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative z-10 text-left">
          <span className="inline-block px-4 py-2 bg-secondary/60 backdrop-blur-md rounded-full text-secondary-foreground font-medium mb-6 animate-slide-up [animation-delay:300ms]">
            Velas artesanais para momentos especiais
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
            Transforme momentos cotidianos em <span className="text-muted">rituais de bem-estar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl animate-slide-up [animation-delay:700ms]">
            Velas aromáticas artesanais que combinam sofisticação, design minimalista e fragrâncias exclusivas 
            para proporcionar uma experiência sensorial completa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start animate-slide-up [animation-delay:900ms] mb-16">
            <Button 
              size="lg" 
              className="rounded-md shadow-md transition-all duration-300 bg-muted hover:bg-muted/90 text-white"
              onClick={scrollToCollections}
            >
              Conheça Nossas Coleções
            </Button>
            <Button size="lg" variant="secondary" className="quote-btn hover:border-primary hover:bg-secondary/70 group rounded-md shadow-md transition-all duration-300 flex gap-2 text-primary">
              <Music size={20} className="group-hover:animate-pulse" />
              <span>Playlists para Relaxar</span>
            </Button>
          </div>

          <div className="text-foreground/80 animate-slide-up [animation-delay:1100ms]">
            <p className="text-sm italic">Acenda. Inspire-se. Conecte-se.</p>
          </div>
        </div>
        
        <div className="relative h-full max-h-[80vh] overflow-hidden rounded-lg shadow-xl hidden md:block">
          <div className="w-full h-full overflow-hidden" ref={emblaRef}>
            <div className="flex h-full">
              {slides.map((slide, index) => (
                <div key={index} className="flex-shrink-0 h-full min-w-0 md:min-w-[100%]">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <img 
                      src={slide.image} 
                      alt={`Appreciatti - Vela Artesanal ${index + 1}`} 
                      className="w-full h-full object-contain transition-transform duration-2000"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <div className="w-full h-full overflow-hidden" ref={emblaMobileRef}>
            <div className="flex h-full">
              {slides.map((slide, index) => (
                <div key={index} className="flex-shrink-0 h-full min-w-[100%]">
                  <img 
                    src={slide.image} 
                    alt={`Appreciatti - Vela Artesanal ${index + 1}`} 
                    className="w-full h-full object-contain transition-transform duration-2000"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-foreground cursor-pointer animate-bounce z-20" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;

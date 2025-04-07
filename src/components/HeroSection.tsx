
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Music } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);
  
  useEffect(() => {
    if (!carouselApi) return;
    
    const onSelect = () => {
      setActiveSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    onSelect();

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);
  
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

  const openSpotifyPlaylist = () => {
    window.open('https://open.spotify.com/playlist/7w6jhzdXTowIWjFlUBDUD1?si=2c67a3e734304f0d', '_blank');
  };

  const handleSelectSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section 
      id="hero" 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center pt-16"
      style={{
        background: 'linear-gradient(to right, #2c3f67 0%, #4a6491 50%, #ffffff 100%)',
        boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
        <div className="relative z-10 text-left max-w-xl">
          <span className="inline-block px-4 py-2 bg-[#eee]/10 backdrop-blur-md rounded-full text-[#eee] font-medium mb-6 animate-slide-up [animation-delay:300ms] border border-[#eee]/20">
            Velas artesanais para momentos especiais
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#eee] mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
            Transforme momentos cotidianos em <span className="text-accent italic">rituais de bem-estar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#eee]/90 mb-8 max-w-2xl animate-slide-up [animation-delay:700ms]">
            Velas aromáticas artesanais que combinam sofisticação, design minimalista e fragrâncias exclusivas 
            para proporcionar uma experiência sensorial completa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start animate-slide-up [animation-delay:900ms] mb-16">
            <Button 
              size="lg" 
              className="rounded-md shadow-md transition-all duration-300 bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={scrollToCollections}
            >
              Conheça Nossas Coleções
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#eee]/30 bg-[#eee]/10 hover:bg-[#eee]/20 text-[#eee] rounded-md shadow-md transition-all duration-300 flex gap-2"
              onClick={openSpotifyPlaylist}
            >
              <Music size={20} className="group-hover:animate-pulse" />
              <span>Playlists para Relaxar</span>
            </Button>
          </div>

          <div className="text-[#eee]/80 animate-slide-up [animation-delay:1100ms]">
            <p className="text-sm italic">Acenda. Inspire-se. Conecte-se.</p>
          </div>
        </div>
        
        <div className="relative w-full max-w-lg mx-auto lg:mx-0">
          <Carousel 
            className="rounded-xl overflow-hidden shadow-2xl border border-[#eee]/20"
            setApi={setCarouselApi}
          >
            <CarouselContent>
              <CarouselItem>
                <AspectRatio ratio={3/4} className="w-full">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source 
                      src="https://zipline.zipticket.com.br/submod/download.php?disposition=inline&chave=00.257179.42a6.ce99.af0&nome=1032524872063400.mp4" 
                      type="video/mp4" 
                    />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </AspectRatio>
              </CarouselItem>
              <CarouselItem>
                <AspectRatio ratio={3/4} className="w-full">
                  <img 
                    src="/lovable-uploads/8b3b4d36-32f0-446d-a485-e735f6373954.png" 
                    alt="Vela artesanal em recipiente de vidro" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </CarouselItem>
              <CarouselItem>
                <AspectRatio ratio={3/4} className="w-full">
                  <img 
                    src="/lovable-uploads/79d512e1-5f3d-447f-9a03-f63a7913c135.png" 
                    alt="Vela acesa em recipiente escuro" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </CarouselItem>
              <CarouselItem>
                <AspectRatio ratio={3/4} className="w-full">
                  <img 
                    src="/lovable-uploads/2c165345-9bc3-4afa-b639-59f31f1b0370.png" 
                    alt="Flor rosa decorativa" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </CarouselItem>
              <CarouselItem>
                <AspectRatio ratio={3/4} className="w-full">
                  <img 
                    src="/lovable-uploads/6e67e00d-007d-4b8c-b1cf-a435c375f6ab.png" 
                    alt="Flor rosa em close" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[0, 1, 2, 3, 4].map((index) => (
                <button 
                  key={index}
                  aria-label={`Ir para slide ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'bg-[#eee] w-4' : 'bg-[#eee]/50'
                  }`}
                  onClick={() => carouselApi?.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>

          <div className="absolute -bottom-6 -right-12 animate-float hidden md:block">
            <div className="relative w-36 h-36 p-1 bg-[#eee]/10 backdrop-blur-md rounded-full shadow-lg border border-[#eee]/20">
              <img 
                src="/lovable-uploads/3af13b38-e75e-4ef6-9db5-24d6cf254808.png" 
                alt="Flor decorativa" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#eee] cursor-pointer animate-bounce z-20" onClick={scrollToNextSection}>
        <ChevronDown size={32} className="opacity-80 hover:opacity-100 transition-opacity" />
      </div>
    </section>
  );
};

export default HeroSection;

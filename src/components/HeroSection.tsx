
import { useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Flame, Music } from 'lucide-react';

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

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center pt-16 bg-gradient-to-r from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative z-10 text-left">
          <span className="inline-block px-4 py-2 bg-secondary/60 backdrop-blur-md rounded-full text-secondary-foreground font-medium mb-6 animate-slide-up [animation-delay:300ms]">
            Velas artesanais para momentos especiais
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
            Transforme momentos cotidianos em <span className="text-accent">rituais de bem-estar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl animate-slide-up [animation-delay:700ms]">
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
              variant="secondary" 
              className="quote-btn hover:border-primary hover:bg-secondary/70 group rounded-md shadow-md transition-all duration-300 flex gap-2 text-primary"
              onClick={openSpotifyPlaylist}
            >
              <Music size={20} className="group-hover:animate-pulse" />
              <span>Playlists para Relaxar</span>
            </Button>
          </div>

          <div className="text-foreground/80 animate-slide-up [animation-delay:1100ms]">
            <p className="text-sm italic">Acenda. Inspire-se. Conecte-se.</p>
          </div>
        </div>
        
        <div className="relative h-full max-h-[80vh] overflow-hidden rounded-lg shadow-xl">
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
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-foreground cursor-pointer animate-bounce z-20" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;

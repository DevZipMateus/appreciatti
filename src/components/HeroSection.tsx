
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Music } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
    <section 
      id="hero" 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center pt-16 bg-[#2c3f67] bg-opacity-95"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(44, 63, 103, 0.97), rgba(44, 63, 103, 0.85))',
        boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
        <div className="relative z-10 text-left max-w-xl">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium mb-6 animate-slide-up [animation-delay:300ms] border border-white/20">
            Velas artesanais para momentos especiais
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
            Transforme momentos cotidianos em <span className="text-accent italic">rituais de bem-estar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-slide-up [animation-delay:700ms]">
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
              className="border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-md shadow-md transition-all duration-300 flex gap-2"
              onClick={openSpotifyPlaylist}
            >
              <Music size={20} className="group-hover:animate-pulse" />
              <span>Playlists para Relaxar</span>
            </Button>
          </div>

          <div className="text-white/80 animate-slide-up [animation-delay:1100ms]">
            <p className="text-sm italic">Acenda. Inspire-se. Conecte-se.</p>
          </div>
        </div>
        
        <div className="relative h-full w-full max-w-2xl mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
          <AspectRatio ratio={9/16} className="w-full max-h-[75vh]">
            <video 
              className="w-full h-full object-cover rounded-xl"
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
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce z-20" onClick={scrollToNextSection}>
        <ChevronDown size={32} className="opacity-80 hover:opacity-100 transition-opacity" />
      </div>
    </section>
  );
};

export default HeroSection;

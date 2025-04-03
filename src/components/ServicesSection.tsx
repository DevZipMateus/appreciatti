
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Flame, Sparkles, Mountain, Moon, Sunrise, Wind } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const collections = [
    {
      icon: <Flame className="h-12 w-12 text-primary" />,
      title: "Coleção Lume",
      description: "Inspirada nos elementos do fogo, esta coleção traz velas com fragrâncias quentes e aconchegantes, perfeitas para momentos de introspecção."
    }, 
    {
      icon: <Mountain className="h-12 w-12 text-primary" />,
      title: "Coleção Terra",
      description: "Com notas amadeiradas e herbais, estas velas celebram a conexão com a natureza e são ideais para criar um ambiente acolhedor em seu lar."
    }, 
    {
      icon: <Wind className="h-12 w-12 text-primary" />,
      title: "Coleção Brisa",
      description: "Fragrâncias leves e refrescantes que evocam a pureza do ar, perfeitas para renovar energias e criar um ambiente leve e agradável."
    }, 
    {
      icon: <Moon className="h-12 w-12 text-primary" />,
      title: "Coleção Noite",
      description: "Aromas envolventes e misteriosos que transformam suas noites em momentos especiais de relaxamento e desconexão do mundo exterior."
    }, 
    {
      icon: <Sunrise className="h-12 w-12 text-primary" />,
      title: "Coleção Aurora",
      description: "Velas revitalizantes com notas cítricas e florais que despertam os sentidos e trazem energia renovada para iniciar seu dia."
    }, 
    {
      icon: <Sparkles className="h-12 w-12 text-primary" />,
      title: "Coleção Essência",
      description: "Nossa linha premium com fragrâncias exclusivas e embalagens diferenciadas, desenvolvida para momentos verdadeiramente especiais."
    }
  ];
  
  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossas Coleções
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Descubra Suas Fragrâncias Favoritas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Oferecemos uma variedade de velas artesanais, cada uma com sua própria personalidade
            e propósito para diferentes estados de espírito e momentos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <CollectionCard 
              key={index} 
              icon={collection.icon} 
              title={collection.title} 
              description={collection.description} 
              index={index} 
            />
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <Button className="quote-btn text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 mx-auto">
            <Flame className="candle-flicker" size={18} />
            Ver Todas as Coleções
          </Button>
        </div>
      </div>
    </section>
  );
};

interface CollectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const CollectionCard = ({
  icon,
  title,
  description,
  index
}: CollectionCardProps) => (
  <Card className={`animate-on-scroll service-card border border-border/50 shadow-md overflow-hidden h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-8 flex flex-col items-center text-center h-full">
      <div className="mb-5 p-4 bg-primary/5 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default ServicesSection;

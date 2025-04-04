
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Flame, Building, Heart, Gift } from 'lucide-react';

const PlansSection = () => {
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
  
  const customOptions = [
    {
      name: "Empresas",
      description: "Velas personalizadas para negócios",
      icon: <Building className="h-16 w-16 text-primary" />,
      features: [
        { text: "Fragrâncias personalizadas" },
        { text: "Embalagem com sua marca" },
        { text: "Etiquetas personalizadas" },
        { text: "Opções para eventos corporativos" },
        { text: "Brindes para clientes e colaboradores" }
      ],
      popular: false,
      cta: "Solicitar Orçamento",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para velas personalizadas para minha empresa."
    },
    {
      name: "Eventos",
      description: "Para casamentos e comemorações",
      icon: <Heart className="h-16 w-16 text-primary" />,
      features: [
        { text: "Design exclusivo para sua cerimônia" },
        { text: "Fragrância personalizada" },
        { text: "Embalagens temáticas" },
        { text: "Lembranças para convidados" },
        { text: "Decoração do ambiente" }
      ],
      popular: true,
      cta: "Solicitar Orçamento",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para velas personalizadas para meu evento/casamento."
    },
    {
      name: "Restaurantes",
      description: "Experiências sensoriais para clientes",
      icon: <Gift className="h-16 w-16 text-primary" />,
      features: [
        { text: "Velas sem aroma para mesas" },
        { text: "Fragrâncias sutis para ambientes" },
        { text: "Design exclusivo para seu estabelecimento" },
        { text: "Opções recarregáveis" },
        { text: "Embalagens personalizadas" }
      ],
      popular: false,
      cta: "Solicitar Orçamento",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento para velas personalizadas para meu restaurante/estabelecimento."
    }
  ];
  
  return (
    <section id="plans" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Personalização
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Velas Exclusivas para Ocasiões Especiais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-on-scroll">
            Criamos velas personalizadas para empresas, casamentos, eventos e restaurantes, 
            com fragrâncias e designs exclusivos que tornam cada momento inesquecível.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {customOptions.map((option, index) => (
            <CustomCard 
              key={index} 
              name={option.name} 
              description={option.description}
              icon={option.icon}
              features={option.features} 
              popular={option.popular} 
              cta={option.cta} 
              index={index}
              whatsappMessage={option.whatsappMessage}
            />
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Todas as nossas velas são produzidas com materiais 100% vegetais e não tóxicos, garantindo uma queima limpa e saudável.
            Cada vela personalizada pode incluir uma playlist exclusiva e sugestões de rituais de bem-estar.
          </p>
          <Button 
            className="quote-btn text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 mx-auto"
            onClick={() => window.open('https://wa.me/5561998659605?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20opções%20de%20personalização%20das%20velas%20da%20Appreciatti.', '_blank')}
          >
            <Flame className="candle-flicker" size={18} />
            Saiba Mais Sobre Personalização
          </Button>
        </div>
      </div>
    </section>
  );
};

interface CustomCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  features: {
    text: string;
  }[];
  popular: boolean;
  cta: string;
  index: number;
  whatsappMessage: string;
}

const CustomCard = ({
  name,
  description,
  icon,
  features,
  popular,
  cta,
  index,
  whatsappMessage
}: CustomCardProps) => {
  const handleWhatsAppClick = () => {
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    // Open WhatsApp with the custom message
    window.open(`https://wa.me/5561998659605?text=${encodedMessage}`, '_blank');
  };

  return (
    <Card className={`animate-on-scroll service-card relative overflow-hidden border ${popular ? 'shadow-lg scale-105 border-primary/20 z-10' : 'shadow-md z-0'} [animation-delay:${index * 150}ms]`}>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 transform rotate-0 translate-x-2 -translate-y-0 shadow-sm">
            POPULAR
          </div>
        </div>
      )}
      
      <CardHeader className="pt-8 pb-4">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            {icon}
          </div>
          <CardTitle className={`text-2xl font-bold ${popular ? 'text-primary' : ''}`}>{name}</CardTitle>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
      </CardHeader>
      
      <CardContent className="text-center">
        <ul className="space-y-3 text-left mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-0 pb-8">
        <Button 
          onClick={handleWhatsAppClick}
          className={`quote-btn w-full rounded-md shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-primary/10 hover:bg-primary/20 text-primary'}`}
        >
          <Flame size={18} className={`candle-flicker ${popular ? 'text-white' : 'text-primary'}`} />
          {cta}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlansSection;

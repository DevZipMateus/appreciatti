
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Heart, Sparkles, Leaf } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Sofisticação, Aroma e Design em Harmonia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Mais do que velas, criamos experiências sensoriais completas para momentos especiais e rituais diários.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">
                Descubra a Appreciatti
              </h3>
              <p className="text-muted-foreground mb-6">
                A Appreciatti é uma marca de velas aromáticas que transforma momentos cotidianos em rituais de bem-estar. 
                Com um design sofisticado e minimalista, nossas velas são inspiradas na conexão consigo mesmo, meditação e relaxamento. 
                Criamos fragrâncias exclusivas para proporcionar imersão sensorial e equilíbrio, unindo estética refinada e propósito.
              </p>
              <ul className="space-y-3">
                {[
                  'Velas artesanais de alta qualidade e design único',
                  'Fragrâncias exclusivas e duradouras',
                  'Embalagens reutilizáveis e sustentáveis',
                  'Experiências sensoriais completas com rituais e playlists'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AboutCard 
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="Sofisticação"
              description="Coleções autorais inspiradas na conexão consigo mesmo, no relaxamento e na meditação. Design minimalista e elegante que complementa qualquer ambiente."
            />
            <AboutCard 
              icon={<Sparkles className="h-10 w-10 text-primary" />}
              title="Qualidade"
              description="Utilizamos ceras premium, pavios ecológicos e fragrâncias cuidadosamente selecionadas para garantir uma queima limpa, prolongada e envolvente."
            />
            <AboutCard 
              icon={<Leaf className="h-10 w-10 text-primary" />}
              title="Sustentabilidade"
              description="Comprometidos com práticas sustentáveis, buscamos materiais que respeitam o meio ambiente e incentivamos o reuso das embalagens."
            />
            <AboutCard 
              icon={<Check className="h-10 w-10 text-primary" />}
              title="Experiência"
              description="Mais que um aroma, nossas velas proporcionam uma experiência sensorial completa, trazendo aconchego, equilíbrio e conexão para seus momentos."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => (
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;

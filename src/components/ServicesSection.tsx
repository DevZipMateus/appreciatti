
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Heart, Moon, Rainbow, Leaf, Music } from 'lucide-react';

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
      icon: <Sparkles className="h-12 w-12 text-primary" />,
      title: "Coleção Essência 🕊️",
      description: "A pureza do essencial. Velas com fragrâncias sofisticadas e design minimalista, trazendo equilíbrio e sofisticação ao ambiente.",
      image: "/lovable-uploads/8b3b4d36-32f0-446d-a485-e735f6373954.png"
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Coleção Afeto 🍰",
      description: "Aromas aconchegantes que remetem a memórias afetivas e momentos de prazer. Perfeita para quem ama fragrâncias doces e envolventes."
    },
    {
      icon: <Moon className="h-12 w-12 text-primary" />,
      title: "Coleção Véu da Noite 🌙✨",
      description: "Uma linha voltada para a espiritualidade e conexão com o universo. Perfeita para rituais, meditação e introspecção."
    },
    {
      icon: <Rainbow className="h-12 w-12 text-primary" />,
      title: "Coleção Lume 🌈💫",
      description: "Uma linha que celebra a alegria, a criatividade e a criança interior. Velas coloridas, com aromas vibrantes e frases inspiradoras."
    },
    {
      icon: <Leaf className="h-12 w-12 text-primary" />,
      title: "Coleção Florescer 🌿🌸",
      description: "Como um passeio em um jardim florido. Velas maiores, decoradas com delicadas flores de cera, trazendo frescor e renovação.",
      image: "/lovable-uploads/3af13b38-e75e-4ef6-9db5-24d6cf254808.png"
    },
    {
      icon: <Music className="h-12 w-12 text-primary" />,
      title: "Experiência Sensorial 🎵",
      description: "Cada coleção é acompanhada por uma playlist especialmente curada para complementar a experiência aromática e seu bem-estar."
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
              image={collection.image}
            />
          ))}
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
  image?: string;
}

const CollectionCard = ({
  icon,
  title,
  description,
  index,
  image
}: CollectionCardProps) => (
  <Card className={`animate-on-scroll service-card border border-border/50 shadow-md overflow-hidden h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-8 flex flex-col items-center text-center h-full relative">
      {image && (
        <div className="absolute top-0 right-0 -m-2 w-16 h-16 rounded-full overflow-hidden border-2 border-[#eee] shadow-lg">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="mb-5 p-4 bg-primary/5 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default ServicesSection;

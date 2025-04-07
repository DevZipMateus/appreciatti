
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
      title: "Coleção Renovo 🍃",
      description: "Aromas de Alecrim e Limão Siciliano que renovam as energias e trazem vitalidade ao ambiente. Ideal para momentos de concentração e renovação.",
      image: "/lovable-uploads/363b9f9a-655d-4c89-946d-f64dd3eb450b.png"
    },
    {
      icon: <Moon className="h-12 w-12 text-primary" />,
      title: "Coleção Orvalho 🌿",
      description: "Fragrância de Bamboo que traz frescor e acolhimento. Perfeita para criar uma atmosfera de paz e tranquilidade nos ambientes.",
      image: "/lovable-uploads/8dbe36cd-50e2-4b71-90f3-7b3b4a68fcb6.png"
    },
    {
      icon: <Rainbow className="h-12 w-12 text-primary" />,
      title: "Coleção Bosque 🌳",
      description: "Aromas de Cascas e Folhas que remetem a uma caminhada na floresta. Ideal para conectar-se com a natureza e equilibrar as energias.",
      image: "/lovable-uploads/bd861304-734b-48b7-8382-d3e30d44e0ea.png"
    },
    {
      icon: <Leaf className="h-12 w-12 text-primary" />,
      title: "Coleção Harmonia 🌱",
      description: "Fragrância de Capim Limão que traz tranquilidade e harmonia. Perfeita para momentos de relaxamento e meditação.",
      image: "/lovable-uploads/3c0dd988-433e-46cc-9ab9-703d3493d7b1.png"
    },
    {
      icon: <Music className="h-12 w-12 text-primary" />,
      title: "Coleção Ambré & Leveza 🌸",
      description: "Fragrâncias de Âmbar e Lavanda Francesa que trazem sofisticação e leveza. Ideal para criar ambientes acolhedores e relaxantes.",
      image: "/lovable-uploads/2ca0de87-dd9d-4fd9-8a34-cd7e3291522b.png"
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

        <div className="mt-16 bg-primary/5 p-8 rounded-xl shadow-md animate-on-scroll">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Galeria de Produtos</h3>
            <p className="text-muted-foreground">Conheça nossos produtos em detalhes</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductImage src="/lovable-uploads/363b9f9a-655d-4c89-946d-f64dd3eb450b.png" alt="Vela Renovo" title="Renovo" subtitle="Alecrim e Limão Siciliano" />
            <ProductImage src="/lovable-uploads/8dbe36cd-50e2-4b71-90f3-7b3b4a68fcb6.png" alt="Velas Orvalho" title="Orvalho" subtitle="Bamboo" />
            <ProductImage src="/lovable-uploads/bd861304-734b-48b7-8382-d3e30d44e0ea.png" alt="Vela Bosque" title="Bosque" subtitle="Cascas e Folhas" />
            <ProductImage src="/lovable-uploads/3c0dd988-433e-46cc-9ab9-703d3493d7b1.png" alt="Vela Harmonia" title="Harmonia" subtitle="Capim Limão" />
            <ProductImage src="/lovable-uploads/986ded6d-b36f-4557-b2ff-c2cba8423f4d.png" alt="Vela Ambré" title="Ambré" subtitle="Âmbar" />
            <ProductImage src="/lovable-uploads/2ca0de87-dd9d-4fd9-8a34-cd7e3291522b.png" alt="Vela Leveza" title="Leveza" subtitle="Lavanda Francesa" />
          </div>
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

interface ProductImageProps {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const ProductImage = ({ src, alt, title, subtitle }: ProductImageProps) => (
  <div className="relative group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
    <div className="aspect-square overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <p className="text-white/80 text-sm">{subtitle}</p>
    </div>
  </div>
);

export default ServicesSection;

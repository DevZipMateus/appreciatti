
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
      title: "Essência 🕊️",
      subtitle: "Minimalista, elegante e atemporal",
      description: "A pureza do essencial. Velas com fragrâncias sofisticadas e design minimalista, trazendo equilíbrio e sofisticação ao ambiente.",
      details: "Potes: Pianezza de 90g e 140g, transparentes, com tampa preta.",
      poetic: "No silêncio, encontra-se a essência. Acenda. Respire. Contemple.",
      experience: "Playlist relaxante com sons instrumentais e natureza.",
      image: "/lovable-uploads/8b3b4d36-32f0-446d-a485-e735f6373954.png"
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Afeto 🍰",
      subtitle: "Conforto, nostalgia e indulgência",
      description: "Aromas aconchegantes que remetem a memórias afetivas e momentos de prazer. Perfeita para quem ama fragrâncias doces e envolventes.",
      details: "Potes: Patê e Whisky, de vidro transparente com tampa de madeira pinus.",
      poetic: "",
      experience: "Playlist com músicas nostálgicas e acolhedoras.",
      image: "/lovable-uploads/363b9f9a-655d-4c89-946d-f64dd3eb450b.png"
    },
    {
      icon: <Moon className="h-12 w-12 text-primary" />,
      title: "Véu da Noite 🌙✨",
      subtitle: "Misticismo, introspecção e encantamento",
      description: "Uma linha voltada para a espiritualidade e conexão com o universo. Perfeita para rituais, meditação e momentos de introspecção.",
      details: "Potes: Vidro preto fosco e vidro azul escuro translúcido, com tampa dourada.",
      poetic: "O universo fala em sussurros. Acenda sua vela e escute a noite.",
      experience: "Sons cósmicos e de meditação guiada.",
      image: "/lovable-uploads/8dbe36cd-50e2-4b71-90f3-7b3b4a68fcb6.png"
    },
    {
      icon: <Rainbow className="h-12 w-12 text-primary" />,
      title: "Lume 🌈💫",
      subtitle: "Linha divertida, colorida e vibrante",
      description: "Uma linha que celebra a alegria, a criatividade e a criança interior. Velas coloridas, com aromas vibrantes e frases inspiradoras que despertam sorrisos e boas vibrações.",
      details: "Potes: Vidro brilhante e colorido (rosa, azul, amarelo e lilás), com tampas metálicas douradas ou prateadas.",
      poetic: "A vida é feita de luz e cor. Deixe sua criança interior brincar. Acenda. Sorria. Dance.",
      experience: "Playlist animada e motivacional.",
      image: "/lovable-uploads/bd861304-734b-48b7-8382-d3e30d44e0ea.png"
    },
    {
      icon: <Leaf className="h-12 w-12 text-primary" />,
      title: "Florescer 🌿🌸",
      subtitle: "Jardins encantados e conexão com a natureza",
      description: "Como um passeio em um jardim florido. Velas maiores, decoradas com delicadas flores de cera, trazendo frescor, renovação e suavidade ao ambiente.",
      details: "",
      poetic: "Cada chama acesa é um novo botão que floresce. Permita-se desabrochar.",
      experience: "Playlist com sons de natureza e músicas suaves.",
      image: "/lovable-uploads/3c0dd988-433e-46cc-9ab9-703d3493d7b1.png"
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
            Descubra Suas Coleções Favoritas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Cada coleção foi cuidadosamente elaborada para oferecer uma experiência sensorial completa,
            conectando fragrâncias, emoções e momentos especiais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <CollectionCard 
              key={index} 
              icon={collection.icon} 
              title={collection.title} 
              subtitle={collection.subtitle}
              description={collection.description}
              details={collection.details}
              poetic={collection.poetic}
              experience={collection.experience}
              index={index}
              image={collection.image}
            />
          ))}
        </div>

        <div className="mt-16 bg-primary/5 p-8 rounded-xl shadow-md animate-on-scroll">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Galeria de Produtos</h3>
            <p className="text-muted-foreground">Explore nossa variedade de designs e opções</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductImage src="/lovable-uploads/363b9f9a-655d-4c89-946d-f64dd3eb450b.png" alt="Coleção Afeto" title="Afeto" subtitle="Conforto e nostalgia" />
            <ProductImage src="/lovable-uploads/8dbe36cd-50e2-4b71-90f3-7b3b4a68fcb6.png" alt="Véu da Noite" title="Véu da Noite" subtitle="Misticismo" />
            <ProductImage src="/lovable-uploads/bd861304-734b-48b7-8382-d3e30d44e0ea.png" alt="Lume" title="Lume" subtitle="Colorida e vibrante" />
            <ProductImage src="/lovable-uploads/3c0dd988-433e-46cc-9ab9-703d3493d7b1.png" alt="Florescer" title="Florescer" subtitle="Jardins encantados" />
            <ProductImage src="/lovable-uploads/986ded6d-b36f-4557-b2ff-c2cba8423f4d.png" alt="Essência" title="Essência" subtitle="Minimalista" />
            <ProductImage src="/lovable-uploads/2ca0de87-dd9d-4fd9-8a34-cd7e3291522b.png" alt="Variação" title="Variações" subtitle="Diferentes formatos" />
          </div>
        </div>
      </div>
    </section>
  );
};

interface CollectionCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  details?: string;
  poetic?: string;
  experience?: string;
  index: number;
  image?: string;
}

const CollectionCard = ({
  icon,
  title,
  subtitle,
  description,
  details,
  poetic,
  experience,
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
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-primary/70 font-medium mb-3">{subtitle}</p>
      <p className="text-muted-foreground mb-3">{description}</p>
      
      {details && <p className="text-sm text-gray-600 mb-2">{details}</p>}
      
      {poetic && (
        <div className="italic text-sm text-gray-600 border-l-2 border-primary/30 pl-3 mt-2 mb-3">
          "{poetic}"
        </div>
      )}
      
      {experience && (
        <div className="flex items-center text-xs text-gray-500 mt-2">
          <Music className="h-3 w-3 mr-1" />
          <span>{experience}</span>
        </div>
      )}
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

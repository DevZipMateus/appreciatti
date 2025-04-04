
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Telefone/WhatsApp",
      details: "(61) 99865-9605",
      link: "tel:+5561998659605"
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "E-mail",
      details: "suporte@appreciatti.com",
      link: "mailto:suporte@appreciatti.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Endereço",
      details: "Quadra 204, Lote 8, Águas Claras, Brasília - DF",
      link: "https://maps.google.com/?q=Quadra+204,+Lote+8,+Águas+Claras,+Brasília+-+DF"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Horário",
      details: "Segunda a Sexta, 9h às 18h",
      link: null
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Estamos à Disposição
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Entre em contato conosco para pedidos personalizados, dúvidas sobre nossos produtos ou
            qualquer outra informação que desejar.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border border-border/50 shadow-card animate-on-scroll">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                  <p className="text-muted-foreground mb-8">
                    Para fazer um pedido, solicitar velas personalizadas ou tirar dúvidas,
                    entre em contato por um dos canais abaixo.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((item, index) => (
                      <ContactInfoItem 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        details={item.details}
                        link={item.link}
                      />
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4">Siga-nos</h4>
                    <div className="flex space-x-3">
                      <SocialLink 
                        icon={<Instagram size={20} />} 
                        href="https://www.instagram.com/appreciatti" 
                        label="Instagram" 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center p-6 bg-primary/5 rounded-xl max-w-md">
                    <div className="mb-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Velas Personalizadas</h3>
                    <p className="text-muted-foreground mb-6">
                      Para pedidos de velas personalizadas para eventos, empresas ou coleções especiais,
                      fale diretamente com nossa equipe pelo WhatsApp.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      Tempo médio de resposta: <span className="font-medium text-foreground">15 minutos</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 animate-on-scroll">
          <Card className="border border-border/50 shadow-card overflow-hidden">
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.6018575551984!2d-48.03004826851022!3d-15.7825495776774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2de4c5831b1f%3A0x4c38f58d6ab4318a!2s%C3%81guas%20Claras%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1627909542948!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa de localização"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string | null;
}

const ContactInfoItem = ({ icon, title, details, link }: ContactInfoItemProps) => {
  const content = (
    <div className="flex">
      <div className="flex-shrink-0 mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-muted-foreground mt-1">{details}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block hover:text-primary transition-colors">
        {content}
      </a>
    );
  }

  return content;
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink = ({ icon, href, label }: SocialLinkProps) => (
  <a
    href={href}
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default ContactSection;

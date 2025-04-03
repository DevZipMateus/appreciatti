
import { Button } from '@/components/ui/button';
import { ChevronUp, Instagram, Flame } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary-foreground text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-muted">Appreciatti</span>
            </h3>
            <p className="text-white/80 max-w-xs">
              Velas aromáticas artesanais que transformam momentos cotidianos em rituais de bem-estar.
            </p>
            <div className="flex space-x-4 mt-6">
              <FooterSocialLink href="https://www.instagram.com/appreciatti" aria-label="Instagram" icon={<Instagram size={18} />} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#hero">Início</FooterNavItem>
              <FooterNavItem href="#about">Sobre Nós</FooterNavItem>
              <FooterNavItem href="#services">Coleções</FooterNavItem>
              <FooterNavItem href="#plans">Personalização</FooterNavItem>
              <FooterNavItem href="#contact">Contato</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#services">Coleção Lume</FooterNavItem>
              <FooterNavItem href="#services">Coleção Terra</FooterNavItem>
              <FooterNavItem href="#services">Coleção Brisa</FooterNavItem>
              <FooterNavItem href="#services">Coleção Noite</FooterNavItem>
              <FooterNavItem href="#services">Coleção Aurora</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li>(61) 99865-9605</li>
              <li>suporte@appreciatti.com</li>
              <li>Quadra 204, Lote 8, Bloco B, Apto 904, Águas Claras, Brasília - DF</li>
              <li>Segunda a Sexta, 9h às 18h</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Appreciatti. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="text-sm text-white/70 flex items-center gap-2">
              <Flame size={16} className="candle-flicker" />
              Acenda. Inspire-se. Conecte-se.
            </span>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-primary/80 border-primary/20 hover:bg-primary/90 text-white"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterNavItemProps {
  href: string;
  children: React.ReactNode;
}

const FooterNavItem = ({ href, children }: FooterNavItemProps) => (
  <li>
    <a
      href={href}
      className="text-white/70 hover:text-muted transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

interface FooterSocialLinkProps {
  href: string;
  'aria-label': string;
  icon: React.ReactNode;
}

const FooterSocialLink = (props: FooterSocialLinkProps) => (
  <a
    {...props}
    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-muted/80 transition-colors duration-200"
  >
    {props.icon}
  </a>
);

export default Footer;

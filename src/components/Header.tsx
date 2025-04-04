import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Flame } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize the scroll state on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/95 backdrop-blur-md shadow-nav' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="relative z-20">
            <div className="flex items-center">
              <img src="/lovable-uploads/5b6a6586-627c-4508-b11d-62fbebfb7370.png" alt="Appreciatti" className="h-10 md:h-12" />
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks />
            
          </nav>

          {/* Mobile Menu using Sheet from shadcn/ui */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-secondary-foreground">
                  <Menu size={24} />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="pt-16 pb-8 px-6">
                <nav className="flex flex-col items-center space-y-4 text-lg">
                  <NavLinks mobile />
                  <SheetClose asChild>
                    <Button className="quote-btn mt-4 w-full text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 py-3 text-base">
                      <Flame size={18} className="candle-flicker" />
                      Comprar Agora
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>;
};
interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}
const NavLinks = ({
  mobile,
  onClick
}: NavLinksProps) => {
  const links = [{
    name: 'Início',
    href: '#hero'
  }, {
    name: 'Sobre Nós',
    href: '#about'
  }, {
    name: 'Coleções',
    href: '#services'
  }, {
    name: 'Personalização',
    href: '#plans'
  }, {
    name: 'Contato',
    href: '#contact'
  }];
  return <>
      {links.map(link => <a key={link.name} href={link.href} className={`font-medium transition-all duration-300 px-3 py-2 rounded-md
            ${mobile ? 'text-xl text-foreground hover:text-primary mb-2 w-full text-center py-3' : 'text-foreground/80 hover:text-primary hover:bg-secondary/50'}`} onClick={onClick}>
          {link.name}
        </a>)}
    </>;
};
export default Header;
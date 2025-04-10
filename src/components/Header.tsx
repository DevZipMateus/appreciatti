
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose 
} from "@/components/ui/sheet";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

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
            <NavLinks isScrolled={isScrolled} />
          </nav>

          {/* Mobile Menu using Sheet from shadcn/ui */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`h-10 w-10 ${isScrolled ? 'text-secondary-foreground' : 'text-[#eee]'}`}>
                  <Menu size={24} />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pt-16 pb-8 px-6 bg-gradient-to-r from-primary to-primary/90 text-[#eee] w-[280px] max-w-full">
                <div className="absolute top-6 right-6">
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-[#eee] hover:bg-primary/20">
                      <X size={24} />
                      <span className="sr-only">Fechar menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-1 text-lg pt-4">
                  <MobileNavLinks />
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
  isScrolled: boolean;
}

const NavLinks = ({
  mobile,
  onClick,
  isScrolled
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
      {links.map(link => (
        <a 
          key={link.name}
          href={link.href} 
          className={`font-medium transition-all duration-300 rounded-md flex items-center
            ${isScrolled 
              ? 'text-foreground/80 hover:text-primary hover:bg-secondary/50 px-3 py-2' 
              : 'text-[#eee] hover:text-[#eee]/80 hover:bg-[#eee]/10 px-3 py-2'}`} 
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </>;
};

const MobileNavLinks = () => {
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  
  const mainLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre Nós', href: '#about' }
  ];
  
  const collectionsLinks = [
    { name: 'Essência 🕊️', href: '#services' },
    { name: 'Afeto 🍰', href: '#services' },
    { name: 'Véu da Noite 🌙✨', href: '#services' },
    { name: 'Lume 🌈💫', href: '#services' },
    { name: 'Florescer 🌿🌸', href: '#services' }
  ];
  
  const otherLinks = [
    { name: 'Personalização', href: '#plans' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <>
      {mainLinks.map(link => (
        <SheetClose key={link.name} asChild>
          <a 
            href={link.href} 
            className="font-medium transition-all duration-300 rounded-md flex items-center
              text-xl text-[#eee] hover:text-[#eee]/80 py-3 px-4 w-full hover:bg-primary/20 border-b border-[#eee]/10"
          >
            {link.name}
            <ChevronRight className="ml-auto h-5 w-5 opacity-70" />
          </a>
        </SheetClose>
      ))}
      
      <Collapsible
        open={collectionsOpen}
        onOpenChange={setCollectionsOpen}
        className="border-b border-[#eee]/10"
      >
        <CollapsibleTrigger asChild>
          <button className="font-medium transition-all duration-300 rounded-md flex items-center
            text-xl text-[#eee] hover:text-[#eee]/80 py-3 px-4 w-full hover:bg-primary/20">
            Coleções
            <div className="ml-auto">
              {collectionsOpen ? (
                <ChevronDown className="h-5 w-5 opacity-70 rotate-180 transition-transform" />
              ) : (
                <ChevronDown className="h-5 w-5 opacity-70 transition-transform" />
              )}
            </div>
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4">
          {collectionsLinks.map(link => (
            <SheetClose key={link.name} asChild>
              <a
                href={link.href}
                className="font-medium transition-all duration-300 rounded-md flex items-center
                  text-lg text-[#eee] hover:text-[#eee]/80 py-2 px-4 w-full hover:bg-primary/20"
              >
                {link.name}
                <ChevronRight className="ml-auto h-4 w-4 opacity-70" />
              </a>
            </SheetClose>
          ))}
        </CollapsibleContent>
      </Collapsible>
      
      {otherLinks.map(link => (
        <SheetClose key={link.name} asChild>
          <a 
            href={link.href} 
            className="font-medium transition-all duration-300 rounded-md flex items-center
              text-xl text-[#eee] hover:text-[#eee]/80 py-3 px-4 w-full hover:bg-primary/20 border-b border-[#eee]/10"
          >
            {link.name}
            <ChevronRight className="ml-auto h-5 w-5 opacity-70" />
          </a>
        </SheetClose>
      ))}
    </>
  );
};

export default Header;

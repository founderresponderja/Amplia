import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, Sun, Moon } from 'lucide-react';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? 'dark' 
        : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-max font-normal text-amplia-dark dark:text-gray-100 bg-white dark:bg-neutral-900 overflow-x-hidden selection:bg-amplia-green selection:text-white transition-colors duration-300">
      
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-sm py-4 border-b border-transparent dark:border-white/5' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Logo className="h-8 md:h-10" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('home')} className="text-amplia-dark dark:text-gray-200 hover:text-amplia-green dark:hover:text-amplia-green font-normal transition-colors">Home</button>
            <button onClick={() => scrollTo('about')} className="text-amplia-dark dark:text-gray-200 hover:text-amplia-green dark:hover:text-amplia-green font-normal transition-colors">Sobre</button>
            <button onClick={() => scrollTo('services')} className="text-amplia-dark dark:text-gray-200 hover:text-amplia-green dark:hover:text-amplia-green font-normal transition-colors">Serviços</button>
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-amplia-dark dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Alternar tema"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <Button onClick={() => scrollTo('contact')} variant="primary" className="scale-90">
              Fale Connosco
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-amplia-dark dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              className="text-amplia-dark dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-neutral-900 shadow-xl border-t border-gray-100 dark:border-white/10 p-6 flex flex-col space-y-4 md:hidden animate-fade-in-down">
            <button onClick={() => scrollTo('home')} className="text-left text-lg font-normal py-2 dark:text-white">Home</button>
            <button onClick={() => scrollTo('about')} className="text-left text-lg font-normal py-2 dark:text-white">Sobre</button>
            <button onClick={() => scrollTo('services')} className="text-left text-lg font-normal py-2 dark:text-white">Serviços</button>
            <Button onClick={() => scrollTo('contact')} className="w-full justify-center mt-4">
              Fale Connosco
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amplia-light/50 dark:bg-white/5 -skew-x-12 transform translate-x-20 -z-10 transition-colors duration-300"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-amplia-green/10 dark:bg-amplia-green/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amplia-green/10 dark:bg-amplia-green/20 text-amplia-green rounded-full text-sm font-normal tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-amplia-green animate-pulse"></span>
                Inovação Constante
              </div>
              <h1 className="text-5xl lg:text-7xl font-max font-normal leading-tight text-amplia-dark dark:text-white">
                Amplie o seu <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amplia-green to-[#6a9e00]">
                  Potencial Digital
                </span>
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 font-normal max-w-lg leading-relaxed">
                Transformamos desafios complexos em soluções de software simples e eficazes. A sua parceira tecnológica para o futuro.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={() => scrollTo('contact')} className="flex items-center justify-center gap-2 shadow-xl shadow-amplia-green/20">
                  Começar Agora <ArrowRight size={20} />
                </Button>
                <Button onClick={() => scrollTo('services')} variant="outline">
                  Nossos Serviços
                </Button>
              </div>

              <div className="pt-8 flex items-center gap-8 text-gray-400 dark:text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-amplia-green" size={20} />
                  <span className="text-sm font-normal">Suporte 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-amplia-green" size={20} />
                  <span className="text-sm font-normal">Equipa Senior</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-amplia-green" size={20} />
                  <span className="text-sm font-normal">Tecnologia de Ponta</span>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-black/50 border-8 border-white dark:border-neutral-800 transform rotate-2 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Equipa Amplia a colaborar" 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-normal text-2xl">Mais de 10 anos</p>
                  <p className="text-white/80 font-normal">de excelência no mercado</p>
                </div>
              </div>
              {/* Floating element */}
              <div className="absolute -bottom-10 -left-10 bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-xl dark:shadow-black/30 border-l-4 border-amplia-green animate-bounce-slow">
                <p className="text-amplia-dark dark:text-white font-normal text-lg">+200 Projetos</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">Entregues com sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-amplia-light dark:bg-neutral-800/50 border-y border-gray-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-normal mb-6 text-amplia-dark dark:text-white">Porquê a Amplia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <h3 className="text-6xl font-normal text-amplia-green/20 mb-4">01</h3>
              <h4 className="text-xl font-normal mb-3 dark:text-gray-100">Visão Estratégica</h4>
              <p className="text-gray-600 dark:text-gray-400 font-normal">Não escrevemos apenas código. Entendemos o seu negócio para criar soluções que geram valor real.</p>
            </div>
            <div className="p-6">
              <h3 className="text-6xl font-normal text-amplia-green/20 mb-4">02</h3>
              <h4 className="text-xl font-normal mb-3 dark:text-gray-100">Agilidade Total</h4>
              <p className="text-gray-600 dark:text-gray-400 font-normal">Metodologias ágeis que garantem entregas rápidas, transparentes e adaptáveis às mudanças.</p>
            </div>
            <div className="p-6">
              <h3 className="text-6xl font-normal text-amplia-green/20 mb-4">03</h3>
              <h4 className="text-xl font-normal mb-3 dark:text-gray-100">Tecnologia Humana</h4>
              <p className="text-gray-600 dark:text-gray-400 font-normal">Acreditamos que a tecnologia deve servir as pessoas. O nosso suporte é próximo e personalizado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-[#111] dark:bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Logo className="h-8 mb-4 md:mb-0 grayscale brightness-200" />
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-amplia-green transition-colors font-normal">LinkedIn</a>
              <a href="#" className="hover:text-amplia-green transition-colors font-normal">Twitter</a>
              <a href="#" className="hover:text-amplia-green transition-colors font-normal">Instagram</a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center md:text-left text-gray-500 text-sm font-normal">
            <div className="flex flex-col md:flex-row justify-between">
              <p>&copy; {new Date().getFullYear()} Amplia Consultoria. Todos os direitos reservados.</p>
              <div className="space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white font-normal">Privacidade</a>
                <a href="#" className="hover:text-white font-normal">Termos</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
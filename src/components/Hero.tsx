import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Modern tech workspace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent animate-fade-in">
            Hudson Latimer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Freelance Web Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            19-year-old IT Programming student crafting modern web experiences 
            from Miami & Halifax. Passionate about clean code and innovative solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-glass-border bg-glass hover:bg-glass/20 backdrop-blur-sm transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="mailto:hudsonlatimer4@gmail.com"
            className="p-3 rounded-full bg-glass border border-glass-border hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="#"
            className="p-3 rounded-full bg-glass border border-glass-border hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="#"
            className="p-3 rounded-full bg-glass border border-glass-border hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce p-2 rounded-full bg-glass border border-glass-border hover:bg-primary/20 transition-all duration-300"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
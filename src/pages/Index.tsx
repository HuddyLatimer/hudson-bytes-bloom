import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code, User, FolderOpen, MessageCircle, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <Layout className="pt-0">
      {/* Hero Section */}
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
              Freelance Web Developer & Digital Solutions
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              19-year-old IT Programming student crafting modern web experiences from Miami & Halifax. 
              I help businesses and individuals establish their online presence with stunning, functional websites.
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 max-w-4xl mx-auto">
            <Link 
              to="/about"
              className="group p-6 bg-glass border border-glass-border rounded-lg hover:bg-glass/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <User className="w-8 h-8 text-cyan mx-auto mb-3 group-hover:text-purple transition-colors duration-300" />
              <h3 className="font-semibold text-sm">About Me</h3>
            </Link>
            
            <Link 
              to="/skills"
              className="group p-6 bg-glass border border-glass-border rounded-lg hover:bg-glass/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <Code className="w-8 h-8 text-purple mx-auto mb-3 group-hover:text-cyan transition-colors duration-300" />
              <h3 className="font-semibold text-sm">Skills</h3>
            </Link>
            
            <Link 
              to="/projects"
              className="group p-6 bg-glass border border-glass-border rounded-lg hover:bg-glass/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <FolderOpen className="w-8 h-8 text-cyan mx-auto mb-3 group-hover:text-purple transition-colors duration-300" />
              <h3 className="font-semibold text-sm">Projects</h3>
            </Link>

            <Link 
              to="/services"
              className="group p-6 bg-glass border border-glass-border rounded-lg hover:bg-glass/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <Briefcase className="w-8 h-8 text-purple mx-auto mb-3 group-hover:text-cyan transition-colors duration-300" />
              <h3 className="font-semibold text-sm">Services</h3>
            </Link>
            
            <Link 
              to="/contact"
              className="group p-6 bg-glass border border-glass-border rounded-lg hover:bg-glass/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <MessageCircle className="w-8 h-8 text-cyan mx-auto mb-3 group-hover:text-purple transition-colors duration-300" />
              <h3 className="font-semibold text-sm">Contact</h3>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/services">View Services</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-glass-border bg-glass hover:bg-glass/20 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <Link to="/projects">View Portfolio</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-glass-border bg-glass hover:bg-glass/20 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <Link to="/contact">Get Quote</Link>
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
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

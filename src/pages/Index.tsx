import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code, User, FolderOpen, MessageCircle, Briefcase, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <Layout className="pt-0">
      {/* Background Effects */}
      <ParticleBackground />
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Modern tech workspace" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-electric/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Main Content */}
          <ScrollReveal direction="fade" className="mb-8">
            <div className="relative">
              <Sparkles className="absolute -top-8 -left-8 w-6 h-6 text-cyan animate-pulse" />
              <Sparkles className="absolute -top-4 -right-12 w-4 h-4 text-purple animate-pulse" style={{ animationDelay: '0.5s' }} />
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-shimmer relative">
                Hudson Latimer
              </h1>
              <Sparkles className="absolute -bottom-4 left-1/3 w-5 h-5 text-electric animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <ScrollReveal delay={200} direction="up">
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
                Freelance Web Developer & Digital Solutions
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400} direction="up">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                19-year-old IT Programming student crafting modern web experiences from Miami & Halifax. 
                I help businesses and individuals establish their online presence with stunning, functional websites.
              </p>
            </ScrollReveal>
          </ScrollReveal>

          {/* Navigation Cards */}
          <ScrollReveal delay={600} direction="up">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 max-w-4xl mx-auto">
              <Link 
                to="/about"
                className="group p-6 glass-effect rounded-lg hover-lift transition-all duration-500 hover:bg-glass/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <User className="w-8 h-8 text-cyan mx-auto mb-3 group-hover:text-purple transition-all duration-300 group-hover:animate-wiggle relative z-10" />
                <h3 className="font-semibold text-sm relative z-10">About Me</h3>
              </Link>
            
              <Link 
                to="/skills"
                className="group p-6 glass-effect rounded-lg hover-lift transition-all duration-500 hover:bg-glass/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Code className="w-8 h-8 text-purple mx-auto mb-3 group-hover:text-cyan transition-all duration-300 group-hover:animate-rotate-slow relative z-10" />
                <h3 className="font-semibold text-sm relative z-10">Skills</h3>
              </Link>
              
              <Link 
                to="/projects"
                className="group p-6 glass-effect rounded-lg hover-lift transition-all duration-500 hover:bg-glass/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-electric/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FolderOpen className="w-8 h-8 text-cyan mx-auto mb-3 group-hover:text-purple transition-all duration-300 group-hover:scale-110 relative z-10" />
                <h3 className="font-semibold text-sm relative z-10">Projects</h3>
              </Link>

              <Link 
                to="/services"
                className="group p-6 glass-effect rounded-lg hover-lift transition-all duration-500 hover:bg-glass/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-electric/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Briefcase className="w-8 h-8 text-purple mx-auto mb-3 group-hover:text-cyan transition-all duration-300 group-hover:animate-pulse relative z-10" />
                <h3 className="font-semibold text-sm relative z-10">Services</h3>
              </Link>
              
              <Link 
                to="/contact"
                className="group p-6 glass-effect rounded-lg hover-lift transition-all duration-500 hover:bg-glass/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <MessageCircle className="w-8 h-8 text-cyan mx-auto mb-3 group-hover:text-purple transition-all duration-300 group-hover:animate-bounce-slow relative z-10" />
                <h3 className="font-semibold text-sm relative z-10">Contact</h3>
              </Link>
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={800} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <MagneticButton 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow animate-pulse-glow px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/services">View Services</Link>
              </MagneticButton>
              <MagneticButton 
                variant="outline" 
                size="lg"
                className="glass-effect hover:bg-glass/30 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/projects">View Portfolio</Link>
              </MagneticButton>
              <MagneticButton 
                variant="outline" 
                size="lg"
                className="glass-effect hover:bg-glass/30 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/contact">Get Quote</Link>
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal delay={1000} direction="fade">
            <div className="flex justify-center gap-6 mb-12">
              <a 
                href="mailto:hudsonlatimer4@gmail.com"
                className="group p-4 rounded-full glass-effect hover:bg-primary/20 transition-all duration-500 hover-lift"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 group-hover:text-cyan transition-colors duration-300" />
              </a>
              <a 
                href="#"
                className="group p-4 rounded-full glass-effect hover:bg-primary/20 transition-all duration-500 hover-lift"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 group-hover:text-purple transition-colors duration-300" />
              </a>
              <a 
                href="#"
                className="group p-4 rounded-full glass-effect hover:bg-primary/20 transition-all duration-500 hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 group-hover:text-electric transition-colors duration-300" />
              </a>
            </div>
          </ScrollReveal>

          {/* Scroll Indicator */}
          <ScrollReveal delay={1200} direction="fade">
            <div className="animate-bounce-slow">
              <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground hover:text-cyan transition-colors duration-300 cursor-pointer" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-glass-border bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 Hudson Latimer. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> and lots of ☕
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="mailto:hudsonlatimer4@gmail.com"
              className="p-3 rounded-full bg-glass border border-glass-border hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="p-3 rounded-full bg-glass border border-glass-border hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="p-3 rounded-full bg-glass border border-glass-border hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-glass-border text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-cyan transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-cyan transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-cyan transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-cyan transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
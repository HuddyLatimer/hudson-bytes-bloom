import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-glass-border bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Hudson Latimer. All rights reserved.
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
            <Link 
              to="/about"
              className="hover:text-cyan transition-colors duration-300"
            >
              About
            </Link>
            <Link 
              to="/skills"
              className="hover:text-cyan transition-colors duration-300"
            >
              Skills
            </Link>
            <Link 
              to="/projects"
              className="hover:text-cyan transition-colors duration-300"
            >
              Projects
            </Link>
            <Link 
              to="/contact"
              className="hover:text-cyan transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
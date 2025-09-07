import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      image: "🛒",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      image: "📋",
      status: "In Progress",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio showcasing modern web development techniques with smooth animations and optimal performance.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "💼",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for visualizing complex data sets with charts, filters, and real-time data processing capabilities.",
      technologies: ["React", "D3.js", "C#", ".NET", "SQL Server"],
      image: "📊",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work demonstrating proficiency in modern web technologies 
            and problem-solving capabilities across different domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden"
            >
              {/* Project Icon/Image */}
              <div className="h-48 bg-gradient-primary/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-cyan group-hover:text-purple transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant="secondary"
                    className={
                      project.status === "Completed" 
                        ? "bg-cyan/20 text-cyan border-cyan/30" 
                        : "bg-purple/20 text-purple border-purple/30"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="text-xs border-glass-border hover:border-cyan/50 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex-1"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-glass-border bg-glass hover:bg-glass/20 backdrop-blur-sm"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
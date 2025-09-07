import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import { 
  ExternalLink, Github, Eye, Star, GitBranch, Users, 
  Calendar, Code, Database, Globe, Smartphone 
} from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UX, secure payments, and admin dashboard. Features include user authentication, product management, order tracking, and analytics.",
      longDescription: "Built from scratch using React and Node.js, this platform handles everything from user registration to payment processing. Implemented Redis for caching, JWT for authentication, and Stripe for payments.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redis", "JWT"],
      category: "fullstack",
      image: "🛒",
      status: "Production",
      stats: {
        stars: 28,
        forks: 12,
        commits: 156,
        contributors: 3
      },
      features: [
        "User authentication & authorization",
        "Product catalog with search & filters",
        "Shopping cart & checkout process",
        "Payment processing with Stripe",
        "Order management system",
        "Admin dashboard with analytics"
      ],
      demoUrl: "#",
      githubUrl: "#",
      liveUsers: "2.3k+",
      uptime: "99.9%"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      longDescription: "A Trello-inspired application built with React and Socket.io for real-time collaboration. Features include board creation, task assignment, file uploads, and team chat.",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      category: "frontend",
      image: "📋",
      status: "Development",
      stats: {
        stars: 15,
        forks: 8,
        commits: 89,
        contributors: 2
      },
      features: [
        "Real-time collaboration",
        "Drag & drop interface",
        "File attachments",
        "Team chat integration",
        "Progress tracking",
        "Mobile responsive design"
      ],
      demoUrl: "#",
      githubUrl: "#",
      liveUsers: "450+",
      uptime: "98.7%"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing complex data sets with charts, filters, and real-time data processing capabilities.",
      longDescription: "A comprehensive analytics platform that processes large datasets and presents insights through interactive visualizations. Built with React and D3.js for the frontend, with a robust C# backend.",
      technologies: ["React", "D3.js", "C#", ".NET", "SQL Server", "Chart.js"],
      category: "backend",
      image: "📊",
      status: "Production",
      stats: {
        stars: 42,
        forks: 18,
        commits: 203,
        contributors: 4
      },
      features: [
        "Real-time data processing",
        "Interactive visualizations",
        "Custom report generation",
        "Data export capabilities",
        "User access controls",
        "Performance monitoring"
      ],
      demoUrl: "#",
      githubUrl: "#",
      liveUsers: "1.8k+",
      uptime: "99.5%"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive personal portfolio showcasing modern web development techniques with smooth animations and optimal performance.",
      longDescription: "This very website you're browsing! Built with React, TypeScript, and Tailwind CSS. Features include smooth animations, responsive design, and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "frontend",
      image: "💼",
      status: "Production",
      stats: {
        stars: 35,
        forks: 14,
        commits: 127,
        contributors: 1
      },
      features: [
        "Responsive design",
        "Smooth animations",
        "SEO optimized",
        "Performance focused",
        "Accessibility compliant",
        "Dark theme design"
      ],
      demoUrl: "#",
      githubUrl: "#",
      liveUsers: "800+",
      uptime: "100%"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Globe },
    { id: "fullstack", label: "Full Stack", icon: Database },
    { id: "frontend", label: "Frontend", icon: Code },
    { id: "backend", label: "Backend", icon: Database },
    { id: "mobile", label: "Mobile", icon: Smartphone }
  ];

  const filteredProjects = (category: string) => {
    if (category === "all") return projects;
    return projects.filter(project => project.category === category);
  };

  return (
    <Layout>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent animate-fade-in">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of my work showcasing problem-solving skills and technical expertise
            </p>
          </div>

          {/* Project Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-12 bg-glass border border-glass-border">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-primary/20"
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid lg:grid-cols-2 gap-8">
                  {filteredProjects(category.id).map((project) => (
                    <Card 
                      key={project.id}
                      className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden"
                    >
                      {/* Project Header */}
                      <div className="h-32 bg-gradient-primary/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                        {project.image}
                        <div className="absolute top-4 right-4">
                          <Badge 
                            variant="secondary"
                            className={
                              project.status === "Production" 
                                ? "bg-green-500/20 text-green-400 border-green-500/30" 
                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-xl text-cyan group-hover:text-purple transition-colors duration-300">
                              {project.title}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        {/* GitHub Stats */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {project.stats.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitBranch className="w-4 h-4" />
                            {project.stats.forks}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {project.stats.contributors}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.stats.commits} commits
                          </div>
                        </div>

                        {/* Live Stats */}
                        {project.status === "Production" && (
                          <div className="grid grid-cols-2 gap-4 p-3 bg-glass rounded-lg border border-glass-border">
                            <div className="text-center">
                              <div className="text-lg font-semibold text-cyan">{project.liveUsers}</div>
                              <div className="text-xs text-muted-foreground">Active Users</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-green-400">{project.uptime}</div>
                              <div className="text-xs text-muted-foreground">Uptime</div>
                            </div>
                          </div>
                        )}

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

                        {/* Key Features */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Key Features:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {project.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-cyan rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
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
              </TabsContent>
            ))}
          </Tabs>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-card border-glass-border shadow-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Interested in Working Together?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always excited to take on new challenges and create innovative solutions. 
                  Let's discuss how I can help bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Link to="/contact">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Start a Project
                    </Link>
                  </Button>
                  <Button 
                    variant="outline"
                    asChild
                    className="border-glass-border bg-glass hover:bg-glass/20 backdrop-blur-sm"
                  >
                    <Link to="/skills">
                      <Code className="w-5 h-5 mr-2" />
                      View Skills
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
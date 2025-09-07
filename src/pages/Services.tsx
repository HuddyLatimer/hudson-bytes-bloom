import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  Laptop, 
  Store, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  TrendingUp,
  Shield,
  Clock,
  Sparkles,
  Target,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Store className="w-8 h-8" />,
      title: "Business Websites",
      description: "Professional websites that drive results for your business",
      features: [
        "Custom responsive design",
        "SEO optimization",
        "Content management system",
        "Contact forms & analytics",
        "Social media integration",
        "Fast loading & secure"
      ],
      price: "Starting at $299",
      popular: true
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Personal Websites",
      description: "Showcase your story with a stunning personal portfolio",
      features: [
        "Modern portfolio design",
        "Blog integration",
        "Photo galleries",
        "Personal branding",
        "Mobile optimization",
        "Easy content updates"
      ],
      price: "Starting at $99",
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Website Upgrades",
      description: "Transform your existing site into a modern masterpiece",
      features: [
        "Performance optimization",
        "Mobile responsiveness",
        "Modern design refresh",
        "Security improvements",
        "SEO enhancements",
        "Feature additions"
      ],
      price: "Starting at $85",
      popular: false
    }
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Technology",
      description: "Built with React, TypeScript, and Tailwind CSS for maximum performance"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Design",
      description: "Responsive designs that work perfectly on all devices and screen sizes"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Built with search engine optimization in mind to help you get found online"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Focused",
      description: "Lightning-fast loading times and optimized user experience"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Industry-standard security practices and reliable hosting solutions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Turnaround",
      description: "Fast delivery times without compromising on quality or attention to detail"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Hudson transformed our outdated website into a modern, professional site that has significantly increased our online inquiries.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Freelance Designer",
      content: "The personal portfolio Hudson created for me perfectly captures my style and has helped me land several new clients.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Restaurant Owner",
      content: "Our website upgrade was completed ahead of schedule and the results exceeded our expectations. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Animated Background */}
      <div className="fixed inset-0 animate-mesh opacity-30 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative">
        {/* Floating Elements */}
        <div className="absolute top-40 left-10 w-20 h-20 rounded-full bg-steel/20 animate-float opacity-60" />
        <div className="absolute top-60 right-20 w-16 h-16 rounded-full bg-electric/20 animate-float delay-1000 opacity-40" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-charcoal/30 animate-float delay-2000 opacity-50" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="animate-slide-up">
            <Badge className="mb-6 bg-gradient-primary text-white shadow-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional Web Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
              Digital Solutions
              <br />
              <span className="text-steel">That Deliver</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Elevate your digital presence with cutting-edge websites that combine stunning design 
              with powerful functionality. From concept to deployment, I deliver results that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-105 group" 
                asChild
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-glass-border bg-glass hover:bg-steel/10 hover:border-steel/30 transition-all duration-500" 
                asChild
              >
                <Link to="/projects">Portfolio Showcase</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <Target className="w-6 h-6 text-steel" />
              <span className="text-steel font-medium">Service Packages</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="bg-gradient-text bg-clip-text text-transparent">Perfect Solution</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored packages designed to meet your specific needs, from startup ventures 
              to established businesses looking to upgrade their digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`relative bg-gradient-card border-glass-border hover:shadow-glow transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 group ${
                  service.popular ? 'ring-2 ring-steel/30 shadow-glow' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1 animate-glow">
                      <Layers className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4 relative">
                  <div className="mx-auto mb-4 p-4 rounded-2xl bg-glass border border-glass-border text-steel group-hover:text-electric transition-colors duration-500 group-hover:animate-float">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-steel mt-4 group-hover:text-electric transition-colors duration-500">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 group/item">
                        <CheckCircle className="w-5 h-5 text-steel flex-shrink-0 group-hover/item:text-electric transition-colors duration-300" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-500 hover:scale-105 group/btn"
                    asChild
                  >
                    <Link to="/contact">
                      Get Started 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-text bg-clip-text text-transparent">My Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I combine technical expertise with creative design to deliver websites that not only look great 
              but also perform exceptionally well.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-glass border border-glass-border text-cyan group-hover:text-purple transition-colors duration-300 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="bg-gradient-text bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take my word for it - here's what my clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-glass-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cyan text-cyan" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="bg-gradient-text bg-clip-text text-transparent">Get Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your project and bring your vision to life. 
            Get a free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-glass-border bg-glass hover:bg-glass/20">
              <a href="mailto:hudsonlatimer4@gmail.com">Email Me Directly</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
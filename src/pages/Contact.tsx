import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  Mail, Phone, MapPin, Send, Clock, CheckCircle, 
  MessageSquare, Calendar, User, FileText 
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    projectType: '',
    message: ''
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xqalgobe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
        });
        setFormData({ 
          name: '', 
          email: '', 
          company: '', 
          budget: '', 
          timeline: '', 
          projectType: '', 
          message: '' 
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hudsonlatimer4@gmail.com",
      href: "mailto:hudsonlatimer4@gmail.com",
      color: "cyan",
      description: "Best for detailed project discussions"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(786) 883-5308",
      href: "tel:7868835308",
      color: "purple",
      description: "Available Mon-Fri, 9 AM - 6 PM EST"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Miami, FL & Halifax, NS",
      href: "#",
      color: "cyan",
      description: "Remote work & local meetups available"
    }
  ];

  const projectTypes = [
    "Website Development",
    "Web Application",
    "E-Commerce Platform", 
    "Portfolio/Landing Page",
    "API Development",
    "Database Design",
    "Code Review/Consultation",
    "Other"
  ];

  const budgetRanges = [
    "< $1,000",
    "$1,000 - $5,000", 
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "Hourly Rate Discussion"
  ];

  const timelines = [
    "Rush (< 2 weeks)",
    "Standard (2-4 weeks)",
    "Extended (1-3 months)",
    "Long-term (3+ months)",
    "Flexible"
  ];

  const currentStatus = {
    availability: "Available",
    responseTime: "< 24 hours",
    currentProjects: 2,
    nextAvailable: "Immediately"
  };

  return (
    <Layout>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent animate-fade-in">
              Let's Build Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to turn your ideas into reality? I'm here to help you create amazing web experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Availability Status */}
              <Card className="bg-gradient-card border-glass-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <h3 className="font-semibold text-green-400">Currently Available</h3>
                        <p className="text-sm text-muted-foreground">Accepting new projects • Response time: {currentStatus.responseTime}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Open for Work
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Main Contact Form */}
              <Card className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan flex items-center gap-3">
                    <MessageSquare className="w-6 h-6" />
                    Project Inquiry
                  </CardTitle>
                  <p className="text-muted-foreground">Tell me about your project and let's see how I can help</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="bg-glass border-glass-border focus:border-cyan transition-colors duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-glass border-glass-border focus:border-cyan transition-colors duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company (optional)"
                        className="bg-glass border-glass-border focus:border-cyan transition-colors duration-300"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type</Label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-glass border border-glass-border rounded-md focus:border-cyan transition-colors duration-300 text-foreground"
                        >
                          <option value="">Select type</option>
                          {projectTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-glass border border-glass-border rounded-md focus:border-cyan transition-colors duration-300 text-foreground"
                        >
                          <option value="">Select budget</option>
                          {budgetRanges.map(range => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-glass border border-glass-border rounded-md focus:border-cyan transition-colors duration-300 text-foreground"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map(timeline => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Project Description *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project goals, requirements, and any specific features you need..."
                        required
                        rows={6}
                        className="bg-glass border-glass-border focus:border-cyan transition-colors duration-300 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Project Inquiry'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <Card 
                    key={method.label}
                    className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <a 
                        href={method.href}
                        className="block group-hover:scale-105 transition-transform duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-full bg-${method.color}/20 group-hover:bg-${method.color}/30 transition-colors duration-300`}>
                            <method.icon className={`w-6 h-6 text-${method.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{method.label}</h4>
                            <p className="text-muted-foreground text-sm mb-1">{method.value}</p>
                            <p className="text-xs text-muted-foreground">{method.description}</p>
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ */}
              <Card className="bg-gradient-card border-glass-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Response Time</span>
                      <Badge variant="outline" className="text-xs">&lt; 24 hours</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Typical Project Duration</span>
                      <Badge variant="outline" className="text-xs">2-8 weeks</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Work Style</span>
                      <Badge variant="outline" className="text-xs">Remote + Local</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Time Zone</span>
                      <Badge variant="outline" className="text-xs">EST/AST</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process */}
              <Card className="bg-gradient-card border-glass-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan" />
                    My Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Initial consultation & requirements gathering",
                      "Project proposal & timeline creation", 
                      "Design mockups & user experience planning",
                      "Development with regular progress updates",
                      "Testing, deployment & post-launch support"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center text-xs text-cyan font-semibold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-sm text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
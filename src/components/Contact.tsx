import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hudsonlatimer4@gmail.com",
      href: "mailto:hudsonlatimer4@gmail.com",
      color: "cyan"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(786) 883-5308",
      href: "tel:7868835308",
      color: "purple"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Miami, FL & Halifax, NS",
      href: "#",
      color: "cyan"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project 
            and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-glass border-glass-border focus:border-cyan transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
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
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-glass border-glass-border focus:border-cyan transition-colors duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="bg-glass border-glass-border focus:border-cyan transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborations, or just chat about 
                the latest in web development. Whether you have a project in mind or want to connect, 
                I'd love to hear from you!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card 
                  key={info.label}
                  className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <a 
                      href={info.href}
                      className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`p-3 rounded-full bg-${info.color}/20 group-hover:bg-${info.color}/30 transition-colors duration-300`}>
                        <info.icon className={`w-6 h-6 text-${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.label}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Availability Status */}
            <Card className="bg-gradient-card border-glass-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold">Available for Projects</h4>
                    <p className="text-sm text-muted-foreground">
                      Currently accepting new freelance opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
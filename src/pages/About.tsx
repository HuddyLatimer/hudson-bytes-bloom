import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Terminal from "@/components/Terminal";
import { MapPin, GraduationCap, Calendar, Code, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const terminalCommands = [
    {
      command: "whoami",
      output: "hudson_latimer",
      delay: 500
    },
    {
      command: "cat personal_info.json",
      output: (
        <pre className="text-cyan">
{`{
  "name": "Hudson Latimer",
  "age": 19,
  "location": ["Miami, FL", "Halifax, NS"],
  "role": "Freelance Web Developer",
  "education": "IT Programming Student",
  "passion": "Building innovative web solutions",
  "status": "Available for hire"
}`}
        </pre>
      ),
      delay: 1500
    },
    {
      command: "ls -la skills/",
      output: (
        <div className="space-y-1">
          <div className="text-blue-400">drwxr-xr-x frontend/</div>
          <div className="text-blue-400">drwxr-xr-x backend/</div>
          <div className="text-blue-400">drwxr-xr-x systems/</div>
          <div className="text-green-400">-rw-r--r-- problem_solving.skill</div>
          <div className="text-green-400">-rw-r--r-- continuous_learning.skill</div>
        </div>
      ),
      delay: 2000
    },
    {
      command: "git log --oneline --graph",
      output: (
        <div className="space-y-1 text-yellow-400">
          <div>* 2024-01 Started freelance journey</div>
          <div>* 2023-09 Enrolled in IT Programming</div>
          <div>* 2023-06 Built first full-stack app</div>
          <div>* 2022-12 Learned React & Node.js</div>
          <div>* 2022-08 Started web development</div>
        </div>
      ),
      delay: 2500
    }
  ];

  const stats = [
    { icon: MapPin, label: "Based in", value: "Miami & Halifax", color: "cyan" },
    { icon: GraduationCap, label: "Education", value: "IT Programming", color: "purple" },
    { icon: Calendar, label: "Age", value: "19 years old", color: "cyan" },
    { icon: Code, label: "Experience", value: "2+ years coding", color: "purple" }
  ];

  return (
    <Layout>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent animate-fade-in">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get to know the developer behind the code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Terminal Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan mb-4">$ Interactive Bio</h2>
              <Terminal commands={terminalCommands} />
            </div>

            {/* Personal Info Cards */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-purple mb-4">Personal Details</h2>
              
              <div className="grid gap-4">
                {stats.map((stat, index) => (
                  <Card 
                    key={stat.label}
                    className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full bg-${stat.color}/20 group-hover:bg-${stat.color}/30 transition-colors duration-300`}>
                          <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold">{stat.label}</h4>
                          <p className="text-muted-foreground">{stat.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 pt-6">
                <Button 
                  asChild
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Link to="/projects">
                    <FileText className="w-5 h-5 mr-2" />
                    View My Projects
                  </Link>
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-glass-border bg-glass hover:bg-glass/20 backdrop-blur-sm"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <Card className="mt-16 bg-gradient-card border-glass-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-3xl font-semibold mb-6 text-cyan">My Developer Journey</h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My journey into web development started at 17 when I wrote my first "Hello World" in HTML. 
                  What began as curiosity quickly became a passion as I discovered the power of creating 
                  interactive experiences that could reach anyone with an internet connection.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Currently pursuing IT Programming while working as a freelance developer, I split my time 
                  between the vibrant tech scene of Miami and the innovative atmosphere of Halifax, Nova Scotia. 
                  This unique perspective across two different tech communities has shaped my approach to 
                  problem-solving and collaboration.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and creating user experiences that not only 
                  function flawlessly but also delight users. Every project is an opportunity to learn something 
                  new and push the boundaries of what's possible on the web.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Calendar, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A young developer with a passion for creating innovative web solutions 
            and a drive to continuously learn and grow in the tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-cyan">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At 19, I've already embraced the world of web development with enthusiasm and dedication. 
                  Currently pursuing IT Programming, I spend my time between the vibrant tech scene of Miami 
                  and the innovative atmosphere of Halifax, Nova Scotia.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My passion lies in creating clean, efficient code and building user experiences that not only 
                  function perfectly but also delight users. I believe in continuous learning and staying ahead 
                  of the latest technologies and trends in web development.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="grid gap-6">
            <Card className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Miami, FL & Halifax, NS</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple/20 group-hover:bg-purple/30 transition-colors duration-300">
                    <GraduationCap className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-muted-foreground">IT Programming Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-cyan/20 group-hover:bg-cyan/30 transition-colors duration-300">
                    <Calendar className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Age</h4>
                    <p className="text-muted-foreground">19 years old</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple/20 group-hover:bg-purple/30 transition-colors duration-300">
                    <Code className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Focus</h4>
                    <p className="text-muted-foreground">Full-Stack Development</p>
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

export default About;
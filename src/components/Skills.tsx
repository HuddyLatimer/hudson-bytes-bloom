import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      color: "cyan"
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "C#", "C", "C++"],
      color: "purple"
    },
    {
      category: "Systems & Infrastructure",
      icon: "🖥️",
      skills: ["Windows Server", "Operating Systems", "Data Analysis"],
      color: "cyan"
    },
    {
      category: "Tools & Software",
      icon: "🛠️",
      skills: ["Microsoft Office", "Git", "Visual Studio"],
      color: "purple"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, and systems development, 
            constantly evolving with the latest technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.category}
              className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">{category.icon}</span>
                  <span className={`text-${category.color}`}>{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="transition-all duration-300 hover:scale-105 border-cyan/30 hover:bg-cyan/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Level Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-cyan">Proficiency Levels</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-cyan rounded-full"></div>
              <span className="text-sm text-muted-foreground">Proficient</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple rounded-full"></div>
              <span className="text-sm text-muted-foreground">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-muted rounded-full"></div>
              <span className="text-sm text-muted-foreground">Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
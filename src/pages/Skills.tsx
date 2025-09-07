import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Layout from "@/components/Layout";
import CodeBlock from "@/components/CodeBlock";
import { Code2, Database, Server, Wrench, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "React", level: 85, color: "bg-blue-500" },
        { name: "Tailwind CSS", level: 88, color: "bg-cyan-500" }
      ],
      color: "cyan"
    },
    {
      category: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 80, color: "bg-green-500" },
        { name: "C#", level: 75, color: "bg-purple-500" },
        { name: "C/C++", level: 70, color: "bg-blue-600" }
      ],
      color: "purple"
    },
    {
      category: "Systems & Infrastructure",
      icon: Database,
      skills: [
        { name: "Windows Server", level: 78, color: "bg-blue-600" },
        { name: "Operating Systems", level: 82, color: "bg-gray-500" },
        { name: "Data Analysis", level: 75, color: "bg-green-600" }
      ],
      color: "cyan"
    },
    {
      category: "Tools & Productivity",
      icon: Wrench,
      skills: [
        { name: "Git", level: 85, color: "bg-orange-600" },
        { name: "Microsoft Office", level: 90, color: "bg-blue-500" },
        { name: "Visual Studio", level: 88, color: "bg-purple-600" }
      ],
      color: "purple"
    }
  ];

  const codeExamples = [
    {
      language: "JavaScript",
      filename: "portfolio-skills.js",
      code: `// Modern React component with hooks
import { useState, useEffect } from 'react';

const SkillsShowcase = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadSkills = async () => {
      try {
        const response = await fetch('/api/skills');
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error('Failed to load skills:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadSkills();
  }, []);
  
  return (
    <div className="skills-grid">
      {skills.map(skill => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};`
    },
    {
      language: "C#",
      filename: "DataProcessor.cs",
      code: `using System;
using System.Collections.Generic;
using System.Linq;

public class DataProcessor
{
    private readonly ILogger _logger;
    
    public DataProcessor(ILogger logger)
    {
        _logger = logger;
    }
    
    public async Task<ProcessResult> ProcessDataAsync(
        IEnumerable<DataModel> data)
    {
        try
        {
            var validData = data
                .Where(x => x.IsValid)
                .Select(x => x.Transform())
                .ToList();
                
            await SaveDataAsync(validData);
            
            return new ProcessResult 
            { 
                Success = true,
                ProcessedCount = validData.Count 
            };
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Data processing failed");
            return ProcessResult.Failed(ex.Message);
        }
    }
}`
    }
  ];

  return (
    <Layout>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent animate-fade-in">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit built through hands-on experience and continuous learning
            </p>
          </div>

          {/* Skills Overview */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.category}
                className="bg-gradient-card border-glass-border shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className={`p-2 rounded-lg bg-${category.color}/20 group-hover:bg-${category.color}/30 transition-colors duration-300`}>
                      <category.icon className={`w-5 h-5 text-${category.color}`} />
                    </div>
                    <span className={`text-${category.color}`}>{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Code Examples */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              <Zap className="inline w-8 h-8 mr-3 text-cyan" />
              Code in Action
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {codeExamples.map((example, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-cyan/20 text-cyan border-cyan/30">
                      {example.language}
                    </Badge>
                    <span className="text-muted-foreground">Recent project snippet</span>
                  </div>
                  <CodeBlock 
                    language={example.language}
                    filename={example.filename}
                    code={example.code}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <Card className="bg-gradient-card border-glass-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-purple" />
                Continuous Learning
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-cyan">Currently Exploring</h4>
                  <div className="space-y-2">
                    <Badge variant="outline" className="block w-fit">TypeScript</Badge>
                    <Badge variant="outline" className="block w-fit">Next.js</Badge>
                    <Badge variant="outline" className="block w-fit">Docker</Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple">Next on List</h4>
                  <div className="space-y-2">
                    <Badge variant="outline" className="block w-fit">GraphQL</Badge>
                    <Badge variant="outline" className="block w-fit">AWS</Badge>
                    <Badge variant="outline" className="block w-fit">Machine Learning</Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-cyan">Learning Philosophy</h4>
                  <p className="text-sm text-muted-foreground">
                    Technology evolves rapidly, and I believe in staying curious and adaptable. 
                    Every project is an opportunity to learn something new.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Ready to see these skills in action?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                <Link to="/projects">View My Projects</Link>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-glass-border bg-glass hover:bg-glass/20 backdrop-blur-sm"
              >
                <Link to="/contact">Discuss a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
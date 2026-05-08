const skillCategories = [
  {
    title: "Programming",
    skills: ["Arduino C/C++", "JavaScript", "Python", "TypeScript"],
  },
  {
    title: "Electronics",
    skills: ["Circuit Design", "Arduino Programming", "Domotics Systems", "Acoustic Electronics", "Sensor Integration"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "Bootstrap", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "VS Code", "Arduino IDE", "Figma", "Linux"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">What I work with</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <h3 className="text-foreground font-semibold mb-4 text-lg">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

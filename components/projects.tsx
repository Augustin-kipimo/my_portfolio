import { ExternalLink, Github, Cpu, Home, Volume2 } from "lucide-react";

const projects = [
  {
    title: "Home Automation System",
    description:
      "A comprehensive domotics solution built with Arduino that controls lighting, temperature, and security systems through a mobile interface.",
    tags: ["Arduino", "IoT", "C++", "Mobile App"],
    icon: Home,
    github: "#",
    demo: "#",
  },
  {
    title: "Acoustic Electronics Project",
    description:
      "Designed and implemented acoustic systems with advanced signal processing capabilities for audio enhancement and noise reduction.",
    tags: ["Electronics", "Signal Processing", "Arduino"],
    icon: Volume2,
    github: "#",
    demo: "#",
  },
  {
    title: "Circuit Design Portfolio",
    description:
      "A collection of custom circuit designs including power supplies, amplifiers, and sensor interfaces for various IoT applications.",
    tags: ["Circuit Design", "PCB", "Prototyping"],
    icon: Cpu,
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">My recent work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <project.icon className="text-primary" size={24} />
              </div>
              
              <h3 className="text-foreground font-semibold text-lg mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-secondary text-muted-foreground rounded text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Augustin-kipimo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

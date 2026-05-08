import { ExternalLink, Cpu, Home, Volume2 } from "lucide-react";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

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
                  <GitHubIcon size={16} />
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
            <GitHubIcon size={18} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

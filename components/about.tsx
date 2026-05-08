import { Code, Cpu, Globe, Zap } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Electronics",
    description: "Hands-on experience with Arduino, circuit design, and acoustic electronics",
  },
  {
    icon: Zap,
    title: "Home Automation",
    description: "Building domotics systems that bring intelligence to living spaces",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Crafting web applications with modern technologies and best practices",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "Creating responsive, accessible, and user-friendly interfaces",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a passionate and driven Software Engineering student building upon a solid 
              foundation in electronics. My academic journey began with hands-on experience 
              in secondary school, where I worked with Arduino, domotics (home automation), 
              and acoustic electronics.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This gave me a tangible understanding of how software interacts with the 
              physical world. Currently at university, I am deepening my software expertise 
              by mastering core technologies and exploring new frontiers in development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in the power of technology to solve real-world problems and am 
              always eager to learn and grow. My goal is to build innovative solutions 
              that make a positive impact.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

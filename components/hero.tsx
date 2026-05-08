import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/augustin-kamondo-985583308/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Augustin-kipimo",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://x.com/AKipimo33357",
    icon: Twitter,
    label: "X (Twitter)",
  },
  {
    href: "mailto:augustinkipimo22@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <p className="text-primary font-mono text-sm mb-4">Hello, I am</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Augustin Kipimo
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Software Engineer & Electronics Enthusiast
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Building software that bridges the digital and physical worlds. 
              Passionate about Arduino, home automation, and crafting elegant web experiences.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                <Image
                  src="/images/Augustin.jpg"
                  alt="Augustin Kipimo"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-16">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

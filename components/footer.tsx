import { Github, Linkedin, Twitter, Mail } from "lucide-react";

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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold text-lg mb-1">
              Augustin Kipimo
            </p>
            <p className="text-muted-foreground text-sm">
              Software Engineer & Electronics Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-4">
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
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            {currentYear} Augustin Kipimo. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/sobre-nosotros", label: "Sobre Nosotros" },
  { to: "/certificados", label: "Certificados" },
  { to: "/contacto", label: "Contacto" },
];

const WHATSAPP = "https://wa.me/5216622457005?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="group leading-tight transition-transform duration-300 hover:scale-[1.02]">
          <div className="font-serif text-2xl text-foreground tracking-wide bg-gradient-primary bg-clip-text text-transparent">
            Face Clinic
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-0.5 transition-all duration-300 group-hover:tracking-[0.4em] group-hover:text-primary">
            Hermosillo
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${isActive ? "text-primary" : "text-foreground/70 hover:text-primary"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild variant="default" size="sm" className="rounded-full bg-gradient-primary border-0 shadow-soft">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4" /> Agendar Cita
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground rounded-full transition-all duration-300 hover:bg-primary/10 hover:text-primary active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`absolute inset-0 transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}
            />
            <X
              className={`absolute inset-0 transition-all duration-300 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`lg:hidden border-t border-border bg-background overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={({ isActive }) =>
                `text-base py-2 transition-all duration-300 hover:text-primary hover:translate-x-1 ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                } ${isActive ? "text-primary" : "text-foreground/80"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild className="rounded-full bg-gradient-primary border-0 mt-2 transition-transform duration-200 hover:scale-105 active:scale-95">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Agendar Cita</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

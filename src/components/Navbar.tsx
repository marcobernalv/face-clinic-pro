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
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-serif text-xl">F</div>
          <div className="leading-tight">
            <div className="font-serif text-xl text-foreground">Face Clinic</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Hermosillo</div>
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
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-base py-2 ${isActive ? "text-primary" : "text-foreground/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="rounded-full bg-gradient-primary border-0 mt-2">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Agendar Cita</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

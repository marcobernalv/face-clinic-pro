import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { treatments } from "@/data/treatments";

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
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
    setSubmenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="group leading-tight transition-transform duration-300 hover:scale-[1.02]">
          <div className="font-serif text-2xl font-semibold text-primary tracking-wide leading-none">
            Face Clinic
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-0.5 transition-all duration-300 group-hover:tracking-[0.4em] group-hover:text-primary">
            Hermosillo
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) =>
            l.to === "/servicios" ? (
              <div key={l.to} className="relative group">
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `relative inline-flex items-center gap-1 text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                      isActive
                        ? "text-primary after:w-full"
                        : "text-foreground/70 hover:text-primary after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {l.label}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </NavLink>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-background border border-border rounded-xl shadow-elegant py-2 min-w-[260px]">
                    {treatments.map((t) => (
                      <Link
                        key={t.slug}
                        to={`/servicios/${t.slug}`}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                    isActive
                      ? "text-primary after:w-full"
                      : "text-foreground/70 hover:text-primary after:w-0 hover:after:w-full"
                  }`
                }
              >
                {l.label}
              </NavLink>
            )
          )}
          <Button asChild variant="default" size="sm" className="rounded-full bg-gradient-primary border-0 shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
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
          open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {links.map((l, i) =>
            l.to === "/servicios" ? (
              <div key={l.to} style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }} className={`transition-all duration-300 ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
                <div className="flex items-center justify-between">
                  <NavLink
                    to={l.to}
                    end
                    className={({ isActive }) =>
                      `text-base py-2 transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
                    }
                  >
                    {l.label}
                  </NavLink>
                  <button
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className="p-2 text-foreground/60 hover:text-primary transition-colors"
                    aria-label="Tratamientos"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${submenuOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                <div
                  className={`transition-all duration-300 ${
                    submenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-y-auto`}
                >
                  <div className="pl-4 border-l border-border ml-1 mt-2 flex flex-col gap-1">
                    {treatments.map((t) => (
                      <NavLink
                        key={t.slug}
                        to={`/servicios/${t.slug}`}
                        className={({ isActive }) =>
                          `text-sm py-1.5 transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground/70"}`
                        }
                      >
                        {t.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
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
            )
          )}
          <Button asChild className="rounded-full bg-gradient-primary border-0 mt-2 transition-transform duration-200 hover:scale-105 active:scale-95">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Agendar Cita</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary/60 border-t border-border mt-20">
    <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
      <div>
        <div className="font-serif text-2xl text-primary font-semibold mb-4">Face Clinic</div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Dra. Luz María Lopez Saavedra Maxilofacial Hermosillo y estética facial. Excelencia medica y atención personalizada.
        </p>
      </div>
      <div>
        <h4 className="font-serif text-lg mb-4">Navegación</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Inicio</Link></li>
          <li><Link to="/servicios" className="hover:text-primary">Servicios</Link></li>
          <li><Link to="/sobre-nosotros" className="hover:text-primary">Sobre Nosotros</Link></li>
          <li><Link to="/certificados" className="hover:text-primary">Certificados</Link></li>
          <li><Link to="/contacto" className="hover:text-primary">Contacto</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-serif text-lg mb-4">Contacto</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><Phone className="w-4 h-4 text-primary mt-0.5"/> 662 245 7005</li>
          <li className="flex gap-2"><Phone className="w-4 h-4 text-primary mt-0.5"/> 662 683 2347</li>
          <li className="flex gap-2"><Mail className="w-4 h-4 text-primary mt-0.5"/> faceclinichmo@gmail.com</li>
          <li className="flex gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5"/> Av. San Luis Potosí 102, San Benito, Hermosillo</li>
        </ul>
      </div>
      <div>
        <h4 className="font-serif text-lg mb-4">Síguenos</h4>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/share/1CGWAg9rwi/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft"><Facebook className="w-4 h-4"/></a>
          <a href="https://www.instagram.com/draluzmarialopezsaavedra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft"><Instagram className="w-4 h-4"/></a>
        </div>
        <p className="text-xs text-muted-foreground mt-6">Cédula Prof. 7875677 · Estatal SON. 55459</p>
      </div>
    </div>
    <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Face Clinic — Dra. Luz María López Saavedra. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;

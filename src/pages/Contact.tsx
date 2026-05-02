import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Nombre demasiado corto").max(100),
  phone: z.string().trim().min(7, "Teléfono inválido").max(20),
  email: z.string().trim().email("Correo inválido").max(255),
  service: z.string().trim().min(1, "Selecciona un servicio"),
  message: z.string().trim().min(5, "Mensaje muy corto").max(1000),
});

const services = [
  "Consulta de valoración",
  "Cirugía maxilofacial",
  "Implantes dentales",
  "Cirugía ortognática",
  "Extracción de muelas del juicio",
  "Toxina botulínica / Rellenos",
  "Blefaroplastia / Lipopapada",
  "Tratamiento facial / Láser CO2",
  "Otro",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast({ title: "Revisa el formulario", description: r.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    const text = `*Nombre*: Hola, soy ${form.name}.\n\n*Servicio de interés*: ${form.service}.\n\n*Número*: ${form.phone}\n\n*Email*: ${form.email}\n\n*Mensaje*: ${form.message}`;
    window.open(`https://wa.me/5216622457005?text=${encodeURIComponent(text)}`, "_blank");
    setTimeout(()=>{ setLoading(false); toast({ title: "¡Gracias!", description: "Te contactaremos a la brevedad." }); }, 600);
  };

  return (
    <Layout>
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Contacto</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6">Agenda tu cita hoy</h1>
          <p className="text-muted-foreground text-lg">Estamos para escucharte. Contáctanos por WhatsApp o llena el formulario y te respondemos a la brevedad.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <form onSubmit={submit} className="lg:col-span-3 bg-background border border-border rounded-2xl p-8 shadow-card space-y-5">
          <h2 className="font-serif text-3xl mb-2">Envíanos un mensaje</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="mt-1.5 rounded-xl" maxLength={100} required />
            </div>
            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" type="tel" value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} className="mt-1.5 rounded-xl" maxLength={20} required />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Correo</Label>
            <Input id="email" type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="mt-1.5 rounded-xl" maxLength={255} required />
          </div>
          <div>
            <Label>Servicio de interés</Label>
            <Select value={form.service} onValueChange={(v)=>setForm({...form, service: v})}>
              <SelectTrigger className="mt-1.5 rounded-xl"><SelectValue placeholder="Selecciona un servicio"/></SelectTrigger>
              <SelectContent>
                {services.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} className="mt-1.5 rounded-xl min-h-[120px]" maxLength={1000} required />
          </div>
          <Button type="submit" disabled={loading} className="w-full rounded-full bg-gradient-primary border-0 shadow-elegant py-6 text-base">
            {loading ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>

        {/* Info */}
        <div className="lg:col-span-2 space-y-5">
          <a href="https://wa.me/5216622457005?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer" className="block bg-[#25D366] text-white rounded-2xl p-6 shadow-elegant hover:scale-[1.02] transition-transform">
            <div className="flex items-center gap-4">
              <MessageCircle className="w-10 h-10"/>
              <div>
                <div className="font-serif text-2xl">WhatsApp directo</div>
                <div className="text-sm opacity-90">662 245 7005</div>
              </div>
            </div>
          </a>

          <div className="bg-background border border-border rounded-2xl p-6 shadow-soft space-y-4">
            <h3 className="font-serif text-xl">Información de contacto</h3>
            <div className="flex gap-3 text-sm"><Phone className="w-5 h-5 text-primary flex-shrink-0"/><div><div>662 245 7005</div><div>662 683 2347</div></div></div>
            <div className="flex gap-3 text-sm"><Mail className="w-5 h-5 text-primary flex-shrink-0"/>faceclinichmo@gmail.com</div>
            <div className="flex gap-3 text-sm"><MapPin className="w-5 h-5 text-primary flex-shrink-0"/>Av. San Luis Potosí 102, San Benito, 83190 Hermosillo, Son.</div>
          </div>

          <div className="bg-background border border-border rounded-2xl p-6 shadow-soft">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-primary"/>
              <h3 className="font-serif text-xl">Horario de atención</h3>
            </div>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li className="flex justify-between"><span>Lunes – Viernes</span><span>9:00–14:00 / 16:00–20:00</span></li>
              <li className="flex justify-between"><span>Sábado</span><span>10:00–14:00</span></li>
              <li className="flex justify-between text-muted-foreground"><span>Domingo</span><span>Cerrado</span></li>
            </ul>
          </div>

          <div className="bg-background border border-border rounded-2xl p-6 shadow-soft">
            <h3 className="font-serif text-xl mb-3">Síguenos</h3>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1CGWAg9rwi/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="https://www.instagram.com/draluzmarialopezsaavedra" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-2xl overflow-hidden shadow-card border border-border">
          <iframe
            title="Ubicación Face Clinic"
            src="https://www.google.com/maps?q=Av.%20San%20Luis%20Potos%C3%AD%20102%2C%20San%20Benito%2C%2083190%20Hermosillo%2C%20Son.&output=embed"
            className="w-full h-[450px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

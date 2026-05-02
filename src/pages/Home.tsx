import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Star, Award, Heart, Sparkles, Phone, MapPin, Clock } from "lucide-react";
import doctora from "@/assets/doctora-libro.jpg";
import doctoraRx from "@/assets/doctora-rx.jpg";

const WHATSAPP = "https://wa.me/5216622457005?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur border border-border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/70">Hermosillo, Sonora</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Belleza que sana,<br />
              <span className="italic text-primary">confianza que dura.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Clínica especializada en cirugía maxilofacial y estética facial. Resultados naturales, seguridad médica y atención personalizada de la Dra. Luz María López Saavedra.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full bg-gradient-primary border-0 shadow-elegant text-base px-8">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  Agendar por WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary/40 text-foreground hover:bg-primary/10 px-8">
                <Link to="/contacto">Contáctanos</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_,i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">163 reseñas</span> de pacientes satisfechos
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-[2rem] blur-2xl opacity-20" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/5] bg-muted">
              <img src={doctora} alt="Dra. Luz María López Saavedra, cirujano maxilofacial en Hermosillo" className="w-full h-full object-cover" width={1024} height={1280} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-5 shadow-card hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-serif text-lg leading-tight">+10 años</div>
                  <div className="text-xs text-muted-foreground">de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Award, label: "Cirujano certificada" },
            { icon: Heart, label: "Atención personalizada" },
            { icon: Sparkles, label: "Resultados naturales" },
            { icon: Star, label: "Especialista de confianza" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="w-6 h-6 text-primary" />
              <div className="text-sm text-foreground/80">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-[2rem] overflow-hidden shadow-card aspect-[4/5] order-2 lg:order-1">
          <img src={doctoraRx} alt="Dra. Luz María revisando radiografía" className="w-full h-full object-cover" loading="lazy" width={916} height={1235} />
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Sobre la clínica</span>
          <h2 className="font-serif text-4xl md:text-5xl">Cuidado facial con sello médico y mirada estética.</h2>
          <p className="text-muted-foreground leading-relaxed">
            En Face Clinic combinamos rigor médico con sensibilidad estética. Cada tratamiento se diseña a la medida, priorizando la armonía natural del rostro y el bienestar integral del paciente.
          </p>
          <Button asChild variant="outline" className="rounded-full border-primary/40">
            <Link to="/sobre-nosotros">Conoce a la Dra. Luz María <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      {/* CTA quick info */}
      <section className="bg-gradient-soft">
        <div className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: "Visítanos", text: "Av. San Luis Potosí 102, San Benito, Hermosillo" },
            { icon: Clock, title: "Horario", text: "Lun–Vie 9:00–14:00 / 16:00–20:00 · Sáb 10:00–14:00" },
            { icon: Phone, title: "Llámanos", text: "662 245 7005 · 662 683 2347" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background rounded-2xl p-7 shadow-soft">
              <Icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-serif text-xl mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;

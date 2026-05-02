import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Sparkles, Smile, Activity, Syringe, Scissors, ShieldCheck, Bone } from "lucide-react";

const medical = [
  { name: "Extracción de muelas del juicio", desc: "Extracción quirúrgica de terceros molares o dientes incluidos con técnica mínimamente invasiva." },
  { name: "Implantes dentales", desc: "Reemplazo seguro y duradero de piezas perdidas para recuperar función y estética." },
  { name: "Cirugía ortognática", desc: "Corrección de la estructura maxilar para mejorar función masticatoria y armonía facial." },
  { name: "Trastornos de la ATM", desc: "Diagnóstico y tratamiento de la articulación temporomandibular y bruxismo." },
  { name: "Injerto y regeneración ósea", desc: "Recuperación del soporte óseo para implantes y reconstrucciones complejas." },
  { name: "Fracturas y trauma facial", desc: "Manejo experto de lesiones maxilofaciales con enfoque estético." },
  { name: "Quistes y tumores maxilares", desc: "Tratamiento quirúrgico oportuno con seguimiento personalizado." },
  { name: "Cirugía de frenillo", desc: "Procedimientos rápidos para frenillo lingual o labial en niños y adultos." },
];

const aesthetic = [
  { name: "Toxina botulínica", desc: "Suaviza líneas de expresión conservando un gesto natural." },
  { name: "Rellenos dérmicos", desc: "Devuelve volumen y armoniza facciones con ácido hialurónico." },
  { name: "Blefaroplastia", desc: "Rejuvenece la mirada eliminando exceso de piel en párpados." },
  { name: "Lipopapada", desc: "Define el contorno mandibular y elimina papada con resultados visibles." },
  { name: "CO2 fraccionado", desc: "Renueva la piel, atenúa cicatrices y manchas con láser de precisión." },
  { name: "Peeling y rejuvenecimiento", desc: "Tratamientos para luminosidad, textura y firmeza de la piel." },
  { name: "Radiofrecuencia", desc: "Tensa y reafirma la piel del rostro de forma no invasiva." },
  { name: "Faciales con aparatología", desc: "Limpieza profunda, ultrasonido terapéutico y protocolos personalizados." },
];

const ServiceCard = ({ icon: Icon, name, desc }: any) => (
  <div className="group bg-background border border-border rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
    </div>
    <h3 className="font-serif text-xl mb-2">{name}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

const icons = [Stethoscope, Smile, Bone, Activity, ShieldCheck, Scissors, Sparkles, Syringe];

const Services = () => (
  <Layout>
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Nuestros servicios</span>
        <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6">Tratamientos diseñados para ti</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Atención maxilofacial y estética facial con enfoque integral, respaldada por años de experiencia hospitalaria y técnica mínimamente invasiva.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-20">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Cirugía Maxilofacial</span>
          <h2 className="font-serif text-4xl mt-2">Servicios médicos</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {medical.map((s, i) => <ServiceCard key={s.name} {...s} icon={icons[i % icons.length]} />)}
      </div>
    </section>

    <section className="bg-gradient-soft py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Estética Facial</span>
          <h2 className="font-serif text-4xl mt-2">Procedimientos estéticos</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {aesthetic.map((s, i) => <ServiceCard key={s.name} {...s} icon={icons[(i+3) % icons.length]} />)}
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-20 text-center">
      <h2 className="font-serif text-4xl md:text-5xl mb-4">¿No sabes qué tratamiento necesitas?</h2>
      <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Agenda una valoración personalizada y diseñemos juntos el plan ideal para ti.</p>
      <Button asChild size="lg" className="rounded-full bg-gradient-primary border-0 shadow-elegant px-10">
        <Link to="/contacto">Agendar valoración <ArrowRight className="w-4 h-4" /></Link>
      </Button>
    </section>
  </Layout>
);

export default Services;

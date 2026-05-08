import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Sparkles, Smile, Activity, Syringe, Scissors, ShieldCheck, Bone } from "lucide-react";
import { treatments } from "@/data/treatments";

const medical = [
  {
    name: "Implante Dental",
    desc: "La pérdida de uno o varios dientes puede afectar la apariencia y la funcionalidad de la boca. Los implantes dentales son una solución moderna, segura y duradera: un tornillo de titanio se coloca en el hueso maxilar o mandibular como raíz artificial y sobre él se fija una corona que imita la forma, color y función del diente natural. Mejoran la estética, devuelven la masticación y el habla, conservan el hueso y evitan desgastar dientes vecinos.",
  },
  {
    name: "Cirugía Ortognática",
    desc: "Procedimiento quirúrgico para corregir alteraciones en la posición de los maxilares que pueden afectar la mordida, el habla e incluso la respiración. Mejora tanto la función como la estética facial, alineando los maxilares de forma armónica. Generalmente se complementa con ortodoncia para lograr resultados óptimos y estables a largo plazo.",
  },
  {
    name: "Diente Retenido",
    desc: "Un diente retenido es aquel que no logra erupcionar correctamente y permanece dentro del hueso o la encía. Es frecuente en muelas del juicio, aunque también ocurre en otros dientes. Puede causar dolor, infecciones o afectar piezas vecinas; en muchos casos se recomienda extracción quirúrgica para prevenir complicaciones.",
  },
  {
    name: "Cirugía de Terceros Molares",
    desc: "La extracción de las muelas del juicio es uno de los procedimientos más comunes en cirugía maxilofacial. Se realiza cuando no hay espacio para erupcionar, presentan mala posición o generan molestias, infecciones o daño a otros dientes. Su extracción evita problemas futuros y protege la salud bucal.",
  },
  {
    name: "Patología Oral",
    desc: "Diagnóstico y tratamiento de enfermedades de la cavidad bucal: lesiones, infecciones, quistes y tumores. En algunos casos se realizan estudios como biopsias para identificar con precisión la condición y establecer el tratamiento más adecuado de manera oportuna.",
  },
  {
    name: "Trauma Facial",
    desc: "Lesiones provocadas por accidentes, golpes o caídas que afectan cara, mandíbula y dientes —fracturas, heridas o desplazamientos óseos—. Requieren atención especializada para recuperar tanto la función como la estética facial. El tratamiento depende de la gravedad de cada caso.",
  },
  {
    name: "Frenilectomía y Apicectomía",
    desc: "La frenilectomía elimina o modifica el frenillo cuando limita el habla, la movilidad o la posición de los dientes. La apicectomía es una cirugía en la punta de la raíz del diente para eliminar infecciones persistentes, especialmente cuando el tratamiento de conducto no resolvió el problema.",
  },
  {
    name: "Trastornos de la ATM",
    desc: "Diagnóstico y tratamiento de la articulación temporomandibular y bruxismo, devolviendo función y comodidad.",
  },
  {
    name: "Injerto y regeneración ósea",
    desc: "Recuperación del soporte óseo para implantes y reconstrucciones complejas con técnicas avanzadas.",
  },
];

const aesthetic = [
  { name: "Toxina botulínica", desc: "Suaviza líneas de expresión conservando un gesto natural." },
  { name: "Rellenos dérmicos", desc: "Devuelve volumen y armoniza facciones con ácido hialurónico." },
  { name: "Blefaroplastia", desc: "Rejuvenece la mirada eliminando exceso de piel en párpados." },
  { name: "Lipopapada", desc: "Define el contorno mandibular y elimina papada con resultados visibles." },
  { name: "CO2 Fraccionado", desc: "Renueva la piel, atenúa cicatrices y manchas con láser de precisión." },
  { name: "Peeling y rejuvenecimiento", desc: "Tratamientos para luminosidad, textura y firmeza de la piel." },
  {
    name: "Faciales con aparatología",
    desc: "Oxy facial, Hydrafacial, Radiofrecuencia, Martillo frío, Dermapen, Lifting, Peelings y más.",
  },
];

const ServiceCard = ({ icon: Icon, name, desc, to }: any) => {
  const inner = (
    <div className="group h-full bg-background border border-border rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
      </div>
      <h3 className="font-serif text-xl mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      {to && (
        <span className="inline-flex items-center gap-1 mt-4 text-sm text-primary group-hover:gap-2 transition-all">
          Ver más <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </div>
  );
  return to ? <Link to={to} className="block h-full">{inner}</Link> : inner;
};

const slugMap: Record<string, string> = treatments.reduce((acc, t) => {
  acc[t.name] = t.slug;
  return acc;
}, {} as Record<string, string>);

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {medical.map((s, i) => <ServiceCard key={s.name} {...s} icon={icons[i % icons.length]} to={slugMap[s.name] ? `/servicios/${slugMap[s.name]}` : undefined} />)}
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

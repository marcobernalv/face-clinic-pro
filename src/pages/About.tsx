import Layout from "@/components/Layout";
import { Star, Quote } from "lucide-react";
import doctora from "@/assets/doctora-libro.jpg";
import doctoraRx from "@/assets/doctora-rx.jpg";
import consultorio from "@/assets/consultorio.jpg";
import oficina from "@/assets/oficina.jpg";
import antes from "@/assets/antes-despues.jpg";

const reviews = [
  { name: "D. Verónica G.", text: "Me brindó muy buena atención, con información muy detallada." },
  { name: "JG", text: "Excelente servicio, muy amables, muy buen trato y muy puntuales." },
  { name: "Y.O", text: "Muy buen manejo de la extracción, rápido y sin dolor." },
  { name: "Mhm", text: "Me explicó todo de manera muy clara y el resultado fue exitoso. Muy paciente y comprensiva." },
  { name: "Rosalba A.", text: "Muy buena atención, muy entendible. La explicación fue muy detallada, te valora muy bien." },
  { name: "CCS", text: "Muy buen trato de la doctora, muy paciente y amable. Las instalaciones muy limpias." },
];

const About = () => (
  <Layout>
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Sobre Nosotros</span>
          <h1 className="font-serif text-5xl md:text-6xl">Dra. Luz María López Saavedra</h1>
          <p className="text-lg text-muted-foreground italic">Cirujano Maxilofacial y Especialista en Estética Facial · Hermosillo, Sonora</p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide">Cédula profesional: 7896543</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide">Cédula de especialidad: 11234567</span>
          </div>
          <p className="text-foreground/80 leading-relaxed">
            Con amplia experiencia en cirugía de trauma facial y cirugía ortognática, la Dra. Luz María se especializa en procedimientos mínimamente invasivos que reducen el daño a los tejidos y favorecen una recuperación más rápida.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Su filosofía: cuidar siempre la estética facial buscando resultados que mejoren la salud y respeten la armonía y naturalidad del rostro.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex">{[...Array(5)].map((_,i)=><Star key={i} className="w-5 h-5 fill-gold text-gold"/>)}</div>
            <span className="text-sm text-muted-foreground">163 reseñas verificadas</span>
          </div>
        </div>
        <div className="rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/5]">
          <img src={doctora} alt="Dra. Luz María López Saavedra" className="w-full h-full object-cover" loading="lazy" width={1024} height={1280}/>
        </div>
      </div>
    </section>

    {/* Experience */}
    <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
      <div className="bg-background border border-border rounded-2xl p-8 shadow-soft">
        <h2 className="font-serif text-3xl mb-6">Formación académica</h2>
        <ul className="space-y-4 text-foreground/80">
          <li><strong className="font-medium">Centro Médico Nacional Siglo XXI</strong> · Especialidad (2014–2018)</li>
          <li><strong className="font-medium">Universidad Nacional Autónoma de México</strong> · UNAM (2014–2018)</li>
          <li><strong className="font-medium">Universidad Michoacana de San Nicolás de Hidalgo</strong> · Cirujano Dentista (2007–2012)</li>
        </ul>
      </div>
      <div className="bg-background border border-border rounded-2xl p-8 shadow-soft">
        <h2 className="font-serif text-3xl mb-6">Experiencia hospitalaria</h2>
        <ul className="space-y-4 text-foreground/80">
          <li><strong className="font-medium">Centro Médico Nacional Siglo XXI</strong> (2018)</li>
          <li><strong className="font-medium">Unidad Médica de Alta Especialidad León</strong> (2005)</li>
          <li><strong className="font-medium">IMSS HGR1</strong> (2006–2013)</li>
          <li className="pt-3 border-t border-border text-sm text-muted-foreground">
            Miembro del Colegio de Cirujanos Maxilofaciales del Seguro Social (2018)
          </li>
        </ul>
      </div>
    </section>

    {/* Why us */}
    <section className="bg-gradient-soft py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Por qué elegirnos</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Razones para confiar en Face Clinic</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Especialista certificada", d: "Cédula profesional vigente y formación en hospitales de alta especialidad." },
            { t: "Atención personalizada", d: "Cada paciente recibe un plan único pensado en su bienestar integral." },
            { t: "Técnica mínimamente invasiva", d: "Procedimientos que respetan los tejidos y aceleran tu recuperación." },
            { t: "Resultados naturales", d: "Buscamos siempre la armonía facial, no la exageración." },
            { t: "Instalaciones modernas", d: "Consultorio limpio, equipado y diseñado para tu comodidad." },
            { t: "Trato cálido y humano", d: "Pacientes que vuelven de forma recurrente nos respaldan." },
          ].map(({t,d})=>(
            <div key={t} className="bg-background rounded-2xl p-6 shadow-soft">
              <h3 className="font-serif text-xl mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Galería</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3">Conoce nuestras instalaciones</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[consultorio, oficina, doctoraRx, antes, doctora].map((src, i) => (
          <div key={i} className={`rounded-2xl overflow-hidden shadow-soft ${i===0?"md:col-span-2 md:row-span-2":""}`}>
            <img src={src} alt={`Face Clinic instalaciones ${i+1}`} loading="lazy" className="w-full h-full object-cover aspect-[4/5]" />
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-gradient-soft py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Testimonios</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Lo que dicen nuestros pacientes</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-background rounded-2xl p-7 shadow-soft relative">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-foreground/80 italic leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{r.name}</span>
                <div className="flex">{[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-gold text-gold"/>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;

import Layout from "@/components/Layout";
import cert1 from "@/assets/cert-1.jpg";
import cert2 from "@/assets/cert-2.jpg";
import cert3 from "@/assets/cert-3.jpg";
import cert4 from "@/assets/cert-4.jpg";
import { Award } from "lucide-react";

const certs = [
  { img: cert2, title: "Universidad Nacional Autónoma de México", desc: "Especialidad en Cirugía Oral y Maxilofacial · 2014–2018" },
  { img: cert4, title: "Centro Médico Nacional Siglo XXI", desc: "Formación de Especialidad · 2014–2018" },
  { img: cert1, title: "Cirugía Oral y Maxilofacial", desc: "Certificación de Especialidad" },
  { img: cert3, title: "Colegio de Cirujanos Maxilofaciales", desc: "Miembro activo desde 2018" },
];

const Certificates = () => (
  <Layout>
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Certificados</span>
        <h1 className="font-serif text-5xl md:text-6xl mt-4 mb-6">Credenciales que respaldan tu confianza</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Formación de excelencia en las instituciones médicas más reconocidas de México.
        </p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certs.map((c) => (
          <div key={c.title} className="bg-background rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elegant transition-all">
            <div className="aspect-[3/4] bg-secondary/40 overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover" loading="lazy" width={768} height={1024}/>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary"/>
                </div>
                <div>
                  <h3 className="font-serif text-xl">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto bg-gradient-soft rounded-2xl p-8 text-center">
        <h2 className="font-serif text-3xl mb-3">Cédula profesional</h2>
        <p className="text-muted-foreground">Profesional: <strong className="text-foreground">7875677</strong> · Estatal SON: <strong className="text-foreground">55459</strong></p>
        <p className="text-sm text-muted-foreground mt-4">Publicación: Síndrome Eagle, Revista UNAM (2018)</p>
      </div>
    </section>
  </Layout>
);

export default Certificates;

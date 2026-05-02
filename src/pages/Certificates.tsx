import Layout from "@/components/Layout";
import cert1 from "@/assets/cert-1.jpg";
import cert2 from "@/assets/cert-2.jpg";
import cert3 from "@/assets/cert-3.jpg";
import cert4 from "@/assets/cert-4.jpg";
import cert5 from "@/assets/cert-5.jpg";
import { Award, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const certs = [
  { img: cert1, title: "AOCMF Latin America", desc: "Seminar — Advances in Complex Facial Trauma Management · Guadalajara, 2016" },
  { img: cert2, title: "Colegio Dental de Sonora, A.C.", desc: "Reconocimiento como ponente: Parálisis Facial — Tratamiento Quirúrgico · Hermosillo, 2018" },
  { img: cert3, title: "XXII Seminario Ivoclar Vivadent", desc: "The Quality of Esthetics — Biomimetics State of the Art · CDMX, 2017" },
  { img: cert4, title: "ICDE — Ivoclar Vivadent México", desc: "Técnicas de Elevación de Piso de Seno Maxilar para Colocación de Implantes · CDMX, 2017" },
  { img: cert5, title: "Colegio de Cirujanos Maxilofaciales del Seguro Social", desc: "Certificado como Socio Colegiado" },
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
          <div key={c.title} className="bg-background rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <Dialog>
              <DialogTrigger asChild>
                <button type="button" className="group relative block w-full aspect-[4/3] bg-secondary/40 overflow-hidden cursor-zoom-in" aria-label={`Ver certificado: ${c.title}`}>
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-background/95 backdrop-blur rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium shadow-elegant">
                      <ZoomIn className="w-4 h-4 text-primary" />
                      Ver completo
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl p-2 sm:p-4 bg-background">
                <DialogTitle className="sr-only">{c.title}</DialogTitle>
                <DialogDescription className="sr-only">{c.desc}</DialogDescription>
                <div className="w-full max-h-[85vh] overflow-auto rounded-lg">
                  <img src={c.img} alt={c.title} className="w-full h-auto object-contain animate-scale-in" />
                </div>
                <div className="px-2 pb-2 pt-3 text-center">
                  <h3 className="font-serif text-xl">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                </div>
              </DialogContent>
            </Dialog>
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

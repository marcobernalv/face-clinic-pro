import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { treatments } from "@/data/treatments";

const Treatment = () => {
  const { slug } = useParams();
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) return <Navigate to="/servicios" replace />;

  return (
    <Layout>
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Volver a servicios
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Tratamiento</span>
          <h1 className="font-serif text-4xl md:text-6xl mt-4 mb-6">{treatment.name}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">{treatment.intro}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-3xl">
        {treatment.video && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-elegant border border-border bg-black/5 animate-fade-in">
            <video
              src={treatment.video}
              controls
              preload="metadata"
              playsInline
              className="w-full h-auto block"
            />
          </div>
        )}
        <div className="prose prose-lg max-w-none space-y-6">
          {treatment.paragraphs.map((p, i) => (
            <p key={i} className="text-foreground/80 leading-relaxed text-lg">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-full bg-gradient-primary border-0 shadow-elegant">
            <Link to="/contacto">
              Agendar valoración <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Treatment;

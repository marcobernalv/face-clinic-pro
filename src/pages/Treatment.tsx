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
       {treatment.videos ? (
        <div className="mb-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {treatment.videos.map((video, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-elegant border border-border bg-black/5 animate-fade-in"
            >
              <video
                src={video}
                controls
                preload="metadata"
                playsInline
                muted
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      ) : (
        treatment.video && (
          <div className="mb-8 rounded-2xl overflow-hidden shadow-elegant border border-border bg-black/5 animate-fade-in">
            <video
              src={treatment.video}
              controls
              preload="metadata"
              playsInline
              muted
              className="w-full h-auto block"
            />
          </div>
        )
      )}
      {treatment.image && (
        <div className="mb-8 rounded-2xl overflow-hidden shadow-elegant border border-border bg-black/5 animate-fade-in">
          <img
            src={treatment.image}
            alt={treatment.name}
            loading="lazy"
            className="w-full h-auto block"
          />
        </div>
      )}

      {treatment.images && (
        <div className="mb-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
          {treatment.images.map((image, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-elegant border border-border bg-black/5 animate-fade-in"
            >
              <img
                src={image}
                alt={treatment.name}
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      )}

      <div className="prose prose-lg max-w-none space-y-6">
  {treatment.slug === "blefaroplastia" ? (
    <>
      <h3>No Quirúrgica</h3>
      <p className="text-foreground/80 leading-relaxed text-lg">
        La blefaroplastia no quirúrgica con láser CO2 es un procedimiento estético avanzado que rejuvenece la mirada tensando la piel de los párpados sin bisturí, incisiones ni cicatrices visibles.
      </p>

      <h3>Quirúrgica</h3>
      <p className="text-foreground/80 leading-relaxed text-lg">
        La blefaroplastia quirúrgica con remoción de piel elimina el exceso de piel flácida, bolsas de grasa y músculo debilitado en los párpados superiores o inferiores, mejorando la apariencia y en algunos casos el campo visual.
      </p>
    </>
  ) : (
    treatment.paragraphs.map((p, i) => (
      <p key={i} className="text-foreground/80 leading-relaxed text-lg">
        {p}
      </p>
    ))
  )}
</div>

        {treatment.servicesList && (
          <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-6 md:p-8 shadow-soft">
            <h2 className="font-serif text-2xl mb-4">Tratamientos incluidos</h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {treatment.servicesList.map((s) => (
                <li key={s} className="flex items-start gap-2 text-foreground/80">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

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

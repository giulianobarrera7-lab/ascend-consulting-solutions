import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/site/Reveal";
import proyectoAmj from "@/assets/proyecto-amj.png";
import proyectoDni from "@/assets/proyecto-dni.png";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — Avanta Consulting" },
      {
        name: "description",
        content:
          "Casos reales de desarrollo web: dashboards financieros y herramientas con inteligencia artificial.",
      },
      { property: "og:title", content: "Proyectos — Avanta Consulting" },
      {
        property: "og:description",
        content: "Conocé los proyectos web que desarrollamos para nuestros clientes.",
      },
    ],
  }),
  component: ProyectosPage,
});

const projects = [
  {
    title: "AMJ Servicios SAS",
    category: "Dashboard financiero",
    image: proyectoAmj,
    tags: ["Dashboard", "Flujo de caja", "Reportes PDF"],
    description:
      "Plataforma integral de gestión de flujo de caja para AMJ Servicios SAS. Permite controlar ingresos, egresos, facturas y préstamos con dashboard en tiempo real y exportación a PDF.",
    metric: "Gestión 360°",
  },
  {
    title: "DNI Scanner",
    category: "Herramienta con IA",
    image: proyectoDni,
    tags: ["IA", "OCR", "Argentina"],
    description:
      "Aplicación que escanea DNI argentinos y extrae automáticamente todos los datos mediante inteligencia artificial. Soporta JPG, PNG, WEBP y PDF, con interfaz intuitiva drag & drop.",
    metric: "Extracción automática",
  },
];

function ProyectosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-subtle" />
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/40" /> Nuestros proyectos
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] mt-6 max-w-3xl">
              Trabajos reales,{" "}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-hero">
                resultados a la vista
              </span>
              .
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Una selección de los proyectos que desarrollamos: plataformas a
              medida que resuelven problemas concretos de nuestros clientes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GRID DE PROYECTOS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <Card className="group h-full overflow-hidden border-border hover:shadow-elegant transition-smooth hover:-translate-y-1 p-0">
                <div className="relative aspect-[16/9] overflow-hidden bg-muted border-b border-border">
                  <img
                    src={p.image}
                    alt={`Captura del proyecto ${p.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <Badge variant="secondary" className="rounded-full text-xs w-fit">
                    {p.category}
                  </Badge>

                  <h3 className="font-display text-2xl font-semibold mt-5">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      Resultado
                    </span>
                    <span className="font-display text-lg font-semibold text-primary">
                      {p.metric}
                    </span>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl bg-gradient-hero p-10 md:p-16 text-primary-foreground shadow-elegant flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-xl">
                ¿Tu proyecto puede ser el próximo?
              </h2>
              <p className="mt-3 text-primary-foreground/80 max-w-lg">
                Contanos qué tenés en mente y armemos juntos el plan.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-7 h-12">
              <Link to="/contacto">
                Iniciar conversación <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — Avanta Consulting" },
      {
        name: "description",
        content:
          "Casos de éxito en desarrollo web y planificación financiera. Conocé los proyectos que llevamos adelante junto a nuestros clientes.",
      },
      { property: "og:title", content: "Proyectos — Avanta Consulting" },
      {
        property: "og:description",
        content: "Casos reales de desarrollo web y planificación financiera.",
      },
    ],
  }),
  component: ProyectosPage,
});

const projects = [
  {
    title: "Lumen Studio",
    category: "Desarrollo web",
    tags: ["Next.js", "E-commerce", "SEO"],
    description:
      "Rediseño completo del sitio institucional y tienda online. Aumento del 110% en consultas calificadas en los primeros 3 meses.",
    metric: "+110% leads",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
  {
    title: "Norte Capital",
    category: "Planificación financiera",
    tags: ["Inversión", "Estrategia", "B2B"],
    description:
      "Plan financiero a 5 años con modelo de proyección de flujo de caja y diversificación de portafolio para fondo de inversión.",
    metric: "+32% ROI anual",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    title: "Casa Bloom",
    category: "Desarrollo web",
    tags: ["Shopify", "Branding", "UX"],
    description:
      "E-commerce de decoración con experiencia de compra premium, integración de pagos y logística automatizada.",
    metric: "x3 ventas online",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  },
  {
    title: "Grupo Andrade",
    category: "Planificación financiera",
    tags: ["PYME", "Presupuesto", "Cash flow"],
    description:
      "Reestructuración financiera y armado de tablero de control para una pyme familiar con tres unidades de negocio.",
    metric: "-40% costos",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    title: "Atlas Legal",
    category: "Desarrollo web",
    tags: ["Institucional", "CMS", "SEO"],
    description:
      "Plataforma institucional con blog jurídico y portal de clientes. Top 3 en Google para 18 keywords clave del sector.",
    metric: "Top 3 SEO",
    gradient: "from-slate-500/20 via-zinc-500/10 to-transparent",
  },
  {
    title: "Verde Patagonia",
    category: "Planificación financiera",
    tags: ["Personal", "Retiro", "Inversión"],
    description:
      "Plan de retiro personalizado con asignación de activos y revisión trimestral para grupo de socios fundadores.",
    metric: "20 años de plan",
    gradient: "from-green-500/20 via-lime-500/10 to-transparent",
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
                resultados medibles
              </span>
              .
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Una selección de los proyectos que acompañamos: desde sitios web
              de alto rendimiento hasta planes financieros que transformaron
              empresas y patrimonios.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GRID DE PROYECTOS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100}>
              <Card className="group relative h-full overflow-hidden border-border hover:shadow-elegant transition-smooth hover:-translate-y-1">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
                  aria-hidden
                />
                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="rounded-full text-xs">
                      {p.category}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <h3 className="font-display text-2xl font-semibold mt-6">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-1">
                    {p.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-background/60 border border-border text-muted-foreground"
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

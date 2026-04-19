import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Code2, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Avanta Consulting" },
      {
        name: "description",
        content:
          "Desarrollo web a medida, e-commerce, SEO y planificación financiera estratégica para personas y empresas.",
      },
      { property: "og:title", content: "Servicios — Avanta Consulting" },
      {
        property: "og:description",
        content: "Desarrollo web y planificación financiera con estándares profesionales.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Code2,
    title: "Desarrollo web",
    text: "Sitios y aplicaciones diseñados para convertir, escalar y posicionarse.",
    features: [
      "Sitios institucionales modernos",
      "Tiendas e-commerce a medida",
      "Optimización SEO técnica y de contenido",
      "Performance y Core Web Vitals",
    ],
  },
  {
    icon: LineChart,
    title: "Planificación financiera",
    text: "Estrategias claras para tomar mejores decisiones con tu dinero o tu empresa.",
    features: [
      "Presupuesto personal y empresarial",
      "Estrategias de inversión",
      "Flujo de caja y proyecciones",
      "Asesoramiento estratégico continuo",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Servicios</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mt-4 max-w-3xl leading-[1.05]">
            Soluciones diseñadas para tu próximo nivel.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Cada servicio se adapta al contexto del cliente. Trabajamos con
            equipos chicos, dedicados y con foco en resultados medibles.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Card className="p-10 h-full border-border hover:shadow-elegant transition-smooth">
                <div className="h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground flex items-center justify-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <h2 className="font-display text-3xl font-semibold mt-6">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.text}</p>
                <ul className="mt-6 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 rounded-full">
                  <Link to="/contacto">
                    Consultar <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-gradient-subtle border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl">
              Nuestro proceso, simple y transparente.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Diagnóstico", d: "Entendemos tu contexto y objetivos." },
              { n: "02", t: "Propuesta", d: "Plan claro con alcance, plazos y costos." },
              { n: "03", t: "Ejecución", d: "Iteramos con foco y comunicación constante." },
              { n: "04", t: "Resultados", d: "Medimos, ajustamos y escalamos." },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-background border border-border h-full">
                  <div className="text-sm font-mono text-muted-foreground">{p.n}</div>
                  <div className="font-display text-xl font-semibold mt-2">{p.t}</div>
                  <p className="text-sm text-muted-foreground mt-2">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

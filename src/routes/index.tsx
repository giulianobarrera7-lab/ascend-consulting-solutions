import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, LineChart, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avanta Consulting — Estrategia digital y financiera" },
      {
        name: "description",
        content:
          "Desarrollamos páginas web modernas y planificamos las finanzas de personas y empresas con un enfoque estratégico.",
      },
      { property: "og:title", content: "Avanta Consulting" },
      {
        property: "og:description",
        content: "Desarrollo web y planificación financiera para hacer crecer tu negocio.",
      },
    ],
  }),
  component: HomePage,
});

const benefits = [
  { icon: ShieldCheck, title: "Confianza", text: "Más de una década acompañando proyectos con resultados verificables." },
  { icon: Users, title: "Atención personalizada", text: "Equipos chicos y dedicados para cada cliente, sin intermediarios." },
  { icon: Sparkles, title: "Resultados medibles", text: "KPIs claros desde el primer día y reportes mensuales transparentes." },
];

const testimonials = [
  {
    name: "María Fernández",
    role: "CEO, Lumen Studio",
    text: "Rediseñaron nuestra web y duplicamos las consultas en 3 meses. Profesionales de punta a punta.",
  },
  {
    name: "Diego Almeyda",
    role: "Director, Norte Capital",
    text: "El plan financiero que armaron nos dio claridad total para escalar sin riesgos innecesarios.",
  },
  {
    name: "Carolina Ruiz",
    role: "Fundadora, Casa Bloom",
    text: "Atención impecable, plazos cumplidos y un acompañamiento que se nota en cada detalle.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={hero}
            alt=""
            width={1600}
            height={1024}
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-28 md:py-40 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/40" /> Consultora estratégica
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mt-6">
              Estrategia <span className="italic font-normal text-primary-foreground bg-clip-text text-transparent bg-gradient-hero">digital</span> y financiera para crecer con claridad.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Diseñamos páginas web que convierten y planificamos las finanzas
              de personas y empresas con visión a largo plazo.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7 h-12 shadow-elegant">
                <Link to="/contacto">
                  Solicitar asesoramiento <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-7 h-12">
                <Link to="/servicios">Ver servicios</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Servicios</span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3">
              Dos disciplinas, un mismo estándar de excelencia.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Code2,
              title: "Desarrollo web",
              text: "Sitios institucionales, e-commerce y plataformas a medida. Optimización SEO y rendimiento de clase mundial.",
            },
            {
              icon: LineChart,
              title: "Planificación financiera",
              text: "Presupuestos, inversión, flujo de caja y asesoramiento estratégico para personas y empresas.",
            },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Card className="p-8 h-full border-border hover:shadow-elegant transition-smooth hover:-translate-y-1 group">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-gradient-hero text-primary-foreground flex items-center justify-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="font-display text-2xl font-semibold mt-6">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.text}</p>
                <Link to="/servicios" className="inline-block mt-6 text-sm font-medium underline-offset-4 hover:underline">
                  Conocer más
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gradient-subtle border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Por qué elegirnos</span>
              <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3">
                Un socio estratégico, no un proveedor más.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <div className="p-8 rounded-2xl bg-background border border-border h-full">
                  <b.icon className="h-6 w-6 text-primary" />
                  <h3 className="font-display text-xl font-semibold mt-5">{b.title}</h3>
                  <p className="text-muted-foreground mt-2">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Testimonios</span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3">
              Lo que dicen quienes confiaron en nosotros.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <Card className="p-8 h-full border-border">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-foreground/90 leading-relaxed">"{t.text}"</p>
                <div className="mt-6">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
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
                Hablemos de tu próximo paso.
              </h2>
              <p className="mt-3 text-primary-foreground/80 max-w-lg">
                Una conversación inicial sin costo para entender tu proyecto.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-7 h-12">
              <Link to="/contacto">
                Solicitar asesoramiento <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Compass, Heart, Target } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre Nosotros — Avanta Consulting" },
      {
        name: "description",
        content:
          "Conocé la misión, visión y valores de Avanta Consulting: una consultora boutique especializada en estrategia digital y financiera.",
      },
      { property: "og:title", content: "Sobre Nosotros — Avanta Consulting" },
      {
        property: "og:description",
        content: "Una consultora boutique con foco en resultados y atención personalizada.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Sobre Nosotros</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mt-4 max-w-3xl leading-[1.05]">
            Una consultora boutique con visión integral.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Nacimos para acompañar a personas y empresas que buscan tomar decisiones
            con claridad. Combinamos experiencia técnica en desarrollo web con un
            enfoque financiero riguroso.
          </p>
        </Reveal>
      </section>

      <section className="bg-gradient-subtle border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Misión", text: "Brindar soluciones estratégicas claras, medibles y sostenibles que impulsen el crecimiento de nuestros clientes." },
            { icon: Compass, title: "Visión", text: "Ser la consultora de referencia para quienes valoran la excelencia técnica y la transparencia." },
            { icon: Heart, title: "Valores", text: "Honestidad, compromiso, atención al detalle y mejora continua en cada proyecto que abordamos." },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="p-8 rounded-2xl bg-background border border-border h-full">
                <v.icon className="h-6 w-6 text-primary" />
                <h3 className="font-display text-xl font-semibold mt-5">{v.title}</h3>
                <p className="text-muted-foreground mt-2">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-3 gap-10">
        {[
          { n: "10+", l: "Años de experiencia" },
          { n: "120+", l: "Proyectos entregados" },
          { n: "98%", l: "Clientes recurrentes" },
        ].map((s, i) => (
          <Reveal key={s.l} delay={i * 100}>
            <div className="border-l border-border pl-6">
              <div className="font-display text-5xl md:text-6xl font-semibold">{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}

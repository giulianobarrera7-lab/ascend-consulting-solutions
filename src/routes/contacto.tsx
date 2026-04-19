import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Avanta Consulting" },
      {
        name: "description",
        content:
          "Conversemos sobre tu proyecto. Te respondemos en menos de 24 horas hábiles.",
      },
      { property: "og:title", content: "Contacto — Avanta Consulting" },
      {
        property: "og:description",
        content: "Solicitá asesoramiento profesional en desarrollo web y planificación financiera.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("¡Gracias! Te contactaremos a la brevedad.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-16">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contacto</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mt-4 leading-[1.05]">
            Hablemos de tu proyecto.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Completá el formulario y te responderemos en menos de 24 horas hábiles.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium">hola@avanta.consulting</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Teléfono</div>
                <div className="font-medium">+54 11 4000 0000</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Oficina</div>
                <div className="font-medium">Buenos Aires, Argentina</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-8 shadow-card space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" name="name" required placeholder="Tu nombre" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="vos@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Contanos sobre tu proyecto..." />
            </div>
            <Button type="submit" className="w-full rounded-full h-12" disabled={loading}>
              {loading ? "Enviando..." : (<>Enviar mensaje <Send className="ml-2 h-4 w-4" /></>)}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

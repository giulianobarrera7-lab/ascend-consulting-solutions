import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold text-lg">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-hero" />
            Avanta Consulting
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Consultora estratégica en desarrollo web y planificación financiera.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Inicio</Link></li>
            <li><Link to="/nosotros" className="hover:text-foreground">Nosotros</Link></li>
            <li><Link to="/servicios" className="hover:text-foreground">Servicios</Link></li>
            <li><Link to="/proyectos" className="hover:text-foreground">Proyectos</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Servicios</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Desarrollo web</li>
            <li>E-commerce</li>
            <li>Optimización SEO</li>
            <li>Planificación financiera</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>hola@avanta.consulting</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>+54 11 4000 0000</span></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Buenos Aires, Argentina</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Avanta Consulting. Todos los derechos reservados.</span>
          <span>Diseñado con precisión y propósito.</span>
        </div>
      </div>
    </footer>
  );
}

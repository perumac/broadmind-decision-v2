"use client";

/* eslint-disable @next/next/no-img-element -- Brand and slide imagery are already optimized static assets. */

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cognitiveBiases } from "./content";

export const navItems = [
  ["Inicio", "/"],
  ["Nosotros", "/nosotros"],
  ["Programas", "/programas"],
  ["Neurociencia", "/neurociencia"],
  ["Diagnóstico", "/diagnostico"],
  ["Contacto", "/contacto"],
] as const;

const heroSlides = [
  {
    image: "/images/hero-brain-v2.jpg",
    eyebrow: "Neurociencia aplicada a la alta dirección",
    title: "Tu cerebro es tu ventaja competitiva.",
    accent: "Entrénalo para decidir.",
    copy: "Un programa ejecutivo para líderes que necesitan pensar con claridad, regular la presión y convertir complejidad en decisiones sostenibles.",
    cta: "Solicita tu diagnóstico gratuito",
    href: "/diagnostico",
  },
  {
    image: "/images/hero-decision-cost-v2.jpg",
    eyebrow: "El costo invisible de esperar",
    title: "La indecisión tiene un costo.",
    accent: "Hazlo visible.",
    copy: "Reconoce los sesgos y patrones que consumen foco, energía y oportunidad antes de que definan el rumbo por ti.",
    cta: "Explora tu patrón decisional",
    href: "/diagnostico",
  },
  {
    image: "/images/hero-foresight-v2.jpg",
    eyebrow: "Neuroliderazgo estratégico",
    title: "Decisiones más inteligentes.",
    accent: "Liderazgo más humano.",
    copy: "Integra razón, emoción y contexto para anticipar escenarios y conducir conversaciones de alto impacto.",
    cta: "Conoce los programas",
    href: "/programas",
  },
  {
    image: "/images/hero-direction-v2.jpg",
    eyebrow: "Dirección antes que velocidad",
    title: "No elimines la incertidumbre.",
    accent: "Construye claridad.",
    copy: "Una conversación estratégica puede transformar presión difusa en el siguiente movimiento que tu organización necesita.",
    cta: "Agenda una conversación",
    href: "/contacto",
  },
];

export function BrandLogo({ full = false }: { full?: boolean }) {
  return (
    <img
      className="brand-logo"
      src={full ? "/images/brand-original-trial-full.png" : "/images/brand-original-trial-nav.png"}
      alt="BroadMind Decision"
    />
  );
}

type ContactIconName = "whatsapp" | "email" | "clock" | "location";

function ContactIcon({ name }: { name: ContactIconName }) {
  if (name === "email") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h17v13h-17z" /><path d="m4.5 7 7.5 6 7.5-6" /></svg>;
  if (name === "clock") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5v5l3.5 2" /></svg>;
  if (name === "location") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M8.5 7.8c.4 4 2.5 6.2 6.6 7.4l1.1-1.8-2.1-1-1 1c-1.5-.7-2.7-1.8-3.4-3.3l1-1-1-2.2-1.2.9Z" /></svg>;
}

const contactChannels: Array<{ icon: ContactIconName; label: string; value: string; href?: string }> = [
  { icon: "whatsapp", label: "WhatsApp directo", value: "+51 982 481 330", href: "https://wa.me/51982481330" },
  { icon: "email", label: "Correo corporativo", value: "contacto@broadmindecision.com", href: "mailto:contacto@broadmindecision.com" },
  { icon: "clock", label: "Horario de atención", value: "Lunes a viernes · 8:00 a. m. - 5:00 p. m." },
  { icon: "location", label: "Ubicación", value: "La Arboleda 385, La Molina", href: "https://www.google.com/maps/search/?api=1&query=La+Arboleda+385%2C+La+Molina" },
];

export function ContactDetails({ variant = "cards" }: { variant?: "cards" | "footer" }) {
  return (
    <div className={variant === "footer" ? "footer-contact-list" : "contact-channel-list"}>
      {contactChannels.map((item) => {
        const content = <><span className="contact-channel-icon"><ContactIcon name={item.icon} /></span><span className="contact-channel-copy"><small>{item.label}</small><strong>{item.value}</strong></span></>;
        return item.href
          ? <a href={item.href} target={item.icon === "whatsapp" || item.icon === "location" ? "_blank" : undefined} rel={item.icon === "whatsapp" || item.icon === "location" ? "noopener noreferrer" : undefined} key={item.label}>{content}</a>
          : <div key={item.label}>{content}</div>;
      })}
    </div>
  );
}

export function SiteHeader({ dark = true }: { dark?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isCurrentPage = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <header className={dark ? "site-header" : "site-header header-solid"}>
      <div className="header-brand">
        <Link className="brand" href="/" aria-label="BroadMind Decision, ir al inicio">
          <BrandLogo />
        </Link>
        <span>Neurociencia · Neuroliderazgo · Neuromanagement</span>
      </div>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Navegación principal">
        {navItems.map(([label, href]) => {
          const active = isCurrentPage(href);
          return (
            <Link
              className={active ? "nav-link active" : "nav-link"}
              href={href}
              aria-current={active ? "page" : undefined}
              key={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          );
        })}
        <a className="nav-cta" href="/contacto" onClick={() => setMenuOpen(false)}>
          Agenda una conversación <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-identity">
          <Link className="brand footer-brand" href="/" aria-label="BroadMind Decision, ir al inicio"><BrandLogo full /></Link>
          <span>Neurociencia · Neuroliderazgo · Neuromanagement</span>
        </div>
        <div className="footer-links-column">
          <span className="footer-label">Explora</span>
          <nav className="footer-nav" aria-label="Navegación secundaria">
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
        </div>
        <div className="footer-contact">
          <span className="footer-label">Contacto</span>
          <ContactDetails variant="footer" />
        </div>
        <div className="footer-social-column">
          <span className="footer-label">Redes sociales</span>
          <div className="footer-social" aria-label="Redes sociales">
            <span className="footer-social-item">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.4l.6-4h-4V9c0-.7.3-1 1-1Z" /></svg>
              Facebook
            </span>
            <span className="footer-social-item">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15.4V8.6l6 3.4-6 3.4Z" /></svg>
              YouTube
            </span>
            <span className="footer-social-item">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>
              Instagram
            </span>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} BroadMind Decision</span>
        <span>Contenido educativo. No constituye diagnóstico clínico.</span>
      </div>
    </footer>
  );
}

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let frame = 0;
    let animation = 0;
    let width = 0;
    let height = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seeded = (index: number, salt: number) => {
      const value = Math.sin(index * 9283.31 + salt * 77.17) * 43758.5453;
      return value - Math.floor(value);
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const mobile = width < 760;
      const count = mobile ? 16 : 28;
      const nodes = Array.from({ length: count }, (_, index) => ({
        x: width * (mobile ? 0.14 : 0.43) + seeded(index, 1) * width * (mobile ? 0.76 : 0.53),
        y: height * 0.12 + seeded(index, 2) * height * 0.77,
        radius: 1.3 + seeded(index, 3) * 2.1,
      }));
      const maxDistance = mobile ? 125 : 190;
      let edgeIndex = 0;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const from = nodes[i];
          const to = nodes[j];
          const distance = Math.hypot(from.x - to.x, from.y - to.y);
          if (distance >= maxDistance || seeded(i + j, 4) <= 0.28) continue;
          const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
          gradient.addColorStop(0, "rgba(68, 146, 159, .08)");
          gradient.addColorStop(1, "rgba(201, 162, 39, .24)");
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.stroke();
          if (edgeIndex % 5 === 0) {
            const progress = reduceMotion ? 0.5 : (frame * 0.0028 + edgeIndex * 0.17) % 1;
            ctx.fillStyle = "rgba(230, 196, 91, .95)";
            ctx.shadowBlur = 14;
            ctx.shadowColor = "rgba(201, 162, 39, .9)";
            ctx.beginPath();
            ctx.arc(from.x + (to.x - from.x) * progress, from.y + (to.y - from.y) * progress, 2.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
          edgeIndex += 1;
        }
      }
      nodes.forEach((node, index) => {
        const pulse = reduceMotion ? 1 : 0.74 + Math.sin(frame * 0.022 + index) * 0.26;
        ctx.fillStyle = index % 3 === 0 ? `rgba(82, 165, 171, ${pulse})` : `rgba(213, 177, 63, ${pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      frame += 1;
      if (!reduceMotion) animation = requestAnimationFrame(draw);
    };
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduceMotion) draw();
    };
    resize();
    window.addEventListener("resize", resize);
    if (!reduceMotion) animation = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animation);
    };
  }, []);
  return <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />;
}

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = heroSlides[activeSlide];
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 8000);
    return () => window.clearInterval(timer);
  }, [paused]);
  const move = (direction: number) => setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-slides" aria-hidden="true">
        {heroSlides.map((item, index) => (
          <div className={`hero-slide hero-slide-${index + 1}${index === activeSlide ? " is-active" : ""}`} key={item.image}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
      <NeuralCanvas />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content shell" key={activeSlide}>
        <p className="eyebrow light"><span /> {slide.eyebrow}</p>
        <h1 id="hero-title">{slide.title}<br /><em>{slide.accent}</em></h1>
        <p className="hero-copy">{slide.copy}</p>
        <div className="hero-actions">
          <a className="button button-gold" href={slide.href}>{slide.cta} <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="/neurociencia">Comprende cómo decide tu cerebro <span aria-hidden="true">→</span></a>
        </div>
        <div className="hero-trust"><span>Rigor científico</span><span>Aplicación ejecutiva</span><span>Confidencialidad</span></div>
      </div>
      <div
        className="slider-controls"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
        aria-label="Controles del carrusel"
      >
        <button type="button" onClick={() => move(-1)} aria-label="Diapositiva anterior">←</button>
        <div className="slider-dots">
          {heroSlides.map((item, index) => (
            <button
              type="button"
              className={index === activeSlide ? "slider-dot is-active" : "slider-dot"}
              onClick={() => setActiveSlide(index)}
              aria-label={`Mostrar diapositiva ${index + 1}: ${item.title}`}
              aria-current={index === activeSlide ? "true" : undefined}
              key={item.image}
            ><span>{String(index + 1).padStart(2, "0")}</span><i /></button>
          ))}
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Diapositiva siguiente">→</button>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, accent, copy, children }: { eyebrow: string; title: string; accent?: string; copy: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="shell page-hero-content">
        <p className="eyebrow light"><span /> {eyebrow}</p>
        <h1><span className="page-title-line">{title}</span>{accent && <em className="page-title-line">{accent}</em>}</h1>
        <p>{copy}</p>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, copy, light = false, singleLine = false }: { eyebrow: string; title: ReactNode; copy?: string; light?: boolean; singleLine?: boolean }) {
  const className = `section-heading${light ? " heading-light" : ""}${singleLine ? " single-line-heading" : ""}`;
  return (
    <div className={className}>
      <p className={light ? "eyebrow light" : "eyebrow"}><span /> {eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

export function ResourceBanner({ showBiasTable = false }: { showBiasTable?: boolean }) {
  return (
    <section className="resource-banner">
      <div className="shell resource-grid">
        <div className="resource-intro">
          <p className="eyebrow light"><span /> Recurso para directivos</p>
          <h2>Los 5 sesgos cognitivos que frenan tus decisiones</h2>
          <p>Una guía práctica para reconocer confirmación, anclaje, exceso de confianza, aversión a la pérdida y pensamiento grupal.</p>
        </div>
        {showBiasTable && <div className="resource-bias-grid">
          {cognitiveBiases.map(([name, signal, action], index) => <article key={name}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{name}</h3>
            <p>{signal}</p>
            <small>Pregunta de control</small>
            <b>{action}</b>
          </article>)}
        </div>}
        <a className="button button-gold" href="/downloads/guia-5-sesgos-broadmind-decision.pdf" download>
          Descargar guía PDF <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const buildMessage = () => {
    const form = formRef.current;
    if (!form) return null;
    const data = new FormData(form);
    return {
      name: String(data.get("name") || ""), role: String(data.get("role") || ""),
      company: String(data.get("company") || ""), email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""), service: String(data.get("service") || ""),
      challenge: String(data.get("challenge") || ""),
    };
  };
  const whatsappMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;
    const data = buildMessage();
    if (!data) return;
    const message = encodeURIComponent(`Hola BroadMind Decision. Me gustaría solicitar una conversación.\n\nNombre: ${data.name}\nCargo: ${data.role}\nCompañía: ${data.company}\nCorreo: ${data.email}\nTeléfono: ${data.phone}\nServicio de interés: ${data.service}\n\nDecisión o reto:\n${data.challenge}`);
    window.open(`https://wa.me/51982481330?text=${message}`, "_blank", "noopener,noreferrer");
  };
  return (
    <form ref={formRef} className="contact-form" onSubmit={whatsappMessage}>
      <div className="contact-form-intro">
        <span>Solicitud confidencial</span>
        <h3>Contacta con nosotros</h3>
        <p>Completa los datos y prepararemos el mensaje para continuar directamente por WhatsApp.</p>
      </div>
      <div className="field-pair">
        <label>Nombre completo<input name="name" type="text" placeholder="Tu nombre" required maxLength={100} autoComplete="name" /></label>
        <label>Correo corporativo<input name="email" type="email" placeholder="nombre@compania.com" required maxLength={254} autoComplete="email" /></label>
      </div>
      <div className="field-pair">
        <label>Teléfono / WhatsApp<input name="phone" type="tel" placeholder="+51 999 999 999" required maxLength={30} autoComplete="tel" /></label>
        <label>Cargo<input name="role" type="text" placeholder="CEO, Director/a..." required maxLength={100} autoComplete="organization-title" /></label>
      </div>
      <div className="field-pair">
        <label>Compañía<input name="company" type="text" placeholder="Nombre de la compañía" required maxLength={150} autoComplete="organization" /></label>
        <label>Servicio de interés<select name="service" defaultValue="" required><option value="" disabled>Selecciona un servicio</option><option>BroadMind Decision Program</option><option>Consultoría en Neuroliderazgo y Neuromanagement</option><option>Workshop: El Cerebro Ejecutivo en la Toma de Decisiones</option><option>Coaching Directivo con Base en Neurociencia</option><option>Otro / Por definir</option></select></label>
      </div>
      <label>¿Qué decisión o reto quieres abordar?<textarea name="challenge" rows={5} placeholder="Cuéntanos brevemente el contexto..." required maxLength={1500} /></label>
      <div className="form-actions">
        <button className="button button-whatsapp" type="submit"><ContactIcon name="whatsapp" /> Enviar solicitud por WhatsApp <span aria-hidden="true">↗</span></button>
      </div>
      <p className="privacy-note">Usaremos tu información únicamente para responder esta consulta. No solicitamos información clínica.</p>
    </form>
  );
}

type Answer = { label: string; points: number };
type Question = { area: string; prompt: string; answers: Answer[] };

const questions: Question[] = [
  { area: "Estrés y corteza prefrontal", prompt: "Cuando debes tomar una decisión urgente bajo presión, ¿qué sueles hacer primero?", answers: [
    { label: "Actuar rápido basándome en la experiencia; el tiempo apremia.", points: 1 },
    { label: "Buscar más información, incluso si toma más tiempo.", points: 2 },
    { label: "Consultar con mi equipo cercano para distribuir la responsabilidad.", points: 2 },
    { label: "Pausar, respirar y buscar claridad antes de actuar.", points: 3 },
  ] },
  { area: "Metacognición decisional", prompt: "¿Con qué frecuencia revisas una decisión importante después de haberla tomado?", answers: [
    { label: "Rara vez: si la tomé con convicción, la sostengo.", points: 1 },
    { label: "Solo si aparece evidencia clara en contra.", points: 2 },
    { label: "Regularmente, como parte de mi proceso de aprendizaje.", points: 3 },
    { label: "A veces demasiado, lo que me genera indecisión.", points: 2 },
  ] },
  { area: "Sesgo de confirmación", prompt: "Cuando alguien presenta datos que contradicen tu posición, ¿cuál es tu primera reacción interna?", answers: [
    { label: "Buscar razones para cuestionar la validez de esos datos.", points: 1 },
    { label: "Integrarlos con curiosidad y ajustar mi posición si es necesario.", points: 3 },
    { label: "Depender del nivel de confianza que tenga en quien los presenta.", points: 2 },
    { label: "Sentir incomodidad, pero intentar escuchar antes de responder.", points: 2 },
  ] },
  { area: "Aversión a la pérdida y riesgo", prompt: "¿Cómo describirías tu relación con el riesgo en decisiones de alto impacto?", answers: [
    { label: "Prefiero evitar pérdidas aunque limite las ganancias posibles.", points: 1 },
    { label: "Calculo el riesgo y actúo según la expectativa de valor.", points: 3 },
    { label: "Me siento cómodo con la ambigüedad y el riesgo controlado.", points: 3 },
    { label: "Asumo más riesgo del necesario cuando confío en mi intuición.", points: 2 },
  ] },
  { area: "Pensamiento grupal", prompt: "En reuniones de dirección, ¿con qué frecuencia expresas una opinión distinta del consenso?", answers: [
    { label: "Casi nunca; prefiero preservar la cohesión del equipo.", points: 1 },
    { label: "Solo cuando estoy muy seguro de tener razón.", points: 2 },
    { label: "Con frecuencia; el disenso bien gestionado mejora la decisión.", points: 3 },
    { label: "A veces, aunque me cuesta cuando existe presión social.", points: 2 },
  ] },
  { area: "Regulación emocional", prompt: "Cuando estás bajo estrés sostenido, ¿cómo afecta tu estilo de liderazgo?", answers: [
    { label: "Me vuelvo más directivo y centralizo decisiones.", points: 1 },
    { label: "Intento mantener mi estilo habitual, aunque consume más energía.", points: 2 },
    { label: "Delego estratégicamente para reducir la carga cognitiva.", points: 3 },
    { label: "Noto respuestas más reactivas y menos estratégicas.", points: 2 },
  ] },
  { area: "Inteligencia emocional", prompt: "¿Qué papel juegan las emociones en tu proceso de decisión?", answers: [
    { label: "Intento dejarlas fuera: las decisiones deben ser racionales.", points: 1 },
    { label: "Las reconozco como señales y las proceso antes de decidir.", points: 2 },
    { label: "Las integro conscientemente porque aportan información.", points: 3 },
    { label: "A veces me dominan más de lo que me gustaría reconocer.", points: 2 },
  ] },
  { area: "Sesgo de compromiso", prompt: "Si una decisión ofrece resultados negativos al inicio, ¿cuál es tu tendencia?", answers: [
    { label: "Insistir: cambiar a mitad de camino muestra debilidad.", points: 1 },
    { label: "Evaluar si el problema es de ejecución o de estrategia.", points: 3 },
    { label: "Pivotar rápido para limitar daños.", points: 2 },
    { label: "Me cuesta distinguir cuándo perseverar o cambiar de rumbo.", points: 2 },
  ] },
  { area: "Efecto de anclaje", prompt: "¿Qué tan consciente eres de la influencia del primer dato que recibes?", answers: [
    { label: "No lo he considerado; evalúo los datos de forma independiente.", points: 1 },
    { label: "Lo sé en teoría, pero no siempre lo gestiono bien.", points: 2 },
    { label: "Lo tengo presente y aplico medidas para contrarrestarlo.", points: 3 },
    { label: "Lo reconozco después de decidir, no siempre en el momento.", points: 2 },
  ] },
  { area: "Aprendizaje ejecutivo", prompt: "¿Con qué frecuencia reflexionas de forma estructurada sobre tus patrones de decisión?", answers: [
    { label: "Nunca; la agenda no lo permite.", points: 1 },
    { label: "Ocasionalmente, cuando algo sale muy mal o muy bien.", points: 2 },
    { label: "Regularmente; tengo un proceso de retrospectiva personal.", points: 3 },
    { label: "Me gustaría hacerlo más, pero no tengo un método claro.", points: 2 },
  ] },
];

export function DiagnosticQuiz() {
  const [answers, setAnswers] = useState<Array<number | null>>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const answered = answers.filter((answer) => answer !== null).length;
  const score = answers.reduce<number>((total, answerIndex, questionIndex) => {
    if (answerIndex === null) return total;
    return total + questions[questionIndex].answers[answerIndex].points;
  }, 0);
  const result = score <= 16 ? {
    title: "Alto Potencial de Transformación Decisional",
    copy: "El patrón predominante es la toma de decisiones reactiva, con alta influencia de sesgos cognitivos no gestionados. El sistema límbico tiende a dominar sobre la corteza prefrontal en situaciones de presión. Esto no implica baja inteligencia — implica que el cerebro ejecutivo no ha sido entrenado para este nivel de complejidad decisional.",
    actions: [
      "Identificar los 2–3 sesgos más activos a partir de las respuestas tipo A.",
      "Iniciar un proceso de coaching directivo con base en neurociencia.",
      "Incorporar pausas decisionales estructuradas antes de compromisos de alto impacto.",
    ],
  } : score <= 23 ? {
    title: "Liderazgo Neurodecisional en Desarrollo",
    copy: "Hay conciencia parcial de los propios patrones de decisión y capacidad de gestionar algunos sesgos en condiciones normales. Sin embargo, bajo presión sostenida o en entornos de alta ambigüedad, los sesgos tienden a emerger con mayor fuerza. El potencial de mejora en este rango es alto y los cambios son rápidamente observables con formación específica.",
    actions: [
      "Fortalecer los mecanismos de regulación emocional bajo estrés.",
      "Aplicar protocolos de decisión grupal que neutralicen el pensamiento grupal.",
      "Desarrollar un sistema de revisión periódica de decisiones importantes.",
    ],
  } : {
    title: "Liderazgo Neurodecisional Avanzado",
    copy: "El directivo demuestra alta conciencia metacognitiva y aplica de forma habitual estrategias que neutralizan los sesgos más comunes. La corteza prefrontal está activa incluso bajo presión, y el sistema emocional es usado como fuente de información, no como fuente de distorsión. Este perfil indica disposición para trabajar en niveles más avanzados de neuroliderazgo colectivo.",
    actions: [
      "Ampliar el impacto hacia el equipo directivo: implementar protocolos neurodecisionales colectivos.",
      "Explorar el neuromanagement para optimizar la toma de decisiones organizacional.",
      "Desarrollar un plan de mentoría basado en neurociencia para los siguientes niveles de liderazgo.",
    ],
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (answered !== questions.length) return;
    setSubmitted(true);
    requestAnimationFrame(() => document.getElementById("resultado")?.scrollIntoView({ behavior: "smooth", block: "center" }));
  };
  const restart = () => { setAnswers(Array(questions.length).fill(null)); setSubmitted(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <form className="quiz" onSubmit={submit}>
      <div className="quiz-progress" aria-live="polite">
        <div><span>Progreso</span><strong>{answered} de {questions.length}</strong></div>
        <div className="progress-track"><i style={{ width: `${answered * 10}%` }} /></div>
      </div>
      {questions.map((question, questionIndex) => (
        <fieldset className="question-card" key={question.prompt}>
          <legend><span>{String(questionIndex + 1).padStart(2, "0")}</span><small>{question.area}</small>{question.prompt}</legend>
          <div className="answer-list">
            {question.answers.map((answer, answerIndex) => (
              <label className={answers[questionIndex] === answerIndex ? "answer selected" : "answer"} key={answer.label}>
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  value={answerIndex}
                  checked={answers[questionIndex] === answerIndex}
                  onChange={() => {
                    const next = [...answers];
                    next[questionIndex] = answerIndex;
                    setAnswers(next);
                    setSubmitted(false);
                  }}
                  required
                />
                <span className="answer-marker">{String.fromCharCode(65 + answerIndex)}</span>
                <span>{answer.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <div className="quiz-submit">
        <p>{answered === questions.length ? "Tu resultado está listo." : `Responde ${questions.length - answered} ${questions.length - answered === 1 ? "pregunta" : "preguntas"} más para ver tu perfil.`}</p>
        <button className="button button-gold" type="submit" disabled={answered !== questions.length}>Ver mi perfil neurodecisional <span aria-hidden="true">→</span></button>
      </div>
      {submitted && (
        <section className="quiz-result" id="resultado" aria-live="polite">
          <div className="result-score"><span>Resultado orientativo</span><strong>{score}<small>/30</small></strong></div>
          <div>
            <p className="eyebrow light"><span /> Tu perfil</p>
            <h2>{result.title}</h2>
            <p>{result.copy}</p>
            <p className="result-recommendations-title">Acciones recomendadas:</p>
            <ul>{result.actions.map((action) => <li key={action}>{action}</li>)}</ul>
            <div className="result-actions">
              <a className="button button-gold" href="/contacto">Conversar sobre mi resultado <span aria-hidden="true">↗</span></a>
              <button className="text-button" type="button" onClick={restart}>Reiniciar diagnóstico</button>
            </div>
          </div>
          <p className="result-disclaimer"><em>Este cuestionario es una herramienta de autoconocimiento, no un diagnóstico clínico. Los resultados son más valiosos como punto de partida de conversación que como etiqueta definitiva. Para un diagnóstico neurocognitivo completo, BroadMind Decision ofrece una evaluación individual con metodología validada.</em></p>
        </section>
      )}
    </form>
  );
}

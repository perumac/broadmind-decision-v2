"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const navItems = [
  ["Inicio", "#inicio"],
  ["Nosotros", "#nosotros"],
  ["Servicios", "#servicios"],
  ["Contacto", "#contacto"],
];

const heroSlides = [
  {
    image: "/images/hero-brain.webp",
    eyebrow: "Neurociencia aplicada al liderazgo",
    title: "La ciencia de decidir.",
    accent: "La claridad de liderar.",
    copy: "Acompañamos a CEOs y altos directivos a transformar complejidad en decisiones claras, estratégicas y sostenibles.",
    cta: "Agenda una conversación",
  },
  {
    image: "/images/hero-decision-cost.webp",
    eyebrow: "El costo invisible de esperar",
    title: "La indecisión tiene un costo.",
    accent: "Hazlo visible.",
    copy: "Cada demora consume foco, energía y oportunidad. Convierte lo invisible en un criterio claro para actuar.",
    cta: "Descubre qué está en juego",
  },
  {
    image: "/images/hero-foresight.webp",
    eyebrow: "Anticipación ejecutiva",
    title: "El mercado no espera.",
    accent: "Anticípate.",
    copy: "Entrena la mirada que reconoce patrones antes de que se conviertan en presión para el negocio.",
    cta: "Convierte presión en criterio",
  },
  {
    image: "/images/hero-direction.webp",
    eyebrow: "Dirección antes que velocidad",
    title: "Tu próxima ventaja",
    accent: "empieza aquí.",
    copy: "Una conversación estratégica puede convertir incertidumbre en el siguiente movimiento que tu organización necesita.",
    cta: "Agenda tu sesión estratégica",
  },
];

const services = [
  {
    number: "01",
    label: "Mapa cognitivo",
    title: "Claridad para decisiones complejas",
    copy: "Identificamos sesgos, tensiones y patrones que condicionan la decisión antes de que se conviertan en ruido estratégico.",
    points: ["Lectura del contexto", "Mapa de sesgos", "Criterios de decisión"],
  },
  {
    number: "02",
    label: "Alineamiento estratégico",
    title: "Coherencia entre mente, equipo y negocio",
    copy: "Conectamos prioridades ejecutivas, comportamiento y objetivos para reducir fricción y acelerar el alineamiento.",
    points: ["Sesiones 1:1", "Alineación de liderazgo", "Narrativa estratégica"],
    featured: true,
  },
  {
    number: "03",
    label: "Arquitectura de decisiones",
    title: "Un sistema para decidir mejor",
    copy: "Diseñamos protocolos prácticos para decidir con mayor perspectiva, especialmente bajo presión e incertidumbre.",
    points: ["Escenarios críticos", "Protocolo decisional", "Seguimiento ejecutivo"],
  },
];

const process = [
  ["01", "Comprender", "Escuchamos el reto, el contexto y aquello que hoy no está siendo dicho."],
  ["02", "Mapear", "Hacemos visibles patrones cognitivos, sesgos y variables estratégicas."],
  ["03", "Alinear", "Definimos criterios claros y una dirección compartida para actuar."],
  ["04", "Decidir", "Convertimos el análisis en una decisión accionable y medible."],
];

function BrandLogo({ full = false }: { full?: boolean }) {
  return (
    <img
      className="brand-logo"
      src={full ? "/images/brand-original-trial-full.png" : "/images/brand-original-trial-nav.png"}
      alt="BroadMind Decision"
    />
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

      const edges: Array<[number, number]> = [];
      const maxDistance = mobile ? 125 : 190;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.hypot(dx, dy);
          if (distance < maxDistance && seeded(i + j, 4) > 0.28) edges.push([i, j]);
        }
      }

      edges.forEach(([a, b], index) => {
        const from = nodes[a];
        const to = nodes[b];
        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        gradient.addColorStop(0, "rgba(79, 141, 136, .09)");
        gradient.addColorStop(1, "rgba(198, 161, 91, .24)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();

        if (index % 5 === 0) {
          const progress = reduceMotion ? 0.5 : (frame * 0.0028 + index * 0.17) % 1;
          const x = from.x + (to.x - from.x) * progress;
          const y = from.y + (to.y - from.y) * progress;
          ctx.fillStyle = "rgba(226, 191, 119, .95)";
          ctx.shadowBlur = 14;
          ctx.shadowColor = "rgba(198, 161, 91, .9)";
          ctx.beginPath();
          ctx.arc(x, y, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      nodes.forEach((node, index) => {
        const pulse = reduceMotion ? 1 : 0.74 + Math.sin(frame * 0.022 + index) * 0.26;
        ctx.fillStyle = index % 3 === 0 ? `rgba(95, 168, 160, ${pulse})` : `rgba(213, 177, 105, ${pulse})`;
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

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const contactEmail = "contacto@broadmindecision.com";

  const buildMessage = () => {
    const form = formRef.current;
    if (!form) return null;
    const data = new FormData(form);
    return {
      name: String(data.get("name") || ""),
      role: String(data.get("role") || ""),
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      challenge: String(data.get("challenge") || ""),
    };
  };

  const emailMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = buildMessage();
    if (!data) return;
    const subject = encodeURIComponent(`Consulta ejecutiva — ${data.company || data.name}`);
    const body = encodeURIComponent(
      `Nombre: ${data.name}\nCargo: ${data.role}\nCompañía: ${data.company}\nEmail: ${data.email}\n\nReto o decisión:\n${data.challenge}`,
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const whatsappMessage = () => {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;
    const data = buildMessage();
    if (!data) return;
    const message = encodeURIComponent(
      `Hola BroadMind Decision. Soy ${data.name}, ${data.role} en ${data.company}. Mi correo es ${data.email}. Me gustaría conversar sobre: ${data.challenge}`,
    );
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form ref={formRef} className="contact-form" onSubmit={emailMessage}>
      <div className="field-pair">
        <label>
          Nombre completo
          <input name="name" type="text" placeholder="Tu nombre" required autoComplete="name" />
        </label>
        <label>
          Cargo
          <input name="role" type="text" placeholder="CEO, Director/a…" required autoComplete="organization-title" />
        </label>
      </div>
      <div className="field-pair">
        <label>
          Compañía
          <input name="company" type="text" placeholder="Nombre de la compañía" required autoComplete="organization" />
        </label>
        <label>
          Correo corporativo
          <input name="email" type="email" placeholder="nombre@compañía.com" required autoComplete="email" />
        </label>
      </div>
      <label>
        ¿Qué decisión o reto quieres abordar?
        <textarea name="challenge" rows={5} placeholder="Cuéntanos brevemente el contexto…" required />
      </label>
      <div className="form-actions">
        <button className="button button-dark" type="submit">
          Enviar por correo <span aria-hidden="true">↗</span>
        </button>
        <button className="button button-whatsapp" type="button" onClick={whatsappMessage}>
          Continuar por WhatsApp <span aria-hidden="true">↗</span>
        </button>
      </div>
      <p className="privacy-note">Tu información será tratada de forma confidencial y utilizada únicamente para responder esta consulta.</p>
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    if (sliderPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [sliderPaused]);

  const moveSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="BroadMind Decision, volver al inicio">
          <BrandLogo />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Navegación principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contacto" onClick={() => setMenuOpen(false)}>
            Agenda una conversación <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-slides" aria-hidden="true">
          {heroSlides.map((item, index) => (
            <div className={index === activeSlide ? "hero-slide is-active" : "hero-slide"} key={item.image}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
        <NeuralCanvas />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content shell" key={activeSlide}>
          <p className="eyebrow light"><span /> {slide.eyebrow}</p>
          <h1>{slide.title}<br /><em>{slide.accent}</em></h1>
          <p className="hero-copy">{slide.copy}</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#contacto">{slide.cta} <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#metodologia">Conoce nuestro método <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-trust">
            <span>Confidencialidad ejecutiva</span>
            <span>Rigor metodológico</span>
            <span>Acompañamiento 1:1</span>
          </div>
        </div>
        <div
          className="slider-controls"
          onMouseEnter={() => setSliderPaused(true)}
          onMouseLeave={() => setSliderPaused(false)}
          onFocus={() => setSliderPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setSliderPaused(false);
          }}
          aria-label="Controles del carrusel"
        >
          <button type="button" onClick={() => moveSlide(-1)} aria-label="Diapositiva anterior">←</button>
          <div className="slider-dots">
            {heroSlides.map((item, index) => (
              <button
                type="button"
                className={index === activeSlide ? "slider-dot is-active" : "slider-dot"}
                onClick={() => setActiveSlide(index)}
                aria-label={`Mostrar diapositiva ${index + 1}: ${item.title}`}
                aria-current={index === activeSlide ? "true" : undefined}
                key={item.image}
              >
                <span>{String(index + 1).padStart(2, "0")}</span><i />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => moveSlide(1)} aria-label="Diapositiva siguiente">→</button>
        </div>
        <div className="hero-index" aria-hidden="true">BMD / {String(activeSlide + 1).padStart(2, "0")}</div>
      </section>

      <section className="impact section-light">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> Decidir es una capacidad entrenable</p>
              <h2>Más perspectiva.<br />Menos ruido.</h2>
            </div>
            <p>Cuando la presión sube, el cerebro busca atajos. Nuestro trabajo es ayudarte a reconocerlos, ampliar la mirada y sostener decisiones de alto impacto.</p>
          </div>
          <div className="metrics-grid" aria-label="Características del acompañamiento">
            <article>
              <strong>3</strong>
              <div><span>capas de análisis</span><p>Persona · Equipo · Negocio</p></div>
            </article>
            <article>
              <strong>1:1</strong>
              <div><span>acompañamiento</span><p>Confidencial y ejecutivo</p></div>
            </article>
            <article>
              <strong>360°</strong>
              <div><span>de perspectiva</span><p>Cognición · Emoción · Contexto</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="about" id="nosotros">
        <div className="about-visual" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit orbit-three" />
          <span className="core-mark">D</span>
          <span className="orbit-label label-one">Evidencia</span>
          <span className="orbit-label label-two">Estrategia</span>
          <span className="orbit-label label-three">Criterio</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow light"><span /> Nosotros</p>
          <h2>La decisión más importante comienza <em>dentro de quien decide.</em></h2>
          <p>BroadMind Decision nace para acompañar a líderes que cargan con decisiones que no pueden delegar. Integramos neurociencia, estrategia y conversación ejecutiva para convertir intuición en criterio consciente.</p>
          <blockquote>
            “No entregamos respuestas prefabricadas. Creamos el espacio y el método para que cada líder encuentre la decisión que su contexto exige.”
            <footer>Fundador &amp; Principal Advisor</footer>
          </blockquote>
          <div className="trust-row">
            <span><b>01</b> Evidencia antes que tendencia</span>
            <span><b>02</b> Confidencialidad sin excepciones</span>
          </div>
        </div>
      </section>

      <section className="services section-light" id="servicios">
        <div className="shell">
          <div className="section-heading services-heading">
            <div>
              <p className="eyebrow"><span /> Servicios</p>
              <h2>Intervenciones diseñadas para <em>decisiones reales.</em></h2>
            </div>
            <p>Un acompañamiento modular que se adapta al momento del líder, la complejidad del reto y el ritmo de la organización.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className={service.featured ? "service-card featured" : "service-card"} key={service.number}>
                <div className="card-top"><span>{service.number}</span><i aria-hidden="true">↗</i></div>
                <p className="card-label">{service.label}</p>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <ul>
                  {service.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="method" id="metodologia">
        <div className="shell">
          <div className="method-intro">
            <p className="eyebrow light"><span /> Metodología neuro-estratégica</p>
            <h2>Del ruido mental<br />a una decisión <em>nítida.</em></h2>
            <p>Un proceso riguroso, humano y accionable que convierte reflexión en movimiento.</p>
          </div>
          <div className="process-list">
            {process.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
                <i aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="outcomes section-light">
        <div className="shell outcomes-grid">
          <div className="outcomes-copy">
            <p className="eyebrow"><span /> El resultado</p>
            <h2>Decisiones que puedes explicar, sostener y <em>ejecutar.</em></h2>
            <p>No se trata de eliminar la incertidumbre. Se trata de construir la claridad suficiente para avanzar con convicción.</p>
            <a className="text-link dark" href="#contacto">Explora tu próximo paso <span aria-hidden="true">↗</span></a>
          </div>
          <div className="outcome-stack">
            <article><span>01</span><div><h3>Claridad de criterio</h3><p>Distinguir la señal del ruido antes de comprometer recursos.</p></div></article>
            <article><span>02</span><div><h3>Coherencia ejecutiva</h3><p>Alinear lo que piensas, comunicas y finalmente haces.</p></div></article>
            <article><span>03</span><div><h3>Acción sostenible</h3><p>Traducir la decisión en pasos que el equipo puede sostener.</p></div></article>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow"><span /> Contacto confidencial</p>
            <h2>Tu próxima gran decisión merece una <em>mejor conversación.</em></h2>
            <p>Cuéntanos brevemente el contexto. Te responderemos para coordinar una primera conversación de exploración.</p>
            <div className="contact-detail">
              <span>Correo</span>
              <a href="mailto:contacto@broadmindecision.com">contacto@broadmindecision.com</a>
            </div>
            <div className="availability"><i /> Conversaciones en español e inglés</div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-main">
          <a className="brand footer-brand" href="#inicio" aria-label="BroadMind Decision, volver al inicio"><BrandLogo full /></a>
          <p>Executive Coaching &amp;<br />Strategic Consulting</p>
          <div className="footer-nav">
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} BroadMind Decision</span>
          <span>Neurociencia · Estrategia · Liderazgo</span>
        </div>
      </footer>
    </main>
  );
}

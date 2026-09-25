import { HeroSlider, ResourceBanner, SectionHeading, SiteFooter, SiteHeader } from "./components";
import { decisionInsights, programs } from "./content";

const pillars = [
  { number: "01", title: "Neurociencia", image: "/images/pillar-neuroscience-v2.jpg", imageAlt: "Directivo examinando evidencia antes de tomar una decisión de alta responsabilidad", copy: "Planificación, control de impulsos, flexibilidad cognitiva, toma de perspectiva y regulación emocional aplicadas a decisiones de alta responsabilidad." },
  { number: "02", title: "Neuromanagement", image: "/images/pillar-neuromanagement-v2.jpg", imageAlt: "Equipo directivo organizando prioridades y rutas de ejecución sobre una mesa estratégica", copy: "Herramientas para optimizar cómo el equipo directivo procesa información, prioriza, conversa y ejecuta bajo presión." },
  { number: "03", title: "Neuroliderazgo", image: "/images/pillar-neuroliderazgo-v2.jpg", imageAlt: "Líder ejecutivo facilitando una conversación estratégica con su equipo", copy: "Integración de neurociencia cognitiva y emocional al estilo de liderazgo, la influencia, el riesgo y la visión estratégica." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSlider />
      <section className="credibility-strip" aria-label="Compromisos de BroadMind Decision">
        <div className="shell credibility-grid">
          <p><b>01</b><span>Base científica rigurosa</span><small>No es coaching genérico</small></p>
          <p><b>02</b><span>Diseñado para directivos</span><small>Contexto real de alta responsabilidad</small></p>
          <p><b>03</b><span>Transferencia inmediata</span><small>Herramientas de uso inmediato</small></p>
          <p><b>04</b><span>Enfoque integral</span><small>Cognición, emoción y relaciones</small></p>
        </div>
      </section>
      <section className="section paper-section home-platform-section">
        <div className="shell">
          <SectionHeading eyebrow="Una plataforma ejecutiva latinoamericana" title={<>Neurociencia para decisiones de <em>alto impacto.</em></>} copy="BroadMind Decision conecta el conocimiento del funcionamiento cerebral con los retos concretos que enfrentan CEOs, directores y equipos de alta dirección." />
          <div className="pillar-grid">
            {pillars.map((pillar) => <article className="pillar-card" key={pillar.number}><figure className="pillar-visual"><img src={pillar.image} width="1200" height="900" loading="lazy" decoding="async" alt={pillar.imageAlt} /></figure><div className="pillar-card-body"><span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.copy}</p></div></article>)}
          </div>
        </div>
      </section>
      <section className="section dark-section">
        <div className="shell">
          <SectionHeading light eyebrow="Programas y servicios" title={<>Para el líder, el equipo y <em>la organización.</em></>} copy="Cuatro formatos, una misma exigencia: transformar conocimiento neurocientífico en claridad, conversación y acción ejecutiva." />
          <div className="program-preview-grid">
            {programs.map((program) => <article key={program.number}><span>{program.number}</span><p>{program.format}</p><h3>{program.title}</h3><small>{program.short}</small><a href={`/programas#programa-${program.number}`}>Ver programa <b aria-hidden="true">↗</b></a></article>)}
          </div>
          <a className="button button-gold section-button" href="/programas#comparativa">Comparar todos los programas <span aria-hidden="true">→</span></a>
        </div>
      </section>
      <section className="section paper-section home-neuroscience-section">
        <div className="shell">
          <SectionHeading eyebrow="Neurociencia aplicada" title={<>¿Por qué la neurociencia <em>mejora tus decisiones?</em></>} copy="Cada decisión pasa primero por tu cerebro, no por tu experiencia ni tu intuición. Comprender ese proceso es la diferencia entre liderar con claridad o bajo el ruido invisible del sesgo y el estrés." />
          <div className="insight-grid">
            {decisionInsights.map((insight) => <article className="insight-card" key={insight.number}><span>{insight.number}</span><h3>{insight.title}</h3><p>{insight.copy}</p><blockquote>{insight.quote}</blockquote></article>)}
          </div>
          <div className="center-actions"><a className="button button-dark" href="/neurociencia">Profundizar en la ciencia <span aria-hidden="true">→</span></a><a className="text-link dark" href="/diagnostico">Descubrir mi perfil neurodecisional <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
      <ResourceBanner showBiasTable />
      <section className="section closing-cta">
        <div className="shell closing-grid">
          <p className="eyebrow light"><span /> El siguiente paso</p>
          <h2>Reconocer tu patrón es el primer nivel. <em>Entrenarlo cambia la decisión.</em></h2>
          <div><p>Empieza con una exploración confidencial de tu reto o completa el autodiagnóstico ejecutivo en menos de diez minutos.</p><div className="hero-actions"><a className="button button-gold" href="/contacto">Agenda una conversación <span aria-hidden="true">↗</span></a><a className="text-link" href="/diagnostico">Hacer el diagnóstico <span aria-hidden="true">→</span></a></div></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

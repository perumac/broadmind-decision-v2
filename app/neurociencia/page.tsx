import type { Metadata } from "next";
import { PageHero, ResourceBanner, SectionHeading, SiteFooter, SiteHeader } from "../components";
import { neuroscienceMechanisms } from "../content";

/* eslint-disable @next/next/no-img-element -- The editorial artwork is an optimized static project asset. */

export const metadata: Metadata = { title: "Neurociencia Aplicada | BroadMind Decision", description: "Cómo los sesgos, el estrés, las emociones y la neuroplasticidad influyen en la toma de decisiones ejecutivas." };

export default function NeurocienciaPage() {
  return <main><SiteHeader /><PageHero eyebrow="Neurociencia aplicada" title="Comprender el mecanismo." accent="Cambiar la respuesta." copy="Contenido ejecutivo para reconocer cómo el cerebro procesa presión, riesgo, emoción y consenso antes de que la decisión llegue a la mesa." />
    <section className="section paper-section neuro-mechanisms-section">
      <div className="shell">
        <SectionHeading eyebrow="Cuatro mecanismos" title={<>¿Por qué la neurociencia <em>cambia tus decisiones?</em></>} copy="Cada decisión que tomas pasa primero por tu cerebro — no por tu experiencia ni tu intuición. Comprender cómo funciona ese proceso es la diferencia entre liderar con claridad o bajo el ruido invisible del sesgo y el estrés." />
        <div className="mechanism-list">{neuroscienceMechanisms.map((mechanism)=><article className="mechanism-card" key={mechanism.number}><figure className="mechanism-visual"><img src={mechanism.image} width="900" height="1200" loading="lazy" decoding="async" alt={mechanism.imageAlt} /></figure><div className="mechanism-content"><span className="mechanism-number">{mechanism.number}</span><h2>{mechanism.title}</h2><div className="mechanism-description">{mechanism.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</div><blockquote>{mechanism.quote}</blockquote></div></article>)}</div>
        <aside className="mechanism-diagnostic-cta">
          <div><p className="eyebrow light"><span /> El siguiente paso</p><h2>Descubre cómo está funcionando <em>tu cerebro ejecutivo.</em></h2><p>Responde el autodiagnóstico y recibe tu perfil neurodecisional en menos de 10 minutos.</p></div>
          <a className="button button-gold" href="/diagnostico"><span aria-hidden="true">→</span> Hacer el diagnóstico gratuito</a>
        </aside>
      </div>
    </section>
    <ResourceBanner />
    <section className="section paper-section"><div className="shell editorial-grid"><div className="editorial-intro"><SectionHeading eyebrow="Biblioteca ejecutiva" title={<>Ciencia que se puede <em>usar.</em></>} /><figure className="editorial-visual"><img src="/images/editorial-applied-decision-v2.jpg" width="1440" height="960" loading="lazy" decoding="async" alt="Equipo directivo comparando informes y evidencia antes de tomar una decisión estratégica" /></figure></div><div className="article-list"><article><span>Lectura · 6 min</span><h3>Qué le ocurre a la perspectiva cuando aumenta la presión</h3><p>Una introducción a carga cognitiva, regulación y pausas decisionales.</p></article><article><span>Video · Próximamente</span><h3>Cómo proteger el disenso en un equipo de dirección</h3><p>Diseño de conversaciones que disminuyen la conformidad automática.</p></article><article><span>Recurso</span><h3>Autodiagnóstico del cerebro ejecutivo</h3><p>Diez preguntas para iniciar una conversación sobre tus patrones.</p><a href="/diagnostico">Realizar diagnóstico →</a></article></div></div></section>
    <SiteFooter /></main>;
}

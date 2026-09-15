import type { Metadata } from "next";
import { PageHero, SectionHeading, SiteFooter, SiteHeader } from "../components";
import { programs } from "../content";

/* eslint-disable @next/next/no-img-element -- Program imagery is stored as optimized static project assets. */

export const metadata: Metadata = { title: "Programas y Servicios | BroadMind Decision", description: "Programas ejecutivos, consultoría, workshops y coaching directivo con base en neurociencia." };

export default function ProgramasPage() {
  return <main><SiteHeader /><PageHero eyebrow="Virtual y presencial" title="Cuatro caminos." accent="Una ventaja cognitiva real." copy="Programas diseñados para el nivel de responsabilidad, el momento del líder y la complejidad del sistema en el que decide."><a className="button button-gold" href="#comparativa">Comparar programas <span aria-hidden="true">↓</span></a></PageHero>
    <section className="section paper-section"><div className="shell"><SectionHeading eyebrow="Oferta ejecutiva" title={<>Del autoconocimiento a la <em>transformación organizacional.</em></>} copy="Cada intervención combina comprensión científica, experiencia aplicada y transferencia al contexto de negocio." />
      <div className="program-detail-list">{programs.map((program)=><article id={`programa-${program.number}`} key={program.number}><div className="program-number">{program.number}</div><div className="program-main"><p>{program.format}</p><h2>{program.title}</h2><p className="program-short">{program.short}</p><div className="program-audience"><span>Dirigido a</span><strong>{program.audience}</strong></div></div><div className="program-includes"><figure className="program-visual"><img src={program.image} width="1200" height="900" loading="lazy" decoding="async" alt={program.imageAlt} /></figure><span>El programa incluye</span><ul>{program.includes.map((item)=><li key={item}>{item}</li>)}</ul><a className="text-link dark" href="/contacto">Consultar disponibilidad <span aria-hidden="true">↗</span></a></div></article>)}</div>
    </div></section>
    <section className="section comparison-section programs-comparison-section" id="comparativa"><div className="shell"><SectionHeading light singleLine eyebrow="Comparativa" title={<>Encuentra el formato que responde a <em>tu momento.</em></>} />
      <div className="comparison-wrap"><table><thead><tr><th>Programa</th><th>Foco</th><th>Modalidad</th><th>Ideal para</th></tr></thead><tbody><tr><td>BroadMind Decision Program</td><td>Formación intensiva</td><td>Virtual o presencial</td><td>Transformación individual con transferencia</td></tr><tr><td>Consultoría</td><td>Sistema directivo</td><td>A medida</td><td>Cultura y decisiones colectivas</td></tr><tr><td>Workshop</td><td>Experiencia de entrada</td><td>Una jornada</td><td>Equipos y consejos de administración</td></tr><tr><td>Coaching directivo</td><td>Desarrollo individual</td><td>Virtual o presencial</td><td>Transición, presión o crecimiento</td></tr></tbody></table></div>
      <div className="center-actions"><a className="button button-gold" href="/diagnostico">Empezar con el diagnóstico <span aria-hidden="true">→</span></a><a className="text-link" href="/contacto">Diseñar una intervención <span aria-hidden="true">↗</span></a></div></div></section>
    <SiteFooter /></main>;
}

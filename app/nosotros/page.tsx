import type { Metadata } from "next";
import { PageHero, SectionHeading, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "Nosotros | BroadMind Decision", description: "Misión, visión, valores y enfoque científico-ejecutivo de BroadMind Decision." };

const values = [
  ["01", "Rigor científico", "Todo contenido está sustentado en evidencia neurocientífica validada."],
  ["02", "Aplicabilidad práctica", "El conocimiento se convierte en protocolos, conversaciones y acciones directivas concretas."],
  ["03", "Confidencialidad", "Los procesos individuales y organizacionales se tratan con absoluta discreción."],
  ["04", "Desarrollo integral", "Comprendemos al líder como un ser completo, no únicamente como función ejecutiva."],
  ["05", "Excelencia", "Cuidamos cada programa, sesión e interacción con estándares consistentes de calidad."],
];

export default function NosotrosPage() {
  return <main><SiteHeader /><PageHero eyebrow="Identidad institucional" title="Ciencia para comprender." accent="Criterio para liderar." copy="BroadMind Decision es la única plataforma ejecutiva latinoamericana que nace para transformar la manera en que los líderes toman decisiones, conducen equipos y gestionan su desempeño cognitivo." />
    <section className="section paper-section about-story-section"><div className="shell story-grid"><header className="section-heading about-story-heading"><h2>Lidera desde el cerebro. <em>Decide con propósito.</em></h2><p className="eyebrow"><span /> Nuestra razón de ser</p></header>
      <div className="story-copy"><p>Integramos neurociencia, neuroliderazgo y neuromanagement para acompañar a quienes sostienen decisiones que no pueden delegar. Trabajamos sobre los mecanismos cognitivos, emocionales y relacionales que intervienen cuando la presión y la complejidad aumentan.</p><p>Nuestro enfoque evita las respuestas prefabricadas. Cada proceso parte del contexto real del líder o del equipo, identifica patrones que limitan su criterio y traduce la evidencia en herramientas que pueden aplicarse desde la primera sesión.</p></div></div></section>
    <section className="mission-section"><div className="shell mission-grid"><article><span>Misión</span><h2>Transformar la manera en que los líderes deciden, lideran y gestionan su desempeño cognitivo.</h2><p>Lo hacemos a través del conocimiento aplicado de la neurociencia, el neuroliderazgo y el neuromanagement.</p></article><article><span>Visión</span><h2>Ser un referente latinoamericano en formación ejecutiva basada en neurociencia.</h2><p>Contribuimos al desarrollo de organizaciones más humanas, adaptativas y efectivas.</p></article></div></section>
    <section className="section paper-section about-approach-section"><div className="shell"><SectionHeading singleLine eyebrow="Cómo trabajamos" title={<>Rigor sin distancia. <em>Profundidad con aplicación.</em></>} copy="La credibilidad se construye haciendo visible el método, sus límites y la relación entre evidencia y práctica." /><div className="approach-grid"><article><b>Ciencia cognitiva</b><p>Comprendemos funciones ejecutivas, sesgos, atención, memoria de trabajo y regulación emocional.</p></article><article><b>Contexto ejecutivo</b><p>Traducimos ese conocimiento a decisiones de negocio, conversaciones de dirección y coordinación de equipos.</p></article><article><b>Transferencia</b><p>Diseñamos ejercicios, protocolos y planes que el participante puede usar en su realidad inmediata.</p></article></div></div></section>
    <section className="section dark-section about-values-section"><div className="shell"><SectionHeading light singleLine eyebrow="Nuestros valores" title={<>La calidad del proceso también <em>es parte del resultado.</em></>} /><div className="values-list">{values.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="section paper-section">
      <div className="shell team-section">
        <header className="team-header">
          <p className="eyebrow"><span /> Equipo científico-ejecutivo</p>
          <div className="team-heading-row"><h2>Experiencia que conecta ciencia, liderazgo y negocio.</h2><p>Dos especialistas senior lideran una práctica diseñada para acompañar decisiones de alta complejidad con evidencia, criterio ejecutivo y una comprensión profunda de las personas.</p></div>
        </header>
        <div className="team-grid">
          <article className="team-card"><div className="team-photo"><img src="/images/team-alejandro-vega.png" alt="Retrato corporativo de Alejandro Vega" /></div><div className="team-profile"><p className="team-role">Director de Neurociencia</p><h3>Dr. Cesar Vega</h3><p>Neurocientífico cognitivo y asesor de alta dirección con más de 22 años de experiencia acompañando a presidentes, comités ejecutivos y organizaciones en procesos de decisión bajo presión.</p><ul><li>Doctor en Neurociencia Cognitiva</li><li>Estrategia y funciones ejecutivas</li><li>Asesoría a equipos directivos</li></ul></div></article>
          <article className="team-card"><div className="team-photo"><img src="/images/team-mateo-salazar.png" alt="Retrato corporativo de Mateo Salazar" /></div><div className="team-profile"><p className="team-role">Director de Neuroliderazgo</p><h3>Dr. Mateo Salazar</h3><p>Especialista en comportamiento organizacional y transformación ejecutiva con 19 años de trayectoria desarrollando líderes, alineando equipos y asesorando cambios estratégicos en empresas regionales.</p><ul><li>Doctor en Psicología Organizacional</li><li>Neuroliderazgo y cultura ejecutiva</li><li>Desarrollo avanzado de equipos</li></ul></div></article>
        </div>
      </div>
    </section>
    <SiteFooter /></main>;
}

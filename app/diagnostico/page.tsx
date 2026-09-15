import type { Metadata } from "next";
import { DiagnosticQuiz, PageHero, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "Autodiagnóstico Ejecutivo | BroadMind Decision", description: "Cuestionario orientativo de diez preguntas para explorar patrones de decisión ejecutiva." };

export default function DiagnosticoPage() {
  return <main><SiteHeader /><PageHero eyebrow="Autodiagnóstico ejecutivo" title="¿Cómo toma decisiones" accent="tu cerebro ejecutivo?" copy="Explora tus patrones de decisión en diez preguntas. No hay respuestas correctas: el objetivo es crear conciencia sobre cómo actúas habitualmente, no describir tu comportamiento ideal."><div className="hero-facts"><span>10 preguntas</span><span>8-12 minutos</span><span>Resultado inmediato</span></div></PageHero>
    <section className="quiz-intro"><div className="shell"><div><b>Antes de empezar</b><p>Responde de forma individual y elige la alternativa que mejor describe tu conducta habitual. La puntuación ofrece una orientación inicial para conversar, no una evaluación de inteligencia ni competencia profesional.</p></div><p className="diagnostic-disclaimer">Herramienta educativa de autoconocimiento. No constituye diagnóstico clínico, psicológico ni neurocognitivo.</p></div></section>
    <section className="section paper-section"><div className="shell quiz-shell"><DiagnosticQuiz /></div></section>
    <SiteFooter /></main>;
}

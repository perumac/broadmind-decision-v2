import type { Metadata } from "next";
import { ContactDetails, ContactForm, PageHero, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "Contacto | BroadMind Decision", description: "Agenda una conversación de exploración con BroadMind Decision." };

export default function ContactoPage() {
  return <main><SiteHeader /><PageHero eyebrow="Contacto confidencial" title="Una gran decisión merece" accent="una mejor conversación." copy="Comparte el contexto esencial. Responderemos para coordinar una primera sesión de exploración y confirmar si nuestro enfoque es adecuado para tu reto." />
    <section className="section contact-section"><div className="contact-orbit" aria-hidden="true" /><div className="shell contact-grid"><div className="contact-copy"><p className="eyebrow"><span /> Línea directa</p><h2>Conversemos con la profundidad que tu decisión exige.</h2><p className="contact-lead">Trabajamos con CEOs, directores, consejos y equipos de alta responsabilidad. Comparte el contexto esencial y continuaremos la conversación de forma directa y confidencial.</p><ContactDetails /><div className="contact-points"><span>Confidencialidad ejecutiva</span><span>Atención virtual o presencial</span><span>Conversaciones en español e inglés</span></div></div><ContactForm /></div></section>
    <SiteFooter /></main>;
}

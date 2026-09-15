import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const routes = [
  ["/", "Tu cerebro es tu ventaja competitiva"],
  ["/nosotros", "Ciencia para comprender"],
  ["/programas", "Cuatro caminos"],
  ["/neurociencia", "Comprender el mecanismo"],
  ["/diagnostico", "Autodiagnóstico ejecutivo"],
  ["/contacto", "Una gran decisión merece"],
];

for (const [path, expectedText] of routes) {
  test(`server-renders ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.match(response.headers.get("content-security-policy") ?? "", /frame-ancestors 'none'/);
    const html = await response.text();
    assert.match(html, new RegExp(expectedText, "i"));
    assert.match(html, /BroadMind Decision/);
    assert.match(html, /Agenda una conversación/);
  });
}

test("home exposes the core journeys and downloadable guide", async () => {
  const html = await (await render()).text();
  assert.match(html, /href="\/programas"/);
  assert.match(html, /href="\/diagnostico"/);
  assert.match(html, /href="\/contacto"/);
  assert.match(html, /guia-5-sesgos-broadmind-decision\.pdf/);
  assert.match(html, /BroadMind Decision Program/);
  assert.match(html, /Los sesgos distorsionan el juicio/);
});

test("programs page includes all four executive formats", async () => {
  const html = await (await render("/programas")).text();
  for (const program of [
    "BroadMind Decision Program",
    "Neuroliderazgo y Neuromanagement",
    "El Cerebro Ejecutivo en la Toma de Decisiones",
    "Coaching Directivo con Base en Neurociencia",
  ]) assert.match(html, new RegExp(program));
});

test("diagnostic renders ten questions and its educational disclaimer", async () => {
  const html = await (await render("/diagnostico")).text();
  assert.equal((html.match(/class="question-card"/g) ?? []).length, 10);
  assert.match(html, /Cuando debes tomar una decisión urgente bajo presión/);
  assert.match(html, /¿Con qué frecuencia reflexionas de forma estructurada/);
  assert.match(html, /No constituye diagnóstico clínico/);
});

test("downloadable guide is a valid multi-page PDF artifact", async () => {
  const pdf = await readFile(new URL("../public/downloads/guia-5-sesgos-broadmind-decision.pdf", import.meta.url));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  assert.ok(pdf.length > 20_000);
});

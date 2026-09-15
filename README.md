# BroadMind Decision

Sitio institucional de BroadMind Decision, enfocado en neurociencia aplicada, neuroliderazgo y neuromanagement para CEOs, directores y equipos de alta responsabilidad.

## Requisitos

- Node.js 22.13 o superior
- npm

## Desarrollo local

```bash
npm ci
npm run dev
```

La aplicación incluye las rutas `/`, `/nosotros`, `/programas`, `/neurociencia`, `/diagnostico` y `/contacto`.

## Validación

```bash
npm run lint
npm test
npm audit
```

`npm test` crea la versión de producción y comprueba las rutas principales, el diagnóstico, el PDF descargable y las cabeceras de seguridad.

## Configuración de producción

Define `NEXT_PUBLIC_SITE_URL` con la dirección pública definitiva para generar correctamente los metadatos y la imagen utilizada al compartir el sitio.

El formulario de contacto funciona completamente en el navegador: valida y codifica los datos antes de abrir un mensaje de WhatsApp. No existe una base de datos ni un servidor que almacene respuestas del formulario o del autodiagnóstico.

## Seguridad y privacidad

- No guardes credenciales en el repositorio. Los archivos `.env*` están excluidos por Git.
- Las respuestas incluyen políticas contra carga de objetos, inclusión en marcos, detección incorrecta de contenido y acceso innecesario a cámara, micrófono, ubicación, pagos o USB.
- Las dependencias deben revisarse antes de publicar con `npm audit`.
- Los archivos de trabajo, capturas y documentos fuente locales están excluidos mediante `.gitignore`.

Consulta [SECURITY.md](SECURITY.md) para reportar un problema de seguridad.

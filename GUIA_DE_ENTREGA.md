# Guía rápida de publicación y entrega — MatchPoint

## Qué estamos entregando

1. **Canvas de equipo:** documento visual en SVG editable + acuerdos escritos.
2. **Visión del producto:** documento accesible en la web y en Markdown.
3. **Mapa de historias de usuario:** SVG completo y 4 secciones detalladas, 72 historias organizadas en 12 épicas.
4. **Product Backlog:** Excel, CSV y Markdown + buscador interactivo en la web.
5. **URL del sitio:** se obtiene **después de publicarlo** en GitHub Pages.

## Estado de la revisión

- [x] Sitio web elaborado y archivos incorporados.
- [x] 72 historias contrastadas con la tabla del Product Backlog.
- [x] Comprobado que no faltan los enlaces a archivos locales.
- [x] Comprobado el funcionamiento del buscador, filtros y detalle de historias.
- [ ] El equipo confirma las metas personales y los acuerdos propuestos.
- [ ] Se socializan prioridades y entregas con la profesora para sus ajustes.
- [ ] Se publica la web en GitHub Pages y se comprueba la URL.
- [ ] Se entrega el enlace público en Canvas.

## Opción recomendada: Git desde Windows (PowerShell)

1. Crea el repositorio **público** `matchpoint-documentacion` en tu cuenta GitHub, sin README inicial.
2. Descomprime el ZIP en tu equipo.
3. Abre PowerShell **dentro de la carpeta que contiene `index.html`**.
4. Ejecuta los siguientes comandos, cambiando `TU_USUARIO` por tu usuario real:

```powershell
git init
git add .
git commit -m "Documentacion inicial MatchPoint"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/matchpoint-documentacion.git
git push -u origin main
```

5. Abre el repositorio en GitHub y entra a **Settings → Pages → Build and deployment**.
6. Elige **Deploy from a branch**, `main`, `/(root)` y guarda.
7. Espera a que aparezca la dirección del sitio. Verifica que puedes acceder sin iniciar sesión.

**Atención:** `https://TU_USUARIO.github.io/matchpoint-documentacion/` es solo una forma típica de la URL, no una dirección activa hasta que la hayas publicado. Si `git remote add origin` indica que ya existe un remoto, revisa la configuración con `git remote -v` antes de cambiarla.

## Comprobaciones antes de enviar

- [ ] La página inicial carga sin error.
- [ ] Se muestra el Team Canvas completo.
- [ ] Se lee la visión del producto y los usuarios previstos.
- [ ] Se pueden cambiar las cinco vistas del mapa de historias.
- [ ] El Product Backlog muestra 72 historias sin filtros.
- [ ] Al buscar `MP-003`, se muestra su historia y se abre el detalle.
- [ ] Los botones para descargar SVG y Excel abren los archivos correctos.
- [ ] La URL se abre también desde un celular.
- [x] Los cuatro nombres están correctos: Santiago Solano, Maicol Rubiano, Diego Romero y Camilo Bastidas.

### Nota académica

Las metas individuales, acuerdos propuestos y priorización del backlog necesitan revisión y aprobación; el sitio no declara que ya se ha implementado la plataforma MatchPoint.


## Identidad académica y logo

La página incorpora el logo de la UMB suministrado por el estudiante en `assets/img/umb-logo-original.png`. El aviso «Trabajo académico» aclara que no es un sitio institucional oficial ni representa un sistema MatchPoint implementado.

## Evidencia de construcción del mapa

La guía solicita trabajo individual previo al consenso. El mapa de esta página es la propuesta **consolidada**, sin afirmar que se hayan elaborado o mostrado mapas individuales. Antes de presentar, documentar la participación de los integrantes y, si aplica, enlazar las propuestas individuales.

## Punto de revisión importante del backlog

La historia **MP-005 — Proteger información ajena** está inicialmente clasificada para E2. Esa prioridad no debe interpretarse como permiso para mostrar datos de otros usuarios durante el MVP: la protección desde E1 está exigida en el enunciado y debe verificarse en MP-003, MP-050 y MP-051. Se recomienda revisar la priorización de MP-005 con la profesora antes de dar el backlog por definitivo.

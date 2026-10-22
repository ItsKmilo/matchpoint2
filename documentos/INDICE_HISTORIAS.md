# MatchPoint · Índice de Historias de Usuario (Optimizado a 2 Sprints)

**Empresa:** Nexo Digital Labs  
**Equipo:** Santiago Solano · Maicol Rubiano · Diego Romero · Camilo Bastias  
**Estado:** Propuesta ajustada a 16 Historias de Usuario distribuidas en 2 Sprints (Entregas).

## Organización de Sprints

- **Sprint 1 (Entrega 1 — MVP):** 8 historias imprescindibles (Identidad, Torneos, Eventos, Pronósticos, Créditos, Atomicidad e Historial).
- **Sprint 2 (Entrega 2 — Consolidación):** 8 historias avanzadas (Resultados, Liquidaciones, Borrar apostador HU011, Auditoría, Perfiles y Reportes).

---

## Listado de Historias de Usuario

### 1. HU001 — Identificación y autenticación de usuarios
- **Sprint:** Sprint 1 · **Prioridad:** Must · **Épica:** Identidad y permisos
- **Descripción:** Como participante o administrador, quiero iniciar sesión de forma segura para acceder únicamente a las funciones de mi rol.
- **Paso a paso:** El usuario ingresa credenciales, el sistema valida contraseña cifrada, genera token seguro y redirige al panel según rol.

### 2. HU002 — Crear torneo deportivo
- **Sprint:** Sprint 1 · **Prioridad:** Must · **Épica:** Gestión de torneos
- **Descripción:** Como Usuario Administrador quiero crear un torneo deportivo para organizar competencias.
- **Paso a paso:** El administrador completa formulario con nombre, deporte y fechas, el sistema valida duplicados y registra el torneo.

### 3. HU003 — Agregar evento y fecha de cierre
- **Sprint:** Sprint 1 · **Prioridad:** Must · **Épica:** Programación de eventos
- **Descripción:** Como Usuario Administrador quiero programar eventos dentro de un torneo definiendo fecha de cierre de pronósticos.
- **Paso a paso:** El administrador selecciona torneo, ingresa fecha/hora límite sincronizada con el servidor y activa el evento.

### 4. HU004 — Consultar torneos y detalle de eventos
- **Sprint:** Sprint 1 · **Prioridad:** Must · **Épica:** Explorar torneos
- **Descripción:** Como Participante quiero explorar torneos disponibles y sus encuentros.
- **Paso a paso:** El participante accede a torneos activos, visualiza tarjetas con estado y consulta eventos y fechas límite.

### 5. HU005 — Registrar pronóstico en un evento
- **Sprint:** Sprint 1 · **Prioridad:** Must · **Épica:** Registrar pronósticos
- **Descripción:** Como Participante quiero registrar mi pronóstico (Local, Empate, Visitante) en un evento abierto.
- **Paso a paso:** El participante elige opción, el servidor valida fecha límite y saldo disponible, descuenta créditos y emite comprobante.

### 6. HU006 — Asignar créditos iniciales y comprobar saldo
- **Sprint:** Sprint 1 · **Prioridad:** Must · **Épica:** Controlar créditos
- **Descripción:** Como Administrador o Participante quiero gestionar y verificar saldo de créditos virtuales.
- **Paso a paso:** El sistema asigna créditos iniciales al registro, comprueba saldo antes de cada apuesta y actualiza en tiempo real.

### 7. HU007 — Evitar solicitudes repetidas y concurrencia
- **Sprint:** Sprint 1 · **Prioridad:** Must · **Épica:** Operaciones confiables
- **Descripción:** Como DBA quiero garantizar atomicidad para evitar descuentos duplicados o por doble clic.
- **Paso a paso:** Se genera clave de idempotencia, el backend valida peticiones repetidas y aplica bloqueos transaccionales.

### 8. HU008 — Consultar mis pronósticos y movimientos
- **Sprint:** Sprint 1 · **Prioridad:** Must · **Épica:** Mi actividad e historial
- **Descripción:** Como Participante quiero consultar mi historial de pronósticos y movimientos de créditos.
- **Paso a paso:** El participante accede a 'Mi Historial', visualiza pestañas con datos propios filtrados por la sesión autenticada.

### 9. HU009 — Cierre de pronósticos y resultado oficial
- **Sprint:** Sprint 2 · **Prioridad:** Must · **Épica:** Publicar resultados
- **Descripción:** Como Usuario Administrador quiero cerrar pronósticos y publicar el resultado oficial.
- **Paso a paso:** El administrador cierra pronósticos bloqueando nuevos registros, ingresa marcador final y publica el resultado.

### 10. HU010 — Determinar aciertos y liquidar premios
- **Sprint:** Sprint 2 · **Prioridad:** Must · **Épica:** Liquidar participaciones
- **Descripción:** Como Usuario Administrador quiero determinar aciertos y acreditar premios sin duplicidad.
- **Paso a paso:** El administrador ejecuta liquidación, el sistema evalúa pronósticos contra resultado y abona premios de forma idempotente.

### 11. HU011 — Borrar apostador
- **Sprint:** Sprint 2 · **Prioridad:** Must · **Épica:** Gestión de torneos
- **Descripción:** Como Usuario Administrador quiero borrar apostador siempre y cuando no tenga apuestas asociadas.
- **Paso a paso:** El sistema valida apuestas asociadas; si no tiene, pide confirmación y lo borra; si tiene, muestra alerta de restricción.

### 12. HU012 — Consultar transacciones y conciliar saldos
- **Sprint:** Sprint 2 · **Prioridad:** Must · **Épica:** Auditoría y seguimiento
- **Descripción:** Como Responsable de Control quiero consultar transacciones y conciliar saldos.
- **Paso a paso:** El auditor accede al libro mayor, ejecuta conciliación de cuentas y verifica correspondencia exacta con saldos.

### 13. HU013 — Proteger información ajena y perfil
- **Sprint:** Sprint 2 · **Prioridad:** Should · **Épica:** Identidad y permisos
- **Descripción:** Como Participante quiero consultar mi perfil protegiendo mi información privada.
- **Paso a paso:** El backend valida el token de sesión contra el ID solicitado, bloqueando intentos de acceso no autorizado (403).

### 14. HU014 — Modificar y administrar estado del torneo
- **Sprint:** Sprint 2 · **Prioridad:** Should · **Épica:** Gestión de torneos
- **Descripción:** Como Usuario Administrador quiero modificar datos y estado del torneo.
- **Paso a paso:** El administrador edita datos o estado, el sistema valida que no existan eventos pendientes de liquidación y guarda cambios.

### 15. HU015 — Corregir resultado con control de cambios
- **Sprint:** Sprint 2 · **Prioridad:** Should · **Épica:** Publicar resultados
- **Descripción:** Como Usuario Administrador quiero corregir un resultado publicado manteniendo historial de cambios.
- **Paso a paso:** El administrador ingresa nuevo marcador y motivo justificado, el sistema archiva versión previa y dispara reliquidación.

### 16. HU016 — Obtener reportes consolidados
- **Sprint:** Sprint 2 · **Prioridad:** Could · **Épica:** Auditoría y seguimiento
- **Descripción:** Como Responsable de Control quiero obtener reportes consolidados para revisión institucional.
- **Paso a paso:** El usuario selecciona torneo y fechas, el sistema genera reporte con estadísticas y permite exportar en CSV o PDF.

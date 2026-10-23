# MatchPoint · Product Backlog

> **Empresa solicitante:** Nexo Digital Labs  
> **Equipo:** Santiago Solano, Maicol Rubiano, Diego Romero y Camilo Bastidas  
> **Fase:** Inicio · Reducción a 16 Historias de Usuario distribuidas en 2 Sprints (Entregas).

## Visión

Construir una plataforma funcional de gestión de torneos deportivos y pronósticos con créditos virtuales, control de permisos, trazabilidad de transacciones y liquidación verificable de resultados.

Los créditos **no son dinero**, no tienen valor monetario, no pueden retirarse ni convertirse en dinero real.

## Resumen de la Reducción Académica

- **16 historias esenciales** distribuidas en **2 Sprints (Entregas)**.
- **Sprint 1 — MVP (10 historias):** Identidad, autenticación, gestión de torneos, programación de eventos, exploración, pronósticos y control de créditos iniciales.
- **Sprint 2 — Consolidación (6 historias):** Publicación de resultados, liquidación de premios, auditoría y conciliación financiera.
- Cada historia de usuario incluye identificador (HU001 a HU016), descripción formal (Como... quiero... para...), criterios de aceptación paso a paso y un mockup de interfaz visual/textual.

---

## Listado del Product Backlog (16 Historias / 2 Sprints)

| ID | Épica | Historia corta | Prioridad | Entrega | Puntos |
|---|---|---|---|---|---:|
| HU001 | Identidad y permisos | Identificación y autenticación de usuarios | Must | Sprint 1 | 5 |
| HU002 | Gestión de torneos | Crear torneo deportivo | Must | Sprint 1 | 5 |
| HU003 | Programación de eventos | Agregar evento y fecha de cierre | Must | Sprint 1 | 5 |
| HU004 | Explorar torneos | Consultar torneos y detalle de eventos | Must | Sprint 1 | 3 |
| HU005 | Registrar pronósticos | Registrar pronóstico en un evento | Must | Sprint 1 | 8 |
| HU006 | Controlar créditos | Asignar créditos iniciales y comprobar saldo | Must | Sprint 1 | 5 |
| HU007 | Operaciones confiables | Evitar solicitudes repetidas y concurrencia | Must | Sprint 1 | 8 |
| HU008 | Mi actividad e historial | Consultar mis pronósticos y movimientos | Must | Sprint 1 | 3 |
| HU009 | Publicar resultados | Cierre de pronósticos y publicación oficial | Must | Sprint 2 | 5 |
| HU010 | Liquidar participaciones | Determinar pronósticos acertados y liquidar | Must | Sprint 2 | 13 |
| HU011 | Gestión de torneos | Borrar apostador | Must | Sprint 2 | 5 |
| HU012 | Auditoría y seguimiento | Consultar transacciones y conciliar saldos | Must | Sprint 2 | 8 |
| HU013 | Identidad y permisos | Proteger información ajena y perfil | Should | Sprint 2 | 5 |
| HU014 | Gestión de torneos | Modificar y administrar estado del torneo | Should | Sprint 2 | 5 |
| HU015 | Publicar resultados | Corregir resultado publicado con auditoría | Should | Sprint 2 | 8 |
| HU016 | Auditoría y seguimiento | Obtener reportes consolidados del torneo | Could | Sprint 2 | 5 |

---

## Detalle de Historias de Usuario, Paso a Paso y Mockups de Interfaz

### HU001 · Identificación y autenticación de usuarios
**Épica:** Identidad y permisos · **Prioridad:** Must · **Sprint:** Sprint 1 · **Puntos:** 5 · **Responsable:** Maicol Rubiano

Como participante o administrador, quiero iniciar sesión de forma segura para acceder únicamente a las funciones de mi rol sin exponer información ajena.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: El usuario ingresa sus credenciales en el formulario de acceso.
2. Paso 2: El sistema valida que el correo exista y la contraseña sea correcta contra la base de datos cifrada.
3. Paso 3: Si las credenciales son válidas, se genera un token de sesión seguro y se redirige al panel correspondiente al rol (Administrador o Participante).
4. Paso 4: Si las credenciales fallan, se muestra un mensaje de error claro en pantalla sin revelar si el correo está registrado o no.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
|                   MATCHPOINT PLATFORM                        |
|                   Iniciar Sesión Segura                      |
+--------------------------------------------------------------+
| Correo Electrónico:                                          |
| [ usuario@matchpoint.com                                   ] |
|                                                              |
| Contraseña:                                                  |
| [ ********************                                     ] |
|                                                              |
| Rol Seleccionado: (o) Participante  ( ) Administrador        |
|                                                              |
| [  INICIAR SESIÓN SEGURA  ]      [ ¿Olvidaste la clave? ]    |
+--------------------------------------------------------------+
| [STATUS: Conexión cifrada SSL/TLS activa]                    |
+--------------------------------------------------------------+
```

---

### HU002 · Crear torneo deportivo
**Épica:** Gestión de torneos · **Prioridad:** Must · **Sprint:** Sprint 1 · **Puntos:** 5 · **Responsable:** Santiago Solano

Como Usuario Administrador quiero crear un torneo deportivo para organizar competencias, definir reglas y mantener la información actualizada.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: El administrador hace clic en 'Nuevo Torneo' desde el panel de gestión.
2. Paso 2: El sistema presenta un formulario solicitando nombre, deporte, fechas de inicio/cierre y modalidad.
3. Paso 3: Al completar los campos obligatorios y guardar, el sistema valida que no existan nombres duplicados activos.
4. Paso 4: El torneo queda registrado en estado 'Creado' y visible en la lista de administración.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| ADMIN DASHBOARD > GESTIÓN DE TORNEOS > NUEVO TORNEO          |
+--------------------------------------------------------------+
| Nombre del Torneo: [ Liga Profesional Clausura 2026        ] |
| Deporte:           [ Fútbol Profesional ⚽               v ] |
| Modalidad:         (o) Todos contra Todos  ( ) Eliminación   |
| Fecha de Inicio:   [ 2026-11-01 ]  Fecha de Cierre: [2026-12]|
| Crédito Entrada:   [ 100 CR     ]  Premio Bolsa:    [5000 CR]|
|                                                              |
| [ CANCELAR ]                        [ GUARDAR Y PUBLICAR ↗ ] |
+--------------------------------------------------------------+
```

---

### HU003 · Agregar evento y fecha de cierre
**Épica:** Programación de eventos · **Prioridad:** Must · **Sprint:** Sprint 1 · **Puntos:** 5 · **Responsable:** Maicol Rubiano

Como Usuario Administrador quiero programar eventos dentro de un torneo definiendo fecha de cierre para bloquear pronósticos a tiempo.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: El administrador selecciona un torneo existente y hace clic en 'Agregar Encuentro'.
2. Paso 2: Se ingresan los equipos/participantes y la fecha/hora exacta de cierre de pronósticos (usando la hora del servidor).
3. Paso 3: El sistema valida que la fecha de cierre sea anterior al inicio del encuentro deportivo.
4. Paso 4: Al confirmar, el evento queda activo en el calendario del torneo.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| TORNEO: Liga Profesional 2026 > PROGRAMAR ENCUENTRO          |
+--------------------------------------------------------------+
| Equipo Local:     [ Millonarios FC                        v ]|
| Equipo Visitante: [ Atlético Nacional                     v ]|
| Fecha del Partido:[ 2026-11-10 ] Hora Inicio: [ 20:00 ]      |
| CIERRE PRONÓSTICO:[ 2026-11-10 ] Hora Cierre: [ 19:45 ] (!!!) |
| Multiplicador:    [ Local: 1.8x | Empate: 3.2x | Visita: 2.1x ]|
|                                                              |
| [ DESCHACAR ]                      [ CONFIRMAR Y BLOQUEAR 🔒]|
+--------------------------------------------------------------+
```

---

### HU004 · Consultar torneos y detalle de eventos
**Épica:** Explorar torneos · **Prioridad:** Must · **Sprint:** Sprint 1 · **Puntos:** 3 · **Responsable:** Diego Romero

Como Participante quiero explorar los torneos disponibles y sus encuentros para conocer las opciones y fechas límite.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: El participante accede a la sección 'Torneos Activos' desde su menú principal.
2. Paso 2: El sistema muestra tarjetas con nombre del torneo, deporte, estado y botón 'Ver Detalle'.
3. Paso 3: Al hacer clic, se listan todos los eventos programados con sus respectivas fechas límite para pronosticar.
4. Paso 4: Si el torneo no tiene eventos activos, se muestra un mensaje informativo.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| MATCHPOINT > EXPLORAR TORNEOS ACTIVOS                        |
| [ Buscar torneo...             ]  Filtro: [ Todos los Deportes v]|
+--------------------------------------------------------------+
| +----------------------------------------------------------+ |
| | ⚽ LIGA PROFESIONAL 2026         [ ESTADO: EN CURSO 🟢 ]  | |
| | Encuentros disponibles: 4  | Cierre próximo: 02h 15m    | |
| | [ VER DETALLE DE ENCUENTROS ↗ ]                           | |
| +----------------------------------------------------------+ |
| +----------------------------------------------------------+ |
| | 🏀 COPA BALONCESTO UMB           [ ESTADO: PRÓXIMO 🟡 ]   | |
| | Encuentros disponibles: 2  | Abre en: 24 horas           | |
| | [ VER DETALLE DE ENCUENTROS ↗ ]                           | |
| +----------------------------------------------------------+ |
+--------------------------------------------------------------+
```

---

### HU005 · Registrar pronóstico en un evento
**Épica:** Registrar pronósticos · **Prioridad:** Must · **Sprint:** Sprint 1 · **Puntos:** 8 · **Responsable:** Diego Romero

Como Participante quiero registrar mi pronóstico (Local, Empate, Visitante) en un evento abierto para participar en la competencia.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: El participante selecciona un evento abierto y elige su opción de pronóstico.
2. Paso 2: El sistema valida en el servidor que la hora actual sea estrictamente menor a la fecha de cierre.
3. Paso 3: El sistema verifica saldo suficiente de créditos virtuales y descuenta el costo de participación.
4. Paso 4: Se genera un comprobante de pronóstico registrado con ID único y se actualiza el saldo.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| ENCUENTRO: Millonarios FC vs Atl. Nacional  (Cierre: 01h 30m)|
+--------------------------------------------------------------+
| Seleccione su Predicción:                                    |
| [  (o) LOCAL (1.8x)  ]  [  ( ) EMPATE (3.2x)  ]  [  ( ) VISITANTE (2.1x)  ] |
|                                                              |
| Créditos a Apostar: [ 50 CR      ]  (Saldo Actual: 450 CR)   |
| Retorno Estimado:   90 CR                                    |
|                                                              |
| [ CANCELAR ]                   [ CONFIRMAR PRONÓSTICO 🎟️ ]   |
+--------------------------------------------------------------+
| COMPROBANTE GENERADO: #PRON-2026-98214 (Guardado e Inmutable) |
+--------------------------------------------------------------+
```

---

### HU006 · Asignar créditos iniciales y comprobar saldo
**Épica:** Controlar créditos · **Prioridad:** Must · **Sprint:** Sprint 1 · **Puntos:** 5 · **Responsable:** Camilo Bastidas

Como Administrador o Participante quiero gestionar y verificar saldo de créditos virtuales para asegurar operaciones sin números negativos.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: Al registrarse un nuevo usuario, el sistema asigna automáticamente una bolsa de créditos iniciales configurada.
2. Paso 2: Cada vez que el usuario intenta realizar un pronóstico, el sistema comprueba que su saldo disponible sea mayor o igual al costo.
3. Paso 3: Si el saldo es insuficiente, la operación se rechaza inmediatamente sin alterar la base de datos.
4. Paso 4: El saldo actualizado se muestra en tiempo real en la cabecera de la interfaz.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| MATCHPOINT  | Torneos | Mis Apuestas | 💳 SALDO: 1,000 CR 🟢 |
+--------------------------------------------------------------+
| PANEL DE CONTROL DE CRÉDITOS VIRTUALES                       |
| +----------------------------------------------------------+ |
| | Bolsa Inicial de Bienvenida:  +1,000 CR  [ COMPROBADO ✓ ] | |
| | Créditos Comprometidos:        -150 CR                   | |
| | Saldo Disponible Neto:         850 CR                    | |
| +----------------------------------------------------------+ |
| NOTA: Los créditos son virtuales sin conversión monetaria.    |
+--------------------------------------------------------------+
```

---

### HU007 · Evitar solicitudes repetidas y concurrencia
**Épica:** Operaciones confiables · **Prioridad:** Must · **Sprint:** Sprint 1 · **Puntos:** 8 · **Responsable:** Camilo Bastidas

Como administrador de base de datos quiero garantizar la atomicidad de las transacciones para evitar descuentos duplicados por doble clic o solicitudes simultáneas.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: Al enviar un pronóstico o transacción, el cliente genera una clave de idempotencia única.
2. Paso 2: El backend valida si la clave ya fue procesada; de ser así, devuelve la respuesta anterior sin duplicar cargos.
3. Paso 3: Las operaciones sobre el saldo utilizan bloqueos transaccionales para soportar peticiones concurrentes.
4. Paso 4: Ante cualquier fallo de red a mitad de proceso, la transacción realiza rollback completo.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| PROCESANDO TRANSACCIÓN SEGURA...                             |
+--------------------------------------------------------------+
| [ ⏳ DESHABILITADO POR IDEMPOTENCIA - POR FAVOR ESPERE ]     |
| ID Único Transacción: tx_9f8d7a12-8821-4f1a-b31c-00291abc098   |
| Status BD: Bloqueo de fila activo (SELECT FOR UPDATE)        |
|                                                              |
| [ ✓ TRANSACCIÓN EXITOSA: No hay riesgo de cobro duplicado ]  |
+--------------------------------------------------------------+
```

---

### HU008 · Consultar mis pronósticos y movimientos
**Épica:** Mi actividad e historial · **Prioridad:** Must · **Sprint:** Sprint 1 · **Puntos:** 3 · **Responsable:** Diego Romero

Como Participante quiero consultar mi historial de pronósticos y movimientos de créditos para llevar trazabilidad de mi actividad.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: El participante ingresa a la sección 'Mi Historial'.
2. Paso 2: El sistema presenta dos pestañas: Mis Pronósticos y Movimientos de Créditos.
3. Paso 3: Cada registro muestra fecha, descripción, cantidad de créditos y estado actual.
4. Paso 4: La API filtra strictly los datos para devolver únicamente los registros de la sesión autenticada.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| MI PERFIL > MI HISTORIAL DE ACTIVIDAD                        |
| Pestañas: [ (o) MIS PRONÓSTICOS ]   [ ( ) MOVIMIENTOS DE CRÉDITO ]|
+--------------------------------------------------------------+
| FECHA      | ENCUENTRO            | PREDICCIÓN | MONTO | ESTADO |
|------------|----------------------|------------|-------|--------|
| 2026-10-24 | Millonarios vs StaFe | Local      | 50 CR | ⏳ Pend |
| 2026-10-20 | Col vs Argentina     | Empate     | 30 CR | ✓ +96  |
| 2026-10-15 | Real Madrid vs Barça | Visitante  | 20 CR | ❌ 0 CR|
+--------------------------------------------------------------+
```

---

### HU009 · Cierre de pronósticos y publicación de resultado oficial
**Épica:** Publicar resultados · **Prioridad:** Must · **Sprint:** Sprint 2 · **Puntos:** 5 · **Responsable:** Maicol Rubiano

Como Usuario Administrador quiero cerrar la recepción de pronósticos y publicar el resultado oficial de un evento de forma controlada.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: El administrador accede al panel de gestión del evento y hace clic en 'Cerrar Pronósticos'.
2. Paso 2: El sistema bloquea de forma automática cualquier intento posterior de pronosticar.
3. Paso 3: Una vez finalizado el encuentro, el administrador ingresa el marcador y publica el resultado oficial.
4. Paso 4: El evento cambia a estado 'Finalizado' y se habilita para el cálculo de liquidaciones.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| ADMIN > PUBLICAR RESULTADO OFICIAL DE ENCUENTRO              |
+--------------------------------------------------------------+
| EVENTO: Millonarios FC vs Atlético Nacional                  |
| Estado Apuestas: [ 🔒 BLOQUEADO POR CIERRE DE HORA ]         |
|                                                              |
| MARCADOR FINAL: Local [ 2 ] - [ 1 ] Visitante                |
| Ganador Oficial: LOCAL (Millonarios FC)                      |
|                                                              |
| [ CORREGIR DATOS ]           [ PUBLICAR Y HABILITAR LIQUIDACIÓN ]|
+--------------------------------------------------------------+
```

---

### HU010 · Determinar pronósticos acertados y liquidar premios
**Épica:** Liquidar participaciones · **Prioridad:** Must · **Sprint:** Sprint 2 · **Puntos:** 13 · **Responsable:** Maicol Rubiano

Como Usuario Administrador quiero determinar los pronósticos acertados y acreditar los premios correspondientes sin duplicidad.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: Tras la publicación del resultado oficial, el administrador presiona 'Liquidar Torneo'.
2. Paso 2: El sistema evalúa automáticamente cada pronóstico registrado contra el resultado oficial.
3. Paso 3: Para cada acierto válido, el sistema genera un movimiento de abono de créditos acreditando el premio.
4. Paso 4: La liquidación es 100% idempotente: reejecutar el proceso no otorga premios duplicados.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| ADMIN > MOTOR DE LIQUIDACIÓN DE PREMIOS                      |
+--------------------------------------------------------------+
| Evento ID: #EVT-2026-99 | Marcador: Local (2) - Visitante (1)|
| Total Apostadores: 120  | Aciertos Local: 45  | Errores: 75  |
| Bolsa Total Acreditada: 4,050 CR                             |
| Status: [ ✓ LIQUIDADO - Transacciones firmadas con exito ]    |
|                                                              |
| [ VER REPORTE DETALLADO EN CSV ]     [ RE-EVALUAR IDEMPOTENTE ]|
+--------------------------------------------------------------+
```

---

### HU011 · Borrar apostador
**Épica:** Gestión de torneos · **Prioridad:** Must · **Sprint:** Sprint 2 · **Puntos:** 5 · **Responsable:** Santiago Solano

Como Usuario Administrador quiero borrar apostador para eliminar el Apostador en caso que ya no lo necesite, siempre y cuando no tenga apuestas asociadas. La HU corresponde a la funcionalidad principal del sistema.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: Al seleccionar la opción de 'Borrar apostador' desde la lista de apostadores, el sistema deberá validar si el apostador tiene apuestas asociadas.
2. Paso 2: Si el apostador que se quiere eliminar no tiene apuestas asociadas, el sistema le presentará un cuadro de diálogo pidiendo confirmar la transacción.
3. Paso 3: Al confirmar la operación debe desaparecer de la lista de apostadores.
4. Paso 4: El usuario administrador puede elegir cancelar la operación, por lo que el registro deberá seguir en la lista de apostadores.
5. Paso 5: En caso de error al eliminar el apostador, se debe notificar al usuario administrador y debe redirigirse a la lista original de apostadores.
6. Paso 6: En caso que el Apostador que se quiere eliminar tenga asociada una apuesta, el sistema deberá indicarle que no es posible realizar la operación porque el Apostador está vinculado a una apuesta.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| ADMIN > GESTIÓN DE APOSTADORES > ELIMINAR REGISTRO          |
+--------------------------------------------------------------+
| APOSTADOR: Carlos Gómez (ID: USR-882)                        |
| Apuestas Asociadas Activas: 0                                |
|                                                              |
| ¿ESTÁ SEGURO DE ELIMINAR ESTE APOSTADOR DEL SISTEMA?        |
| Esta acción eliminará su cuenta y bolsa de créditos.         |
|                                                              |
| [ CANCELAR Y CONSERVAR ]          [ CONFIRMAR ELIMINACIÓN 🗑️ ]|
+--------------------------------------------------------------+
| ALERTA RESTRICCIÓN: Si tuviera apuestas, el sistema dirá:    |
| '⚠️ No es posible eliminar: El apostador tiene 2 apuestas'    |
+--------------------------------------------------------------+
```

---

### HU012 · Consultar transacciones y conciliar saldos
**Épica:** Auditoría y seguimiento · **Prioridad:** Must · **Sprint:** Sprint 2 · **Puntos:** 8 · **Responsable:** Camilo Bastidas

Como Responsable de Control quiero consultar el registro completo de transacciones y conciliar saldos para detectar posibles inconsistencias.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: El auditor accede al módulo de 'Auditoría y Control'.
2. Paso 2: El sistema muestra el libro mayor de movimientos con filtros por usuario, fecha y tipo de operación.
3. Paso 3: Al ejecutar la función 'Conciliar Saldos', el sistema verifica que la suma de movimientos de cada cuenta coincida exactamente con su saldo actual.
4. Paso 4: Si se detecta alguna discrepancia, el sistema genera un reporte de alerta sin alterar el historial inmutable.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| AUDITORÍA Y CONTROL > CONCILIACIÓN FINANCIERA DE CRÉDITOS    |
+--------------------------------------------------------------+
| Cuentas Auditadas: 450 | Total Créditos Emitidos: 450,000 CR |
| Suma de Movimientos:  450,000 CR  | Discrepancias: 0 [ 🟢 OK ]|
|                                                              |
| LIBRO MAYOR DE TRANSACCIONES (LEDGER INMUTABLE):             |
| ID_TX | USUARIO | TIPO   | MONTO  | FECHA       | HASH BD    |
|-------|---------|--------|--------|-------------|------------|
| T-101 | USR-01  | CARGO  | -50 CR | 2026-10-24  | 8f9a2b...  |
| T-102 | USR-01  | PREMIO | +90 CR | 2026-10-25  | 3c1d4e...  |
|                                                              |
| [ DESCARGAR AUDITORÍA COMPLETA PDF / CSV ↗ ]                 |
+--------------------------------------------------------------+
```

---

### HU013 · Proteger información ajena y perfil de usuario
**Épica:** Identidad y permisos · **Prioridad:** Should · **Sprint:** Sprint 2 · **Puntos:** 5 · **Responsable:** Maicol Rubiano

Como Participante quiero consultar mi perfil y proteger mi información para evitar que otros usuarios accedan a datos privados.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: El usuario ingresa a la sección 'Mi Perfil'.
2. Paso 2: El backend valida que el ID solicitado coincida exactamente con el token de la sesión activa.
3. Paso 3: Si se intenta manipular el parámetro de ID en la URL para consultar otro perfil, el sistema bloquea el acceso y retorna código 403 (No autorizado).
4. Paso 4: Se muestran únicamente los datos personales e historial propios.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| MI PERFIL > DATOS PERSONALES Y SEGURIDAD                     |
+--------------------------------------------------------------+
| Nombre Completo:   [ Camilo Bastidas                        ]|
| Correo Electrónico:[ camilo.bastidas@umb.edu.co             ]|
| Rol en Sistema:    [ Database Administrator (DBA)           ]|
| ID de Usuario:     [ USR-3819-2026 (Protegido por Token)   ]|
|                                                              |
| [ ACTUALIZAR PERFIL ]                 [ CAMBIAR CONTRASEÑA ] |
+--------------------------------------------------------------+
| SEGURIDAD: Intentos de vulnerar ID ajeno retornan HTTP 403.  |
+--------------------------------------------------------------+
```

---

### HU014 · Modificar y administrar estado del torneo
**Épica:** Gestión de torneos · **Prioridad:** Should · **Sprint:** Sprint 2 · **Puntos:** 5 · **Responsable:** Santiago Solano

Como Usuario Administrador quiero modificar datos y administrar el estado de un torneo para mantener la flexibilidad ante cambios de programación.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: El administrador selecciona un torneo y hace clic en 'Editar Torneo'.
2. Paso 2: Se actualizan los campos permitidos (fechas, descripción o estado: Activo, En Pausa, Finalizado).
3. Paso 3: El sistema valida que no se pueda finalizar un torneo con eventos pendientes de liquidación.
4. Paso 4: Los cambios quedan guardados registrando el ID del administrador responsable.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| ADMIN > EDITAR TORNEO > LIGA PROFESIONAL 2026                |
+--------------------------------------------------------------+
| Estado del Torneo: [ (o) Activo  ( ) En Pausa  ( ) Finalizado ]|
| Fecha Cierre Extensión: [ 2026-12-20 ]                       |
| Motivo de Modificación: [ Reprogramación por clima          ]|
|                                                              |
| [ DESCHACAR CAMBIOS ]                   [ GUARDAR CAMBIOS 💾 ]|
+--------------------------------------------------------------+
```

---

### HU015 · Corregir resultado publicado con control de cambios
**Épica:** Publicar resultados · **Prioridad:** Should · **Sprint:** Sprint 2 · **Puntos:** 8 · **Responsable:** Maicol Rubiano

Como Usuario Administrador quiero corregir un resultado publicado manteniendo un historial de cambios auditado.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: El administrador selecciona un evento con resultado publicado y solicita 'Corregir Resultado'.
2. Paso 2: Ingresa el nuevo marcador y el motivo justificado de la corrección.
3. Paso 3: El sistema archiva la versión anterior en el registro de auditoría y aplica la nueva versión.
4. Paso 4: Se notifica al sistema de liquidaciones para disparar la reliquidación controlada de premios si aplica.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| ADMIN > CORRECCIÓN AUDITADA DE MARCADO                       |
+--------------------------------------------------------------+
| EVENTO: Millonarios FC vs Santa Fe (Publicado previo: 2 - 1)  |
| NUEVO MARCADOR: Local [ 2 ] - [ 2 ] Visitante (Empate)       |
| Justificación Obligatoria: [ Revisión VAR / Fallo Oficial    ]|
|                                                              |
| [ CANCELAR ]                  [ APLICAR CORRECCIÓN Y RELIQUIDAR ]|
+--------------------------------------------------------------+
| LOG AUDITORÍA: Marcador anterior archivado con hash #old_881 |
+--------------------------------------------------------------+
```

---

### HU016 · Obtener reportes consolidados del torneo
**Épica:** Auditoría y seguimiento · **Prioridad:** Could · **Sprint:** Sprint 2 · **Puntos:** 5 · **Responsable:** Camilo Bastidas

Como Responsable de Control quiero obtener reportes consolidados de torneos, pronósticos y transacciones para la revisión institucional.

**Criterios de Aceptación (Paso a Paso):**
1. Paso 1: El usuario autorizado ingresa a 'Reportes y Estadísticas'.
2. Paso 2: Selecciona el torneo y el rango de fechas a exportar.
3. Paso 3: El sistema genera un reporte consolidado con el total de participantes, pronósticos, créditos en circulación y premios entregados.
4. Paso 4: Permite la exportación de los datos en formato CSV o PDF.

**Mockup de Interfaz & Paso a Paso:**
```text
+--------------------------------------------------------------+
| REPORTES Y ESTADÍSTICAS CONSOLIDADAS                         |
+--------------------------------------------------------------+
| Torneo Seleccionado: [ Liga Profesional Clausura 2026     v ]|
| Métricas Rápidas:                                            |
| - Total Apostadores: 1,250 | Total Pronósticos: 8,420       |
| - Créditos Recaudados: 421,000 CR | Entregados: 380,000 CR  |
|                                                              |
| FORMATO DE EXPORTACIÓN:                                      |
| [ 📄 EXPORTAR REPORTE PDF ]      [ 📊 EXPORTAR DATOS CSV ]   |
+--------------------------------------------------------------+
```

---

## Fuente
Enunciado adaptado y reducido a 16 historias esenciales distribuidas en 2 Sprints (Entregas), con criterios paso a paso y mockups de interfaz para *MatchPoint*.

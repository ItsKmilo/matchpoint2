# MatchPoint · Product Backlog (Optimizado a 2 Sprints)

> **Empresa solicitante:** Nexo Digital Labs  
> **Equipo:** Santiago Solano, Maicol Rubiano, Diego Romero y Camilo Bastias  
> **Fase:** Inicio · Reducción a 16 Historias de Usuario distribuidas en 2 Sprints (Entregas) con paso a paso y mockups.

## Visión

Construir una plataforma funcional de gestión de torneos deportivos y pronósticos con créditos virtuales, control de permisos, trazabilidad de transacciones y liquidación verificable de resultados.

Los créditos **no son dinero**, no tienen valor monetario, no pueden retirarse ni convertirse en dinero real.

## Resumen

- **16 historias de usuario esenciales** distribuidas en **2 Sprints (Entregas)**.
- **Sprint 1 (Entrega 1 — MVP):** 8 historias Fundamentales (Autenticación, Torneos, Pronósticos, Créditos, Atomicidad e Historial).
- **Sprint 2 (Entrega 2 — Consolidación):** 8 historias de Operación Avanzada (Resultados, Liquidación, Borrar apostador HU011, Auditoría, Perfiles y Reportes).

---

## Listado del Product Backlog (2 Sprints)

| ID | Épica | Historia corta | Prioridad | Sprint | SP |
|---|---|---|---|---|---:|
| HU001 | Identidad y permisos | Identificación y autenticación de usuarios | Must | Sprint 1 | 5 |
| HU002 | Gestión de torneos | Crear torneo deportivo | Must | Sprint 1 | 5 |
| HU003 | Programación de eventos | Agregar evento y fecha de cierre | Must | Sprint 1 | 5 |
| HU004 | Explorar torneos | Consultar torneos y detalle de eventos | Must | Sprint 1 | 3 |
| HU005 | Registrar pronósticos | Registrar pronóstico en un evento | Must | Sprint 1 | 8 |
| HU006 | Controlar créditos | Asignar créditos iniciales y comprobar saldo | Must | Sprint 1 | 5 |
| HU007 | Operaciones confiables | Evitar solicitudes repetidas y concurrencia | Must | Sprint 1 | 8 |
| HU008 | Mi actividad e historial | Consultar mis pronósticos y movimientos | Must | Sprint 1 | 3 |
| HU009 | Publicar resultados | Cierre de pronósticos y resultado oficial | Must | Sprint 2 | 5 |
| HU010 | Liquidar participaciones | Determinar aciertos y liquidar premios | Must | Sprint 2 | 13 |
| HU011 | Gestión de torneos | Borrar apostador (Validando apuestas asociadas) | Must | Sprint 2 | 5 |
| HU012 | Auditoría y seguimiento | Consultar transacciones y conciliar saldos | Must | Sprint 2 | 8 |
| HU013 | Identidad y permisos | Proteger información ajena y perfil | Should | Sprint 2 | 5 |
| HU014 | Gestión de torneos | Modificar y administrar estado del torneo | Should | Sprint 2 | 5 |
| HU015 | Publicar resultados | Corregir resultado con control de cambios | Should | Sprint 2 | 8 |
| HU016 | Auditoría y seguimiento | Obtener reportes consolidados | Could | Sprint 2 | 5 |

---

## Detalle de Historias de Usuario (Paso a Paso y Mockups)

### HU001 · Identificación y autenticación de usuarios
- **Sprint:** Sprint 1 · **Épica:** Identidad y permisos · **Prioridad:** Must · **Puntos:** 5
- **Descripción:** Como participante o administrador, quiero iniciar sesión de forma segura para acceder únicamente a las funciones de mi rol sin exponer información ajena.
- **Criterios de Aceptación (Paso a Paso):**
  1. El usuario ingresa sus credenciales en el formulario de acceso.
  2. El sistema valida que el correo exista y la contraseña sea correcta contra la base de datos cifrada.
  3. Si las credenciales son válidas, se genera un token de sesión seguro y se redirige al panel correspondiente al rol (Administrador o Participante).
  4. Si las credenciales fallan, se muestra un mensaje de error claro en pantalla sin revelar si el correo está registrado o no.
- **Mockup de Referencia:** [ Módulo de Login / Autenticación con campos Email, Password y botón de Acceso Seguro con validación en tiempo real ].

### HU002 · Crear torneo deportivo
- **Sprint:** Sprint 1 · **Épica:** Gestión de torneos · **Prioridad:** Must · **Puntos:** 5
- **Descripción:** Como Usuario Administrador quiero crear un torneo deportivo para organizar competencias, definir reglas y mantener la información actualizada.
- **Criterios de Aceptación (Paso a Paso):**
  1. El administrador hace clic en 'Nuevo Torneo' desde el panel de gestión.
  2. El sistema presenta un formulario solicitando nombre, deporte, fechas de inicio/cierre y modalidad.
  3. Al completar los campos obligatorios y guardar, el sistema valida que no existan nombres duplicados activos.
  4. El torneo queda registrado en estado 'Creado' y visible en la lista de administración.
- **Mockup de Referencia:** [ Formulario Modal de Creación de Torneo con inputs de texto, selectores de fecha y botón Guardar ].

### HU003 · Agregar evento y fecha de cierre
- **Sprint:** Sprint 1 · **Épica:** Programación de eventos · **Prioridad:** Must · **Puntos:** 5
- **Descripción:** Como Usuario Administrador quiero programar eventos dentro de un torneo definiendo fecha de cierre para bloquear pronósticos a tiempo.
- **Criterios de Aceptación (Paso a Paso):**
  1. El administrador selecciona un torneo existente y hace clic en 'Agregar Encuentro'.
  2. Se ingresan los equipos/participantes y la fecha/hora exacta de cierre de pronósticos (usando la hora del servidor).
  3. El sistema valida que la fecha de cierre sea anterior al inicio del encuentro deportivo.
  4. Al confirmar, el evento queda activo en el calendario del torneo.
- **Mockup de Referencia:** [ Vista de Calendario / Programador de Encuentros con selectores de fecha/hora sincronizados ].

### HU004 · Consultar torneos y detalle de eventos
- **Sprint:** Sprint 1 · **Épica:** Explorar torneos · **Prioridad:** Must · **Puntos:** 3
- **Descripción:** Como Participante quiero explorar los torneos disponibles y sus encuentros para conocer las opciones y fechas límite.
- **Criterios de Aceptación (Paso a Paso):**
  1. El participante accede a la sección 'Torneos Activos' desde su menú principal.
  2. El sistema muestra tarjetas con nombre del torneo, deporte, estado y botón 'Ver Detalle'.
  3. Al hacer clic, se listan todos los eventos programados con sus respectivas fechas límite para pronosticar.
  4. Si el torneo no tiene eventos activos, se muestra un mensaje informativo.
- **Mockup de Referencia:** [ Grid Responsivo de Tarjetas de Torneos con buscador instantáneo y vista detallada de eventos ].

### HU005 · Registrar pronóstico en un evento
- **Sprint:** Sprint 1 · **Épica:** Registrar pronósticos · **Prioridad:** Must · **Puntos:** 8
- **Descripción:** Como Participante quiero registrar mi pronóstico (Local, Empate, Visitante) en un evento abierto para participar en la competencia.
- **Criterios de Aceptación (Paso a Paso):**
  1. El participante selecciona un evento abierto y elige su opción de pronóstico.
  2. El sistema valida en el servidor que la hora actual sea estrictamente menor a la fecha de cierre.
  3. El sistema verifica saldo suficiente de créditos virtuales y descuenta el costo de participación.
  4. Se genera un comprobante de pronóstico registrado con ID único y se actualiza el saldo.
- **Mockup de Referencia:** [ Tarjeta de Partido con botones de selección (L / E / V), indicador de saldo y Comprobante Flotante de Pronóstico ].

### HU006 · Asignar créditos iniciales y comprobar saldo
- **Sprint:** Sprint 1 · **Épica:** Controlar créditos · **Prioridad:** Must · **Puntos:** 5
- **Descripción:** Como Administrador o Participante quiero gestionar y verificar saldo de créditos virtuales para asegurar operaciones sin números negativos.
- **Criterios de Aceptación (Paso a Paso):**
  1. Al registrarse un nuevo usuario, el sistema asigna automáticamente una bolsa de créditos iniciales configurada.
  2. Cada vez que el usuario intenta realizar un pronóstico, el sistema comprueba que su saldo disponible sea mayor o igual al costo.
  3. Si el saldo es insuficiente, la operación se rechaza inmediatamente sin alterar la base de datos.
  4. El saldo actualizado se muestra en tiempo real en la cabecera de la interfaz.
- **Mockup de Referencia:** [ Widget de Saldo en Barra de Navegación Superior con icono de créditos y actualización en tiempo real ].

### HU007 · Evitar solicitudes repetidas y concurrencia
- **Sprint:** Sprint 1 · **Épica:** Operaciones confiables · **Prioridad:** Must · **Puntos:** 8
- **Descripción:** Como administrador de base de datos quiero garantizar la atomicidad de las transacciones para evitar descuentos duplicados por doble clic o solicitudes simultáneas.
- **Criterios de Aceptación (Paso a Paso):**
  1. Al enviar un pronóstico o transacción, el cliente genera una clave de idempotencia única.
  2. El backend valida si la clave ya fue procesada; de ser así, devuelve la respuesta anterior sin duplicar cargos.
  3. Las operaciones sobre el saldo utilizan bloqueos transaccionales para soportar peticiones concurrentes.
  4. Ante cualquier fallo de red a mitad de proceso, la transacción realiza rollback completo.
- **Mockup de Referencia:** [ Botón de Acción con indicador de carga 'Procesando transacción segura...' y bloqueo temporal anti-doble clic ].

### HU008 · Consultar mis pronósticos y movimientos
- **Sprint:** Sprint 1 · **Épica:** Mi actividad e historial · **Prioridad:** Must · **Puntos:** 3
- **Descripción:** Como Participante quiero consultar mi historial de pronósticos y movimientos de créditos para llevar trazabilidad de mi actividad.
- **Criterios de Aceptación (Paso a Paso):**
  1. El participante ingresa a la sección 'Mi Historial'.
  2. El sistema presenta dos pestañas: Mis Pronósticos y Movimientos de Créditos.
  3. Cada registro muestra fecha, descripción, cantidad de créditos y estado actual.
  4. La API filtra estrictamente los datos para devolver únicamente los registros de la sesión autenticada.
- **Mockup de Referencia:** [ Vista de Historial con Pestañas de Navegación, Tabla Paginada y Filtros por Fecha ].

### HU009 · Cierre de pronósticos y resultado oficial
- **Sprint:** Sprint 2 · **Épica:** Publicar resultados · **Prioridad:** Must · **Puntos:** 5
- **Descripción:** Como Usuario Administrador quiero cerrar la recepción de pronósticos y publicar el resultado oficial de un evento de forma controlada.
- **Criterios de Aceptación (Paso a Paso):**
  1. El administrador accede al panel de gestión del evento y hace clic en 'Cerrar Pronósticos'.
  2. El sistema bloquea de forma automática cualquier intento posterior de pronosticar.
  3. Una vez finalizado el encuentro, el administrador ingresa el marcador y publica el resultado oficial.
  4. El evento cambia a estado 'Finalizado' y se habilita para el cálculo de liquidaciones.
- **Mockup de Referencia:** [ Panel de Administración de Resultados con inputs de marcador, modal de confirmación y estado en vivo ].

### HU010 · Determinar aciertos y liquidar premios
- **Sprint:** Sprint 2 · **Épica:** Liquidar participaciones · **Prioridad:** Must · **Puntos:** 13
- **Descripción:** Como Usuario Administrador quiero determinar los pronósticos acertados y acreditar los premios correspondientes sin duplicidad.
- **Criterios de Aceptación (Paso a Paso):**
  1. Tras la publicación del resultado oficial, el administrador presiona 'Liquidar Torneo'.
  2. El sistema evalúa automáticamente cada pronóstico registrado contra el resultado oficial.
  3. Para cada acierto válido, el sistema genera un movimiento de abono de créditos acreditando el premio.
  4. La liquidación es 100% idempotente: reejecutar el proceso no otorga premios duplicados.
- **Mockup de Referencia:** [ Resumen de Liquidación con Tabla de Ganadores, Premios Calculados y Botón de Ejecución Segura ].

### HU011 · Borrar apostador
- **Sprint:** Sprint 2 · **Épica:** Gestión de torneos · **Prioridad:** Must · **Puntos:** 5
- **Descripción:** Como Usuario Administrador quiero borrar apostador para eliminar el Apostador en caso que ya no lo necesite, siempre y cuando no tenga apuestas asociadas. La HU corresponde a la funcionalidad principal del sistema.
- **Criterios de Aceptación (Paso a Paso):**
  1. Al seleccionar la opción de 'Borrar apostador' desde la lista de apostadores, el sistema deberá validar si el apostador tiene apuestas asociadas.
  2. Si el apostador que se quiere eliminar no tiene apuestas asociadas, el sistema le presentará un cuadro de diálogo pidiendo confirmar la transacción.
  3. Al confirmar la operación debe desaparecer de la lista de apostadores.
  4. El usuario administrador puede elegir cancelar la operación, por lo que el registro deberá seguir en la lista de apostadores.
  5. En caso de error al eliminar el apostador, se debe notificar al usuario administrador y debe redirigirse a la lista original de apostadores.
  6. En caso que el Apostador que se quiere eliminar tenga asociada una apuesta, el sistema deberá indicarle que no es posible realizar la operación porque el Apostador está vinculado a una apuesta.
- **Mockup de Referencia:** [ Tabla de Gestión de Apostadores con botón de eliminar, Modal de Confirmación y Alerta de Restricción por Apuesta Asociada ].

### HU012 · Consultar transacciones y conciliar saldos
- **Sprint:** Sprint 2 · **Épica:** Auditoría y seguimiento · **Prioridad:** Must · **Puntos:** 8
- **Descripción:** Como Responsable de Control quiero consultar el registro completo de transacciones y conciliar saldos para detectar posibles inconsistencias.
- **Criterios de Aceptación (Paso a Paso):**
  1. El auditor accede al módulo de 'Auditoría y Control'.
  2. El sistema muestra el libro mayor de movimientos con filtros por usuario, fecha y tipo de operación.
  3. Al ejecutar la función 'Conciliar Saldos', el sistema verifica que la suma de movimientos de cada cuenta coincida exactamente con su saldo actual.
  4. Si se detecta alguna discrepancia, el sistema genera un reporte de alerta sin alterar el historial inmutable.
- **Mockup de Referencia:** [ Panel de Auditoría con Gráficos de Conciliación, Filtros Avanzados y Tabla de Libro Mayor ].

### HU013 · Proteger información ajena y perfil
- **Sprint:** Sprint 2 · **Épica:** Identidad y permisos · **Prioridad:** Should · **Puntos:** 5
- **Descripción:** Como Participante quiero consultar mi perfil y proteger mi información para evitar que otros usuarios accedan a datos privados.
- **Criterios de Aceptación (Paso a Paso):**
  1. El usuario ingresa a la sección 'Mi Perfil'.
  2. El backend valida que el ID solicitado coincida exactamente con el token de la sesión activa.
  3. Si se intenta manipular el parámetro de ID en la URL para consultar otro perfil, el sistema bloquea el acceso y retorna código 403 (No autorizado).
  4. Se muestran únicamente los datos personales e historial propios.
- **Mockup de Referencia:** [ Vista de Perfil de Usuario con datos personales, avatar y bloqueo de URLs no autorizadas ].

### HU014 · Modificar y administrar estado del torneo
- **Sprint:** Sprint 2 · **Épica:** Gestión de torneos · **Prioridad:** Should · **Puntos:** 5
- **Descripción:** Como Usuario Administrador quiero modificar datos y administrar el estado de un torneo para mantener la flexibilidad ante cambios de programación.
- **Criterios de Aceptación (Paso a Paso):**
  1. El administrador selecciona un torneo y hace clic en 'Editar Torneo'.
  2. Se actualizan los campos permitidos (fechas, descripción o estado: Activo, En Pausa, Finalizado).
  3. El sistema valida que no se pueda finalizar un torneo con eventos pendientes de liquidación.
  4. Los cambios quedan guardados registrando el ID del administrador responsable.
- **Mockup de Referencia:** [ Formulario de Edición de Torneo con Selector de Estado y Alerta de Validación de Eventos Pendientes ].

### HU015 · Corregir resultado con control de cambios
- **Sprint:** Sprint 2 · **Épica:** Publicar resultados · **Prioridad:** Should · **Puntos:** 8
- **Descripción:** Como Usuario Administrador quiero corregir un resultado publicado manteniendo un historial de cambios auditado.
- **Criterios de Aceptación (Paso a Paso):**
  1. El administrador selecciona un evento con resultado publicado y solicita 'Corregir Resultado'.
  2. Ingresa el nuevo marcador y el motivo justificado de la corrección.
  3. El sistema archiva la versión anterior en el registro de auditoría y aplica la nueva versión.
  4. Se notifica al sistema de liquidaciones para disparar la reliquidación controlada de premios si aplica.
- **Mockup de Referencia:** [ Formulario de Corrección de Resultado con campo de motivo obligatorio y Vista Previa de Control de Cambios ].

### HU016 · Obtener reportes consolidados
- **Sprint:** Sprint 2 · **Épica:** Auditoría y seguimiento · **Prioridad:** Could · **Puntos:** 5
- **Descripción:** Como Responsable de Control quiero obtener reportes consolidados de torneos, pronósticos y transacciones para la revisión institucional.
- **Criterios de Aceptación (Paso a Paso):**
  1. El usuario autorizado ingresa a 'Reportes y Estadísticas'.
  2. Selecciona el torneo y el rango de fechas a exportar.
  3. El sistema genera un reporte consolidado con el total de participantes, pronósticos, créditos en circulación y premios entregados.
  4. Permite la exportación de los datos en formato CSV o PDF.
- **Mockup de Referencia:** [ Panel de Reportes Estadísticos con Botones de Exportación a PDF/CSV y Tarjetas Resumen ].

---

## Reglas Transversales
1. **Seguridad y Privacidad:** Restricción estricta de acceso por roles desde el Sprint 1.
2. **Atomicidad Financiera:** Los créditos nunca quedan negativos; transacciones atómicas e idempotentes.
3. **Trazabilidad Inmutable:** Cada movimiento guarda identificador, usuario, tipo, cantidad, fecha y origen.
4. **Validación Horaria:** Los cierres de pronósticos se rigen por la hora del servidor.

## Fuente
Enunciado de *MatchPoint - Plataforma de gestión de torneos, pronósticos y créditos virtuales* (Nexo Digital Labs) adaptado a 16 historias de usuario esenciales en 2 Sprints.

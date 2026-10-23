/* Datos locales: disponibles sin servidor, compatibles con GitHub Pages. Reducidos a 16 historias en 2 Sprints (Entregas). */
window.MATCHPOINT_BACKLOG = [
  {
    "id": "HU001",
    "stage": "Sprint 1 · Fundamentos y Gestión",
    "epic": "Identidad y permisos",
    "name": "Identificación y autenticación de usuarios",
    "story": "Como participante o administrador, quiero iniciar sesión de forma segura para acceder únicamente a las funciones de mi rol sin exponer información ajena.",
    "priority": "Must",
    "release": "Sprint 1",
    "sp": 5,
    "impact": 5,
    "owner": "Maicol Rubiano · Backend Developer",
    "status": "Pendiente",
    "dependencies": "Ninguna",
    "type": "Funcional",
    "risk": "Alto",
    "criteria": [
      "Paso 1: El usuario ingresa sus credenciales en el formulario de acceso.",
      "Paso 2: El sistema valida que el correo exista y la contraseña sea correcta contra la base de datos cifrada.",
      "Paso 3: Si las credenciales son válidas, se genera un token de sesión seguro y se redirige al panel correspondiente al rol (Administrador o Participante).",
      "Paso 4: Si las credenciales fallan, se muestra un mensaje de error claro en pantalla sin revelar si el correo está registrado o no."
    ],
    "notes": "Incluye mockup del módulo de Login con validación de roles en tiempo real.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: PANTALLA DE ACCESO Y AUTENTICACIÓN (LOGIN)",
      "steps": [
        "1. Ingrese su correo institucional o registrado.",
        "2. Ingrese su contraseña secreta.",
        "3. Haga clic en el botón 'Iniciar Sesión Segura'.",
        "4. El sistema redirigirá automáticamente a su Dashboard según su Rol (Admin / Participante)."
      ],
      "ascii": "+--------------------------------------------------------------+\n|                   MATCHPOINT PLATFORM                        |\n|                   Iniciar Sesión Segura                      |\n+--------------------------------------------------------------+\n| Correo Electrónico:                                          |\n| [ usuario@matchpoint.com                                   ] |\n|                                                              |\n| Contraseña:                                                  |\n| [ ********************                                     ] |\n|                                                              |\n| Rol Seleccionado: (o) Participante  ( ) Administrador        |\n|                                                              |\n| [  INICIAR SESIÓN SEGURA  ]      [ ¿Olvidaste la clave? ]    |\n+--------------------------------------------------------------+\n| [STATUS: Conexión cifrada SSL/TLS activa]                    |\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU002",
    "stage": "Sprint 1 · Fundamentos y Gestión",
    "epic": "Gestión de torneos",
    "name": "Crear torneo deportivo",
    "story": "Como Usuario Administrador quiero crear un torneo deportivo para organizar competencias, definir reglas y mantener la información actualizada.",
    "priority": "Must",
    "release": "Sprint 1",
    "sp": 5,
    "impact": 5,
    "owner": "Santiago Solano · Scrum Master",
    "status": "Pendiente",
    "dependencies": "HU001",
    "type": "Funcional",
    "risk": "Medio",
    "criteria": [
      "Paso 1: El administrador hace clic en 'Nuevo Torneo' desde el panel de gestión.",
      "Paso 2: El sistema presenta un formulario solicitando nombre, deporte, fechas de inicio/cierre y modalidad.",
      "Paso 3: Al completar los campos obligatorios y guardar, el sistema valida que no existan nombres duplicados activos.",
      "Paso 4: El torneo queda registrado en estado 'Creado' y visible en la lista de administración."
    ],
    "notes": "Mockup: Formulario modal con selectores de fecha y validador de campos requeridos.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: PANEL ADMIN - CREACIÓN DE TORNEO DEPORTIVO",
      "steps": [
        "1. Haga clic en el botón '+ Nuevo Torneo' desde el panel de control.",
        "2. Complete los campos obligatorios (Nombre, Deporte, Fechas de Inscripción).",
        "3. Seleccione la Modalidad de competencia (Todos contra Todos / Eliminatoria).",
        "4. Presione 'Guardar Torneo' para dar de alta la competencia en el sistema."
      ],
      "ascii": "+--------------------------------------------------------------+\n| ADMIN DASHBOARD > GESTIÓN DE TORNEOS > NUEVO TORNEO          |\n+--------------------------------------------------------------+\n| Nombre del Torneo: [ Liga Profesional Clausura 2026        ] |\n| Deporte:           [ Fútbol Profesional ⚽               v ] |\n| Modalidad:         (o) Todos contra Todos  ( ) Eliminación   |\n| Fecha de Inicio:   [ 2026-11-01 ]  Fecha de Cierre: [2026-12]|\n| Crédito Entrada:   [ 100 CR     ]  Premio Bolsa:    [5000 CR]|\n|                                                              |\n| [ CANCELAR ]                        [ GUARDAR Y PUBLICAR ↗ ] |\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU003",
    "stage": "Sprint 1 · Fundamentos y Gestión",
    "epic": "Programación de eventos",
    "name": "Agregar evento y fecha de cierre",
    "story": "Como Usuario Administrador quiero programar eventos dentro de un torneo definiendo fecha de cierre para bloquear pronósticos a tiempo.",
    "priority": "Must",
    "release": "Sprint 1",
    "sp": 5,
    "impact": 5,
    "owner": "Maicol Rubiano · Backend Developer",
    "status": "Pendiente",
    "dependencies": "HU002",
    "type": "Funcional",
    "risk": "Alto",
    "criteria": [
      "Paso 1: El administrador selecciona un torneo existente y hace clic en 'Agregar Encuentro'.",
      "Paso 2: Se ingresan los equipos/participantes y la fecha/hora exacta de cierre de pronósticos (usando la hora del servidor).",
      "Paso 3: El sistema valida que la fecha de cierre sea anterior al inicio del encuentro deportivo.",
      "Paso 4: Al confirmar, el evento queda activo en el calendario del torneo."
    ],
    "notes": "Mockup: Vista de calendario con inputs de fecha y hora sincronizados con el servidor.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: PROGRAMACIÓN DE ENCUENTROS Y CIERRE TEMPORAL",
      "steps": [
        "1. Seleccione el torneo objetivo de la lista desplegable.",
        "2. Defina el Equipo Local y Equipo Visitante.",
        "3. Establezca la Hora Exacta de Cierre de Pronósticos (UTC-5).",
        "4. Haga clic en 'Programar Encuentro'."
      ],
      "ascii": "+--------------------------------------------------------------+\n| TORNEO: Liga Profesional 2026 > PROGRAMAR ENCUENTRO          |\n+--------------------------------------------------------------+\n| Equipo Local:     [ Millonarios FC                        v ]|\n| Equipo Visitante: [ Atlético Nacional                     v ]|\n| Fecha del Partido:[ 2026-11-10 ] Hora Inicio: [ 20:00 ]      |\n| CIERRE PRONÓSTICO:[ 2026-11-10 ] Hora Cierre: [ 19:45 ] (!!!) |\n| Multiplicador:    [ Local: 1.8x | Empate: 3.2x | Visita: 2.1x ]|\n|                                                              |\n| [ DESCHACAR ]                      [ CONFIRMAR Y BLOQUEAR 🔒]|\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU004",
    "stage": "Sprint 1 · Fundamentos y Gestión",
    "epic": "Explorar torneos",
    "name": "Consultar torneos y detalle de eventos",
    "story": "Como Participante quiero explorar los torneos disponibles y sus encuentros para conocer las opciones y fechas límite.",
    "priority": "Must",
    "release": "Sprint 1",
    "sp": 3,
    "impact": 4,
    "owner": "Diego Romero · Frontend Developer",
    "status": "Pendiente",
    "dependencies": "HU001",
    "type": "Funcional",
    "risk": "Bajo",
    "criteria": [
      "Paso 1: El participante accede a la sección 'Torneos Activos' desde su menú principal.",
      "Paso 2: El sistema muestra tarjetas con nombre del torneo, deporte, estado y botón 'Ver Detalle'.",
      "Paso 3: Al hacer clic, se listan todos los eventos programados con sus respectivas fechas límite para pronosticar.",
      "Paso 4: Si el torneo no tiene eventos activos, se muestra un mensaje informativo."
    ],
    "notes": "Mockup: Grid responsivo de tarjetas de torneos con buscador instantáneo.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: EXPLORADOR DE TORNEOS Y EVENTOS PARA PARTICIPANTE",
      "steps": [
        "1. Navegue a la pestaña 'Torneos Activos'.",
        "2. Utilice el buscador para filtrar por deporte o nombre.",
        "3. Haga clic en 'Ver Encuentros' en la tarjeta deseada.",
        "4. Revise el cronómetro de tiempo restante antes de pronosticar."
      ],
      "ascii": "+--------------------------------------------------------------+\n| MATCHPOINT > EXPLORAR TORNEOS ACTIVOS                        |\n| [ Buscar torneo...             ]  Filtro: [ Todos los Deportes v]|\n+--------------------------------------------------------------+\n| +----------------------------------------------------------+ |\n| | ⚽ LIGA PROFESIONAL 2026         [ ESTADO: EN CURSO 🟢 ]  | |\n| | Encuentros disponibles: 4  | Cierre próximo: 02h 15m    | |\n| | [ VER DETALLE DE ENCUENTROS ↗ ]                           | |\n| +----------------------------------------------------------+ |\n| +----------------------------------------------------------+ |\n| | 🏀 COPA BALONCESTO UMB           [ ESTADO: PRÓXIMO 🟡 ]   | |\n| | Encuentros disponibles: 2  | Abre en: 24 horas           | |\n| | [ VER DETALLE DE ENCUENTROS ↗ ]                           | |\n| +----------------------------------------------------------+ |\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU005",
    "stage": "Sprint 1 · Fundamentos y Gestión",
    "epic": "Registrar pronósticos",
    "name": "Registrar pronóstico en un evento",
    "story": "Como Participante quiero registrar mi pronóstico (Local, Empate, Visitante) en un evento abierto para participar en la competencia.",
    "priority": "Must",
    "release": "Sprint 1",
    "sp": 8,
    "impact": 5,
    "owner": "Diego Romero · Frontend Developer",
    "status": "Pendiente",
    "dependencies": "HU003, HU004",
    "type": "Funcional",
    "risk": "Alto",
    "criteria": [
      "Paso 1: El participante selecciona un evento abierto y elige su opción de pronóstico.",
      "Paso 2: El sistema valida en el servidor que la hora actual sea strictly menor a la fecha de cierre.",
      "Paso 3: El sistema verifica saldo suficiente de créditos virtuales y descuenta el costo de participación.",
      "Paso 4: Se genera un comprobante de pronóstico registrado con ID único y se actualiza el saldo."
    ],
    "notes": "Mockup: Selector de opciones de partido con botón de confirmación y comprobante flotante.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: FORMULARIO DE REGISTRO DE PRONÓSTICO",
      "steps": [
        "1. Seleccione la opción de predicción (Local / Empate / Visitante).",
        "2. Ingrese la cantidad de Créditos Virtuales a apostar (ej. 50 CR).",
        "3. Verifique el saldo restante estimado.",
        "4. Presione 'Confirmar Pronóstico' para emitir la transacción."
      ],
      "ascii": "+--------------------------------------------------------------+\n| ENCUENTRO: Millonarios FC vs Atl. Nacional  (Cierre: 01h 30m)|\n+--------------------------------------------------------------+\n| Seleccione su Predicción:                                    |\n| [  (o) LOCAL (1.8x)  ]  [  ( ) EMPATE (3.2x)  ]  [  ( ) VISITANTE (2.1x)  ] |\n|                                                              |\n| Créditos a Apostar: [ 50 CR      ]  (Saldo Actual: 450 CR)   |\n| Retorno Estimado:   90 CR                                    |\n|                                                              |\n| [ CANCELAR ]                   [ CONFIRMAR PRONÓSTICO 🎟️ ]   |\n+--------------------------------------------------------------+\n| COMPROBANTE GENERADO: #PRON-2026-98214 (Guardado e Inmutable) |\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU006",
    "stage": "Sprint 1 · Fundamentos y Gestión",
    "epic": "Controlar créditos",
    "name": "Asignar créditos iniciales y comprobar saldo",
    "story": "Como Administrador o Participante quiero gestionar y verificar saldo de créditos virtuales para asegurar operaciones sin números negativos.",
    "priority": "Must",
    "release": "Sprint 1",
    "sp": 5,
    "impact": 5,
    "owner": "Camilo Bastidas · DBA",
    "status": "Pendiente",
    "dependencies": "HU001",
    "type": "Técnica",
    "risk": "Alto",
    "criteria": [
      "Paso 1: Al registrarse un nuevo usuario, el sistema asigna automáticamente una bolsa de créditos iniciales configurada.",
      "Paso 2: Cada vez que el usuario intenta realizar un pronóstico, el sistema comprueba que su saldo disponible sea mayor o igual al costo.",
      "Paso 3: Si el saldo es insuficiente, la operación se rechaza inmediatamente sin alterar la base de datos.",
      "Paso 4: El saldo actualizado se muestra en tiempo real en la cabecera de la interfaz."
    ],
    "notes": "Mockup: Widget de saldo en tiempo real en la barra de navegación superior.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: CABECERA Y WIDGET DE CRÉDITOS EN TIEMPO REAL",
      "steps": [
        "1. Observe la esquina superior derecha de la pantalla.",
        "2. Visualice su Saldo Disponible de Créditos Virtuales (ej. 1,000 CR).",
        "3. En caso de recarga autorizada, presione '+ Recargar Bolsa'.",
        "4. El historial muestra el abono inicial automático de registro."
      ],
      "ascii": "+--------------------------------------------------------------+\n| MATCHPOINT  | Torneos | Mis Apuestas | 💳 SALDO: 1,000 CR 🟢 |\n+--------------------------------------------------------------+\n| PANEL DE CONTROL DE CRÉDITOS VIRTUALES                       |\n| +----------------------------------------------------------+ |\n| | Bolsa Inicial de Bienvenida:  +1,000 CR  [ COMPROBADO ✓ ] | |\n| | Créditos Comprometidos:        -150 CR                   | |\n| | Saldo Disponible Neto:         850 CR                    | |\n| +----------------------------------------------------------+ |\n| NOTA: Los créditos son virtuales sin conversión monetaria.    |\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU007",
    "stage": "Sprint 1 · Fundamentos y Gestión",
    "epic": "Operaciones confiables",
    "name": "Evitar solicitudes repetidas y concurrencia",
    "story": "Como administrador de base de datos quiero garantizar la atomicidad de las transacciones para evitar descuentos duplicados por doble clic o solicitudes simultáneas.",
    "priority": "Must",
    "release": "Sprint 1",
    "sp": 8,
    "impact": 5,
    "owner": "Camilo Bastidas · DBA",
    "status": "Pendiente",
    "dependencies": "HU005, HU006",
    "type": "Técnica",
    "risk": "Alto",
    "criteria": [
      "Paso 1: Al enviar un pronóstico o transacción, el cliente genera una clave de idempotencia única.",
      "Paso 2: El backend valida si la clave ya fue procesada; de ser así, devuelve la respuesta anterior sin duplicar cargos.",
      "Paso 3: Las operaciones sobre el saldo utilizan bloqueos transaccionales para soportar peticiones concurrentes.",
      "Paso 4: Ante cualquier fallo de red a mitad de proceso, la transacción realiza rollback completo."
    ],
    "notes": "Mockup: Indicador de carga 'Procesando transacción segura...' en botones de acción.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: PROTECCIÓN DE DOBLE CLIC E IDEMPOTENCIA",
      "steps": [
        "1. Al presionar 'Confirmar', el botón se deshabilita instantáneamente.",
        "2. Se genera un ID de Transacción Único (UUIDv4) en la petición.",
        "3. Si el usuario reintenta enviar, la API retorna el primer resultado sin recalcular el cobro.",
        "4. Un modal de éxito confirma la transacción atómica."
      ],
      "ascii": "+--------------------------------------------------------------+\n| PROCESANDO TRANSACCIÓN SEGURA...                             |\n+--------------------------------------------------------------+\n| [ ⏳ DESHABILITADO POR IDEMPOTENCIA - POR FAVOR ESPERE ]     |\n| ID Único Transacción: tx_9f8d7a12-8821-4f1a-b31c-00291abc098   |\n| Status BD: Bloqueo de fila activo (SELECT FOR UPDATE)        |\n|                                                              |\n| [ ✓ TRANSACCIÓN EXITOSA: No hay riesgo de cobro duplicado ]  |\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU008",
    "stage": "Sprint 1 · Fundamentos y Gestión",
    "epic": "Mi actividad e historial",
    "name": "Consultar mis pronósticos y movimientos",
    "story": "Como Participante quiero consultar mi historial de pronósticos y movimientos de créditos para llevar trazabilidad de mi actividad.",
    "priority": "Must",
    "release": "Sprint 1",
    "sp": 3,
    "impact": 4,
    "owner": "Diego Romero · Frontend Developer",
    "status": "Pendiente",
    "dependencies": "HU005",
    "type": "Funcional",
    "risk": "Bajo",
    "criteria": [
      "Paso 1: El participante ingresa a la sección 'Mi Historial'.",
      "Paso 2: El sistema presenta dos pestañas: Mis Pronósticos y Movimientos de Créditos.",
      "Paso 3: Cada registro muestra fecha, descripción, cantidad de créditos y estado actual.",
      "Paso 4: La API filtra estrictamente los datos para devolver únicamente los registros de la sesión autenticada."
    ],
    "notes": "Mockup: Tabla paginada con pestañas de navegación y filtros por fecha.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: MI HISTORIAL Y LIBRO DE MOVIMIENTOS",
      "steps": [
        "1. Seleccione la pestaña '[ Mis Pronósticos ]' o '[ Movimientos de Créditos ]'.",
        "2. Filtre las fechas de interés con el selector.",
        "3. Inspeccione el detalle de aciertos, pérdidas o recargas de créditos."
      ],
      "ascii": "+--------------------------------------------------------------+\n| MI PERFIL > MI HISTORIAL DE ACTIVIDAD                        |\n| Pestañas: [ (o) MIS PRONÓSTICOS ]   [ ( ) MOVIMIENTOS DE CRÉDITO ]|\n+--------------------------------------------------------------+\n| FECHA      | ENCUENTRO            | PREDICCIÓN | MONTO | ESTADO |\n|------------|----------------------|------------|-------|--------|\n| 2026-10-24 | Millonarios vs StaFe | Local      | 50 CR | ⏳ Pend |\n| 2026-10-20 | Col vs Argentina     | Empate     | 30 CR | ✓ +96  |\n| 2026-10-15 | Real Madrid vs Barça | Visitante  | 20 CR | ❌ 0 CR|\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU009",
    "stage": "Sprint 2 · Resultados, Liquidación y Auditoría",
    "epic": "Publicar resultados",
    "name": "Cierre de pronósticos y publicación de resultado oficial",
    "story": "Como Usuario Administrador quiero cerrar la recepción de pronósticos y publicar el resultado oficial de un evento de forma controlada.",
    "priority": "Must",
    "release": "Sprint 2",
    "sp": 5,
    "impact": 5,
    "owner": "Maicol Rubiano · Backend Developer",
    "status": "Pendiente",
    "dependencies": "HU003",
    "type": "Funcional",
    "risk": "Alto",
    "criteria": [
      "Paso 1: El administrador accede al panel de gestión del evento y hace clic en 'Cerrar Pronósticos'.",
      "Paso 2: El sistema bloquea de forma automática cualquier intento posterior de pronosticar.",
      "Paso 3: Una vez finalizado el encuentro, el administrador ingresa el marcador y publica el resultado oficial.",
      "Paso 4: El evento cambia a estado 'Finalizado' y se habilita para el cálculo de liquidaciones."
    ],
    "notes": "Mockup: Panel de administración de resultados con modal de confirmación y selección de marcador.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: PANEL ADMIN - PUBLICACIÓN DE RESULTADO OFICIAL",
      "steps": [
        "1. Ingrese al evento finalizado en la lista de administración.",
        "2. Digite el Marcador Oficial final (Goles Local vs Goles Visitante).",
        "3. Verifique que la recepción de pronósticos esté bloqueada.",
        "4. Haga clic en 'Publicar Marcador Oficial y Habilitar Liquidación'."
      ],
      "ascii": "+--------------------------------------------------------------+\n| ADMIN > PUBLICAR RESULTADO OFICIAL DE ENCUENTRO              |\n+--------------------------------------------------------------+\n| EVENTO: Millonarios FC vs Atlético Nacional                  |\n| Estado Apuestas: [ 🔒 BLOQUEADO POR CIERRE DE HORA ]         |\n|                                                              |\n| MARCADOR FINAL: Local [ 2 ] - [ 1 ] Visitante                |\n| Ganador Oficial: LOCAL (Millonarios FC)                      |\n|                                                              |\n| [ CORREGIR DATOS ]           [ PUBLICAR Y HABILITAR LIQUIDACIÓN ]|\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU010",
    "stage": "Sprint 2 · Resultados, Liquidación y Auditoría",
    "epic": "Liquidar participaciones",
    "name": "Determinar pronósticos acertados y liquidar premios",
    "story": "Como Usuario Administrador quiero determinar los pronósticos acertados y acreditar los premios correspondientes sin duplicidad.",
    "priority": "Must",
    "release": "Sprint 2",
    "sp": 13,
    "impact": 5,
    "owner": "Maicol Rubiano · Backend Developer",
    "status": "Pendiente",
    "dependencies": "HU009",
    "type": "Funcional",
    "risk": "Alto",
    "criteria": [
      "Paso 1: Tras la publicación del resultado oficial, el administrador presiona 'Liquidar Torneo'.",
      "Paso 2: El sistema evalúa automáticamente cada pronóstico registrado contra el resultado oficial.",
      "Paso 3: Para cada acierto válido, el sistema genera un movimiento de abono de créditos acreditando el premio.",
      "Paso 4: La liquidación es 100% idempotente: reejecutar el proceso no otorga premios duplicados."
    ],
    "notes": "Mockup: Resumen de liquidación con tabla de ganadores y botón de ejecución segura.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: EJECUCIÓN Y RESUMEN DE LIQUIDACIÓN DE PREMIOS",
      "steps": [
        "1. Seleccione el evento con marcador oficial publicado.",
        "2. Presione 'Ejecutar Motor de Liquidación Automática'.",
        "3. El sistema evaluará las apuestas activas y aplicará la regla de abonos.",
        "4. Se emite el reporte consolidado de créditos distribuidos."
      ],
      "ascii": "+--------------------------------------------------------------+\n| ADMIN > MOTOR DE LIQUIDACIÓN DE PREMIOS                      |\n+--------------------------------------------------------------+\n| Evento ID: #EVT-2026-99 | Marcador: Local (2) - Visitante (1)|\n| Total Apostadores: 120  | Aciertos Local: 45  | Errores: 75  |\n| Bolsa Total Acreditada: 4,050 CR                             |\n| Status: [ ✓ LIQUIDADO - Transacciones firmadas con exito ]    |\n|                                                              |\n| [ VER REPORTE DETALLADO EN CSV ]     [ RE-EVALUAR IDEMPOTENTE ]|\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU011",
    "stage": "Sprint 2 · Resultados, Liquidación y Auditoría",
    "epic": "Gestión de torneos",
    "name": "Borrar apostador",
    "story": "Como Usuario Administrador quiero borrar apostador para eliminar el Apostador en caso que ya no lo necesite, siempre y cuando no tenga apuestas asociadas. La HU corresponde a la funcionalidad principal del sistema.",
    "priority": "Must",
    "release": "Sprint 2",
    "sp": 5,
    "impact": 4,
    "owner": "Santiago Solano · Scrum Master",
    "status": "Pendiente",
    "dependencies": "HU001, HU005",
    "type": "Funcional",
    "risk": "Alto",
    "criteria": [
      "Paso 1: Al seleccionar la opción de 'Borrar apostador' desde la lista de apostadores, el sistema deberá validar si el apostador tiene apuestas asociadas.",
      "Paso 2: Si el apostador que se quiere eliminar no tiene apuestas asociadas, el sistema le presentará un cuadro de diálogo pidiendo confirmar la transacción.",
      "Paso 3: Al confirmar la operación debe desaparecer de la lista de apostadores.",
      "Paso 4: El usuario administrador puede elegir cancelar la operación, por lo que el registro deberá seguir en la lista de apostadores.",
      "Paso 5: En caso de error al eliminar el apostador, se debe notificar al usuario administrador y debe redirigirse a la lista original de apostadores.",
      "Paso 6: En caso que el Apostador que se quiere eliminar tenga asociada una apuesta, el sistema deberá indicarle que no es posible realizar la operación porque el Apostador está vinculado a una apuesta."
    ],
    "notes": "Mockup: Tabla de gestión de apostadores con botón de eliminar, modal de confirmación y alerta de restricción por apuesta asociada.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: ELIMINACIÓN CONTROLADA DE APOSTADOR",
      "steps": [
        "1. Seleccione un apostador de la tabla de usuarios.",
        "2. Haga clic en el botón 'Eliminar Apostador' (icono caneca).",
        "3. Si tiene apuestas asociadas, el sistema mostrará alerta de restricción.",
        "4. Si no tiene apuestas, confirme en el modal de advertencia."
      ],
      "ascii": "+--------------------------------------------------------------+\n| ADMIN > GESTIÓN DE APOSTADORES > ELIMINAR REGISTRO          |\n+--------------------------------------------------------------+\n| APOSTADOR: Carlos Gómez (ID: USR-882)                        |\n| Apuestas Asociadas Activas: 0                                |\n|                                                              |\n| ¿ESTÁ SEGURO DE ELIMINAR ESTE APOSTADOR DEL SISTEMA?        |\n| Esta acción eliminará su cuenta y bolsa de créditos.         |\n|                                                              |\n| [ CANCELAR Y CONSERVAR ]          [ CONFIRMAR ELIMINACIÓN 🗑️ ]|\n+--------------------------------------------------------------+\n| ALERTA RESTRICCIÓN: Si tuviera apuestas, el sistema dirá:    |\n| '⚠️ No es posible eliminar: El apostador tiene 2 apuestas'    |\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU012",
    "stage": "Sprint 2 · Resultados, Liquidación y Auditoría",
    "epic": "Auditoría y seguimiento",
    "name": "Consultar transacciones y conciliar saldos",
    "story": "Como Responsable de Control quiero consultar el registro completo de transacciones y conciliar saldos para detectar posibles inconsistencias.",
    "priority": "Must",
    "release": "Sprint 2",
    "sp": 8,
    "impact": 5,
    "owner": "Camilo Bastidas · DBA",
    "status": "Pendiente",
    "dependencies": "HU007, HU010",
    "type": "Técnica",
    "risk": "Alto",
    "criteria": [
      "Paso 1: El auditor accede al módulo de 'Auditoría y Control'.",
      "Paso 2: El sistema muestra el libro mayor de movimientos con filtros por usuario, fecha y tipo de operación.",
      "Paso 3: Al ejecutar la función 'Conciliar Saldos', el sistema verifica que la suma de movimientos de cada cuenta coincida exactamente con su saldo actual.",
      "Paso 4: Si se detecta alguna discrepancia, el sistema genera un reporte de alerta sin alterar el historial inmutable."
    ],
    "notes": "Mockup: Panel de auditoría con gráficos de conciliación y tabla de transacciones globales.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: PANEL DE AUDITORÍA Y CONCILIACIÓN DE SALDOS",
      "steps": [
        "1. Ingrese a 'Auditoría' con credenciales de Control / DBA.",
        "2. Presione el botón 'Ejecutar Conciliación Global'.",
        "3. El motor comparará sumatoria de Ledger (Movimientos) vs Saldo Actual.",
        "4. Inspeccione el semáforo de integridad (Verde = 0 Discrepancias)."
      ],
      "ascii": "+--------------------------------------------------------------+\n| AUDITORÍA Y CONTROL > CONCILIACIÓN FINANCIERA DE CRÉDITOS    |\n+--------------------------------------------------------------+\n| Cuentas Auditadas: 450 | Total Créditos Emitidos: 450,000 CR |\n| Suma de Movimientos:  450,000 CR  | Discrepancias: 0 [ 🟢 OK ]|\n|                                                              |\n| LIBRO MAYOR DE TRANSACCIONES (LEDGER INMUTABLE):             |\n| ID_TX | USUARIO | TIPO   | MONTO  | FECHA       | HASH BD    |\n|-------|---------|--------|--------|-------------|------------|\n| T-101 | USR-01  | CARGO  | -50 CR | 2026-10-24  | 8f9a2b...  |\n| T-102 | USR-01  | PREMIO | +90 CR | 2026-10-25  | 3c1d4e...  |\n|                                                              |\n| [ DESCARGAR AUDITORÍA COMPLETA PDF / CSV ↗ ]                 |\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU013",
    "stage": "Sprint 2 · Resultados, Liquidación y Auditoría",
    "epic": "Identidad y permisos",
    "name": "Proteger información ajena y perfil de usuario",
    "story": "Como Participante quiero consultar mi perfil y proteger mi información para evitar que otros usuarios accedan a datos privados.",
    "priority": "Should",
    "release": "Sprint 2",
    "sp": 5,
    "impact": 4,
    "owner": "Maicol Rubiano · Backend Developer",
    "status": "Pendiente",
    "dependencies": "HU001",
    "type": "Técnica",
    "risk": "Medio",
    "criteria": [
      "Paso 1: El usuario ingresa a la sección 'Mi Perfil'.",
      "Paso 2: El backend valida que el ID solicitado coincida exactamente con el token de la sesión activa.",
      "Paso 3: Si se intenta manipular el parámetro de ID en la URL para consultar otro perfil, el sistema bloquea el acceso y retorna código 403 (No autorizado).",
      "Paso 4: Se muestran únicamente los datos personales e historial propios."
    ],
    "notes": "Mockup: Vista de perfil con opción de actualización segura de datos.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: VISTA SEGURA DE PERFIL DE USUARIO (ISOLATION)",
      "steps": [
        "1. Haga clic en su nombre de usuario en la esquina superior.",
        "2. El sistema valida su Token JWT e ID de sesión.",
        "3. Si intenta alterar la URL (ej. ?id=999), se desplegará pantalla 403.",
        "4. Modifique sus datos permitidos y presione 'Actualizar'."
      ],
      "ascii": "+--------------------------------------------------------------+\n| MI PERFIL > DATOS PERSONALES Y SEGURIDAD                     |\n+--------------------------------------------------------------+\n| Nombre Completo:   [ Camilo Bastidas                        ]|\n| Correo Electrónico:[ camilo.bastidas@umb.edu.co             ]|\n| Rol en Sistema:    [ Database Administrator (DBA)           ]|\n| ID de Usuario:     [ USR-3819-2026 (Protegido por Token)   ]|\n|                                                              |\n| [ ACTUALIZAR PERFIL ]                 [ CAMBIAR CONTRASEÑA ] |\n+--------------------------------------------------------------+\n| SEGURIDAD: Intentos de vulnerar ID ajeno retornan HTTP 403.  |\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU014",
    "stage": "Sprint 2 · Resultados, Liquidación y Auditoría",
    "epic": "Gestión de torneos",
    "name": "Modificar y administrar estado del torneo",
    "story": "Como Usuario Administrador quiero modificar datos y administrar el estado de un torneo para mantener la flexibilidad ante cambios de programación.",
    "priority": "Should",
    "release": "Sprint 2",
    "sp": 5,
    "impact": 3,
    "owner": "Santiago Solano · Scrum Master",
    "status": "Pendiente",
    "dependencies": "HU002",
    "type": "Funcional",
    "risk": "Medio",
    "criteria": [
      "Paso 1: El administrador selecciona un torneo y hace clic en 'Editar Torneo'.",
      "Paso 2: Se actualizan los campos permitidos (fechas, descripción o estado: Activo, En Pausa, Finalizado).",
      "Paso 3: El sistema valida que no se pueda finalizar un torneo con eventos pendientes de liquidación.",
      "Paso 4: Los cambios quedan guardados registrando el ID del administrador responsable."
    ],
    "notes": "Mockup: Formulario de edición con selector de estado y validación de dependencias.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: EDICIÓN Y ESTADO DE TORNEO",
      "steps": [
        "1. Seleccione el torneo desde la lista de gestión.",
        "2. Modifique la fecha final o ajuste el estado del torneo.",
        "3. Cambie el estado a 'En Pausa' o 'Finalizado'.",
        "4. Presione 'Guardar Cambios'."
      ],
      "ascii": "+--------------------------------------------------------------+\n| ADMIN > EDITAR TORNEO > LIGA PROFESIONAL 2026                |\n+--------------------------------------------------------------+\n| Estado del Torneo: [ (o) Activo  ( ) En Pausa  ( ) Finalizado ]|\n| Fecha Cierre Extensión: [ 2026-12-20 ]                       |\n| Motivo de Modificación: [ Reprogramación por clima          ]|\n|                                                              |\n| [ DESCHACAR CAMBIOS ]                   [ GUARDAR CAMBIOS 💾 ]|\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU015",
    "stage": "Sprint 2 · Resultados, Liquidación y Auditoría",
    "epic": "Publicar resultados",
    "name": "Corregir resultado publicado con control de cambios",
    "story": "Como Usuario Administrador quiero corregir un resultado publicado manteniendo un historial de cambios auditado.",
    "priority": "Should",
    "release": "Sprint 2",
    "sp": 8,
    "impact": 4,
    "owner": "Maicol Rubiano · Backend Developer",
    "status": "Pendiente",
    "dependencies": "HU009, HU010",
    "type": "Funcional",
    "risk": "Alto",
    "criteria": [
      "Paso 1: El administrador selecciona un evento con resultado publicado y solicita 'Corregir Resultado'.",
      "Paso 2: Ingresa el nuevo marcador y el motivo justificado de la corrección.",
      "Paso 3: El sistema archiva la versión anterior en el registro de auditoría y aplica la nueva versión.",
      "Paso 4: Se notifica al sistema de liquidaciones para disparar la reliquidación controlada de premios si aplica."
    ],
    "notes": "Mockup: Formulario de corrección con campo obligatorio de justificación y vista previa de cambios.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: CORRECCIÓN DE RESULTADO CON CONTROL DE AUDITORÍA",
      "steps": [
        "1. Ingrese a 'Eventos Finalizados' y seleccione 'Solicitar Corrección'.",
        "2. Digite el nuevo Marcador Corregido.",
        "3. Escriba la Justificación Obligatoria para la auditoría.",
        "4. Confirme para generar la versión v2 del marcador."
      ],
      "ascii": "+--------------------------------------------------------------+\n| ADMIN > CORRECCIÓN AUDITADA DE MARCADO                       |\n+--------------------------------------------------------------+\n| EVENTO: Millonarios FC vs Santa Fe (Publicado previo: 2 - 1)  |\n| NUEVO MARCADOR: Local [ 2 ] - [ 2 ] Visitante (Empate)       |\n| Justificación Obligatoria: [ Revisión VAR / Fallo Oficial    ]|\n|                                                              |\n| [ CANCELAR ]                  [ APLICAR CORRECCIÓN Y RELIQUIDAR ]|\n+--------------------------------------------------------------+\n| LOG AUDITORÍA: Marcador anterior archivado con hash #old_881 |\n+--------------------------------------------------------------+"
    }
  },
  {
    "id": "HU016",
    "stage": "Sprint 2 · Resultados, Liquidación y Auditoría",
    "epic": "Auditoría y seguimiento",
    "name": "Obtener reportes consolidados del torneo",
    "story": "Como Responsable de Control quiero obtener reportes consolidados de torneos, pronósticos y transacciones para la revisión institucional.",
    "priority": "Could",
    "release": "Sprint 2",
    "sp": 5,
    "impact": 3,
    "owner": "Camilo Bastidas · DBA",
    "status": "Pendiente",
    "dependencies": "HU012",
    "type": "Técnica",
    "risk": "Bajo",
    "criteria": [
      "Paso 1: El usuario autorizado ingresa a 'Reportes y Estadísticas'.",
      "Paso 2: Selecciona el torneo y el rango de fechas a exportar.",
      "Paso 3: El sistema genera un reporte consolidado con el total de participantes, pronósticos, créditos en circulación y premios entregados.",
      "Paso 4: Permite la exportación de los datos en formato CSV o PDF."
    ],
    "notes": "Mockup: Panel de reportes con botones de exportación y gráficos estadísticos resumidos.",
    "mockup": {
      "title": "MOCKUP INTERFAZ: CONSOLIDADOS Y EXPORTACIÓN DE REPORTES",
      "steps": [
        "1. Ingrese a 'Reportes' en la barra de navegación.",
        "2. Seleccione el torneo y rango de fechas.",
        "3. Visualice las métricas consolidadas en pantalla.",
        "4. Haga clic en 'Exportar CSV' o 'Exportar PDF'."
      ],
      "ascii": "+--------------------------------------------------------------+\n| REPORTES Y ESTADÍSTICAS CONSOLIDADAS                         |\n+--------------------------------------------------------------+\n| Torneo Seleccionado: [ Liga Profesional Clausura 2026     v ]|\n| Métricas Rápidas:                                            |\n| - Total Apostadores: 1,250 | Total Pronósticos: 8,420       |\n| - Créditos Recaudados: 421,000 CR | Entregados: 380,000 CR  |\n|                                                              |\n| FORMATO DE EXPORTACIÓN:                                      |\n| [ 📄 EXPORTAR REPORTE PDF ]      [ 📊 EXPORTAR DATOS CSV ]   |\n+--------------------------------------------------------------+"
    }
  }
];

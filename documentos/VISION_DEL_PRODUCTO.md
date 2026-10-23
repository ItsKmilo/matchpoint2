# MatchPoint — Visión del producto (Optimizado a 2 Sprints)

**Empresa solicitante:** Nexo Digital Labs  
**Producto:** MatchPoint  
**Fase:** Inicio del proyecto  
**Equipo:** Santiago Solano, Maicol Rubiano, Diego Romero y Camilo Bastidas

> **Visión:** Desarrollar MatchPoint como una plataforma deportiva confiable y fácil de utilizar en 2 Sprints, donde los usuarios puedan participar en torneos, realizar pronósticos y administrar sus créditos virtuales, mientras los administradores mantienen un control organizado sobre los eventos, resultados y transacciones.

## 1. Descripción

MatchPoint es una plataforma digital diseñada para facilitar la administración de torneos deportivos, permitir que los usuarios consulten eventos, registren sus pronósticos y participen utilizando créditos virtuales en exactamente dos entregas (Sprints).

## 2. Planificación en 2 Sprints

- **Sprint 1 (Entrega 1 — MVP):** Fundamentos, autenticación, gestión de torneos, programación de eventos, registro de pronósticos, control de créditos y atomicidad transaccional.
- **Sprint 2 (Entrega 2 — Consolidación):** Cierre de pronósticos, publicación de resultados, liquidación automática de premios, eliminación segura de apostadores (HU011), auditoría, perfiles y reportes consolidados.

## 3. Reglas del producto

- Los créditos son virtuales: no representan dinero, no pueden retirarse ni convertirse en dinero real.
- Las participaciones se aceptan únicamente dentro del plazo habilitado.
- Ninguna operación puede dejar saldo negativo.
- Solo usuarios autorizados pueden administrar torneos o resultados.
- Las solicitudes repetidas o simultáneas no generan descuentos ni premios duplicados.
- Las correcciones y reversiones conservan el historial de las operaciones previas.
- Los participantes acceden únicamente a su información autorizada.

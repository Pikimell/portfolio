# Dilo Flow

**Document automation · Next.js / React / TypeScript · Private source**

[Open the app](https://dilo-flow.vercel.app)

## Problem

Repeatedly copying records from Excel into Word documents introduces manual work and inconsistent formatting. Ukrainian names, positions, and ranks also need the correct grammatical case.

## Implementation

- Import Excel databases and configure the meaning of their fields.
- Read DOCX templates and resolve tags, roles, and repeated blocks.
- Apply Ukrainian declension rules and flag unresolved values.
- Generate individual or grouped documents, with DOCX and ZIP output.
- Store configuration and libraries in IndexedDB through Dexie.

## Architectural decision

Document processing lives in browser-side services. The Next.js server delivers the application; personnel records do not need a server database for the generation workflow.

The project separates routes, workspace composition, feature screens, domain types, services, persistence, and shared UI. Domain rules are separated from React components.

## Boundaries

Large files are currently processed on the main thread. Declension has explicit unresolved cases. Folder output depends on browser support for the File System Access API. These constraints are relevant to future performance and compatibility work.

Use synthetic records when demonstrating the application.

[← Back to portfolio](../README.md)

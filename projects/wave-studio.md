# Wave Studio

**Visual editor · Next.js / React / TypeScript · Public source**

[Source](https://github.com/Pikimell/wave-studio) · [Demo](https://wave-studio-beta.vercel.app)

## Product

A visual tool for creating layered wave backgrounds, with SVG/PNG output and a generation API. The repository also includes an App Store screenshot editor.

## Implementation scope

- Layered SVG wave generation and export.
- JSON-based generation endpoint with seed controls.
- Screenshot compositions with groups and slides.
- Dragging, snapping, undo/redo, and local project persistence.
- PNG/ZIP output and custom font support.

## Technical discussion

Wave-generation logic is separated from feature components, hooks, and services. The screenshot editor uses localStorage for document state and IndexedDB for assets.

These choices support discussion of editor state, serializable documents, asset storage, export workflows, and keeping mathematical logic independent of the interface.

## Boundaries

Project JSON export does not bundle image assets or API keys. Source availability does not imply unrestricted commercial reuse: review the repository's PolyForm Noncommercial license.

[← Back to portfolio](../README.md)

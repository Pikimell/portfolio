# Quick Mockups

**Device mockup editor · React / TypeScript / Three.js · Public source**

[Source](https://github.com/Pikimell/quick-mockups) · [Demo](https://quick-mockups.vercel.app)

## Product

A browser editor for composing device mockups with scene controls and image export.

## Implementation scope

- Device and screenshot components rendered through Three.js and React Three Fiber.
- Controls for camera, devices, text, background, and shadows.
- Scene and device state managed with Zustand.
- PNG, JPEG, and WebP export with configurable output scale.

## Technical discussion

The repository separates scene rendering, device components, control panels, overlays, export, and state. Export temporarily marks the scene as busy and resets the state in a finally block.

The project provides examples for discussing interactive editor architecture, 3D rendering in React, state coordination, and browser export behavior.

## Boundaries

Rendering depends on the browser's graphics capabilities. Export functionality should be demonstrated with a representative scene; this portfolio does not claim a browser compatibility or performance benchmark.

[← Back to portfolio](../README.md)

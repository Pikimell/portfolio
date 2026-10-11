# App Store Connector

**Localization workflow tool · Next.js / TypeScript · Private source**

[Visit the app](https://app-store-connector.vercel.app)

## Problem

Localizing App Store metadata involves repeated translation, field-length checks, and updates across multiple languages and versions.

## Implementation scope

- App Store Connect integration for apps, versions, and localizations.
- OpenAI translation functions with field-specific prompt constraints.
- Screenshot and metadata JSON workflows.
- Server actions and route handlers coordinating the UI with external APIs.
- Separate session, integration, validation, and concurrency utilities.

## Technical discussion

The application separates Apple API authentication and requests from localization prompts and UI orchestration. It includes session-cookie and encryption modules rather than requiring a product account database.

## Demonstration

The public landing page is available without keys. The functional workflow requires App Store Connect and OpenAI credentials. A recorded demonstration or a future mock-data mode is more accessible for portfolio visitors.

No credentials are included in this portfolio.

[← Back to portfolio](../README.md)

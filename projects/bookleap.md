# Bookleap

**Reading product · Private source**

Bookleap brings a personal book library, reading sessions, notes, and account functionality into one product. It consists of a Node.js backend, a public Next.js site, and mobile clients.

## Implementation

- TypeScript backend with Node.js, Express, MongoDB, and Mongoose.
- Domain modules for books, sessions, notes, quotes, reviews, and friendships.
- Apple and Google sign-in, access tokens, and refresh-token rotation.
- RevenueCat webhook and subscription-related integration.
- Administrative functionality and an MCP interface for controlled data operations.

## Technical discussion

The backend separates routes, controllers, services, and database models. Authentication includes hashed refresh tokens, revocation, expiry, and a limited rotation grace window to handle interrupted or overlapping client requests.

This project offers concrete examples to discuss account lifecycle, API design, data relationships, subscription integration, and maintaining multiple clients against a shared backend.

## Portfolio scope

Source code is private. This overview does not disclose deployment credentials, internal endpoints, or user data. It does not claim that every feature is available on every client.

[← Back to portfolio](../README.md)

# Tatty English

**Learning platform · Full-stack · Private source**

[Visit the platform](https://tatty-english-platform.vercel.app)

## Product

An English-learning platform organized around courses, lessons, topics, and practice. The project is split into a learner-facing application, an administrative UI, and a backend.

## Implementation scope

The server contains modules for course content, sections and tasks, homework, student progress, vocabulary, scheduling, payments, and file handling.

The backend uses TypeScript, Node.js, Express, MongoDB, and Mongoose. Its integration services include Google Calendar and notifications. The frontend repository uses Next.js and TypeScript.

## Technical discussion

A learning product requires relationships between content, assignments, and individual progress. The repository separates controllers, services, routes, and models, with dedicated modules for administrative and learner-facing operations.

This is a useful example for discussing domain modeling, content management, frontend/API coordination, and integrations around recurring lesson workflows.

## Access

The public landing page can be viewed without signing in. Account-based workflows need an appropriate account. Module presence in the repository should not be read as a claim that every workflow has been verified in production.

[← Back to portfolio](../README.md)

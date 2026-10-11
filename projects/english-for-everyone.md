# English for Everyone — FluentPath

**Personal English-learning planner · Full-stack · Private source**

[Visit the product](https://english-for-everyone.vercel.app)

## Product

FluentPath turns English textbooks and PDFs into personal learning routes. Topics are organized into courses and lessons, with a reading workspace, notes, annotations, and visible progress. The repository is named `english-for-everyone`; the public product is branded FluentPath.

## Implementation scope

The application uses Next.js, React, TypeScript, Supabase, Zustand, and PDF.js. The source includes course planning, topic completion and review statuses, lesson notes, PDF pen/highlighter/eraser tools, account synchronization, and teacher-facing student workflows.

Zustand persists guest learning state. Supabase authentication and data services support account-based course plans and learning data. The PDF workspace connects reading and annotations to the lesson workflow.

## Technical discussion

This project demonstrates coordination between interactive PDF tools, structured course content, and persisted learner state. It is useful for discussing guest-to-account workflows, state synchronization, and role-aware interfaces.

## Access

The public landing page and product link were checked. Authenticated synchronization and teacher workflows were identified in source, but were not independently tested for this portfolio. Guest data stays local; account and teacher features require appropriate access. Source code remains private.

[← Back to portfolio](../README.md)

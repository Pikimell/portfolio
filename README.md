# Volodymyr Pashchenko

### Full-stack Developer

**TypeScript · React · Next.js · Node.js · Express · AWS**

I build web applications, backend services, and tools that turn complex workflows into practical products. My projects range from a reading app with its own backend to document automation, learning platforms, and interactive visual editors.

**Open to Full-stack, React / Next.js, and Node.js backend opportunities.**

[LinkedIn](https://www.linkedin.com/in/pashchenko-v-r) · [Email](mailto:volodkaposhta@gmail.com) · [GitHub](https://github.com/Pikimell) · [Telegram](https://t.me/pikimel)

---

## Portfolio website

This repository includes a responsive Next.js website with project filters, eight project detail pages, and contact links. The project artwork is illustrative, not a screenshot of the products.

### Run locally

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. The homepage is in `app/page.tsx`; edit project descriptions, links, and technologies in `lib/projects.ts`. Styling lives in `app/globals.css`.

### Checks

```sh
npm run lint
npm run typecheck
```

These checks do not run a production build. A development preview does not verify production deployment.

The production dependency audit is clean. The current Next.js ESLint tooling has an unresolved transitive `braces` advisory in development dependencies; no patched `braces` release was available when the site was added.

### Deploy

Import this repository into Vercel and select Next.js. No API keys or other environment variables are required. Deployment runs the production build on the hosting provider; a public portfolio URL has not been configured yet.

## Selected work

| Project                               | Problem & solution                                                                                    | Engineering focus                                                           | Explore                                                                                                                                        |
| :------------------------------------ | :---------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **English for Everyone (FluentPath)** | Turn English textbooks and PDFs into personal learning routes, with notes, annotations, and progress. | Next.js · TypeScript · Supabase · Zustand · PDF.js                          | [Project overview](projects/english-for-everyone.md) · [Try the app](https://english-for-everyone.vercel.app) · Private source                 |
| **Bookleap**                          | A reading product with mobile clients and a backend for books, reading sessions, notes, and accounts. | Node.js · Express · TypeScript · MongoDB · OAuth · subscription integration | [Project overview](projects/bookleap.md) · Private source                                                                                      |
| **Dilo Flow**                         | Generate documents from Excel records and Word templates, with Ukrainian declension and batch output. | Next.js · React · TypeScript · DOCX/XLSX · IndexedDB                        | [Project overview](projects/dilo-flow.md) · [Try the app](https://dilo-flow.vercel.app)                                                        |
| **Tatty English**                     | A learning platform with course content, homework, progress, and administration.                      | React · Next.js · Node.js · Express · MongoDB                               | [Project overview](projects/tatty-english.md) · [Visit](https://tatty-english-platform.vercel.app)                                             |
| **Google Play Console Connector**     | Manage Google Play release and store-listing workflows through a focused dashboard.                   | Next.js · TypeScript · Google Play Developer API · localization             | [Project overview](projects/google-play-console-connector.md) · [Source](https://github.com/Pikimell/google-play-console-connector)            |
| **Wave Studio**                       | Create layered wave artwork and App Store screenshot compositions.                                    | React · Next.js · TypeScript · SVG · export · browser storage               | [Project overview](projects/wave-studio.md) · [Source](https://github.com/Pikimell/wave-studio) · [Demo](https://wave-studio-beta.vercel.app)  |
| **Quick Mockups**                     | Compose device mockups with a visual editor and export images.                                        | React · TypeScript · Three.js · Zustand                                     | [Project overview](projects/quick-mockups.md) · [Source](https://github.com/Pikimell/quick-mockups) · [Demo](https://quick-mockups.vercel.app) |

### More work

- **[App Store Connector](projects/app-store-connector.md)** — App Store Connect and OpenAI integration for localization workflows. [Visit](https://app-store-connector.vercel.app).
- **[Camp Planner](https://github.com/Pikimell/camp-planner)** — Next.js and Zustand application for organizing trip participants, meals, duties, and food distribution. [Demo](https://camp-planner-eight.vercel.app).
- **[AWS Node Express Template](https://github.com/Pikimell/aws-node-express-template)** — TypeScript API starter with authentication, refresh-token sessions, validation, OpenAPI documentation, and AWS Lambda configuration.

## Technical toolkit

| Area                          | Technologies                                                   |
| :---------------------------- | :------------------------------------------------------------- |
| Frontend                      | React, Next.js, TypeScript, JavaScript, Zustand                |
| Backend                       | Node.js, Express, REST APIs, MongoDB, Mongoose                 |
| Infrastructure & integrations | AWS Lambda, Serverless Framework, Apple and Google APIs, OAuth |
| Interactive tools             | SVG, Three.js, browser storage, file import and export         |
| Mobile                        | Swift / SwiftUI, React Native / Expo                           |

## How I work

I work independently with clients, discuss requirements directly, and develop across interfaces, APIs, and data models. I also have experience in full-stack development at KeyUA and teaching and mentoring at GoIT.

I aim to keep domain logic separate from UI components, make integration limits explicit, and choose architecture around the product's requirements. The project overviews describe those decisions and the boundaries of each implementation.

## About private projects

Some projects have private source repositories. This portfolio shares their functionality and technical approach without publishing their implementation or user data. Public product links are provided where available; some workflows require an account or service credentials.

The overview pages describe implementation scope, not guarantees about uptime, performance, or production usage. Source licenses remain those of their respective repositories.

## Let's talk

Looking for someone to work across React / Next.js interfaces, Node.js services, or API integrations?

[Contact me on LinkedIn](https://www.linkedin.com/in/pashchenko-v-r) or [send an email](mailto:volodkaposhta@gmail.com).

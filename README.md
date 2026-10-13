# Volodymyr Pashchenko

### Full-stack Developer

**TypeScript · React · Next.js · Node.js · Express · AWS**

I build web applications, backend services, and tools that turn complex workflows into practical products. My projects range from a reading app with its own backend to document automation, learning platforms, and interactive visual editors.

**Open to Full-stack, React / Next.js, and Node.js backend opportunities.**

[LinkedIn](https://www.linkedin.com/in/pashchenko-v-r) · [Email](mailto:volodkaposhta@gmail.com) · [GitHub](https://github.com/Pikimell) · [Telegram](https://t.me/pikimel)

---

## Portfolio website

This repository contains my portfolio website: a responsive Next.js app with project filters, case-study pages, Open Graph images, and contact links. Project content lives in typed data (`lib/projects.ts`) and Markdown case studies (`projects/`).

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

### Deploy

Import this repository into Vercel and select Next.js. No API keys or environment variables are required.

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
- **[Dnipro Slay API](https://github.com/Pikimell/dnipro-slay-api)**: city events backend with a scheduled scraper on AWS Lambda and OpenAI-based event normalization.
- **[Time Capsule API](https://github.com/Pikimell/time-capsule-api)**: geo-tagged time capsules with cookie-based auth, a geo radius search in MongoDB aggregation, and Vitest tests.
- **[CampChords Web](https://github.com/Pikimell/camp-chords-web)**: local-first songbook with chord transposition, a Web Audio tuner, and validated JSON import/export.
- **[AWS Node Express Template](https://github.com/Pikimell/aws-node-express-template)** — TypeScript API starter with authentication, refresh-token sessions, validation, OpenAPI documentation, and AWS Lambda configuration.

## Technical toolkit

| Area                          | Technologies                                                   |
| :---------------------------- | :------------------------------------------------------------- |
| Frontend                      | React, Next.js, TypeScript, JavaScript, Zustand                |
| Backend                       | Node.js, Express, REST APIs, MongoDB, Mongoose                 |
| Infrastructure & integrations | AWS Lambda, Serverless Framework, Google & Apple APIs, OAuth   |
| Interactive tools             | SVG, Three.js, browser storage, file import and export         |

## How I work

I work independently with clients, discuss requirements directly, and develop across interfaces, APIs, and data models. I also have experience in full-stack development at KeyUA and teaching and mentoring at GoIT.

I aim to keep domain logic separate from UI components, make integration limits explicit, and choose architecture around the product's requirements. The project overviews describe those decisions and the boundaries of each implementation.

## About private projects

Some projects have private source repositories. This portfolio shares their functionality and technical approach without publishing their implementation or user data. Public product links are provided where available; some workflows require an account or service credentials.

## Let's talk

Looking for someone to work across React / Next.js interfaces, Node.js services, or API integrations?

[Contact me on LinkedIn](https://www.linkedin.com/in/pashchenko-v-r) or [send an email](mailto:volodkaposhta@gmail.com).

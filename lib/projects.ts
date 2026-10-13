export const categories = [
  "Products",
  "Creative tools",
  "Integrations",
  "Backend & APIs",
] as const;
export type Category = (typeof categories)[number];
export type Platform = "Web" | "API" | "iOS" | "Android";
export interface Project {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  platforms: Platform[];
  stack: string[];
  private: boolean;
  accent: string;
  featured?: boolean;
  image?: string;
  demo?: string;
  source?: string;
  highlights: string[];
  problem: string;
  approach: string;
  features: string[];
  notes: string;
  focus: string;
}
export const projects: Project[] = [
  {
    slug: "english-for-everyone",
    name: "FluentPath",
    category: "Products",
    tagline: "Your textbooks, turned into a learning route",
    description:
      "A learning platform that turns English textbooks and PDFs into personal 20-minute daily routes, with a PDF reader, annotations, notes, and visible progress.",
    platforms: ["Web"],
    stack: ["Next.js", "TypeScript", "Supabase", "Zustand", "PDF.js"],
    private: true,
    accent: "#4f8cff",
    featured: true,
    image: "/projects/english-for-everyone.jpg",
    demo: "https://english-for-everyone.vercel.app",
    highlights: [
      "Library of 37 textbooks and 2,800+ topics for routes",
      "PDF reader with pen, highlighter, and lesson notes",
      "Guest mode, account sync, and teacher workflows",
    ],
    problem:
      "English learners often have plenty of materials but no clear sequence to follow. Textbook topics, lesson notes, PDF practice, and progress need to fit into one daily workflow.",
    approach:
      "A Next.js application organizes book topics into courses and lessons. Zustand manages persisted learning state, while Supabase authentication and data services support account-based course plans, notes, annotations, and progress. PDF.js powers the reading workspace.",
    features: [
      "Course and lesson planning from textbook topics",
      "PDF reading with pen, highlighter, eraser, and lesson notes",
      "Topic completion and review statuses with persisted learning state",
      "Guest use, account synchronization, and teacher-facing student workflows",
    ],
    notes:
      "The public product is branded FluentPath; english-for-everyone is the repository name. Guest data is stored locally; account synchronization and teacher tools require the appropriate access.",
    focus: "Learning workflows · PDF interaction · Persistent state",
  },
  {
    slug: "dilo-flow",
    name: "Dilo Flow",
    category: "Products",
    tagline: "Paperwork in minutes, not an evening",
    description:
      "Generates ready-to-use service documents from an Excel personnel list and Word templates, with automatic Ukrainian declension of names, ranks, and positions.",
    platforms: ["Web", "iOS"],
    stack: ["Next.js", "TypeScript", "DOCX / XLSX", "IndexedDB", "Swift"],
    private: true,
    accent: "#6d5dfc",
    featured: true,
    image: "/projects/dilo-flow.jpg",
    demo: "https://dilo-flow.vercel.app",
    highlights: [
      "Ukrainian declension without manual editing",
      "Forty documents in one batch instead of forty files",
      "Works offline — personal data never leaves the device",
    ],
    problem:
      "Copying records from Excel into Word is repetitive and error-prone. Names and positions also need the correct Ukrainian grammatical case.",
    approach:
      "Browser-side services handle import, template interpretation, declension, and generation. Domain rules stay separate from React; IndexedDB stores local libraries and configuration.",
    features: [
      "Excel import and configurable field mapping",
      "DOCX tags, roles, repeated blocks, and declension",
      "Individual documents and batch DOCX / ZIP output",
      "Offline-first processing with local template libraries",
    ],
    notes:
      "Large files currently run on the main thread. Demonstrations should use synthetic records. Folder output depends on browser support.",
    focus: "Document processing · Domain logic · Local persistence",
  },
  {
    slug: "tatty-english",
    name: "Tatty English",
    category: "Products",
    tagline: "An online English school, end to end",
    description:
      "A learning platform for an online school: courses, practice tasks, homework, vocabulary, scheduling, and progress — with separate learner and admin apps on a modular backend.",
    platforms: ["Web", "API"],
    stack: ["Next.js", "Express", "TypeScript", "MongoDB"],
    private: true,
    accent: "#3d8bd6",
    featured: true,
    image: "/projects/tatty-english.jpg",
    demo: "https://tatty-english-platform.vercel.app",
    highlights: [
      "Learner app, admin panel, and REST backend",
      "Courses, lessons, practice tasks, and homework",
      "Level test, vocabularies, scheduling, and payments",
    ],
    problem:
      "Learning content, assignments, schedules, and individual progress need a coherent structure for both students and teachers.",
    approach:
      "Separate learner and administrative applications connect to a modular backend. Dedicated controllers, services, and models organize content, homework, vocabulary, and scheduling.",
    features: [
      "Courses, lessons, topics, sections, and practice tasks",
      "Homework and student progress modules",
      "Scheduling, payment modules, and integration services",
    ],
    notes:
      "The landing page is public. Account-based workflows require an appropriate account.",
    focus: "Domain modeling · Learner experience · Administration",
  },
  {
    slug: "wave-studio",
    name: "Wave Studio",
    category: "Creative tools",
    tagline: "Layered waves and App Store screenshots",
    description:
      "A visual editor for layered wave backgrounds and App Store screenshot compositions, with seed-controlled generation, undo/redo, and PNG / SVG / ZIP export.",
    platforms: ["Web"],
    stack: ["React", "Next.js", "TypeScript", "SVG", "IndexedDB"],
    private: false,
    accent: "#5aa3ff",
    featured: true,
    image: "/projects/wave-studio.jpg",
    source: "https://github.com/Pikimell/wave-studio",
    demo: "https://wave-studio-beta.vercel.app",
    highlights: [
      "Layered wave generator with SVG / PNG export",
      "Screenshot editor with snapping and undo/redo",
      "Seed-controlled image-generation API",
    ],
    problem:
      "Creating reusable visual assets needs direct manipulation, repeatable generation, and export without losing editable project state.",
    approach:
      "Wave generation is separated from UI components. The screenshot editor coordinates document state, undo/redo, localStorage, and IndexedDB assets.",
    features: [
      "Layered wave generation with SVG / PNG export",
      "Seed-controlled generation API",
      "Screenshot compositions, snapping, undo/redo, and ZIP export",
    ],
    notes:
      "Project JSON does not bundle image assets or API keys. The source uses a PolyForm Noncommercial license.",
    focus: "Visual editing · State management · Export pipelines",
  },
  {
    slug: "bookleap",
    name: "Bookleap",
    category: "Products",
    tagline: "A reading companion across devices",
    description:
      "A reading product with iOS and Android clients and its own backend: personal library, reading sessions, notes, quotes, reviews, and subscriptions.",
    platforms: ["iOS", "Android", "API"],
    stack: ["Node.js", "Express", "TypeScript", "MongoDB", "Swift", "OAuth"],
    private: true,
    accent: "#f59e0b",
    highlights: [
      "Native iOS client and Android app",
      "Apple & Google sign-in with token rotation",
      "Subscription webhooks and admin tooling",
    ],
    problem:
      "A reading product needs more than a list of books. Libraries, reading sessions, notes, and accounts need to work together across clients.",
    approach:
      "A dedicated Express backend separates routes, controllers, services, and models. Apple and Google sign-in connect mobile clients to the account lifecycle, with refresh-token rotation and subscription integration.",
    features: [
      "Books, reading sessions, notes, quotes, and reviews",
      "Apple and Google authentication with token rotation",
      "Subscription webhooks and administrative tooling",
    ],
    notes:
      "The source repositories are private. Feature availability can differ between clients.",
    focus: "Product development · API design · Mobile clients",
  },
  {
    slug: "quick-mockups",
    name: "Quick Mockups",
    category: "Creative tools",
    tagline: "Put your product in a 3D frame",
    description:
      "A browser-based 3D device mockup editor: map a screenshot onto an iPhone, iPad, or MacBook model, compose the scene, and export images.",
    platforms: ["Web"],
    stack: ["React", "TypeScript", "Three.js", "R3F", "Zustand"],
    private: false,
    accent: "#8b5cf6",
    image: "/projects/quick-mockups.jpg",
    source: "https://github.com/Pikimell/quick-mockups",
    demo: "https://quick-mockups.vercel.app",
    highlights: [
      "Real-time 3D devices with React Three Fiber",
      "Camera, background, text, and shadow controls",
      "PNG / JPEG / WebP export with custom scale",
    ],
    problem:
      "A mockup editor needs responsive controls for scene composition while keeping 3D rendering, overlays, and output coordinated.",
    approach:
      "Scene rendering, device components, control panels, overlays, and export are separate modules. Zustand coordinates scene and device state.",
    features: [
      "Device and screenshot rendering with React Three Fiber",
      "Camera, background, text, and shadow controls",
      "PNG, JPEG, and WebP export with configurable scale",
    ],
    notes: "Rendering depends on browser graphics capabilities.",
    focus: "Interactive interfaces · 3D rendering · Image export",
  },
  {
    slug: "camp-planner",
    name: "Camp Planner",
    category: "Products",
    tagline: "Food and duties for group trips, solved",
    description:
      "Turns participants, recipes, and ingredients into a daily menu, a shopping list, a fair duty rota, and a “who brings what” plan for group camping trips.",
    platforms: ["Web"],
    stack: ["Next.js", "React", "TypeScript", "Zustand", "dnd kit"],
    private: false,
    accent: "#a3e635",
    image: "/projects/camp-planner.jpg",
    source: "https://github.com/Pikimell/camp-planner",
    demo: "https://camp-planner-eight.vercel.app",
    highlights: [
      "Meal plan and aggregated shopping list",
      "Auto-generated duty rota, editable with drag & drop",
      "Works without a backend — JSON import / export",
    ],
    problem:
      "Organizing food for 10+ people over several days usually means spreadsheets, chat threads, and someone forgetting the salt.",
    approach:
      "One Zustand store per domain (members, meals, duty schedule, settings) with persist middleware. Each module is its own route, and derived plans are computed from a few inputs, then adjustable by hand.",
    features: [
      "Members, ingredients, recipes, and meals catalog",
      "Daily meal plan and total shopping list",
      "Food distribution and pickup plan per participant",
      "Fair duty scheduler with drag-and-drop editing",
    ],
    notes: "Data is persisted locally in the browser.",
    focus: "Domain logic · Derived state · Drag and drop",
  },
  {
    slug: "app-store-connector",
    name: "App Store Connector",
    category: "Integrations",
    tagline: "App Store localization without copy-paste",
    description:
      "Connects App Store Connect and AI-assisted translation: paste base metadata, pick languages, check field limits, and publish localizations in one flow.",
    platforms: ["Web"],
    stack: ["Next.js", "TypeScript", "App Store Connect API", "OpenAI"],
    private: true,
    accent: "#f97352",
    image: "/projects/app-store-connector.jpg",
    demo: "https://app-store-connector.vercel.app",
    highlights: [
      "Apps, versions, and localization workflows",
      "Field-aware AI translation with length limits",
      "No database — keys live only in the session",
    ],
    problem:
      "Localizing store metadata requires repeated translations, field-length checks, and updates across languages and versions.",
    approach:
      "Server actions and route handlers coordinate Apple API requests with field-specific translation prompts. Session, validation, and concurrency utilities are separate from UI orchestration.",
    features: [
      "Apps, versions, and localization workflows",
      "Field-specific AI translation constraints",
      "Screenshot and metadata JSON tools",
    ],
    notes: "Functional workflows require Apple and OpenAI credentials.",
    focus: "External APIs · Localization · Server orchestration",
  },
  {
    slug: "google-play-console-connector",
    name: "Play Console Connector",
    category: "Integrations",
    tagline: "Google Play releases in one dashboard",
    description:
      "A full-stack dashboard for Google Play releases, testers, store listings, subscriptions, localization, and reviews via the Google Play Developer API.",
    platforms: ["Web"],
    stack: ["Next.js", "React", "TypeScript", "Google Play API"],
    private: false,
    accent: "#34d399",
    source: "https://github.com/Pikimell/google-play-console-connector",
    highlights: [
      "Release tracks and staged rollouts",
      "Localized store listings and graphics",
      "Subscriptions, country pricing, and reviews",
    ],
    problem:
      "App publishing spans release tracks, store listings, graphics, pricing, and reviews. These workflows need clear API boundaries and reliable coordination.",
    approach:
      "A Next.js dashboard connects interactive forms to supported Google Play Developer API workflows, with localization support and explicit documentation of integration constraints.",
    features: [
      "Release tracks and staged rollout workflows",
      "Localized store listings and graphics",
      "Subscription plans, country pricing, and reviews",
    ],
    notes:
      "Some Play Console operations remain manual. Demonstrate with a test app or a recording.",
    focus: "API orchestration · Release tooling · Localization",
  },
  {
    slug: "devtrail",
    name: "DevTrail",
    category: "Products",
    tagline: "Website for an iOS product studio",
    description:
      "The website of DevTrail, an iOS studio: services, case studies, process, app pages with privacy policies, plus structured data and SEO for search and AI crawlers.",
    platforms: ["Web"],
    stack: ["Next.js", "TypeScript", "SEO", "JSON-LD"],
    private: true,
    accent: "#ff6a2b",
    image: "/projects/devtrail.jpg",
    demo: "https://devtrail-documents.vercel.app",
    highlights: [
      "Landing, app pages, and privacy policies",
      "Canonical metadata, sitemap, and JSON-LD",
      "Content that renders without JavaScript",
    ],
    problem:
      "A studio shipping several iOS apps needs one place for its services, its portfolio, and the legal pages every App Store listing links to.",
    approach:
      "A Next.js App Router site with shared SEO helpers: canonical, Open Graph, and Twitter metadata, a generated sitemap, robots rules, and JSON-LD for the studio, FAQ, apps, and breadcrumbs.",
    features: [
      "Studio landing with services, cases, process, and FAQ",
      "Per-app pages and privacy policies",
      "Sitemap, robots.txt, and Schema.org structured data",
    ],
    notes:
      "Structured data omits prices, reviews, and ratings unless verified information is on the page.",
    focus: "Marketing site · SEO · Content structure",
  },
  {
    slug: "time-capsule",
    name: "Time Capsule",
    category: "Backend & APIs",
    tagline: "Messages for the future, pinned to places",
    description:
      "Geo-tagged digital time capsules: write a message today, pin it on the map, and unlock it on a chosen date. Public REST API plus a Next.js map client.",
    platforms: ["Web", "API"],
    stack: ["Node.js", "Express", "TypeScript", "MongoDB", "AWS Lambda"],
    private: false,
    accent: "#22a35a",
    image: "/projects/time-capsule.jpg",
    source: "https://github.com/Pikimell/time-capsule-api",
    demo: "https://time-capsule-ui.vercel.app",
    highlights: [
      "Radius geo search in a MongoDB aggregation",
      "Content locked until the opening date",
      "httpOnly cookie auth, scrypt hashing, Vitest",
    ],
    problem:
      "Capsules should be discoverable on a public map without leaking their content before the opening date — while owners can always read their own.",
    approach:
      "An Express API on AWS Lambda separates routes, controllers, and services. The public feed returns metadata only, and optional authentication decides who can open a capsule.",
    features: [
      "Register, login, refresh, and logout with httpOnly secure cookies",
      "Capsule CRUD with date filters, pagination, and sorting",
      "Great-circle radius search computed in an aggregation pipeline",
      "Public profiles and achievements",
    ],
    notes: "The map client source is private; the API is open source.",
    focus: "API design · Geo queries · Access rules",
  },
  {
    slug: "music-controller",
    name: "Music Controller",
    category: "Creative tools",
    tagline: "A gamepad that plays music",
    description:
      "Turns a PlayStation or Xbox gamepad into a low-latency musical instrument, and tests its sticks, triggers, and drift — all in the browser.",
    platforms: ["Web"],
    stack: ["Next.js", "TypeScript", "Tone.js", "Gamepad API", "Zustand"],
    private: false,
    accent: "#ec4899",
    source: "https://github.com/Pikimell/music-controller",
    highlights: [
      "Notes, chords, scales, and drums on any gamepad",
      "Stick drift and circularity diagnostics",
      "Input engine decoupled from React rendering",
    ],
    problem:
      "Hardware input and audio need low latency, which conflicts with re-rendering a React UI on every gamepad poll.",
    approach:
      "Hardware polling and audio live in framework-agnostic engines. An input engine emits button, axis, and trigger events, and React components only subscribe to stores.",
    features: [
      "Profiles for DualSense, Xbox, and generic gamepads",
      "Tone.js synth with ADSR, filter, reverb, delay, and distortion",
      "Mapping editor, presets, and on-screen piano",
      "Circle-of-fifths chord wheels driven by the sticks",
    ],
    notes: "Works best in Chromium-based browsers.",
    focus: "Real-time input · Web Audio · Architecture",
  },
  {
    slug: "camp-chords",
    name: "CampChords",
    category: "Products",
    tagline: "A local-first songbook for guitarists",
    description:
      "Chord search, a personal library and collections, on-the-fly transposition, YouTube links, and a Web Audio tuner. Web version of the CampChords iOS app.",
    platforms: ["Web", "iOS"],
    stack: ["Next.js", "TypeScript", "Zustand", "Web Audio", "SwiftUI"],
    private: false,
    accent: "#f4b740",
    source: "https://github.com/Pikimell/camp-chords-web",
    highlights: [
      "Transposition with slash chords and flats",
      "Chromatic tuner on the microphone",
      "JSON import compatible with the iOS app",
    ],
    problem:
      "Guitarists keep songs in scattered tabs and notes, and need them offline, transposable, and in sync with the mobile app.",
    approach:
      "A local-first Next.js app: route handlers proxy chord and video search, data lives in the browser, and imports are validated as a whole before anything is written.",
    features: [
      "Online chord search with history and duplicate protection",
      "Library, collections, tags, favourites, and 7 sort modes",
      "Performer mode with keyboard shortcuts and print view",
      "10 tests covering import, transposition, and pitch detection",
    ],
    notes: "If localStorage is corrupted, the app offers a raw backup instead of overwriting it.",
    focus: "Local-first data · Audio · Data integrity",
  },
  {
    slug: "dnipro-slay",
    name: "Dnipro Slay",
    category: "Backend & APIs",
    tagline: "Every event in the city, in one app",
    description:
      "Backend for a city events app: scheduled scraping of ticket sites, AI-assisted normalization, search, and saved events for an iOS client.",
    platforms: ["API", "iOS"],
    stack: ["Node.js", "TypeScript", "MongoDB", "AWS Lambda", "OpenAI"],
    private: false,
    accent: "#a78bfa",
    source: "https://github.com/Pikimell/dnipro-slay-api",
    highlights: [
      "Scheduled Lambda scrapes sources every 6 hours",
      "OpenAI turns raw HTML into typed events",
      "Search, feeds, saved events, Swagger docs",
    ],
    problem:
      "Concerts, theatre, stand-ups, and quizzes are scattered across ticket sites with different layouts.",
    approach:
      "A scheduled Lambda scrapes sources, gpt-4o-mini normalizes HTML into a typed Event, and new events are deduplicated before saving — so new sources need no custom parser.",
    features: [
      "Auth with refresh-token sessions and password reset by email",
      "Events with pagination, full-text search, upcoming and popular feeds",
      "Saved events per user and popularity metrics",
      "Two Lambda functions: HTTP API and cron parser",
    ],
    notes: "The iOS client source is private.",
    focus: "Data ingestion · AI normalization · Serverless",
  },
  {
    slug: "neuro-cycle",
    name: "NeuroCycle",
    category: "Backend & APIs",
    tagline: "A migraine diary shared with your doctor",
    description:
      "REST API for a migraine-tracking health app: 18 resource groups with role-based access for patients, doctors, and admins, deployed as a single AWS Lambda.",
    platforms: ["API", "iOS"],
    stack: ["Node.js", "Express", "TypeScript", "MongoDB", "AWS Lambda"],
    private: false,
    accent: "#38bdf8",
    source: "https://github.com/Pikimell/neuro-cycle-api",
    highlights: [
      "Generic typed CRUD factories for 18 resources",
      "HMAC-hashed rotating refresh tokens",
      "Aggregated diary day view across collections",
    ],
    problem:
      "People with chronic migraine need a structured diary — attacks, mood, medication — that their doctor can follow.",
    approach:
      "Factories produce typed services, controllers, and routers for simple resources, while domain-heavy ones get custom services. Role helpers resolve the caller’s profile so controllers never trust IDs from the body.",
    features: [
      "Patients, doctors, and admins with role-based access",
      "Attacks, mood entries, medication schedules, and intakes",
      "Appointments, recommendations, and questionnaires",
      "Password reset revokes all active sessions",
    ],
    notes: "The iOS client source is private.",
    focus: "Domain modeling · Security · Serverless",
  },
  {
    slug: "aws-node-express-template",
    name: "AWS Express Template",
    category: "Backend & APIs",
    tagline: "A production-ready API starting point",
    description:
      "A TypeScript Express starter with JWT auth, refresh-token sessions, validation, OpenAPI docs, and a handler that runs locally or on AWS Lambda.",
    platforms: ["API"],
    stack: ["Node.js", "TypeScript", "Express", "MongoDB", "Serverless"],
    private: false,
    accent: "#fb923c",
    source: "https://github.com/Pikimell/aws-node-express-template",
    highlights: [
      "Auth with httpOnly cookies and token rotation",
      "Joi validation and centralized middleware",
      "Swagger UI and one-command Lambda deploy",
    ],
    problem:
      "Every new API repeats the same auth, validation, docs, and deployment setup.",
    approach:
      "ESM TypeScript with Mongoose, celebrate/Joi, and serverless-http, so the same app runs as a local server or a Lambda handler.",
    features: [
      "Register, login, logout, refresh, and current user",
      "Example CRUD with pagination, sorting, and filtering",
      "Swagger UI at /docs and OpenAPI JSON",
    ],
    notes: "Deployment requires an AWS profile and the Serverless Framework.",
    focus: "Backend foundations · DX · Deployment",
  },
];
export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

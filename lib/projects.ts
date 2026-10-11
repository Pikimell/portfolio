export type Category = "All work" | "Full-stack" | "Frontend" | "Integrations";
export interface Project {
  slug: string;
  name: string;
  category: Exclude<Category, "All work">;
  eyebrow: string;
  description: string;
  stack: string[];
  private: boolean;
  color: string;
  demo?: string;
  source?: string;
  problem: string;
  approach: string;
  features: string[];
  notes: string;
  focus: string;
}
export const projects: Project[] = [
  {
    slug: "english-for-everyone",
    name: "English for Everyone",
    category: "Full-stack",
    eyebrow: "Your materials. Your learning path.",
    description:
      "FluentPath turns English textbooks and PDFs into personal learning routes, with notes, annotations, and visible progress.",
    stack: ["Next.js", "TypeScript", "Supabase", "Zustand", "PDF.js"],
    private: true,
    color: "fluent",
    demo: "https://english-for-everyone.vercel.app",
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
      "The public product is branded FluentPath; english-for-everyone is the repository name. Source code remains private. Guest data is stored locally; account synchronization and teacher tools require the appropriate access. The public landing page was checked; authenticated workflows were not independently tested for this portfolio.",
    focus: "Learning workflows · PDF interaction · Persistent state",
  },

  {
    slug: "bookleap",
    name: "Bookleap",
    category: "Full-stack",
    eyebrow: "A reading companion",
    description:
      "From a personal library to reading sessions, notes, and a connected mobile experience.",
    stack: ["TypeScript", "Node.js", "MongoDB", "OAuth"],
    private: true,
    color: "book",
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
    slug: "dilo-flow",
    name: "Dilo Flow",
    category: "Frontend",
    eyebrow: "Less paperwork. More precision.",
    description:
      "Turn Excel records and Word templates into ready-to-use documents, right in the browser.",
    stack: ["Next.js", "TypeScript", "DOCX / XLSX", "IndexedDB"],
    private: true,
    color: "dilo",
    demo: "https://dilo-flow.vercel.app",
    problem:
      "Copying records from Excel into Word is repetitive and error-prone. Names and positions also need the correct Ukrainian grammatical case.",
    approach:
      "Browser-side services handle import, template interpretation, declension, and generation. Domain rules stay separate from React; IndexedDB stores local libraries and configuration.",
    features: [
      "Excel import and configurable field mapping",
      "DOCX tags, roles, repeated blocks, and declension",
      "Individual documents and batch DOCX / ZIP output",
    ],
    notes:
      "Large files currently run on the main thread. Demonstrations should use synthetic records. Folder output depends on browser support.",
    focus: "Document processing · Domain logic · Local persistence",
  },
  {
    slug: "tatty-english",
    name: "Tatty English",
    category: "Full-stack",
    eyebrow: "A clearer path to learning",
    description:
      "Courses, practice, homework, and progress in a connected learning platform.",
    stack: ["Next.js", "Express", "TypeScript", "MongoDB"],
    private: true,
    color: "tatty",
    demo: "https://tatty-english-platform.vercel.app",
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
      "The landing page is public. Account-based workflows require an appropriate account; module presence is not a claim that every production workflow has been verified.",
    focus: "Domain modeling · Learner experience · Administration",
  },
  {
    slug: "google-play-console-connector",
    name: "Play Console Connector",
    category: "Integrations",
    eyebrow: "Release workflows, connected",
    description:
      "A focused dashboard for Google Play releases, listings, localization, and subscriptions.",
    stack: ["Next.js", "React", "TypeScript", "Google Play API"],
    private: false,
    color: "play",
    source: "https://github.com/Pikimell/google-play-console-connector",
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
      "Some Play Console operations remain manual. Local file persistence requires a different storage approach for serverless hosting. Demonstrate with a test app or a recording.",
    focus: "API orchestration · Release tooling · Localization",
  },
  {
    slug: "wave-studio",
    name: "Wave Studio",
    category: "Frontend",
    eyebrow: "Make something fluid",
    description:
      "A visual workspace for layered wave artwork and App Store screenshot compositions.",
    stack: ["React", "Next.js", "SVG", "Browser storage"],
    private: false,
    color: "wave",
    source: "https://github.com/Pikimell/wave-studio",
    demo: "https://wave-studio-beta.vercel.app",
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
      "Project JSON does not bundle image assets or API keys. The source uses a PolyForm Noncommercial license; check its terms before reuse.",
    focus: "Visual editing · State management · Export pipelines",
  },
  {
    slug: "quick-mockups",
    name: "Quick Mockups",
    category: "Frontend",
    eyebrow: "Put your product in the frame",
    description:
      "Compose device scenes, adjust the details, and export mockup images from the browser.",
    stack: ["React", "TypeScript", "Three.js", "Zustand"],
    private: false,
    color: "mockup",
    source: "https://github.com/Pikimell/quick-mockups",
    demo: "https://quick-mockups.vercel.app",
    problem:
      "A mockup editor needs responsive controls for scene composition while keeping 3D rendering, overlays, and output coordinated.",
    approach:
      "Scene rendering, device components, control panels, overlays, and export are separate modules. Zustand coordinates scene and device state.",
    features: [
      "Device and screenshot rendering with React Three Fiber",
      "Camera, background, text, and shadow controls",
      "PNG, JPEG, and WebP export with configurable scale",
    ],
    notes:
      "Rendering depends on browser graphics capabilities. This overview does not claim a compatibility or performance benchmark.",
    focus: "Interactive interfaces · 3D rendering · Image export",
  },
  {
    slug: "app-store-connector",
    name: "App Store Connector",
    category: "Integrations",
    eyebrow: "Localization without the copy-paste",
    description:
      "Connect App Store metadata and AI-assisted translations in one focused workflow.",
    stack: ["Next.js", "TypeScript", "Apple API", "OpenAI"],
    private: true,
    color: "asc",
    demo: "https://app-store-connector.vercel.app",
    problem:
      "Localizing store metadata requires repeated translations, field-length checks, and updates across languages and versions.",
    approach:
      "Server actions and route handlers coordinate Apple API requests with field-specific translation prompts. Session, validation, and concurrency utilities are separate from UI orchestration.",
    features: [
      "Apps, versions, and localization workflows",
      "Field-specific AI translation constraints",
      "Screenshot and metadata JSON tools",
    ],
    notes:
      "Functional workflows require Apple and OpenAI credentials. A recorded walkthrough is more accessible for visitors than connecting their own keys.",
    focus: "External APIs · Localization · Server orchestration",
  },
];

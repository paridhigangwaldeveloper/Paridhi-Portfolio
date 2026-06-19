import { ProjectCard, type Project } from "@/components/project-card"

const projects: Project[] = [
  {
    title: "Talbot Health Services",
    description:
      "Talbot Health Services is a CARF-accredited addiction treatment provider operating across three Ohio clinics. The website works as a patient-facing platform with location pages, insurance verification, intake forms, and a patient portal to help people access local recovery care easily.",
    techStack: ["React", "Next.js", "LangChain", "LLM Integration", "Postgres", "Temporal", "n8n", "CI/CD"],
  },
  {
    title: "Sticky.io CRM and Merchant Portal",
    description:
      "Sticky.io is a performance commerce platform for subscription-based ecommerce businesses. Contributed to the CRM, merchant portal, and member portal sections that support offer management, subscription billing, payment recovery, analytics, and merchant operations.",
    techStack: ["React", "Laravel", "MySQL", "Node.js", "PostgreSQL", "Azure"],
    liveLink: "https://www.sticky.io/",
  },
  {
    title: "Travel Partner Directory",
    description:
      "A global directory platform connecting travel advisors with suppliers, events, and resources. Built role-based access, advanced search and filtering, and scalable backend systems supporting user-generated content and third-party integrations.",
    techStack: ["Laravel", "Bootstrap", "Vue.js", "MySQL",],
  },
  {
    title: "Tashi",
    description:
      "Tashi is a full-featured online booking and travel marketplace platform for accommodation providers, tour operators, and multi-vendor travel businesses. Contributed to payment gateway integration, website builder, and property management modules.",
    techStack: ["Laravel", "React", "Page Builder", "Dashboards", "Stripe", "Microservices"],
    liveLink: "https://tashi.travel/",
  },
  {
    title: "Groomer.io",
    description:
      "Groomer.io is an all-in-one pet grooming software platform used by salon and mobile groomers across North America. Contributed to the website builder module and booking management system to support online booking, scheduling, and business operations.",
    techStack: ["React", "Node.js", "Stripe", "HubSpot Integration", "Laravel", "CRM Integration"],
    liveLink: "https://get.groomer.io/",
  },
  {
    title: "StaffViz",
    description:
      "StaffViz is an AI-powered workforce management and time tracking platform trusted by 1,250+ clients across the US. Contributed to client management, project tracking, and HR management modules for managing teams, productivity, payroll, and projects.",
    techStack: ["Next.js", "Nest.js", "MongoDB", "AWS", "CI/CD"],
    liveLink: "https://www.staffviz.com/",
  },
  {
    title: "NVOX (AI Assessment Platform)",
    description:
      "NVOX is an AI-driven behavioral assessment platform designed for remote evaluations and automated report generation. Built secure workflows, enabled clinician validation, and developed exportable reports for educational and workplace use.",
    techStack: ["React", "Node.js", "AI Chatbot", "HubSpot"],
  },
  {
    title: "Haldiram's Store Locator",
    description:
      "Haldiram's Store Locator helps customers find nearby restaurants and outlets across multiple Indian states. Built the store locator feature with search and filtering by state, city, and locality, plus directions, contact details, timings, and map integration.",
    techStack: ["Laravel", "Vue.js", "Google Maps"],
    liveLink: "https://hrstores.haldiram.com/",
  },
  {
    title: "Raeden (Map-Based Platform)",
    description:
      "Raeden is a real-time map-based platform enabling location-based search and data visualization. Built scalable mapping features, integrated secure authentication and payment systems, and enabled ERP integrations for seamless real-time data synchronization.",
    techStack: ["React", "Node.js", "Maps API", "Stripe"],
  },
  {
    title: "Denial Management System (AI-Powered)",
    description:
      "An AI-powered system to automate insurance claim denial tracking and reprocessing. Implemented intelligent workflows using LLMs, automated browser interactions, and OCR pipelines to reduce manual effort and improve turnaround time.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "LLM Integration", "Temporal"],
  },
  {
    title: "AI WhatsApp Booking Engine & Chatbot",
    description:
      "A SaaS-based AI chatbot and booking system enabling users to interact via WhatsApp, schedule appointments, and access company knowledge. Implemented vector search, automated workflows, and usage-based billing dashboards.",
    techStack: ["WhatsApp API", "Node.js", "Google Calendar API", "N8N", "Vector DB (Pinecone)"],
  },
  {
    title: "Remcare",
    description:
      "Remcare is a digital clinical-pathways platform that lets clinicians collect patient data remotely and risk-stratify waiting lists. It automates referral validation, pre-anaesthetic assessments, prehabilitation, and remote monitoring — cutting unnecessary appointments and supporting timely, prioritized care.",
    techStack: ["Duda", "Website Builder"],
    liveLink: "https://remcare.co.uk/",
  },
  {
    title: "Wai Wai India",
    description:
      "Official website for Wai Wai instant noodles (CG Foods India, part of CG Corp Global). The site showcases the product range, recipes, and brand content, with sections for multiple markets (India, Serbia, Kazakhstan, Bangladesh) and a recipe blog.",
    techStack: ["Wix", "Website Builder"],
    liveLink: "https://waiwai.in/",
  },
  {
    title: "Boutique Education",
    description:
      "Website for a Singapore-based expat tuition company offering bespoke home and online tutoring in Maths, English, and Science for children and adults. Presents services, subjects, and booking/contact information.",
    techStack: ["Wix", "Website Builder"],
    liveLink: "https://boutiqueeducation.asia/",
  },
  {
    title: "Good Clean Wine",
    description:
      "DTC ecommerce store for a \"clean wine\" brand selling minimal-intervention Italian red, white, and sparkling wines. Includes age-gate, shop collections, and subscription/shipping offers.",
    techStack: ["Shopify"],
    liveLink: "https://goodclean.wine/",
  },
  {
    title: "V Beauty Pure",
    description:
      "Ecommerce store for a professional nail-products brand (acrylic covers, gel polish) aimed at nail technicians, with collections, bestsellers, and promotional offers.",
    techStack: ["Storyblok", "Next.js", "Headless CMS"],
    liveLink: "https://vbeautypure.com/",
  },
  {
    title: "Alcohol Delivery",
    description:
      "On-demand alcohol ecommerce and delivery platform for Singapore, with product catalog, live chat support, and companion mobile apps.",
    techStack: ["AngularJS", "SPA"],
    liveLink: "https://alcoholdelivery.com.sg/",
  },
  {
    title: "Context Suite",
    description:
      "Marketing site for Context Suite, a data-intelligence platform that adds contextual awareness and situational intelligence to retail and demand forecasting using ML/AI. The public site presents use cases and the company; the product lives in a separate app.",
    techStack: ["Framer", "ML/AI", "SaaS"],
    liveLink: "https://contextsuite.com/",
  },
  {
    title: "Hello Ivy",
    description:
      "Marketing site for Hello Ivy, a project-management tool built for design agencies and creative teams — sharing designs, collecting feedback, managing tasks, and consolidating team communication in one place.",
    techStack: ["Framer", "SaaS"],
    liveLink: "https://helloivy.co/",
  },
  {
    title: "HireCinch",
    description:
      "Marketing site for HireCinch, an affordable, intuitive applicant tracking system (ATS) that streamlines sourcing and the hiring pipeline for recruiters and teams.",
    techStack: ["Webflow", "SaaS"],
    liveLink: "https://hirecinch.com/",
  },
  {
    title: "Onyx Data",
    description:
      "Website for Onyx Data, a Microsoft Fabric consultancy offering data strategy, acceleration, and governance (\"FabOps\") for organizations, delivered by certified Microsoft partners.",
    techStack: ["WordPress"],
    liveLink: "https://onyxdata.co.uk/",
  },
  {
    title: "Revvit",
    description:
      "Marketing site for Revvit, a wholesale used-vehicle marketplace connecting buyers and sellers with a streamlined sales process, available on desktop, iPhone, and Android.",
    techStack: ["WordPress"],
    liveLink: "https://revvit.ca/",
  },
  {
    title: "The NLS (Natural Language Search)",
    description:
      "Website for The NLS, a modern real-estate property portal for Spain's Costa del Sol, giving agents and brokerages productivity/marketing tools and access to US markets.",
    techStack: ["WordPress", "Custom Theme"],
    liveLink: "https://thenls.com/",
  },
  {
    title: "ListenWorks",
    description:
      "Website for ListenWorks, a Mumbai-based mental-health organization offering psychotherapy, counselling, and related services, with service listings and contact details.",
    techStack: ["WordPress", "Elementor"],
    liveLink: "https://listenworks.in/",
  },
  {
    title: "Dynamoney",
    description:
      "Marketing site for Dynamoney, an Australian business-finance lender offering asset finance, vehicle/equipment finance, business loans, and insurance premium funding — with separate customer and broker portals.",
    techStack: ["WordPress"],
    liveLink: "https://dynamoney.com/",
  },
  {
    title: "Moooi",
    description:
      "Ecommerce and brand site for Moooi, a Dutch luxury design house selling high-end furniture, lighting, and wallcoverings, with a strong editorial/visual presentation and full shopping/checkout.",
    techStack: ["Next.js", "Custom Commerce"],
    liveLink: "https://moooi.com/",
  },
  {
    title: "Culture Kings",
    description:
      "High-traffic streetwear ecommerce store selling apparel, sneakers, headwear, and accessories, known for an immersive, conversion-focused shopping experience.",
    techStack: ["Shopify", "Next.js"],
    liveLink: "https://culturekings.com.au/",
  },
  {
    title: "Hanacure",
    description:
      "DTC skincare ecommerce store for Hanacure, centered on its signature multi-step treatment mask, with a polished, results-driven brand presentation.",
    techStack: ["Shopify"],
    liveLink: "https://hanacure.com/",
  },
  {
    title: "Anatomie",
    description:
      "DTC ecommerce store for Anatomie, a luxury travel-clothing brand for women and men selling wrinkle-free, comfort-focused apparel, with a companion mobile app.",
    techStack: ["Shopify"],
    liveLink: "https://anatomie.com/",
  },
  {
    title: "Allbirds",
    description:
      "DTC ecommerce store for Allbirds, the sustainable footwear and apparel brand built around natural materials like merino wool and eucalyptus fiber. Large catalog with a polished, fast headless storefront.",
    techStack: ["Shopify", "Hydrogen", "React"],
    liveLink: "https://allbirds.com/",
  },
  {
    title: "Roam Around",
    description:
      "AI travel planner that generates hyper-customized, day-by-day itineraries instantly using ChatGPT, with constraint-based filters (budget, pet-friendly, kid-friendly, etc.) and companion iOS/Android apps.",
    techStack: ["React", "Next.js", "OpenAI"],
    liveLink: "https://roamaround.app/",
  },
  {
    title: "MadMuscles",
    description:
      "Personalized fitness web app that builds a tailored workout schedule from a short quiz, helping users train toward a target physique without a personal trainer.",
    techStack: ["React", "Next.js", "Sentry"],
    liveLink: "https://madmuscles.com/",
  },
  {
    title: "GoEquipMe",
    description:
      "Online marketplace for renting and listing heavy equipment and machinery, connecting owners with renters through a streamlined booking platform.",
    techStack: ["React", "SPA"],
    liveLink: "https://goequipme.com/",
  },
  {
    title: "Elephas AI",
    description:
      "AI-powered, multi-tenant marketing-automation platform for franchise brands, executing multi-channel campaigns (SMS, email, WhatsApp, Meta) with intelligent customer segmentation and real-time attribution.",
    techStack: ["React", "Next.js"],
    liveLink: "https://elephas.io/",
  },
  {
    title: "TakeBoost (BOOST)",
    description:
      "DTC ecommerce store for BOOST, an immunity gummy vitamin brand (elderberry, vitamin C, zinc), with a bold, animation-heavy marketing-driven storefront.",
    techStack: ["React", "Next.js"],
    liveLink: "https://takeboost.com/",
  },
  {
    title: "Alike (Eia)",
    description:
      "AI travel app where an \"AI travel twin\" turns saved social reels into bookable trips — hotels, experiences, visas — in one place, and lets users earn from shared itineraries.",
    techStack: ["React", "Next.js", "Directus"],
    liveLink: "https://alike.io/",
  }
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero Section ── */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <span
          className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-8"
          style={{
            backgroundColor: "var(--hero-badge-bg)",
            color: "var(--hero-badge-text)",
          }}
        >
          Selected Work
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight mb-6">
          Building Products That Scale
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
          With 10+ projects shipped across industries like travel, healthcare,
          SaaS, and e-commerce, I specialize in turning complex requirements
          into seamless digital experiences. Whether it's a CRM, marketplace,
          mobile app, or AI-powered platform — I bring the full stack to the table.
        </p>

        <div className="mt-14 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-border" />
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Projects
          </span>
          <div className="h-px w-16 bg-border" />
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section
        aria-label="Project showcase"
        className="max-w-6xl mx-auto px-6 pb-28"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
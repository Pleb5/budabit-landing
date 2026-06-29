import { useSeoMeta } from "@unhead/react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ExternalLink,
  GitBranch,
  MessageSquare,
  Search,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BUDABIT_COMMUNITY_URL } from "@/components/landing/constants";

type GuideCard = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const onboardingSteps: GuideCard[] = [
  {
    icon: ExternalLink,
    title: "1. Visit budabit.club",
    body: "Open the app and browse developer communities. Public rooms, community curations, goals, and widgets can be explored before you decide where to participate.",
  },
  {
    icon: Users,
    title: "2. Sign in with Nostr",
    body: "Use a Nostr key when you want to post, request access, create a community, or curate software. Your identity signs the actions you take.",
  },
  {
    icon: MessageSquare,
    title: "3. Create or enter a community",
    body: "Communities are identified by pubkeys, not relay URLs. Add rooms, describe the community, choose sections, and invite the people who should help shape it.",
  },
  {
    icon: GitBranch,
    title: "4. Curate software context",
    body: "Curate important knowledge so members can discover the work and context that matter to the community.",
  },
];

const communitySetupCards: GuideCard[] = [
  {
    icon: ShieldCheck,
    title: "Grant content-based permissions",
    body: "Let people request specific capabilities such as writing in rooms, publishing curations, reacting, labeling, or managing widgets.",
  },
  {
    icon: Users,
    title: "Delegate moderation",
    body: "Moderators can create application forms, grant or reject access, and moderate content within the sections they are trusted to manage.",
  },
  {
    icon: Search,
    title: "Build community curations",
    body: "Create curated collections instead of scattering recommendations across chats, docs, and private bookmarks.",
  },
  {
    icon: Server,
    title: "Add infrastructure later",
    body: "Running a Nostr relay or Blossom media server is optional. Add them when your community wants stronger mirroring, persistence, or media durability.",
  },
];

const optionalInfrastructure = [
  "Run one or more relays to strengthen community redundancy and reduce dependence on any single operator.",
  "Add Blossom media servers so important images and files can be mirrored by community infrastructure.",
];

export default function QuickStart() {
  const title = "BudaBit Quick Start - Explore Open-Protocol Development";
  const description =
    "Start with budabit.club: explore or create developer communities, curate important knowledge, grant permissions, and optionally add relay or Blossom infrastructure later.";

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: "website",
    ogUrl: "https://budabit.org/quick-start",
    ogImage: "https://budabit.org/images/budabit-logo.svg",
    ogImageAlt: "BudaBit logo and brand mark",
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: "summary",
    twitterImage: "https://budabit.org/images/budabit-logo.svg",
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="relative pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute right-0 top-44 h-[300px] w-[420px] rounded-full bg-secondary/8 blur-[110px]" />
        </div>

        <div className="container mx-auto px-6">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </a>

          <section className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
              Explore or create a developer community on budabit.club.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-pretty text-base text-muted-foreground md:text-lg">
              No setup manual is needed to begin. BudaBit starts as a community
              network: enter the app and start connecting, curating, and
              discussing.
            </p>
          </section>

          <section className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2">
            {onboardingSteps.map((step) => (
              <article
                key={step.title}
                className="min-w-0 rounded-2xl border border-border/60 bg-card/75 p-6 shadow-xl shadow-black/20 backdrop-blur-sm"
              >
                <step.icon className="mb-4 h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">{step.title}</h2>
                <p className="mt-3 break-words text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </article>
            ))}
          </section>

          <section className="mx-auto mt-14 max-w-6xl">
            <div className="mb-6 max-w-3xl">
              <p className="text-sm font-mono uppercase tracking-[0.18em] text-primary">
                Community setup
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Shape the community before thinking about infrastructure.
              </h2>
              <p className="mt-4 text-muted-foreground">
                The first decisions are social and editorial: what your
                community curates, who can publish in each section, and which
                moderators can help keep the signal high.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {communitySetupCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm"
                >
                  <card.icon className="mb-4 h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="optional-infrastructure"
            className="mx-auto mt-14 max-w-6xl rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-mono uppercase tracking-[0.18em] text-primary">
                  Optional infrastructure
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                  Add relays and media servers when your community needs them.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  You do not need to run infrastructure to start. Communities
                  can grow on public relays first, then add your own
                  infrastructure for more independece as you go.
                </p>
              </div>

              <div className="space-y-3">
                {optionalInfrastructure.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/60 p-4"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-10 flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-2xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              <a
                href={BUDABIT_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit budabit.club
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

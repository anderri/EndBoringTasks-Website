import Link from "next/link";
import { ArrowRight, Zap, Workflow, Clock, LineChart, Shield } from "lucide-react";
import { site } from "@/config/site";

export default function HomePage() {
  return (
    <main>
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-avant font-bold tracking-tight text-xl">
            End Boring Tasks
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/services" className="hover:opacity-80">Services</Link>
            <Link href="/industries" className="hover:opacity-80">Industries</Link>
            <Link href="/case-studies" className="hover:opacity-80">Case Studies</Link>
            <Link href="/about" className="hover:opacity-80">About</Link>
            <Link href="/contact" className="inline-flex items-center gap-1 rounded-lg bg-brand-blue px-3 py-1.5 font-medium text-white hover:brightness-105">
              Book a call <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="font-avant font-bold text-5xl leading-tight tracking-tight">
              Automations that save hours every week
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              We integrate your tools and build reliable automations so your team can scale—without more busywork.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-xl bg-brand-blue px-5 py-3 text-white font-medium hover:brightness-105">
                Book a call
              </Link>
              <Link href="/services" className="rounded-xl border border-neutral-200 px-5 py-3 font-medium hover:bg-neutral-50">
                See solutions
              </Link>
            </div>
            <div className="mt-6 text-sm text-neutral-600">
              Make.com Certified • n8n Specialist • 20+ yrs in IT • LJ Hooker Group experience
            </div>
          </div>
          <div className="rounded-2xl border bg-neutral-50 p-6">
            <div className="grid grid-cols-2 gap-4">
              <Feature icon={<Zap className='h-5 w-5' />} title="Faster response" desc="Lead time: days → minutes" />
              <Feature icon={<Workflow className='h-5 w-5' />} title="Fewer handoffs" desc="Automated, consistent flows" />
              <Feature icon={<Clock className='h-5 w-5' />} title="Hours saved" desc="10+ hrs/week back" />
              <Feature icon={<Shield className='h-5 w-5' />} title="Reliable" desc="Runs for months" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-avant font-bold text-3xl">What we automate</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border bg-white p-5">
                <div className="text-brand-magenta">{s.icon}</div>
                <h3 className="mt-3 font-avant font-semibold text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 font-medium text-brand-blue hover:underline">
              Explore services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {site.name}. {site.tagline}</div>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border p-4 bg-white">
      <div className="flex items-center gap-2">{icon}<span className="font-medium">{title}</span></div>
      <p className="mt-1 text-sm text-neutral-700">{desc}</p>
    </div>
  );
}

const services = [
  { title: "Sales & CRM Automations", desc: "HubSpot, Salesforce, lead routing, follow-ups.", icon: <LineChart className="h-5 w-5" /> },
  { title: "Back-Office Integrations", desc: "NetSuite, Google Workspace, CSV/Docs.", icon: <Workflow className="h-5 w-5" /> },
  { title: "User Provisioning & SSO", desc: "Auth0/Okta/SCIM, onboarding/offboarding.", icon: <Shield className="h-5 w-5" /> },
  { title: "Data Pipelines & Reports", desc: "Automated reporting and sync jobs.", icon: <Clock className="h-5 w-5" /> }
]

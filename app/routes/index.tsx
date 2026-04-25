import {
  ArrowDownIcon,
  BotIcon,
  ChevronRightIcon,
  CreditCardIcon,
  DatabaseIcon,
  LockIcon,
  MailIcon,
  UploadIcon,
} from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* ========== DELETE THIS SECTION WHEN READY ========== */}
      <section className="border-b border-success/20 bg-success/10 py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <PingDot />
            <span className="text-xl font-bold text-success">You're Live!</span>
          </div>
          <p className="text-success">
            Your app is deployed and running. Now make it yours.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuickStep label="1. Open" code="app/routes/index.tsx" />
            <QuickStep label="2. Delete this section" arrow />
            <QuickStep label="3. Edit everything below" arrow />
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center px-6">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 badge gap-2 badge-outline border-base-300 px-4 py-3 backdrop-blur-sm">
            <PingDot className="size-1.5" />
            Built with Gista.js
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Your AI writes the code.
            <br />
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              You ship the product.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-balance text-base-content/70 sm:text-xl">
            Build real software without being an engineer. From vibe to live,
            lightspeed.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="btn shadow-lg btn-lg btn-primary">
              Get Started
            </button>
            <button className="btn btn-ghost btn-lg">
              See How It Works
              <ChevronRightIcon className="size-4" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce text-base-content/30">
          <ArrowDownIcon className="size-6" />
        </div>
      </section>

      {/* Features */}
      <section className="bg-base-200/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="mb-4 badge badge-outline badge-primary">
              What You Get
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ship real software from day one
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
              Everything wired up. No setup headaches. Start building features,
              not fighting config.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <span className="mb-4 badge badge-outline badge-secondary">
              How it works
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              From idea to live in minutes
            </h2>
          </div>

          <div className="mt-16 space-y-12">
            <Step
              number={1}
              title="Use This Template"
              description="Click 'Use this template' on GitHub, import to Vercel. Your app is live before you write a line of code."
            />
            <Step
              number={2}
              title="Tell Your AI What to Build"
              description="Open in Cursor or VS Code with Claude. Describe what you want. Watch it appear."
            />
            <Step
              number={3}
              title="Push and Ship"
              description="Every git push auto-deploys. Your users see changes in seconds."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-primary to-secondary py-24 text-primary-content">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to build your thing?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-content/80">
            You came to ship. Let's make it happen.
          </p>

          <div className="mx-auto mt-10 flex max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input flex-1 bg-white/10 text-primary-content placeholder:text-primary-content/50"
            />
            <button
              type="button"
              className="btn border-white/20 bg-white/10 text-primary-content hover:bg-white/20"
            >
              Get Early Access
            </button>
          </div>

          <p className="mt-4 text-sm text-primary-content/60">
            $0 to start. Scale when you're ready.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-base-200 py-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-primary"></div>
            <span className="font-semibold">Your Product</span>
          </div>

          <p className="text-sm text-base-content/60">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

const Features = [
  {
    icon: LockIcon,
    color: 'text-primary',
    title: 'Login Ready',
    description:
      'Signup, login, password reset — already wired. Add Google login with one config change.',
  },
  {
    icon: DatabaseIcon,
    color: 'text-secondary',
    title: 'Database Included',
    description:
      'SQLite locally, Turso in production. No Docker, no setup. Just works.',
  },
  {
    icon: MailIcon,
    color: 'text-accent',
    title: 'Beautiful Emails',
    description:
      'Welcome emails, password recovery, notifications. Swap providers anytime.',
  },
  {
    icon: BotIcon,
    color: 'text-info',
    title: 'AI Superpowers',
    description:
      'Streaming, reasoning, web search, tool calls. Your AI assistant is ready to help.',
  },
  {
    icon: CreditCardIcon,
    color: 'text-success',
    title: 'Payments Wired',
    description:
      "Subscriptions, one-time payments, webhooks. Start charging when you're ready.",
  },
  {
    icon: UploadIcon,
    color: 'text-warning',
    title: 'File Uploads',
    description:
      'Images, PDFs, CSVs — drag, drop, done. S3 or Cloudflare R2 ready.',
  },
]

function FeatureCard({ icon: Icon, color, title, description }) {
  return (
    <div className="card bg-base-100 shadow-sm transition-shadow hover:-translate-y-1 hover:shadow-xl">
      <div className="card-body">
        <Icon className={`mb-2 size-8 ${color}`} />
        <h3 className="card-title text-lg">{title}</h3>
        <p className="text-base-content/70">{description}</p>
      </div>
    </div>
  )
}

function Step({ number, title, description }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-content">
          {number}
        </div>
        {number < 3 && <div className="mt-4 h-full w-px bg-base-300"></div>}
      </div>
      <div className="pb-8">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-base-content/70">{description}</p>
      </div>
    </div>
  )
}

type QuickStepProps = { label: string; code?: string; arrow?: boolean }

function QuickStep({ label, code, arrow }: QuickStepProps) {
  return (
    <>
      {arrow && <span className="hidden text-base-content/30 sm:block">→</span>}
      <div className="flex items-center gap-2 rounded-lg bg-base-100 px-3 py-1.5 text-sm text-base-content/70 shadow-sm">
        {label}
        {code && (
          <code className="rounded bg-base-200 px-2 py-0.5 font-mono">
            {code}
          </code>
        )}
      </div>
    </>
  )
}

function PingDot({ className = '' }: { className?: string }) {
  return (
    <div className="inline-grid *:[grid-area:1/1]">
      <div
        className={`status animate-ping status-success [animation-duration:1.5s] ${className}`}
      ></div>
      <div className={`status status-success ${className}`}></div>
    </div>
  )
}

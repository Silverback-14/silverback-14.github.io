import { ASCII_NAME } from '../../data/ascii';

export function WelcomeSection() {
  return (
    <div className="mb-4">
      {/* Name banner */}
      <pre className="text-accent font-bold text-xs sm:text-sm leading-tight whitespace-pre overflow-x-auto mb-6">
        {ASCII_NAME}
      </pre>

      <div className="border border-dashed border-border/60 rounded-md p-4 sm:p-5">
        {/* Identity */}
        <div className="mb-5">
          <div className="text-foreground font-bold text-base mb-1.5">Welcome, visitor.</div>
          <div className="text-foreground text-sm">
            Ananthram V &mdash; Deployment Engineer @{' '}
            <span className="text-accent font-bold">Avoca AI (YC W23)</span>
          </div>
          <div className="text-dim text-sm mt-0.5">
            Bangalore, India &bull; Remote &bull;{' '}
            <a
              href="mailto:ananthram1411@gmail.com"
              className="text-accent hover:text-accent-bright transition-colors"
            >
              ananthram1411@gmail.com
            </a>
          </div>
        </div>

        {/* Capabilities + Navigation */}
        <div className="border-t border-dashed border-border/40 pt-5 flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="flex-1 min-w-0">
            <div className="text-accent font-bold text-base mb-2">Capabilities</div>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
              <span className="text-accent font-bold">Deploy</span>
              <span className="text-foreground">AI Voice Agents, LLM Workflows</span>
              <span className="text-accent font-bold">Build</span>
              <span className="text-foreground">TypeScript, React, Next.js, APIs</span>
              <span className="text-accent font-bold">Scale</span>
              <span className="text-foreground">Kafka, Flink, Redis, PostgreSQL</span>
              <span className="text-accent font-bold">Ship</span>
              <span className="text-foreground">Supabase, Vercel, AWS, StarRocks</span>
            </div>
          </div>

          <div className="md:w-52 shrink-0">
            <div className="text-accent font-bold text-base mb-2">Navigation</div>
            <div className="text-sm space-y-0.5">
              <div className="text-foreground">/about</div>
              <div className="text-foreground">/experience</div>
              <div className="text-foreground">/skills</div>
              <div className="text-foreground">/work</div>
              <div className="text-dim">... /help for all commands</div>
              <div className="text-dim mt-1">Try /themes to change the vibe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

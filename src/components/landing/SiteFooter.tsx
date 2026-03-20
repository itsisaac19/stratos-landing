export default function SiteFooter() {
  return (
    <footer className="relative z-10 bg-[#050607] px-6 py-12 md:px-10 lg:px-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-5xl flex-col gap-6 text-[11px] text-stratos-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Stratos</p>
        <p className="flex flex-wrap gap-x-3 gap-y-1">
          <a
            href="https://www.linkedin.com/company/getstratos"
            className="transition hover:text-stratos-secondary focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-stratos-accent/80"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span aria-hidden="true" className="text-stratos-border">
            ·
          </span>
          <a
            href="#"
            className="transition hover:text-stratos-secondary focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-stratos-accent/80"
          >
            Terms
          </a>
          <span aria-hidden="true" className="text-stratos-border">
            ·
          </span>
          <a
            href="#"
            className="transition hover:text-stratos-secondary focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-stratos-accent/80"
          >
            Privacy
          </a>
        </p>
      </div>
    </footer>
  );
}

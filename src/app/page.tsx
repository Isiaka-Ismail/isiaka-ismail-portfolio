import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
        id="home"
        className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white sm:py-24 lg:min-h-[92vh] lg:py-24"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.08),transparent_25%)]" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* =========================================================
              MOBILE / TABLET ROLE LABEL
              ========================================================= */}
          <div className="mb-8 lg:hidden">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
              DevOps & Cloud Engineer
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_430px] lg:gap-20">

            {/* =========================================================
                HERO CONTENT
                ========================================================= */}
            <div className="order-2 max-w-2xl lg:order-1">

              {/* Desktop role label */}
              <div className="mb-6 hidden items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-blue-300 lg:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                DevOps & Cloud Engineer
              </div>

              {/* Name */}
              <p className="text-lg font-medium text-slate-300 sm:text-xl">
                Hi, I'm{" "}
                <span className="font-semibold text-white">
                  Isiaka Ismail.
                </span>
              </p>

              {/* Main headline */}
              <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Building infrastructure
                <span className="block text-blue-400">
                  that keeps systems moving.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I build, automate, and secure reliable cloud infrastructure and
                deployment workflows using modern DevOps practices.
              </p>

              {/* CTA buttons */}
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/20"
                >
                  Explore My Work
                </a>

                <a
                  href="#contact"
                  className="rounded-lg border border-slate-700 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-white/[0.05]"
                >
                  Get In Touch
                </a>
              </div>

              {/* Technology signals */}
              <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-5">
                {["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD"].map(
                  (technology) => (
                    <div
                      key={technology}
                      className="rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-3 text-center text-xs font-medium text-slate-400 backdrop-blur transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-300"
                    >
                      {technology}
                    </div>
                  ),
                )}
              </div>

              {/* Scroll indicator */}
              <div className="mt-10 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-600 sm:flex">
                <span className="h-px w-10 bg-slate-700" />
                Scroll to explore
              </div>
            </div>

            {/* =========================================================
                PROFILE IMAGE
                ========================================================= */}
            <div className="order-1 mx-auto w-full max-w-[300px] sm:max-w-[350px] lg:order-2 lg:max-w-[430px]">

              <div className="relative">

                {/* Glow */}
                <div className="absolute -inset-6 rounded-[3rem] bg-blue-600/10 blur-3xl sm:-inset-8" />

                {/* Image frame */}
                <div className="relative rounded-[1.75rem] border border-slate-700/80 bg-slate-900/70 p-2.5 shadow-2xl backdrop-blur sm:rounded-[2rem] sm:p-3">
                  <div className="relative overflow-hidden rounded-[1.35rem] sm:rounded-[1.5rem]">
                    <img
                      src="/profile.jpeg"
                      alt="Isiaka Ismail"
                      className="aspect-[4/5] w-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                  </div>
                </div>

                {/* AWS */}
                <div className="absolute -left-2 top-8 hidden rounded-xl border border-slate-700 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur sm:block sm:-left-8 sm:top-14">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">
                    Cloud
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    AWS
                  </p>
                </div>

                {/* Terraform */}
                <div className="absolute -right-2 top-20 hidden rounded-xl border border-slate-700 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur sm:block sm:-right-8 sm:top-28">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">
                    IaC
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Terraform
                  </p>
                </div>

                {/* Kubernetes */}
                <div className="absolute -left-2 bottom-16 hidden rounded-xl border border-slate-700 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur sm:block sm:-left-8 sm:bottom-20">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">
                    Orchestration
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Kubernetes
                  </p>
                </div>

                {/* Status */}
                <div className="absolute -right-2 bottom-8 hidden rounded-xl border border-blue-400/20 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur sm:block sm:-right-8 sm:bottom-10">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                    <span className="text-xs font-semibold text-slate-200">
                      Building & Automating
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

        <section id="about" className="relative overflow-hidden bg-white px-6 py-24 sm:py-28">
          {/* Subtle background glow */}
          <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            {/* Section heading */}
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                About Me
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Building systems that work
                <span className="block text-blue-600">
                  beyond the demo.
                </span>
              </h2>
            </div>

            {/* Main content */}
            <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

              {/* About text */}
              <div className="space-y-6">
                <p className="text-lg leading-8 text-slate-600">
                  I'm Isiaka Ismail, a DevOps and Cloud Engineer focused on building
                  reliable infrastructure, automating deployment workflows, and
                  improving the way applications are delivered and operated.
                </p>

                <p className="text-lg leading-8 text-slate-600">
                  My work spans cloud infrastructure, Infrastructure as Code,
                  containerization, CI/CD, Linux systems, and Kubernetes. I enjoy
                  taking infrastructure from manual and fragmented processes to
                  systems that are reproducible, observable, and easier to maintain.
                </p>

                <p className="text-lg leading-8 text-slate-600">
                  I'm particularly interested in cloud architecture, automation,
                  security, reliability, and the engineering practices that make
                  systems easier to operate at scale.
                </p>

                {/* Small engineering statement */}
                <div className="border-l-2 border-blue-600 pl-5 pt-2">
                  <p className="text-base font-medium leading-7 text-slate-800">
                    My approach is simple: understand the system, automate what can
                    be automated, and build infrastructure that can be trusted.
                  </p>
                </div>
              </div>

              {/* Engineering profile card */}
              <div className="relative">

                {/* Glow */}
                <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-7 text-white shadow-2xl sm:p-8">

                  {/* Decorative grid */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  <div className="relative">

                    {/* Card header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                          Engineering Focus
                        </p>

                        <h3 className="mt-2 text-2xl font-bold">
                          What I work with
                        </h3>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-blue-400">
                        <span className="text-lg">⌘</span>
                      </div>
                    </div>

                    {/* Focus items */}
                    <div className="mt-8 space-y-3">

                      {/* Cloud */}
                      <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition duration-300 hover:border-blue-500/30 hover:bg-slate-900">
                        <div className="flex items-center gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                            ☁
                          </div>

                          <div>
                            <p className="font-semibold text-white">
                              Cloud Infrastructure
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                              AWS · VPC · EC2 · ECS · RDS · S3
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Automation */}
                      <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition duration-300 hover:border-blue-500/30 hover:bg-slate-900">
                        <div className="flex items-center gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                            ⚙
                          </div>

                          <div>
                            <p className="font-semibold text-white">
                              Automation & IaC
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                              Terraform · Bash · Python · GitHub Actions
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Containers */}
                      <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition duration-300 hover:border-blue-500/30 hover:bg-slate-900">
                        <div className="flex items-center gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                            ◈
                          </div>

                          <div>
                            <p className="font-semibold text-white">
                              Containers & Orchestration
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                              Docker · Kubernetes · EKS · ECS
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Reliability */}
                      <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition duration-300 hover:border-blue-500/30 hover:bg-slate-900">
                        <div className="flex items-center gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                            ◉
                          </div>

                          <div>
                            <p className="font-semibold text-white">
                              Reliability & Security
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                              Linux · Networking · Monitoring · Security
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Bottom status */}
                    <div className="mt-7 flex items-center gap-3 border-t border-slate-800 pt-6">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                        Continuously building
                      </p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section
          id="skills"
          className="relative overflow-hidden bg-slate-50 px-6 py-24 sm:py-28"
        >
          {/* Background details */}
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            {/* Heading */}
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Technical Skills
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                The tools behind
                <span className="block text-blue-600">
                  the infrastructure.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                A practical toolkit built through cloud projects, infrastructure
                automation, system administration, containerization, and deployment
                workflows.
              </p>
            </div>

            {/* Skills grid */}
            <div className="mt-14 grid gap-5 md:grid-cols-2">

              {/* Cloud */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl transition group-hover:bg-blue-500/10" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                      ☁
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      01
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    Cloud & Infrastructure
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Designing and working with cloud infrastructure, networking,
                    compute, storage, databases, and managed AWS services.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "AWS",
                      "EC2",
                      "VPC",
                      "IAM",
                      "ECS",
                      "RDS",
                      "S3",
                      "CloudWatch",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Infrastructure as Code & Automation */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl transition group-hover:bg-blue-500/10" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                      ⚙
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      02
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    Infrastructure as Code & Automation
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Turning infrastructure and repetitive operational tasks into
                    reproducible, automated workflows.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Terraform",
                      "Git",
                      "GitHub Actions",
                      "Bash",
                      "Python",
                      "CI/CD",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Containers */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl transition group-hover:bg-blue-500/10" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                      ◈
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      03
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    Containers & Orchestration
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Packaging applications, managing containers, and working with
                    orchestration platforms for scalable application delivery.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Docker",
                      "Kubernetes",
                      "Amazon EKS",
                      "Amazon ECS",
                      "Docker Compose",
                      "Nginx",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Systems & Reliability */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl transition group-hover:bg-blue-500/10" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                      ◉
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      04
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    Systems, Security & Reliability
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Working with Linux systems, networking, secure access, monitoring,
                    troubleshooting, and operational reliability.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Linux",
                      "Networking",
                      "SSH",
                      "SSL/TLS",
                      "Monitoring",
                      "Security",
                      "Troubleshooting",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom technology strip */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-900 px-6 py-5 shadow-sm sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                    Core Stack
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Technologies I use across my infrastructure projects
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["AWS", "Terraform", "Docker", "Kubernetes", "Linux", "Git"].map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-medium text-slate-300"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>

              </div>
            </div>

          </div>
        </section>

        <section
          id="projects"
          className="relative overflow-hidden bg-white px-6 py-24 sm:py-28"
        >
          {/* Background detail */}
          <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            {/* Section heading */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Featured Projects
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Infrastructure built
                  <span className="block text-blue-600">
                    through real projects.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  A selection of hands-on work across cloud architecture,
                  infrastructure automation, CI/CD, containers, and Linux systems.
                </p>
              </div>

              <div className="hidden lg:block">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Selected Work / 2026
                </span>
              </div>
            </div>

            {/* Featured project */}
            <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl">

              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

                {/* Project visual */}
                <div className="relative min-h-[360px] overflow-hidden bg-slate-900 lg:min-h-[520px]">

                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
                      backgroundSize: "42px 42px",
                    }}
                  />

                  {/* Glow */}
                  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />

                  {/* Architecture visual */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">

                    <div className="w-full max-w-md">

                      {/* Top layer */}
                      <div className="flex justify-center">
                        <div className="rounded-xl border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-center shadow-lg shadow-blue-950/30">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-blue-300">
                            Traffic
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            Global Accelerator
                          </p>
                        </div>
                      </div>

                      {/* Connection */}
                      <div className="mx-auto h-8 w-px bg-slate-700" />

                      {/* Load balancer */}
                      <div className="flex justify-center">
                        <div className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-center">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                            Load Balancing
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            Application Load Balancer
                          </p>
                        </div>
                      </div>

                      {/* Connections */}
                      <div className="relative mx-auto h-12 w-2/3">
                        <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-slate-700" />
                        <div className="absolute left-0 right-0 top-6 h-px bg-slate-700" />
                        <div className="absolute left-0 top-6 h-6 w-px bg-slate-700" />
                        <div className="absolute right-0 top-6 h-6 w-px bg-slate-700" />
                      </div>

                      {/* Compute layer */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-slate-700 bg-slate-800/90 p-4 text-center">
                          <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                            Compute
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            ECS Fargate
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            AZ 01
                          </p>
                        </div>

                        <div className="rounded-xl border border-slate-700 bg-slate-800/90 p-4 text-center">
                          <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                            Compute
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            ECS Fargate
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            AZ 02
                          </p>
                        </div>
                      </div>

                      {/* Database layer */}
                      <div className="mx-auto h-8 w-px bg-slate-700" />

                      <div className="flex justify-center">
                        <div className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 text-center">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                            Data
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            Aurora PostgreSQL
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Project label */}
                  <div className="absolute left-6 top-6 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 backdrop-blur">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">
                      Cloud Architecture
                    </span>
                  </div>

                </div>

                {/* Featured project information */}
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">

                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                      Featured Project
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    AWS High-Availability
                    <span className="block text-slate-400">
                      Architecture
                    </span>
                  </h3>

                  <p className="mt-6 leading-8 text-slate-300">
                    A production-oriented AWS architecture designed around
                    availability, scalability, security, and operational reliability.
                    The infrastructure is defined using Terraform and spans multiple
                    AWS services.
                  </p>

                  {/* Technology list */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {[
                      "AWS",
                      "Terraform",
                      "ECS Fargate",
                      "ALB",
                      "Aurora",
                      "Redis",
                    ].map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Key characteristics */}
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800 pt-7">
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                        Infrastructure
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-200">
                        Terraform
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                        Architecture
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-200">
                        Multi-AZ
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                        Focus
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-200">
                        High Availability
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                        Operations
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-200">
                        Monitoring
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-9">
                    <Link
                      href="/projects/aws-high-availability"
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
                    >
                      View Case Study
                      <span>→</span>
                    </Link>
                  </div>

                </div>
              </div>
            </div>

            {/* Supporting projects */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">

              {/* TradeCore */}
              <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

                {/* Visual */}
                <div className="relative h-56 overflow-hidden bg-slate-950">

                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center px-8">

                    <div className="flex w-full max-w-md items-center justify-between">

                      <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-center">
                        <p className="text-[9px] uppercase tracking-widest text-slate-500">
                          Source
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white">
                          GitHub
                        </p>
                      </div>

                      <div className="h-px flex-1 bg-slate-700" />

                      <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-center">
                        <p className="text-[9px] uppercase tracking-widest text-blue-400">
                          CI
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white">
                          Actions
                        </p>
                      </div>

                      <div className="h-px flex-1 bg-slate-700" />

                      <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-center">
                        <p className="text-[9px] uppercase tracking-widest text-slate-500">
                          Scan
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white">
                          Trivy
                        </p>
                      </div>

                      <div className="h-px flex-1 bg-slate-700" />

                      <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-center">
                        <p className="text-[9px] uppercase tracking-widest text-slate-500">
                          Deploy
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white">
                          ECS
                        </p>
                      </div>

                    </div>
                  </div>

                  <div className="absolute left-5 top-5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 backdrop-blur">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-300">
                      CI/CD
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    CI/CD & Containers
                  </p>

                  <h3 className="text-xl font-bold text-slate-900">
                    TradeCore FinOps
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    A budget-conscious AWS deployment combining containerized application
                    delivery, security controls, automated CI/CD, observability, and cost
                    governance.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["GitHub Actions", "Docker", "Trivy", "ECR", "ECS"].map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>

                  <div className="mt-7">
                    <Link
                      href="/projects/tradecore-finops"
                      className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </article>

              {/* HNG */}
              <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

                {/* Visual */}
                <div className="relative h-56 overflow-hidden bg-slate-950">

                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="relative h-32 w-64">

                      <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-center">
                        <p className="text-[9px] uppercase tracking-widest text-slate-500">
                          Web Server
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white">
                          Nginx
                        </p>
                      </div>

                      <div className="absolute left-1/2 top-14 h-7 w-px -translate-x-1/2 bg-slate-700" />

                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-center">
                        <p className="text-[9px] uppercase tracking-widest text-blue-400">
                          Application
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white">
                          EC2 + PM2
                        </p>
                      </div>

                      <div className="absolute bottom-3 left-0 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2">
                        <p className="text-[9px] uppercase tracking-widest text-slate-500">
                          Security
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white">
                          SSH
                        </p>
                      </div>

                      <div className="absolute bottom-3 right-0 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2">
                        <p className="text-[9px] uppercase tracking-widest text-slate-500">
                          Transport
                        </p>
                        <p className="mt-1 text-xs font-semibold text-white">
                          HTTPS
                        </p>
                      </div>

                    </div>
                  </div>

                  <div className="absolute left-5 top-5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 backdrop-blur">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-300">
                      Infrastructure
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    Cloud Infrastructure
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                    HNG DevOps Infrastructure
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    AWS EC2 deployment with Linux hardening, Nginx reverse proxy,
                    HTTPS, firewall configuration, SSH security, and process
                    management.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["EC2", "Linux", "Nginx", "PM2", "UFW", "HTTPS"].map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>

                  <div className="mt-7">
                    <Link
                      href="/projects/hng-devops-infrastructure"
                      className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </article>

            </div>

            {/* Project philosophy */}
            <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-6 text-slate-500">
                Each project is documented around the problem, architecture,
                implementation, security considerations, challenges, and outcome.
              </p>

              <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Build → Automate → Secure → Operate
              </span>
            </div>

          </div>
        </section>

        
      <section
          id="experience"
          className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-28"
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="relative mx-auto max-w-7xl">
            {/* Heading */}
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Experience & Journey
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                From IT foundations to
                <span className="block text-blue-400">
                  cloud engineering.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                A journey shaped by technical problem-solving, hands-on projects,
                infrastructure automation, and continuous learning.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-16 grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
              {/* Left-side label */}
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
                    Current Focus
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Learning by building.
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  Developing practical skills through real infrastructure tasks,
                  deployment workflows, and cloud projects.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Build", "Automate", "Secure", "Operate"].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline entries */}
              <div className="relative border-l border-slate-800 pl-7 sm:pl-10">
                {/* Entry 1 */}
                <article className="relative pb-12">
                  <span className="absolute -left-[35px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-4 border-slate-950 bg-blue-400 ring-4 ring-blue-400/10 sm:-left-[48px]" />

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
                    2026 — Present
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    DevOps & Cloud Engineering
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                    Building hands-on experience with AWS infrastructure, Terraform,
                    Docker, Kubernetes, CI/CD pipelines, Linux administration,
                    cloud security, and automation.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </article>

                {/* Entry 2 */}
                <article className="relative pb-12">
                  <span className="absolute -left-[35px] top-1 h-4 w-4 rounded-full border-4 border-slate-950 bg-slate-500 sm:-left-[48px]" />

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Earlier Technical Experience
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    IT & Technical Projects
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                    Developed practical experience through networking, system
                    administration, troubleshooting, web technologies, and technical
                    projects involving real computing environments.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Networking", "Linux", "System Administration", "Troubleshooting"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </article>

                {/* Entry 3 */}
                <article className="relative">
                  <span className="absolute -left-[35px] top-1 h-4 w-4 rounded-full border-4 border-slate-950 bg-slate-500 sm:-left-[48px]" />

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Education
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    B.Sc. Information Technology
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                    University of Ilorin. Building a foundation in information
                    technology, computing systems, networking, and practical
                    technical problem-solving.
                  </p>
                </article>
              </div>
            </div>

            {/* Closing strip */}
            <div className="mt-16 flex flex-col gap-3 border-t border-slate-800 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-400">
                Focused on turning technical knowledge into practical engineering work.
              </p>

              <a
                href="#projects"
                className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
              >
                Explore the projects →
              </a>
            </div>
          </div>
        </section>

        
        <section
          id="certifications"
          className="relative overflow-hidden bg-white px-6 py-24 sm:py-28"
        >
          <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            {/* Heading */}
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Certifications & Learning
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Building knowledge.
                <span className="block text-blue-600">
                  Applying it in practice.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Developing cloud expertise through structured learning,
                certification, and hands-on infrastructure projects.
              </p>
            </div>

            {/* Certification cards */}
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {/* Completed */}
              <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-9">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/5 blur-2xl" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-2xl font-bold text-orange-600">
                      AWS
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Certified
                    </span>
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    Amazon Web Services
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                    AWS Certified Cloud Practitioner
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Foundational knowledge of AWS cloud concepts, core services,
                    security, pricing, and the shared responsibility model.
                  </p>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <p className="text-sm font-medium text-slate-500">
                      Status
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      Successfully achieved
                    </p>
                  </div>
                </div>
              </article>

              {/* In progress */}
              <article className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-7 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 sm:p-9">
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-600/15 blur-3xl" />

                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl font-bold text-blue-400">
                      AWS
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      In Progress
                    </span>
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                    Amazon Web Services
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight">
                    AWS Certified Solutions Architect – Associate
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    Preparing to deepen my knowledge of secure, resilient,
                    high-performing, and cost-aware cloud architecture.
                  </p>

                  <div className="mt-8 border-t border-slate-800 pt-5">
                    <p className="text-sm font-medium text-slate-500">
                      Current focus
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-200">
                      Architecture & hands-on AWS projects
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Supporting statement */}
            <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Learning beyond the certificate
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Applying concepts through Terraform, AWS architecture,
                  containerization, and deployment automation projects.
                </p>
              </div>

              <a
                href="#projects"
                className="shrink-0 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
              >
                See project work →
              </a>
            </div>
          </div>
        </section>

        
        <section
          id="contact"
          className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-28"
        >
          {/* Ambient glow */}
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              {/* Main message */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                    Contact
                  </span>
                </div>

                <h2 className="mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Have a project or
                  <span className="block text-blue-400">
                    opportunity in mind?
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                  I'm open to DevOps and Cloud Engineering opportunities,
                  infrastructure projects, automation work, and technical
                  collaborations.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="mailto:digitalistismail@gmail.com"
                    className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
                  >
                    Send Me an Email
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="#projects"
                    className="inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-white/[0.02] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:border-slate-500 hover:bg-white/[0.05]"
                  >
                    Explore My Work
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>

              {/* Contact details card */}
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-blue-500/10 blur-2xl" />

                <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-7 shadow-2xl backdrop-blur sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Connect with me
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    Isiaka Ismail
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    DevOps & Cloud Engineer
                  </p>

                  <div className="my-7 border-t border-slate-800" />

                  {/* Email */}
                  <a
                    href="mailto:digitalistismail@gmail.com"
                    className="group flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-lg text-blue-400">
                      @
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">
                        Email
                      </p>
                      <p className="mt-1 break-all text-sm font-medium text-slate-200 transition group-hover:text-blue-300">
                        digitalistismail@gmail.com
                      </p>
                    </div>

                    <span className="ml-auto text-slate-600 transition group-hover:text-blue-400">
                      ↗
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/IsiakaOladayo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-sm font-bold text-white">
                      GH
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        GitHub
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-200 transition group-hover:text-blue-300">
                        View my repositories
                      </p>
                    </div>

                    <span className="ml-auto text-slate-600 transition group-hover:text-blue-400">
                      ↗
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://ng.linkedin.com/in/ismail-isiaka-664208246"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-sm font-bold text-blue-400">
                      in
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        LinkedIn
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-200 transition group-hover:text-blue-300">
                        Connect professionally
                      </p>
                    </div>

                    <span className="ml-auto text-slate-600 transition group-hover:text-blue-400">
                      ↗
                    </span>
                  </a>

                  <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                    <p className="text-xs leading-6 text-slate-400">
                      Interested in reliable infrastructure, cloud architecture,
                      automation, and better deployment workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          </main>
        
        <footer className="border-t border-slate-800 bg-slate-950 px-6 py-7 text-slate-500">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#home"
              className="w-fit text-lg font-bold tracking-tight text-white transition hover:text-blue-400"
            >
              Isiaka<span className="text-blue-500">.</span>
            </a>

            <p className="text-sm">
              © {new Date().getFullYear()} Isiaka Ismail. All rights reserved.
            </p>

            <a
              href="#home"
              className="w-fit text-sm font-medium transition hover:text-white"
            >
              Back to top ↑
            </a>
          </div>
        </footer>
    </>
  );
}
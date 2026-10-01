import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

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

        <section id="about" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  About Me
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Building systems that work beyond the demo.
                </h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-slate-600">
                <p>
                  I'm Isiaka Ismail, a DevOps and Cloud Engineer focused on building
                  reliable infrastructure, automating deployment workflows, and
                  improving the way applications are delivered and operated.
                </p>

                <p>
                  My work spans cloud infrastructure, Infrastructure as Code,
                  containerization, CI/CD, Linux systems, and Kubernetes. I enjoy
                  taking infrastructure from manual and fragmented processes to
                  systems that are reproducible, observable, and easier to maintain.
                </p>

                <p>
                  I'm particularly interested in cloud architecture, automation,
                  security, reliability, and the engineering practices that make
                  systems easier to operate at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Technical Skills
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Tools I use to build and operate infrastructure.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                My toolkit covers cloud platforms, infrastructure automation,
                containers, deployment pipelines, and Linux-based systems.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Cloud & Infrastructure
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
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
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  DevOps & Automation
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Terraform",
                    "Git",
                    "GitHub Actions",
                    "CI/CD",
                    "Bash",
                    "Python",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Containers & Orchestration
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Docker", "Kubernetes", "Amazon EKS", "Amazon ECS", "Nginx"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Systems & Reliability
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
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
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Featured Projects
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Infrastructure built through hands-on engineering.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                A selection of cloud, DevOps, and infrastructure projects where I
                applied automation, reliability, security, and deployment practices.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  category={project.category}
                  title={project.title}
                  description={project.shortDescription}
                  technologies={project.technologies}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Experience & Journey
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Learning by building and solving real problems.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                My journey has moved from general IT and technical support into cloud
                infrastructure, automation, and DevOps engineering.
              </p>
            </div>

            <div className="mt-12 max-w-4xl">
              <div className="relative border-l border-slate-300 pl-8">
                <div className="absolute -left-2 top-1 h-4 w-4 rounded-full border-4 border-slate-50 bg-blue-600" />

                <p className="text-sm font-medium text-blue-600">
                  2026 — Present
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  DevOps & Cloud Engineering
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Building hands-on experience across AWS infrastructure, Terraform,
                  Docker, Kubernetes, CI/CD, Linux administration, cloud security,
                  and infrastructure automation.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "Terraform",
                    "Docker",
                    "Kubernetes",
                    "CI/CD",
                    "Linux",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-12 border-l border-slate-300 pl-8">
                <div className="absolute -left-2 top-1 h-4 w-4 rounded-full border-4 border-slate-50 bg-slate-400" />

                <p className="text-sm font-medium text-slate-500">
                  2024 — 2026
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  IT & Technical Projects
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Developed practical experience through technical projects involving
                  networking, system administration, automation, web technologies,
                  troubleshooting, and infrastructure.
                </p>
              </div>

              <div className="relative mt-12 border-l border-transparent pl-8">
                <div className="absolute -left-2 top-1 h-4 w-4 rounded-full border-4 border-slate-50 bg-slate-400" />

                <p className="text-sm font-medium text-slate-500">
                  Education
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  B.Sc. Information Technology
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  University of Ilorin, with a focus on information technology,
                  computing systems, networking, and practical technical work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Certifications & Learning
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Continuous learning through cloud and infrastructure.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Certifications support my learning, while hands-on projects demonstrate
                how I apply the concepts in practical environments.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                  AWS
                </p>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  AWS Certified Cloud Practitioner
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Demonstrates foundational knowledge of AWS cloud concepts,
                  services, security, architecture, and pricing.
                </p>

                <p className="mt-5 text-sm font-medium text-slate-500">
                  Certified
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                  AWS
                </p>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  AWS Solutions Architect
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Currently developing deeper skills in designing secure, resilient,
                  scalable, and cost-conscious AWS architectures.
                </p>

                <p className="mt-5 text-sm font-medium text-slate-500">
                  In Progress
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Get In Touch
                </p>

                <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
                  Let's build reliable systems together.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  I'm open to DevOps, Cloud Engineering, infrastructure, automation,
                  and technical collaboration opportunities.
                </p>

                <a
                  href="mailto:isiakaismail11@gmail.com"
                  className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Send Me an Email
                </a>
              </div>

              <div className="lg:justify-self-end">
                <div className="space-y-5 text-sm">
                  <a
                    href="https://github.com/IsiakaOladayo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-300 transition hover:text-white"
                  >
                    GitHub →
                  </a>

                  <a
                    href="https://ng.linkedin.com/in/ismail-isiaka-664208246"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-300 transition hover:text-white"
                  >
                    LinkedIn →
                  </a>

                  <a
                    href="#home"
                    className="block text-slate-300 transition hover:text-white"
                  >
                    Back to Top ↑
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
          </main>
        <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-slate-400">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Isiaka Ismail. All rights reserved.
            </p>

            <p>
              DevOps & Cloud Engineering
            </p>
          </div>
        </footer>
    </>
  );
}
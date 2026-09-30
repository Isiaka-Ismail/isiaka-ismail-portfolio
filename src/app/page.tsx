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
          className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 py-24 text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.18),_transparent_35%)]" />

          <div className="relative mx-auto w-full max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                DevOps & Cloud Engineer
              </p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Hi, I'm Isiaka Ismail.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I build, automate, and secure reliable cloud infrastructure and
                deployment workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  View My Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-400"
                >
                  Get In Touch
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                <span>AWS</span>
                <span>Terraform</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>CI/CD</span>
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
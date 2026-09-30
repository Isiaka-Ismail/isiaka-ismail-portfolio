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

        <section id="experience">
          <h2>Experience</h2>
          <p>
            DevOps and Cloud Engineering projects, infrastructure automation,
            system administration, and technical projects.
          </p>
        </section>

        <section id="certifications">
          <h2>Certifications</h2>
          <p>AWS Certified Cloud Practitioner</p>
        </section>

        <section id="contact">
          <h2>Let's Connect</h2>
          <p>
            Interested in cloud infrastructure, DevOps, or automation?
            Let's connect.
          </p>
        </section>
          </main>
    </>
  );
}
import Navbar from "@/components/Navbar";

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

        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a DevOps and Cloud Engineer focused on cloud infrastructure,
            automation, containerization, and reliable deployment workflows.
          </p>
        </section>

        <section id="skills">
          <h2>Technical Skills</h2>
          <p>AWS · Terraform · Docker · Kubernetes · CI/CD · Linux · Python</p>
        </section>

        <section id="projects">
          <h2>Featured Projects</h2>

          <article>
            <h3>AWS High-Availability Architecture</h3>
            <p>
              A highly available AWS infrastructure designed and provisioned
              using Terraform.
            </p>
          </article>

          <article>
            <h3>TradeCore CI/CD Pipeline</h3>
            <p>
              A containerized CI/CD workflow for testing, scanning, building,
              and deploying a backend application.
            </p>
          </article>

          <article>
            <h3>Kubernetes Infrastructure</h3>
            <p>
              Kubernetes infrastructure designed for deploying and managing
              containerized applications.
            </p>
          </article>
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
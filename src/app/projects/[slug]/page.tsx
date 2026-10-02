import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectImagePlaceholder from "@/components/ProjectImagePlaceholder";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#projects"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            ← Back to Projects
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              {project.category}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-b border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
            {/* Main Content */}
            <div className="space-y-16">
              <section>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  01
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  The Problem
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {project.problem}
                </p>
              </section>

              <section>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  02
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  Architecture
                </h2>

                <div className="mt-6">
                    <ProjectImagePlaceholder
                        label="Architecture Diagram"
                        description="A visual representation of the infrastructure, services, networking, and data flow will be displayed here."
                    />
                </div>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  {project.architecture}
                </p>
              </section>

              <section>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Evidence
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900">
                        Project Evidence
                    </h2>

                    <div className="mt-6">
                        <ProjectImagePlaceholder
                        label="Project Screenshot"
                        description="A screenshot of the deployed application, infrastructure dashboard, CI/CD pipeline, or relevant implementation evidence will be displayed here."
                        />
                    </div>
                </section>

              <section>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  03
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  Implementation
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {project.implementation}
                </p>
              </section>

              <section>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  04
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  Security
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {project.security}
                </p>
              </section>

              <section>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  05
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  Challenges
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {project.challenges}
                </p>
              </section>

              <section>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  06
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  Result
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  {project.result}
                </p>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">
                  Project Overview
                </h3>

                <div className="mt-6 space-y-5 text-sm">
                  <div>
                    <p className="text-slate-400">Category</p>
                    <p className="mt-1 font-medium text-slate-800">
                      {project.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">Technologies</p>
                    <p className="mt-1 font-medium leading-6 text-slate-800">
                      {project.technologies.join(" · ")}
                    </p>
                  </div>

                  <div className="mt-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
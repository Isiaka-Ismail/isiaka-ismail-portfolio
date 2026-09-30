import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Back to Projects
        </Link>

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {project.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {project.description}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              The Problem
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Architecture
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              {project.architecture}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Implementation
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              {project.implementation}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Security
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              {project.security}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Challenges
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              {project.challenges}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              Result
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              {project.result}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
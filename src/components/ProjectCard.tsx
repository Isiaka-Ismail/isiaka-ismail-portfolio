type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  category,
}: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
        {category}
      </p>

      <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-7">
        <a
          href="#contact"
          className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
        >
          View Case Study →
        </a>
      </div>
    </article>
  );
}
type ProjectImagePlaceholderProps = {
  label: string;
  description: string;
};

export default function ProjectImagePlaceholder({
  label,
  description,
}: ProjectImagePlaceholderProps) {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100">
      <div className="px-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-400 shadow-sm">
          <span className="text-xl">▧</span>
        </div>

        <p className="mt-4 font-semibold text-slate-700">{label}</p>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}
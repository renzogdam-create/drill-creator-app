export function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-slate-600">{description}</p>
      <div className="rounded-lg border bg-white p-4 text-sm text-slate-700">
        Module scaffold ready. Next phase: CRUD forms, validations, filters, and drag-and-drop tools.
      </div>
    </section>
  );
}

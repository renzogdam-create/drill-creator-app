const quickActions = [
  "Create Training Session",
  "Create Drill",
  "Create Microcycle",
  "Create Game Sheet",
  "Add Player"
];

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="mt-2 text-slate-600">Current week, upcoming sessions, latest drills, and coach actions.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Active Microcycle", "Week 3 - Build-up Play"],
          ["Upcoming Sessions", "2 sessions scheduled"],
          ["Next Match", "Saturday 10:00 vs City U15"]
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border bg-white p-4">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-1 font-semibold">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-white p-4">
        <h3 className="font-semibold">Quick Actions</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {quickActions.map((action) => (
            <button key={action} className="rounded-md border px-3 py-2 text-sm hover:bg-slate-100">{action}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

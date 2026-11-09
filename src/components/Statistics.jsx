import { Users, GraduationCap, BookOpen, Trophy } from "lucide-react";

const stats = [
  { id: 1, icon: Users, value: "350+", label: "Total Learners" },
  { id: 2, icon: GraduationCap, value: "20", label: "Qualified Teachers" },
  { id: 3, icon: BookOpen, value: "8", label: "Academic Programmes" },
  { id: 4, icon: Trophy, value: "12", label: "School Activities" },
];

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand">
        <Icon size={24} />
      </div>
      <p className="mt-4 text-3xl font-bold text-brand">{value}</p>
      <p className="mt-1 text-sm font-medium text-muted">{label}</p>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="bg-brand-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
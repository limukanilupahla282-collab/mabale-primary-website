import { Calculator, BookOpen, FlaskConical, Leaf, Palette, Dumbbell, ArrowRight } from "lucide-react";
import { academics } from "../data/academicsData";

const icons = { Calculator, BookOpen, FlaskConical, Leaf, Palette, Dumbbell };

function AcademicCard({ icon, title, description }) {
  const Icon = icons[icon];
  return (
    <article className="flex flex-col rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
        <Icon size={24} />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-brand">{title}</h3>
      <p className="mt-2 flex-1 text-muted">{description}</p>
      <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
        Learn More <ArrowRight size={16} />
      </a>
    </article>
  );
}

export default function Academics() {
  return (
    <section id="academics" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">Academics</p>
          <h2 className="mt-2 text-3xl font-bold text-brand sm:text-4xl">Building Strong Academic Foundations</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {academics.map((item) => (
            <AcademicCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
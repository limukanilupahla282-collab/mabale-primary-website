import { CheckCircle2 } from "lucide-react";

const values = [
  "Quality education for every learner",
  "Discipline and respect",
  "Creativity and curiosity",
  "Personal development and confidence",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
          <video
            src="/videos/about-school.mp4"
            title="Mabale Primary School"
            autoPlay
            controls
            muted
            playsInline
            preload="metadata"
            className="aspect-[4/3] w-full object-contain"
          >
            Your browser does not support embedded videos.
          </video>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">Who We Are</p>
          <h2 className="mt-2 text-3xl font-bold text-brand sm:text-4xl">About Mabale Primary School</h2>
          <p className="mt-5 text-muted">
            Mabale Primary School in Hwange, Zimbabwe is a welcoming place of
            learning where children are supported to grow in knowledge,
            character and confidence.
          </p>
          <p className="mt-4 text-muted">
            We believe every child learns best in a safe, encouraging
            environment. Our approach combines strong academic foundations with
            discipline, creativity and personal development, so that pupils are
            prepared for the next stage of their education and for life.
          </p>
          <ul className="mt-6 space-y-3">
            {values.map((value) => (
              <li key={value} className="flex items-center gap-3 text-ink">
                <CheckCircle2 className="shrink-0 text-brand" size={22} />
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
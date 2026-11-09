import { ArrowRight, CalendarDays } from "lucide-react";
import { news } from "../data/newsData";
import { events } from "../data/eventsData";

function PostCard({ image, title, date, description }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="overflow-hidden bg-slate-100">
        <img src={image} alt={title} className="aspect-[4/3] w-full object-cover object-center" loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-2 text-xs font-medium text-muted">
          <CalendarDays size={14} /> {date}
        </p>
        <h4 className="mt-2 text-lg font-semibold text-brand">{title}</h4>
        <p className="mt-2 flex-1 text-sm text-muted">{description}</p>
        <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
          Read More <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}

function PostGroup({ heading, items }) {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-brand">{heading}</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <PostCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function News() {
  return (
    <section id="news" className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">News and Events</p>
          <h2 className="mt-2 text-3xl font-bold text-brand sm:text-4xl">Latest News and Upcoming Events</h2>
          <p className="mt-3 inline-block rounded-full bg-white px-4 py-1 text-xs text-muted">
            Demonstration content until real school news and dates are supplied
          </p>
        </div>
        <div className="mt-12 space-y-14">
          <PostGroup heading="Latest School News" items={news} />
          <PostGroup heading="Upcoming Events" items={events} />
        </div>
      </div>
    </section>
  );
}
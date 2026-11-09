import { BookOpenCheck, Handshake, Presentation, Trophy, UsersRound } from "lucide-react";

const activities = [
  { id: 1, image: "/images/football-training.jpg", alt: "Schoolboys practicing football together on a field", title: "Sports and Athletics", description: "Teamwork, fitness and healthy competition on the field.", icon: Trophy },
  { id: 2, image: "/images/classroom-pupils.jpg", alt: "Pupils seated together in a classroom", title: "School Community", description: "Pupils share time and learn together beyond the classroom.", icon: UsersRound },
  { id: 3, image: "/images/classroom-activity.jpg", alt: "Young pupils writing in activity books around a classroom table", title: "Early Learning", description: "Hands-on classroom activities help young learners build confidence.", icon: BookOpenCheck },
  { id: 4, image: "/images/youth-football.jpg", alt: "Young players practicing football together on a field", title: "Play and Teamwork", description: "Shared games help pupils practise cooperation and build friendships.", icon: Handshake },
  { id: 5, image: "/images/classroom-tanzania.jpg", alt: "Pupils taking part in a lesson in a classroom", title: "Classroom Participation", description: "Curiosity and active participation make everyday learning engaging.", icon: Presentation },
];

export default function Activities() {
  return (
    <section id="activities" className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">Activities</p>
          <h2 className="mt-2 text-3xl font-bold text-brand sm:text-4xl">Learning Beyond the Classroom</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map(({ icon: Icon, ...item }) => (
            <article key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[4/3] w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="flex items-center gap-3 text-xl font-semibold text-brand">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  {item.title}
                </h3>
                <p className="mt-2 text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
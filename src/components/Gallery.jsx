import { useState, useEffect } from "react";
import { X } from "lucide-react";

const images = [
  { id: 1, src: "/images/playground-games.jpg", alt: "Children playing together on an outdoor playground" },
  { id: 2, src: "/images/classroom-activity.jpg", alt: "Young pupils writing in activity books around a classroom table" },
  { id: 3, src: "/images/classroom-pupils.jpg", alt: "Pupils seated together in a classroom" },
  { id: 4, src: "/images/classroom-tanzania.jpg", alt: "Pupils attending a lesson in a classroom" },
  { id: 5, src: "/images/football-training.jpg", alt: "Schoolboys practicing football together on a field" },
  { id: 6, src: "/images/youth-football.jpg", alt: "Young players practicing football together on a field" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  // Close the preview with the Escape key (a genuine side effect).
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">Gallery</p>
          <h2 className="mt-2 text-3xl font-bold text-brand sm:text-4xl">Life at Mabale Primary School</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setSelected(img)}
              className="group overflow-hidden rounded-2xl bg-slate-100 shadow-sm transition hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/40"
              aria-label={`View larger: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover object-center transition duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white p-2 text-brand"
            onClick={() => setSelected(null)}
            aria-label="Close image preview"
          >
            <X size={22} />
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-h-[85vh] max-w-[80vw] rounded-2xl border border-white/20 bg-slate-900/20 object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
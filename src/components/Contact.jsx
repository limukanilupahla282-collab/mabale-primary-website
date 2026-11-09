import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const details = [
  { id: 1, icon: MapPin, label: "Physical address", value: "Hwange, Zimbabwe" },
  { id: 2, icon: Phone, label: "Phone number", value: "0785408949" },
  { id: 3, icon: Mail, label: "Email address", value: "limukanilup@gmail.com" },
  { id: 4, icon: Clock, label: "Operating hours", value: "Monday - Friday: 8:00 AM - 4:00 PM" },
];

const initialForm = { name: "", email: "", subject: "", message: "" };

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is connected yet, so nothing is actually sent.
    setSent(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">Contact</p>
          <h2 className="mt-2 text-3xl font-bold text-brand sm:text-4xl">Get in Touch</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h3 className="text-xl font-semibold text-brand">Mabale Primary School</h3>
            <p className="text-muted">Hwange, Zimbabwe</p>
            <ul className="mt-6 space-y-5">
              {details.map(({ id, icon: Icon, label, value }) => (
                <li key={id} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-sm">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{label}</p>
                    <p className="text-sm text-muted">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <div>
              <label htmlFor="c-name" className="mb-1 block text-sm font-medium">Full name</label>
              <input id="c-name" name="name" required value={form.name} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="c-email" className="mb-1 block text-sm font-medium">Email address</label>
              <input id="c-email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="c-subject" className="mb-1 block text-sm font-medium">Subject</label>
              <input id="c-subject" name="subject" required value={form.subject} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="c-message" className="mb-1 block text-sm font-medium">Message</label>
              <textarea id="c-message" name="message" rows={5} required value={form.message} onChange={handleChange} className={inputClass} />
            </div>
            <button type="submit" className="w-full rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:opacity-90">
              Send Message
            </button>
            {sent && (
              <p role="status" className="rounded-lg bg-brand-light p-3 text-sm text-brand">
                This is a demonstration form and is not yet connected to the
                school, so your message has not been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
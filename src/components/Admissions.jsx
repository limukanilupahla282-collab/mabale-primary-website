import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const initialForm = { parentName: "", phone: "", email: "", childName: "", classApplying: "" };

const classes = ["ECD A", "ECD B", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7"];

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function Admissions() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is connected yet, so nothing is actually sent.
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="admissions" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">Admissions</p>
          <h2 className="mt-2 text-3xl font-bold text-brand sm:text-4xl">Join the Mabale Primary School Family</h2>
          <p className="mt-5 text-muted">
            We warmly welcome parents and guardians who would like their child
            to learn in a caring, disciplined and encouraging environment.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Send an enquiry using the form",
              "The school will respond with admission requirements and available places",
              "Visit the school to meet our team",
            ].map((step) => (
              <li key={step} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand" size={22} />
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-lg bg-brand-light p-4 text-sm text-muted">
            Specific admission requirements and dates will be confirmed by the school.
          </p>
          <a href="#admission-form" className="mt-6 inline-block rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:opacity-90">
            Make an Enquiry
          </a>
        </div>

        <form id="admission-form" onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-brand-light p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-semibold text-brand">Admission Enquiry</h3>

          <div>
            <label htmlFor="parentName" className="mb-1 block text-sm font-medium">Parent or guardian name</label>
            <input id="parentName" name="parentName" required value={form.parentName} onChange={handleChange} className={inputClass} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium">Contact number</label>
              <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">Email address</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} />
            </div>
          </div>
          <div>
            <label htmlFor="childName" className="mb-1 block text-sm font-medium">Child's name</label>
            <input id="childName" name="childName" required value={form.childName} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label htmlFor="classApplying" className="mb-1 block text-sm font-medium">Class applying for</label>
            <select id="classApplying" name="classApplying" required value={form.classApplying} onChange={handleChange} className={inputClass}>
              <option value="">Select a class</option>
              {classes.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="w-full rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:opacity-90">
            Send Enquiry
          </button>

          {submitted && (
            <p role="status" className="rounded-lg bg-white p-3 text-sm text-brand">
              Thank you. This is a demonstration form and is not yet connected
              to the school, so your enquiry has not been sent. Please use the
              contact details below to reach the school directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
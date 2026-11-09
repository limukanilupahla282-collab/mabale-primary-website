import { useState } from "react";
import { Heart, BookOpen, Trophy, Building2 } from "lucide-react";

const amounts = ["5", "10", "25", "50"];

const uses = [
  { id: 1, icon: BookOpen, title: "Learning materials", text: "Books, stationery and classroom resources for pupils." },
  { id: 2, icon: Trophy, title: "Sports and activities", text: "Equipment and support for sports, arts and clubs." },
  { id: 3, icon: Building2, title: "School improvements", text: "Better classrooms and a safer, brighter learning space." },
];

export default function Donate() {
  const [amount, setAmount] = useState("25");
  const [custom, setCustom] = useState("");
  const [message, setMessage] = useState(false);

  const isOther = amount === "other";
  const finalAmount = isOther ? custom : amount;

  const choose = (value) => {
    setAmount(value);
    setMessage(false);
  };

  const handleDonate = () => {
    // No payment service is connected yet, so nothing is charged or sent.
    setMessage(true);
  };

  const buttonClass = (active) =>
    `rounded-lg border-2 px-5 py-2.5 font-semibold transition ${
      active
        ? "border-white bg-white text-brand"
        : "border-white/40 text-white hover:border-white hover:bg-white/10"
    }`;

  return (
    <section id="donate" className="bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Donation panel */}
        <div className="bg-brand px-4 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Support Our School
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Your Gift Can Change a Child's Learning
            </h2>
            <p className="mt-4 text-white/85">
              Every contribution helps Mabale Primary School give pupils a
              better place to learn, grow and succeed.
            </p>

            <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label="Choose a donation amount">
              {amounts.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => choose(a)}
                  aria-pressed={amount === a}
                  className={buttonClass(amount === a)}
                >
                  ${a}
                </button>
              ))}
              <button
                type="button"
                onClick={() => choose("other")}
                aria-pressed={isOther}
                className={buttonClass(isOther)}
              >
                Other
              </button>
            </div>

            {isOther && (
              <div className="mt-4">
                <label htmlFor="custom-amount" className="mb-1 block text-sm text-white/85">
                  Enter your amount (USD)
                </label>
                <input
                  id="custom-amount"
                  type="number"
                  min="1"
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value);
                    setMessage(false);
                  }}
                  placeholder="e.g. 15"
                  className="w-full rounded-lg border border-white/40 bg-white px-4 py-2.5 text-ink outline-none focus:ring-2 focus:ring-white/60 sm:w-56"
                />
              </div>
            )}

            <button
              type="button"
              onClick={handleDonate}
              disabled={!finalAmount || Number(finalAmount) <= 0}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-brand transition hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-60"
            >
              Donate {finalAmount ? `$${finalAmount}` : "Now"}
              <Heart size={18} aria-hidden="true" />
            </button>

            {message && (
              <p role="status" className="mt-5 rounded-lg bg-white/10 p-4 text-sm text-white">
                Thank you for your kindness. Online payments are not set up
                yet, so nothing has been charged. The school will confirm how to
                donate. Please contact the school directly to give.
              </p>
            )}
            <p className="mt-5 text-xs text-white/60">
              Payment details to be confirmed by the school.
            </p>
          </div>
        </div>

        {/* How gifts help */}
        <div className="bg-brand-light px-4 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              How Your Support Helps
            </p>
            <h3 className="mt-2 text-3xl font-bold text-brand">
              Making a Real Difference
            </h3>
            <ul className="mt-8 space-y-6">
              {uses.map(({ id, icon: Icon, title, text }) => (
                <li key={id} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-brand">{title}</p>
                    <p className="text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-lg bg-white p-4 text-sm text-muted">
              Examples shown for illustration. The school will confirm what
              donations are used for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
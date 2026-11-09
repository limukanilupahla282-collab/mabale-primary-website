import { ArrowRight, MapPin, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/playground-games.jpg')" }}
    >
      <div className="absolute inset-0 bg-brand/75" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium text-white">
            <MapPin size={16} aria-hidden="true" />
            Hwange, Zimbabwe
          </p>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl">
            Growing Young Minds, Building Bright Futures.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/90 sm:text-lg">
            Welcome to Mabale Primary School, where every child is encouraged to
            learn, grow, explore and achieve their full potential.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="#about" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-brand shadow transition hover:bg-brand-light sm:w-auto">
              Learn More <ArrowRight className="ml-2" size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-brand sm:w-auto">
              <MessageCircle className="mr-2" size={18} aria-hidden="true" /> Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
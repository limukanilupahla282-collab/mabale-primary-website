import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand shadow-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex min-w-0 items-center gap-2 text-white sm:gap-3">
          <img src="/logo.svg" alt="" className="h-12 w-auto shrink-0 rounded-md bg-white p-0.5 object-contain" />
          <span className="block max-w-[9rem] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold leading-tight sm:max-w-[13rem] sm:text-base md:max-w-none md:text-lg">
            Mabale Primary School
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-white/90 transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#admissions" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand transition hover:bg-brand-light">
              Apply Now
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/15 bg-brand lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 font-medium text-white/90 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#admissions"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-white px-5 py-2.5 text-center font-semibold text-brand"
              >
                Apply Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
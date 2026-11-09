const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const usefulInfo = [
  { label: "Apply Now", href: "#admissions" },
  { label: "News and Events", href: "#news" },
  { label: "Contact the School", href: "#contact" },
  { label: "Support the School", href: "#donate" },
];

const socialPlatforms = [
  { name: "Facebook", image: "/social/facebook.png", color: "bg-[#1c7ef2]" },
  { name: "X", image: "/social/x.png", color: "bg-[#1f2a37]" },
  { name: "Instagram", image: "/social/instagram.png", color: "bg-gradient-to-br from-[#5d60ff] via-[#be3ee4] to-[#ff6d5d]" },
  { name: "YouTube", image: "/social/youtube.png", color: "bg-[#ff3d3d]" },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="" className="h-12 w-auto shrink-0 rounded-md bg-white p-0.5 object-contain" />
            <span className="text-lg font-bold">Mabale Primary School</span>
          </div>
          <p className="mt-3 text-base text-white/80">
            Growing young minds and building bright futures in Hwange, Zimbabwe.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-1.5 text-base text-white/80">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white hover:underline">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold">Useful Information</h3>
          <ul className="mt-3 space-y-1.5 text-base text-white/80">
            {usefulInfo.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white hover:underline">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold">Contact</h3>
          <ul className="mt-3 space-y-1.5 text-base text-white/80">
            <li>Hwange, Zimbabwe</li>
            <li>0785408949</li>
            <li>limukanilup@gmail.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold uppercase tracking-[0.12em] text-white">Social Media</h3>
          <ul className="mt-3 flex gap-2">
            {socialPlatforms.map(({ name, image, color }) => (
              <li key={name}>
                <button
                  type="button"
                  aria-label={name}
                  className={`flex h-7 w-7 items-center justify-center rounded-md shadow-sm transition hover:scale-[1.02] ${color}`}
                >
                  <img src={image} alt="" className="h-3.5 w-3.5 object-contain" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-3 text-center text-base text-white/70">
        &copy; {new Date().getFullYear()} Mabale Primary School. All rights reserved.
      </div>
    </footer>
  );
}
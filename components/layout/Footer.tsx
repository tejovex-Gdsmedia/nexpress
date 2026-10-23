import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navItems } from "@/lib/constants";

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter / X" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
  { icon: Instagram, label: "Instagram" },
];

const footerColumns = navItems.filter((item) => item.dropdown).slice(0, 4);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-sky bg-dark-navy">
      <svg
        viewBox="0 0 1200 300"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M-50 220 C 150 100, 350 260, 550 140 S 900 60, 1250 180"
          fill="none"
          stroke="#5BB8F5"
          strokeWidth="1.5"
          strokeDasharray="5 9"
        />
        {[150, 550, 900].map((x, i) => (
          <circle key={i} cx={x} cy={i === 1 ? 140 : i === 0 ? 180 : 100} r="3" fill="#5BB8F5" />
        ))}
      </svg>
      <div className="container-px relative z-10 mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo variant="light" size="md" />
            <p className="mt-4 max-w-xs text-sm text-white/70">
              India&apos;s next-generation integrated logistics services provider.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-light-blue/15 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <div className="rounded-lg border border-white/30 px-3 py-2 text-[11px] text-white/80">
                App Store
              </div>
              <div className="rounded-lg border border-white/30 px-3 py-2 text-[11px] text-white/80">
                Google Play
              </div>
            </div>

            <p className="mt-6 text-[11px] text-white/40">
              CIN: U63090DL2026PTC000000 | GST: 07AAAAA0000A1Z5
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.label}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
                {col.label}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.dropdown![0].items.map((sub) => (
                  <li key={sub.label}>
                    <Link
                      href={sub.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Nexpres (I) Logistics Pvt Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white/70">
              Cookie Policy
            </Link>
            <Link href="/refunds" className="hover:text-white/70">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // FIX: this fixed header toggles border/shadow/height classes on every scroll frame,
  // which can flicker/repaint on iOS Safari — will-change-transform promotes it to its
  // own compositor layer so those changes don't force a full repaint of the page below it
  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b bg-white transition-all duration-300 will-change-transform",
        scrolled ? "border-border-blue shadow-sm" : "border-transparent"
      )}
    >
      <nav
        className={cn(
          "container-px mx-auto flex max-w-7xl items-center justify-between transition-[height] duration-300",
          scrolled ? "h-[72px]" : "h-[88px]"
        )}
      >
        <Link href="/" aria-label="Nexpres (I) Logistics home" data-navbar-logo>
          {/* FIX: Logo no longer eager-loads by default — this instance is above the fold, so opt back in */}
          <Logo variant="default" size={scrolled ? "sm" : "md"} priority />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-text-body transition-colors hover:text-navy",
                    (openDropdown === item.label || isActive) && "text-navy"
                  )}
                  aria-haspopup={item.dropdown ? "true" : undefined}
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-sky"
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.dropdown && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div className="grid w-[420px] grid-cols-2 gap-1 rounded-xl border border-border-blue bg-white p-4 shadow-xl">
                        {item.dropdown[0].items.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-body transition-colors hover:bg-off-white hover:text-navy"
                          >
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                              {sub.label}
                            </span>
                            {sub.badge && (
                              <span className="rounded-full bg-sky px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link href="/support">
            <Button variant="primary" size="md">
              Ship Now
            </Button>
          </Link>
        </div>

        <button
          className="text-navy lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          // FIX: 100vh left a gap/overflow as the mobile address bar collapsed — use dvh;
          // overscroll-contain stops scrolling past the top/bottom of this panel from
          // chaining into (and bouncing) the page behind it on iOS Safari
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[72px] z-40 h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain bg-white px-6 py-8 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="border-b border-border-blue pb-2"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-navy"
                        onClick={() =>
                          setMobileAccordion((prev) => (prev === item.label ? null : item.label))
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            mobileAccordion === item.label && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileAccordion === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3"
                          >
                            {item.dropdown[0].items.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block py-2 text-sm text-text-muted hover:text-sky"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-base font-medium text-navy"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
            <Link href="/support" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" size="lg" className="mt-6 w-full">
                Ship Now
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

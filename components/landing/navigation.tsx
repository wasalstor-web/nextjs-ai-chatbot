"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Scale, Sun, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";

/* ────────────────────────────────────────────────
 *  Header — NOB-Style Minimal Navigation
 * ──────────────────────────────────────────────── */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/features", label: "خدماتنا" },
    { href: "/pricing", label: "الأسعار" },
    { href: "/blog", label: "المدونة" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  return (
    <header className="sticky top-0 z-50 border-zinc-100 border-b bg-white/90 backdrop-blur-xl dark:border-zinc-900 dark:bg-zinc-950/90">
      <nav className="mx-auto max-w-7xl px-6 md:px-8" dir="rtl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
            href="/"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 dark:bg-zinc-100">
              <Scale className="h-4.5 w-4.5 text-white dark:text-zinc-950" />
            </div>
            <span className="font-bold text-lg text-zinc-950 tracking-tight dark:text-zinc-50">
              محامي{" "}
              <span className="font-light text-zinc-400 dark:text-zinc-600">
                فيصل
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                className="rounded-lg px-3.5 py-2 font-medium text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              aria-label="تبديل المظهر"
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-zinc-300"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              type="button"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5" />
              ) : (
                <Moon className="h-4.5 w-4.5" />
              )}
            </button>

            {/* Auth Buttons */}
            <div className="hidden items-center gap-2 lg:flex">
              <Link
                className="rounded-lg px-4 py-2 font-medium text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                href="/login"
              >
                تسجيل الدخول
              </Link>
              <Link
                className="rounded-full bg-zinc-950 px-5 py-2 font-semibold text-sm text-white transition-all hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-950"
                href="/register"
              >
                ابدأ الآن
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="القائمة"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 lg:hidden dark:text-zinc-400 dark:hover:bg-zinc-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              animate={{ height: "auto", opacity: 1 }}
              className="overflow-hidden lg:hidden"
              exit={{ height: 0, opacity: 0 }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-1 border-zinc-100 border-t py-4 dark:border-zinc-900">
                {navLinks.map((link) => (
                  <Link
                    className="block rounded-lg px-4 py-2.5 font-medium text-sm text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                    href={link.href}
                    key={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="space-y-2 border-zinc-100 border-t pt-4 dark:border-zinc-900">
                  <Link
                    className="block rounded-lg border border-zinc-200 px-4 py-2.5 text-center font-medium text-sm text-zinc-700 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700"
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    تسجيل الدخول
                  </Link>
                  <Link
                    className="block rounded-full bg-zinc-950 px-4 py-2.5 text-center font-semibold text-sm text-white transition-all hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-950"
                    href="/register"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ابدأ الآن
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

/* ────────────────────────────────────────────────
 *  Footer — NOB-Style Clean Footer
 * ──────────────────────────────────────────────── */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-zinc-100 border-t bg-white dark:border-zinc-900 dark:bg-zinc-950"
      dir="rtl"
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Contact Info — NOB Style */}
          <div className="space-y-6 lg:col-span-5">
            {/* Logo */}
            <Link
              className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
              href="/"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 dark:bg-zinc-100">
                <Scale className="h-4.5 w-4.5 text-white dark:text-zinc-950" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                محامي{" "}
                <span className="font-light text-zinc-400 dark:text-zinc-600">
                  فيصل
                </span>
              </span>
            </Link>

            <p className="max-w-sm text-sm text-zinc-500 leading-relaxed dark:text-zinc-400">
              مستشارك القانوني الذكي — أخبرنا عن احتياجك القانوني وسنساعدك بأفضل
              الحلول المدعومة بالذكاء الاصطناعي.
            </p>

            {/* Quick Contact */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900">
                  <svg
                    className="h-4 w-4 text-zinc-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  className="font-medium text-sm text-zinc-600 dark:text-zinc-400"
                  dir="ltr"
                >
                  +966 50 000 0000
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900">
                  <svg
                    className="h-4 w-4 text-zinc-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-medium text-sm text-zinc-600 dark:text-zinc-400">
                  محامي فيصل
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-semibold text-xs text-zinc-950 uppercase tracking-[0.2em] dark:text-zinc-50">
              التنقل
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/features", label: "خدماتنا" },
                { href: "/pricing", label: "الأسعار" },
                { href: "/blog", label: "المدونة" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-semibold text-xs text-zinc-950 uppercase tracking-[0.2em] dark:text-zinc-50">
              تابعنا
            </h3>
            <ul className="space-y-3">
              {[
                { href: "https://x.com", label: "X (Twitter)" },
                { href: "https://tiktok.com", label: "TikTok" },
                { href: "https://instagram.com", label: "Instagram" },
                { href: "https://linkedin.com", label: "LinkedIn" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-semibold text-xs text-zinc-950 uppercase tracking-[0.2em] dark:text-zinc-50">
              قانوني
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/privacy", label: "سياسة الخصوصية" },
                { href: "/terms", label: "الشروط والأحكام" },
                { href: "/security", label: "الأمان" },
                { href: "/cookies", label: "ملفات تعريف الارتباط" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-zinc-100 border-t dark:border-zinc-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:px-8">
          <p className="text-xs text-zinc-400">
            © {currentYear} محامي فيصل. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <Link
              className="text-xs text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
              href="/privacy"
            >
              سياسة الخصوصية
            </Link>
            <span className="text-zinc-200 dark:text-zinc-800">|</span>
            <Link
              className="text-xs text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
              href="/terms"
            >
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <Link
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[#25D366]/30 shadow-lg transition-all hover:scale-105 hover:shadow-[#25D366]/40 hover:shadow-xl"
        href="https://wa.me/966500000000"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg
          className="h-7 w-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>
    </footer>
  );
}

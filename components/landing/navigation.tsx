"use client";

import { Bot, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/chat", label: "المحادثة" },
    { href: "/features", label: "المميزات" },
    { href: "/pricing", label: "الأسعار" },
    { href: "/blog", label: "المدونة" },
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  return (
    <header className="sticky top-0 z-50 border-gray-100 border-b bg-white/98 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95">
      <nav className="container mx-auto px-4 py-3" dir="rtl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            href="/"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-green-600 to-green-700 shadow-green-500/20 shadow-lg">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-xl dark:text-white">
              مساعد ذكي
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                className="rounded-xl px-4 py-2 font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-green-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              aria-label="Toggle theme"
              className="rounded-xl p-2.5 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {/* Auth Buttons */}
            <div className="hidden items-center gap-3 lg:flex">
              <Link
                className="px-5 py-2.5 font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                href="/login"
              >
                تسجيل الدخول
              </Link>
              <Link
                className="rounded-xl bg-green-600 px-6 py-2.5 font-medium text-white shadow-green-500/25 shadow-lg transition-all hover:bg-green-700 hover:shadow-green-500/30 hover:shadow-xl"
                href="/register"
              >
                ابدأ مجاناً
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle menu"
              className="rounded-xl p-2.5 transition-colors hover:bg-gray-100 lg:hidden dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 space-y-2 border-gray-100 border-t py-4 lg:hidden dark:border-gray-800">
            {navLinks.map((link) => (
              <Link
                className="block rounded-xl px-4 py-3 font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-green-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                href={link.href}
                key={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="space-y-3 border-gray-100 border-t pt-4 dark:border-gray-800">
              <Link
                className="block rounded-xl border-2 border-gray-200 px-6 py-3 text-center font-medium text-gray-700 transition-colors hover:border-green-500 dark:border-gray-700 dark:text-gray-200 dark:hover:border-green-500"
                href="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                تسجيل الدخول
              </Link>
              <Link
                className="block rounded-xl bg-green-600 px-6 py-3 text-center font-medium text-white shadow-green-500/25 shadow-lg transition-all hover:bg-green-700"
                href="/register"
                onClick={() => setIsMenuOpen(false)}
              >
                ابدأ مجاناً
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { href: "/features", label: "المميزات" },
      { href: "/pricing", label: "الأسعار" },
      { href: "/mobile", label: "تطبيق الموبايل" },
      { href: "/api", label: "واجهة برمجية" },
    ],
    company: [
      { href: "/about", label: "من نحن" },
      { href: "/blog", label: "المدونة" },
      { href: "/careers", label: "الوظائف" },
      { href: "/contact", label: "اتصل بنا" },
    ],
    legal: [
      { href: "/privacy", label: "الخصوصية" },
      { href: "/terms", label: "الشروط" },
      { href: "/security", label: "الأمان" },
      { href: "/cookies", label: "ملفات تعريف الارتباط" },
    ],
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16" dir="rtl">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              className="mb-5 flex items-center gap-3 transition-opacity hover:opacity-90"
              href="/"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-green-400 to-green-500 shadow-green-500/30 shadow-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-white text-xl">مساعد ذكي</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              محادثات ذكية بقوة الذكاء الاصطناعي. مساعدك الشخصي متاح دائماً.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-5 font-bold text-white">المنتج</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-gray-400 text-sm transition-colors hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-5 font-bold text-white">الشركة</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-gray-400 text-sm transition-colors hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-gray-700/50 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-400 text-sm">
              © {currentYear} مساعد ذكي. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6">
              <Link
                className="text-gray-400 transition-colors hover:text-white"
                href="https://twitter.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link
                className="text-gray-400 transition-colors hover:text-white"
                href="https://github.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                className="text-gray-400 transition-colors hover:text-white"
                href="https://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

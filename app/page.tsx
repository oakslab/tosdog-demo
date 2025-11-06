import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <Header variant="home" />

      {/* Hero Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            AI-Powered Text Editor for the Modern Era
          </h1>
          <p className="mb-8 text-xl text-zinc-600 dark:text-zinc-400">
            Write smarter, faster, and better with our intelligent text editor
            powered by cutting-edge AI technology.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="cursor-pointer rounded-lg bg-zinc-900 px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-zinc-700 hover:shadow-2xl dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:hover:shadow-2xl">
              Get Started Free
            </button>
            <button className="cursor-pointer rounded-lg border border-zinc-300 bg-white px-8 py-3 font-medium text-zinc-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-zinc-50 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700 dark:hover:shadow-xl">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Powerful Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group cursor-pointer rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-900 dark:bg-zinc-700 dark:group-hover:bg-zinc-50">
                <svg
                  className="h-6 w-6 text-zinc-900 transition-colors duration-300 group-hover:text-white dark:text-zinc-50 dark:group-hover:text-zinc-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Lightning Fast
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Experience real-time AI suggestions without any lag. Our editor
                is optimized for speed.
              </p>
            </div>

            <div className="group cursor-pointer rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-900 dark:bg-zinc-700 dark:group-hover:bg-zinc-50">
                <svg
                  className="h-6 w-6 text-zinc-900 transition-colors duration-300 group-hover:text-white dark:text-zinc-50 dark:group-hover:text-zinc-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Smart Autocomplete
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                AI-powered suggestions that understand context and help you
                write more efficiently.
              </p>
            </div>

            <div className="group cursor-pointer rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-900 dark:bg-zinc-700 dark:group-hover:bg-zinc-50">
                <svg
                  className="h-6 w-6 text-zinc-900 transition-colors duration-300 group-hover:text-white dark:text-zinc-50 dark:group-hover:text-zinc-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Grammar & Style
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Advanced grammar checking and style suggestions to make your
                writing shine.
              </p>
            </div>

            <div className="group cursor-pointer rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-900 dark:bg-zinc-700 dark:group-hover:bg-zinc-50">
                <svg
                  className="h-6 w-6 text-zinc-900 transition-colors duration-300 group-hover:text-white dark:text-zinc-50 dark:group-hover:text-zinc-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Multi-Language
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Write in any language with full AI support for over 50 languages
                worldwide.
              </p>
            </div>

            <div className="group cursor-pointer rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-900 dark:bg-zinc-700 dark:group-hover:bg-zinc-50">
                <svg
                  className="h-6 w-6 text-zinc-900 transition-colors duration-300 group-hover:text-white dark:text-zinc-50 dark:group-hover:text-zinc-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Secure & Private
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Your documents are encrypted end-to-end. We never access your
                private content.
              </p>
            </div>

            <div className="group cursor-pointer rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-900 dark:bg-zinc-700 dark:group-hover:bg-zinc-50">
                <svg
                  className="h-6 w-6 text-zinc-900 transition-colors duration-300 group-hover:text-white dark:text-zinc-50 dark:group-hover:text-zinc-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Export Anywhere
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Export to PDF, Word, Markdown, or HTML. Your content, your
                format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="group mx-auto max-w-4xl rounded-2xl bg-zinc-900 px-8 py-16 text-center transition-all duration-300 hover:shadow-2xl dark:bg-zinc-800">
          <h2 className="mb-4 text-3xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
            Ready to transform your writing?
          </h2>
          <p className="mb-8 text-lg text-zinc-300">
            Join thousands of writers who use TOSDog AI to create better content
            faster.
          </p>
          <button className="cursor-pointer rounded-lg bg-white px-8 py-3 font-medium text-zinc-900 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-zinc-100 hover:shadow-2xl">
            Start Writing for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-8 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <a
                    href="#"
                    className="cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-50"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-50"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-50"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <a
                    href="#"
                    className="cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-50"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-50"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-50"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">
                Resources
              </h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <a
                    href="#"
                    className="cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-50"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-50"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-50"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <Link
                    href="/terms-of-service"
                    className="cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-50"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-50"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-50"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            © 2024 TOSDog AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

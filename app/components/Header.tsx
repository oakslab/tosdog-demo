import Link from "next/link";

type HeaderVariant = "home" | "legal";

interface HeaderProps {
  variant: HeaderVariant;
}

export default function Header({ variant }: HeaderProps) {
  if (variant === "home") {
    return (
      <nav className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-zinc-900 transition-all duration-300 hover:scale-105 dark:text-zinc-50">
              TOSDog AI
            </div>
            <div className="flex gap-6">
              <a
                href="#features"
                className="cursor-pointer text-sm text-zinc-600 transition-all duration-200 hover:scale-105 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Features
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Legal variant (ToS and Privacy pages)
  return (
    <nav className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="cursor-pointer text-xl font-bold text-zinc-900 transition-all duration-300 hover:scale-105 dark:text-zinc-50">
              TOSDog AI
            </div>
          </Link>
          <div className="flex gap-6">
            <Link
              href="/"
              className="cursor-pointer text-sm text-zinc-600 transition-all duration-200 hover:scale-105 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

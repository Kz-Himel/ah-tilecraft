import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d1b2a] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-bold text-[#c9a84c] leading-none">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-[#e8dcc8]">
        Page Not Found
      </h2>

      <p className="mt-2 text-sm text-[#8a9bb0] max-w-xs leading-relaxed">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-2.5 bg-[#c9a84c] text-[#0d1b2a] text-sm font-medium rounded-md hover:bg-[#e0be6a] transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
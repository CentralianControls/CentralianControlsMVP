import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
      <div>
        <h1 className="text-6xl font-bold text-[#1a1d23]">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page not found.</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-[#0ea5e9] px-6 py-3 font-semibold text-white"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}
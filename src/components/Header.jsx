"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">DEMO Streaming</h1>
        </div>
        <div className="flex-1 flex justify-center space-x-6">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <Link href="/series" className="hover:underline">
            Series
          </Link>
          <Link href="/movies" className="hover:underline">
            Películas
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-center space-x-5">
          <Link href="#" className="hover:underline">
            Log in
          </Link>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Start your free trial
          </button>
        </div>
      </nav>
    </header>
  );
}

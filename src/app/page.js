/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function CategoryCard({ href, title, subtitle, imageSrc }) {
  return (
    <Link href={href} className="flex flex-col items-center gap-2 group">
      <div className="relative w-40 h-60 bg-gray-800 flex items-center justify-center group-hover:opacity-80 transition-opacity">
        <img
          src={imageSrc}
          alt={`${title} icon`}
          className="max-w-full max-h-full"
        />
        <span className="absolute text-white text-2xl font-bold tracking-widest">
          {title}
        </span>
      </div>
      <p className="text-gray-600">Popular {subtitle}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <div>
      <div className="bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto p-4">
          <h1 className="text-2xl font-semibold">Popular Titles</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col sm:flex-row gap-8 mt-4">
          <CategoryCard
            href="/series"
            title="SERIES"
            subtitle="Series"
            imageSrc="/prueba/assets/placeholder.png"
          />
          <CategoryCard
            href="/movies"
            title="MOVIES"
            subtitle="Movies"
            imageSrc="/prueba/assets/placeholder.png"
          />
        </div>
      </div>
    </div>
  );
}

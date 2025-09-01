"use client";

export default function Card({ item, onClick }) {
  const poster = item?.images?.["Poster Art"]?.url;

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gray-800 rounded shadow border border-transparent hover:border-white hover:opacity-80 hover:scale-105 transition"
    >
      {poster ? (
        <img
          src={poster}
          alt={item.title}
          className="w-full h-48 object-cover rounded"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/150x225/000000/FFFFFF?text=No+Image";
          }}
        />
      ) : (
        <div className="h-48 flex items-center justify-center bg-gray-700 rounded text-white text-sm">
          Sin imagen
        </div>
      )}

      <div className="mt-2 p-2">
        <p className="text-sm text-gray-100 font-semibold truncate">
          {item.title}
        </p>
        <p className="text-sm text-gray-400">{item.releaseYear}</p>
      </div>
    </div>
  );
}

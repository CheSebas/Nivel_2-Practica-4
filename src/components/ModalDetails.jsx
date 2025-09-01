"use client";
import { useEffect } from "react";

export default function ModalDetails({ isOpen, onClose, item }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // evita scroll del fondo
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const poster = item?.images?.["Poster Art"]?.url;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="bg-gray-900 max-w-3xl w-full p-6 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row gap-4">
          {poster && (
            <img
              src={poster}
              className="w-full md:w-1/3 object-cover rounded"
              alt={item.title}
            />
          )}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-white">
              {item.title}
            </h2>
            <p className="text-sm text-gray-300 mb-2">{item.description}</p>
            <p className="text-xs text-gray-400 mb-1">
              Año: {item.releaseYear}
            </p>
            <p className="text-xs text-gray-400 mb-1">
              Tipo: {item.programType}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

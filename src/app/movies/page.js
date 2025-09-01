"use client";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import ModalDetails from "../../components/ModalDetails";

const DATA_URL = "/prueba/data/sample.json";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(DATA_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const filtered = data.entries
          .filter((e) => e.programType === "movie" && e.releaseYear >= 2010)
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, 21);
        setMovies(filtered);
      })
      .catch((err) => {
        setError("Oops, something went wrong...");
        console.error("Failed to fetch data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const renderContent = () => {
    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {movies.map((item) => (
          <Card
            key={item.title}
            item={item}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto p-4">
          <h1 className="text-2xl font-semibold">Popular Movies</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">{renderContent()}</div>

      <ModalDetails
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedItem}
      />
    </div>
  );
}

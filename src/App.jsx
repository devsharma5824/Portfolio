import { useEffect, useState } from "react";
import {
  getTrendingMovies,
  getTrendingSeries,
  searchMovies,
  getImageUrl,
} from "./api/tmdb";

function App() {
  const [movies, setMovies] = useState([]);
  const [tab, setTab] = useState("movies");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  async function loadMovies() {
    try {
      setError("");
      const data = await getTrendingMovies();
      setMovies(data.results || []);
    } catch (err) {
      setError(err.message);
    }
  }

  async function loadSeries() {
    try {
      setError("");
      const data = await getTrendingSeries();
      setMovies(data.results || []);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleSearch(e) {
    e.preventDefault();

    if (!query.trim()) {
      tab === "movies" ? loadMovies() : loadSeries();
      return;
    }

    try {
      setError("");
      const data = await searchMovies(query);
      setMovies(data.results || []);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-red-950/30 to-black px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-black md:text-6xl">
            Movie<span className="text-red-500">Hub</span>
          </h1>

          <p className="mt-3 max-w-xl text-gray-400">
            Search movies and web series using TMDB API.
          </p>

          <form onSubmit={handleSearch} className="mt-8 flex max-w-2xl gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movie..."
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-red-500"
            />
            <button className="rounded-xl bg-red-600 px-6 font-bold hover:bg-red-500">
              Search
            </button>
          </form>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => {
                setTab("movies");
                setQuery("");
                loadMovies();
              }}
              className={`rounded-full px-5 py-2 text-sm font-bold ${
                tab === "movies"
                  ? "bg-red-600 text-white"
                  : "bg-white/10 text-gray-300"
              }`}
            >
              Movies
            </button>

            <button
              onClick={() => {
                setTab("series");
                setQuery("");
                loadSeries();
              }}
              className={`rounded-full px-5 py-2 text-sm font-bold ${
                tab === "series"
                  ? "bg-red-600 text-white"
                  : "bg-white/10 text-gray-300"
              }`}
            >
              Web Series
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {movies.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-red-500/50"
            >
              <img
                src={getImageUrl(item.poster_path)}
                alt={item.title || item.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="line-clamp-2 font-bold">
                  {item.title || item.name}
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  {item.release_date || item.first_air_date || "No date"}
                </p>

                <p className="mt-2 text-sm text-yellow-400">
                  ⭐ {item.vote_average?.toFixed(1) || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;

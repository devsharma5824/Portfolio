const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const TOKEN = import.meta.env.TMDB_TOKEN;

async function tmdbFetch(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`TMDB Error: ${response.status}`);
  }

  return response.json();
}

export function getTrendingMovies() {
  return tmdbFetch("/trending/movie/week?language=en-US");
}

export function getTrendingSeries() {
  return tmdbFetch("/trending/tv/week?language=en-US");
}

export function searchMovies(query) {
  return tmdbFetch(
    `/search/movie?query=${encodeURIComponent(query)}&language=en-US`,
  );
}

export function searchSeries(query) {
  return tmdbFetch(
    `/search/tv?query=${encodeURIComponent(query)}&language=en-US`,
  );
}

export function getImageUrl(path) {
  if (!path) return "https://placehold.co/500x750?text=No+Image";
  return `${IMAGE_BASE_URL}${path}`;
}

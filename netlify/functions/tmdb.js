const BASE_URL = "https://api.themoviedb.org/3";

export async function handler(event) {
  try {
    const endpoint = event.queryStringParameters.endpoint;
    const token = process.env.TMDB_TOKEN;

    if (!endpoint) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Endpoint is required" }),
      };
    }

    if (!token) {
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "TMDB_TOKEN missing" }),
      };
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Netlify function failed",
        error: error.message,
      }),
    };
  }
}

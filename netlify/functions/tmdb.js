const BASE_URL = "https://api.themoviedb.org/3";

export async function handler(event) {
  try {
    const endpoint = event.queryStringParameters.endpoint;

    const token = process.env.TMDB_TOKEN;

    if (!token) {
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "TMDB_TOKEN is missing in Netlify environment variables",
          tokenExists: false,
          tokenLength: 0,
        }),
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
      body: JSON.stringify({
        debug: {
          tokenExists: true,
          tokenLength: token.length,
          tokenStartsWith: token.slice(0, 10),
          tmdbStatus: response.status,
        },
        tmdbResponse: data,
      }),
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

const BASE_URL = "https://api.themoviedb.org/3";

export async function handler(event) {
  try {
    const endpoint = event.queryStringParameters.endpoint;

    if (!endpoint) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Endpoint is required" }),
      };
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
      },
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Netlify function failed",
        error: error.message,
      }),
    };
  }
}

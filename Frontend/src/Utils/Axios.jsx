import axios from "axios";

// Create a new instance of Axios
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://flash-tele-psychiatry.pk/api/"
      : "http://localhost:8000", // Default to localhost for development
  timeout: 10000, // Set the request timeout if needed
  headers: {
    "Content-Type": "application/json",
    // 'Authorization': `Bearer ${authToken}`,
  },
});

export default api;

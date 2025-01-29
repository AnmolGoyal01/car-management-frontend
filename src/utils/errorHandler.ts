import axios from "axios";

export const extractErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const responseText = error.response?.data;

    // Extract meaningful error message from HTML response
    const match = responseText?.match(/<pre>Error: (.*?)<br>/);
    return match ? match[1] : "An unknown error occurred";
  }
  return "An unexpected error occurred";
};

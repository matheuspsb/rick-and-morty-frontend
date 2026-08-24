import axios, { AxiosError } from "axios";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export const httpClient = axios.create({
  baseURL: API_URL,
});

httpClient.interceptors.response.use(undefined, (error: AxiosError<{ error?: string }>) => {
  const status = error.response?.status ?? 0;
  const message = error.response?.data?.error ?? error.message;
  throw new ApiError(message, status);
});

import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.com/',
});

export const setToken = (token: string): void => {
  localStorage.setItem("token", JSON.stringify(token));
};
  
export const getToken = (): string | null => {
  const token = localStorage.getItem("token");
  if (token) {
    return JSON.parse(token);
  }
  return null;
};

api.interceptors.request.use(
  (config) => {
      const token = getToken();

      if (token) {
          config.headers = {
              Authorization: `${token}`,
          };
      }
      return config;
  },
  (error) => Promise.reject(error)
);

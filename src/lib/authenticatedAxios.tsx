import axios, { CancelTokenSource } from "axios";
import localForage from "localforage";

let source: CancelTokenSource;

export const API_KEY_NAME = "GAIS_API_KEY";

export const authenticatedAxios = axios.create();

authenticatedAxios.interceptors.request.use(async (config) => {
  const token = await localForage.getItem<string>(API_KEY_NAME);

  if (!token) {
    alert("API Key not set. Please set the API Key in the settings.");
    if (source) {
      source.cancel("Token not available, request cancelled.");
    }
    source = axios.CancelToken.source();
    config.cancelToken = source.token;
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

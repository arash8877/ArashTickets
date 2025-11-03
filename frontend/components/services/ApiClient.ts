import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next?: string;
  results: T[];
}

//------------------------- APIClient Class -------------------------
const axiosInstance = axios.create({
  baseURL: "http://localhost:5086/api",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // Fetch all items (optionally with filters, pagination, etc.)
  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  // Fetch a single item by ID
  get = (id: number | string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };

  // Create a new item
  post = (data: T) => {
    return axiosInstance
      .post<T>(this.endpoint, data)
      .then((res) => res.data);
  };

  // Update an existing item
  put = (id: number | string, data: Partial<T>) => {
    return axiosInstance
      .put<T>(`${this.endpoint}/${id}`, data)
      .then((res) => res.data);
  };

  // Delete an item
  delete = (id: number | string) => {
    return axiosInstance.delete(`${this.endpoint}/${id}`);
  };
}

export default APIClient;

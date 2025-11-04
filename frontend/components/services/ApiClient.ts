import axios, { AxiosRequestConfig } from "axios";


//------------------------- Axios Instance -------------------------
const axiosInstance = axios.create({
  baseURL: "http://localhost:5086/api",
});

//------------------------- Functional API Client -------------------------

export const getAll = async <T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T[]> => {
  const res = await axiosInstance.get<T[]>(endpoint, config);
  return res.data;
};

export const getOne = async <T>(endpoint: string, id: number | string): Promise<T> => {
  const res = await axiosInstance.get<T>(`${endpoint}/${id}`);
  return res.data;
};

export const createItem = async <T>(endpoint: string, data: T): Promise<T> => {
  const res = await axiosInstance.post<T>(endpoint, data);
  return res.data;
};

export const updateItem = async <T>(
  endpoint: string,
  id: number | string,
  data: Partial<T>
): Promise<T> => {
  const res = await axiosInstance.put<T>(`${endpoint}/${id}`, data);
  return res.data;
};

export const deleteItem = async (endpoint: string, id: number | string): Promise<void> => {
  await axiosInstance.delete(`${endpoint}/${id}`);
};

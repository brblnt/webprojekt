import axios from "axios";

export const apiClient = async <T>(
  endpoint: string,
  params?: Record<string, any>
): Promise<T> => {
  try {
    const response = await axios.get<T>(`${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

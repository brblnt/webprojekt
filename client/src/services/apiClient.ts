import axios, { AxiosRequestConfig } from "axios";

export const apiClient = async <T>(
  endpoint: string,
  token?: string,
  params?: Record<string, any>
): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (token) {
      config.headers = {
        ...config.headers,
        'AuthToken': token,
      };
    }

    const response = await axios.get<T>(endpoint, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


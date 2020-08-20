import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { loadState } from './localStorage';

interface Response<T> {
  data: T;
}

function mapResponse<T>(response: Response<T>): T {
  return response.data;
}

export const defaultHeaders = {
  'content-type': 'application/json',
};

export const authHeader = () => ({
  Authorization: loadState().user.token,
});

export default async function fetchApi<T>(
  endpoint: string,
  options: AxiosRequestConfig,
) {
  const baseUrl = process.env.REACT_APP_API_URL || '';

  return axios(`${baseUrl}${endpoint}`, options)
    .then((response: AxiosResponse<any>) => {
      const responseData = response.data.data
        ? mapResponse<T>(response.data)
        : ((response as unknown) as T);
      return responseData;
    })
    .catch((error) => {
      return error.response.data;
    });
}

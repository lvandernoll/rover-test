import { useState, useCallback, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface Response<T> {
  data: T;
}

function mapResponse<T>(response: Response<T>): T {
  return response.data;
}

export default function useFetch<T>(url: string) {
  const baseUrl = process.env.REACT_APP_API_KEY || '';
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState(null);
  const [options, setOptions] = useState<AxiosRequestConfig>({});

  const doFetch = useCallback((options?: AxiosRequestConfig) => {
    if (options) {
      setOptions(options);
    }
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    axios(`${baseUrl}${url}`, options)
      .then((response: AxiosResponse<any>) => {
        setIsLoading(false);
        const responseData = response.data.data
          ? mapResponse<T>(response.data)
          : ((response as unknown) as T);
        setResponse(responseData);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.response.data);
      });
  }, [isLoading, url, options, baseUrl]);

  return [{ response, isLoading, error }, doFetch] as const;
}

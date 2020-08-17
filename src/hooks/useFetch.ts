import { useState, useCallback, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.headers.common['Accept'] = 'application/json';

interface Response<T> {
  data: T;
}

function mapResponse<T>(response: Response<T>): T {
  return response.data;
}

export default function useFetch<T>(endpoint: string) {
  const baseUrl: string = process.env.REACT_APP_API_URL || '';
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<any>(null);
  const [code, setCode] = useState<number>();
  const [options, setOptions] = useState<AxiosRequestConfig>({});

  const doFetch = useCallback(
    (fetchOptions: AxiosRequestConfig = {}, withoutAuth?: boolean) => {
      if (!withoutAuth) {
        fetchOptions.headers['Authorization'] = localStorage.token;
      }
      setOptions(fetchOptions);
      setIsLoading(true);
    },
    [],
  );

  useEffect(() => {
    if (isLoading) {
      axios(`${baseUrl}${endpoint}`, options)
        .then((response: AxiosResponse<any>) => {
          setIsLoading(false);
          const responseData = response.data.data
            ? mapResponse<T>(response.data)
            : ((response as unknown) as T);
          setResponse(responseData);
          setCode(code);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
          setCode(code);
        });
    }
  }, [isLoading, endpoint, options, code, baseUrl]);

  return [{ response, isLoading, error }, doFetch] as const;
}

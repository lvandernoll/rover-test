import fetchApi, { defaultHeaders, authHeader } from 'utils/fetchApi';
import { LoginResponse, ErrorResponse, UserAuth } from 'interfaces';

export const fetchToken = (
  userAuth: UserAuth,
): Promise<LoginResponse | ErrorResponse> => {
  return fetchApi<LoginResponse | ErrorResponse>('/login', {
    method: 'POST',
    headers: {
      ...defaultHeaders,
    },
    data: {
      email: userAuth.email + '@competa.com',
    },
  });
};

export const fetchUser = (): Promise<LoginResponse | ErrorResponse> => {
  return fetchApi<LoginResponse | ErrorResponse>('/users/me', {
    method: 'GET',
    headers: {
      ...defaultHeaders,
      ...authHeader(),
    },
  });
};

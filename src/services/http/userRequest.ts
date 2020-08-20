import fetchApi from 'utils/fetchApi';
import { LoginResponse, ErrorResponse, UserAuth } from 'interfaces';

export const fetchToken = (
  userAuth: UserAuth,
): Promise<LoginResponse | ErrorResponse> => {
  return fetchApi<LoginResponse | ErrorResponse>('/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    data: {
      email: userAuth.email + '@competa.com',
    },
  });
};

export const fetchUser = (
  token: string,
): Promise<LoginResponse | ErrorResponse> => {
  return fetchApi<LoginResponse | ErrorResponse>('/users/me', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: token,
    },
  });
};

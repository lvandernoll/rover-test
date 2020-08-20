import fetchApi, { defaultHeaders, authHeader } from 'utils/fetchApi';
import { Assignment, ErrorResponse, AssignmentRequest } from 'interfaces';

export const fetchAssignments = () => {
  return fetchApi<Assignment[] | ErrorResponse>('/assignments', {
    headers: {
      ...defaultHeaders,
      ...authHeader(),
    },
  });
};

export const postAssignments = (assignmentData: AssignmentRequest) => {
  return fetchApi<Assignment[] | ErrorResponse>('/assignments', {
    method: 'POST',
    headers: {
      ...defaultHeaders,
      ...authHeader(),
    },
    data: {
      ...assignmentData,
    },
  });
};

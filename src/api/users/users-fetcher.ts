import { BASE_URL } from "./../../constants";
import fetcher from "./../base-fetcher";

export interface GetUsersParams {
  q: string;
}

const getUsers: Promise<any> = (params: GetUsersParams) => {
  const queryParams = new URLSearchParams({
    q: params.q,
    select: "email,firstName,lastName,image",
    limit: "20",
  }).toString();

  return fetcher(`${BASE_URL}/users/search?${queryParams}`);
};

export { getUsers };

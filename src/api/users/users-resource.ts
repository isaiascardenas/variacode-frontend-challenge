import { getUsers, GetUsersParams } from "./users-fetcher";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};

class UsersResource {
  static async getUsers(q: string): User[] | null {
    const params: GetUsersParams = {
      q: q,
    };

    const response: Response = await getUsers(params);
    return response.users as User[];
  }
}

export { UsersResource, User };

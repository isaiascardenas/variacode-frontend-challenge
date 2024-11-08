import { searchUsers, GetUsersParams } from "./users-fetcher";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};

interface FecthUsersResponse {
  users: User[];
}

class UsersResource {
  static async getUsers(q: string): Promise<User[] | null> {
    const params: GetUsersParams = {
      q: q,
    };

    const response: FecthUsersResponse = await searchUsers(params);
    return response.users as User[];
  }
}

export { UsersResource, type User };

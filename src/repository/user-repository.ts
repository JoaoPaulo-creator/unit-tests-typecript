import { User } from "../domain/entities/User";

export interface IUserRepository {
  create(user: User): Promise<User>;
  findAll(): Promise<User[] | null>;
  findByEmail(email: string): Promise<User | null>;
}

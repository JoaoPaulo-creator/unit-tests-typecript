import { User } from "../../src/domain/entities/User";
import { IUserRepository } from "../../src/repository/user-repository";

export class InMememoryUserRepository implements IUserRepository {
  items: User[] = [];

  async create(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<User[] | null> {
    return this.items.length === 0 ? null : this.items;
  }

  async findByEmail(email: string): Promise<User | null> {
    const userEmail = this.items.find((u) => u.email === email);

    if (!userEmail) {
      return null;
    }

    return userEmail;
  }
}

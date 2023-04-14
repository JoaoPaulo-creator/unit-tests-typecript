import { User } from "../domain/entities/User";
import { IUserRepository } from "../repository/user-repository";

export class CreateUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: UserData): Promise<User> {
    const emailExists = await this.userRepository.findByEmail(data.email);
    if (emailExists) throw new Error("Email already exists");
    const user = await User.create(data);
    return user;
  }
}

interface UserData {
  name: string;
  password: string;
  email: string;
}

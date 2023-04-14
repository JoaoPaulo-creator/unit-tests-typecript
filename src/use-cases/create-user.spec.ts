import { describe, expect, it } from "vitest";
import { InMememoryUserRepository } from "../../tests/repostiory/in-memory-user-repository";
import { User } from "../domain/entities/User";
import { CreateUser } from "./create-user";

describe("Testing user creation", () => {
  it("should create a valid user", async () => {
    const userRepository = new InMememoryUserRepository();

    const newUser = await User.create({
      name: "Joao",
      password: "123456",
      email: "joao@teste.com",
    });

    userRepository.items.push(newUser);
    const create = new CreateUser(userRepository);
    const response = await create.execute({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    });

    expect(response).toBeTruthy();
  });
});

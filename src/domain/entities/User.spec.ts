import { describe, expect, it } from "vitest";
import { User } from "./User";

describe("User entitiy", () => {
  it("should be able to create a user with valid email", async () => {
    const user = await User.create({
      name: "Joao",
      email: "joao@teste.com",
      password: "123346",
    });

    expect(user).toBeInstanceOf(User);
    expect(user.email).toBeTruthy();
  });

  it("should be able to create a user with valid password", async () => {
    const user = await User.create({
      name: "Joao",
      email: "joao@teste.com",
      password: "123346",
    });

    expect(user).toBeInstanceOf(User);
    expect(user.password).toBeTruthy();
  });

  it("should not be able to create a user with an invalid email", async () => {
    expect(async () => {
      return await User.create({
        name: "Joao",
        email: "joao_teste.com",
        password: "123",
      });
    }).rejects.toThrow();
  });

  it("should not be able to create a user with an invalid password", async () => {
    expect(() => {
      return User.create({
        name: "Joao",
        email: "joao@teste.com",
        password: "123",
      });
    }).rejects.toThrow();
  });
});

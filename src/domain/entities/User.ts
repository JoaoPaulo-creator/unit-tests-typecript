import { Entity } from "../../core/domain/Entity";

type UserProps = {
  name: string;
  email: string;
  password: string;
};

export class User extends Entity<UserProps> {
  public props: UserProps;

  private constructor(userProps: UserProps, id?: string) {
    super(userProps, id);
    const { email, password } = userProps;

    if (!this.isEmailValid(email)) throw new Error("Email is not valid");
    if (password.length < 5) {
      throw new Error("Password must be grater than 5 chars");
    }
    this.props = userProps;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  isEmailValid(email: string) {
    return String(email)
      .toLocaleLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  static async create(props: UserProps, id?: string) {
    const user = new User(props, id);
    return user;
  }
}

import { createNewUser } from "../user";
import * as user from "../user";

describe("user handler", () => {
  it("should do some thing when something happens", () => {
    expect(1).toBe(1);
  });

  //   it("should create a new user", async () => {
  //     const req = { body: { username: "hello", password: "h1" } };
  //     const res = {
  //       json({ token }) {
  //         expect(token).toBeTruthy();
  //       },
  //     };

  //     await user.createNewUser(req, res, () => {});
  //   });
});

describe("user handler 1", () => {
  it("should create a new user", async () => {
    const req = { body: { username: "hello1", password: "h1" } };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };

    await user.createNewUser(req, res, () => {});
  });
});

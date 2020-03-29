import { test } from "@oclif/test";

describe("init command works ok", () => {
  test
    .stdout()
    .command(["init"]) // the command
    .it("runds dev", ctx => {
      expect(ctx.stdout).toBe("hello world");
    });

  test
    .stdout()
    .command(["init", "--name", "jeff"])
    .it("runs dev --name jeff", ctx => {
      expect(ctx.stdout).toBe("hello jeff");
    });
});

import { test } from "@oclif/test";

describe("init command works ok", () => {
  test
    .stdout()
    .command(["init"]) // the command
    .it("runs init", ctx => {
      expect(ctx.stdout).toBe("hello people from ./src/index.ts\n");
    });

  test
    .stdout()
    .command(["init", "--name", "jeff"])
    .it("runs init --name jeff", ctx => {
      expect(ctx.stdout).toBe("hello jeff from ./src/index.ts\n");
    });
});

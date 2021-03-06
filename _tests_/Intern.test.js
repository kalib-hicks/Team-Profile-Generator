const Intern = require("../lib/Intern");

test("github test", () => {
    const testValue = "GitHubUser";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
  });

  test("get intern role", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });

  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });
  
const Manager = require("../lib/Manager");

test("github test", () => {
    const testValue = "GitHubUser";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
  });

  test("get manager role", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });

  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });
  
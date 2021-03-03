const Employee = require("../lib/Employee");

  test("checks name constructor", () => {
    const Name = "Team member name";
    const a = new  Employee("Foo", 1, "test@test.com", Name);
    expect(typeof(a)).toBe("object");
  });
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const a = new  Employee("Foo", 1, "test@test.com", "GitHubUser");
    expect(a.getRole()).toBe(testValue);
  });
  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const a = new  Employee("Foo", 1, "test@test.com", testValue);
    expect(a.getGithub()).toBe(testValue);
  });
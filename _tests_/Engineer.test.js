const Engineer = require("../lib/Engineer");

test("checks name constructor", () => {
  const Name = "Team member name";
  const a = new  Engineer("Foo", 1, "test@test.com", Name);
  expect(typeof(a)).toBe("object");
});
test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const a = new  Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(a.getRole()).toBe(testValue);
});
test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const a = new  Engineer("Foo", 1, "test@test.com", testValue);
  expect(a.getGithub()).toBe(testValue);
});
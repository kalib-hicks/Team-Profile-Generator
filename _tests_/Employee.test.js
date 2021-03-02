const Employee = require("../lib/Employee");

test('created an employee object', () => {
    const employee = new Employee('Kalib');

    expect(employee.name).toBe('Kalib');
    expect(employee.email).toBe('kalib.hicks@gmail.com');
    expect(employee.id).toBe('1234567890');
});

test("gets employee name value", () => {
    const Employee = new Employee('Kalib');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});
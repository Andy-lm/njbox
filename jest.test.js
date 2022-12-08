test("test common matcher", () => {
  expect(2 + 2).toBe(4);
  expect(2 + 2).not.toBe(5);
});

test("test true of false", () => {
  expect(0).toBeFalsy();
  expect(1).toBeTruthy();
});

test("test Greater or Less", () => {
  expect(3).toBeGreaterThan(2);
  expect(3).toBeLessThan(4);
});

test("test object value is equal", () => {
  expect({ name: "Andy" }).toEqual({ name: "Andy" });
});

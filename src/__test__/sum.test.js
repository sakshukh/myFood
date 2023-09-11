import { sum } from "../component/sum";

test("sum should calculate the sum of two numbers and return it", () => {
  const result = sum(2, 5);

  // Assertion
  expect(result).toBe(7);
});

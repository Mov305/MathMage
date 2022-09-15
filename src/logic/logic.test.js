import calculate from "./calculate";
import operate from "./operate";

test("AC button", () => {
  const obj = {
    total: "0",
    next: "0",
    operation: null,
  };
  const buttonName = "AC";
  const result = calculate(obj, buttonName);
  expect(result).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});
import { validateCard } from "../validate";

const expectObject = [
  { value: "4716204807006130", expected: true},
  { value: "4716204807006131", expected: false},
  { value: "5296852682956160", expected: true},
  { value: "4716204807026130", expected: false}
];

test.each(expectObject)('Проверка корректной валидности карт', ({ value, expected }) => {
  const result = validateCard(value)

  expect(result).toBe(expected);
});
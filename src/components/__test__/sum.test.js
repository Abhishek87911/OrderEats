import { sum1 } from "../sum1"



test("sum function should calculate the sum of two numbers",() =>{
  const result = sum1(3,4);
  //Assertion
  expect(result).toBe(7);
})
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

type Math = (num: number) => (a: number) => number;

export const zero = (math?: (a: number) => number) => {
  return math === undefined ? 0 : math(0);
};

export const one = (math?: (a: number) => number) => {
  return math === undefined ? 1 : math(1);
};

export const two = (math?: (a: number) => number) => {
  return math === undefined ? 2 : math(2);
};

export const three = (math?: (a: number) => number) => {
  return math === undefined ? 3 : math(3);
};

export const four = (math?: (a: number) => number) => {
  return math === undefined ? 4 : math(4);
};

export const five = (math?: (a: number) => number) => {
  return math === undefined ? 5 : math(5);
};

export const six = (math?: (a: number) => number) => {
  return math === undefined ? 6 : math(6);
};

export const seven = (math?: (a: number) => number) => {
  return math === undefined ? 7 : math(7);
};

export const eight = (math?: (a: number) => number) => {
  return math === undefined ? 8 : math(8);
};

export const nine = (math?: (a: number) => number) => {
  return math === undefined ? 9 : math(9);
};

export const plus: Math = (num: number) => {
  return (a: number) => a + num;
};

export const minus: Math = (num: number) => {
  return (a: number) => a - num;
};

export const times: Math = (num: number) => {
  return (a: number) => a * num;
};

export const dividedBy: Math = (num: number) => {
  return (a: number) => Math.trunc(a / num);
};

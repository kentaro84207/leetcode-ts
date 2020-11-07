// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

export const narcissistic = (value: number): boolean => {
  const digit = value.toString().length;
  const sum = Array.from(String(value)).reduce((a, c)=>{
    return a + Math.pow(Number(c), digit);
  }, 0)
  return value === sum;
};

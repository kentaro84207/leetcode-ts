// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

export const queueTime = (customers: number[], n: number): number => {
  const registers: number[] = [];
  for (let i = 0; i < n; i++) {
    registers[i] = 0;
  }
  customers.forEach((x) => {
    const fastest = registers.indexOf(Math.min(...registers));
    registers[fastest] += x;
  });
  return Math.max(...registers);
};

// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

export const findNb = (m: number): number => {
  let n = 1;
  let vol = 0;
  while(m >= vol ){
    vol = vol + n ** 3;
    if(m === vol) return n
    n++
  }
  return -1
};

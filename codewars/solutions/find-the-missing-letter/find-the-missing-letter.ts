// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

export const findMissingLetter = (array: string[]): string => {
  const len = array.length
  const c = array[0].charCodeAt(0);
  const alphabets = Array.apply(null, new Array(len)).map((_, i) => {
    return String.fromCharCode(c + i);
  });
  let ans = ''

  for (let i = 0;i < len;i++) {
    if (!array.includes(alphabets[i])) {
      return ans = alphabets[i];
    }
  }

  return ans;
};

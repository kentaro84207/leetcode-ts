// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

export const encrypt = (text: string | null, n: number): string | null => {
  if (text === null) return null;
  if (n <= 0) return text;
  let textArr = text.split("");
  for (let i = 0; i < n; i++) {
    const new1Arr: string[] = [];
    const new2Arr: string[] = [];
    textArr.forEach((x, j) => {
      if (j % 2 !== 0) {
        new1Arr.push(x);
      } else {
        new2Arr.push(x);
      }
    });
    textArr = new1Arr.concat(new2Arr);
  }
  return textArr.join("");
};

export const decrypt = (
  encryptedText: string | null,
  n: number,
): string | null => {
  if (encryptedText === null) return null;
  if (n <= 0) return encryptedText;
  const helper = (str: string) => {
    let odds = str.slice(0, (str.length / 2));
    let evens = str.slice((str.length / 2));
    let output = "";

    for (let i = 0; i < str.length; i++) {
      if (i % 2) {
        output += odds[0];
        odds = odds.slice(1);
      } else {
        output += evens[0];
        evens = evens.slice(1);
      }
    }

    return output;
  };

  for (let i = 0; i < n; i++) {
    encryptedText = helper(encryptedText);
  }

  return encryptedText;
};

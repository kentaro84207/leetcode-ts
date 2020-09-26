// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

export const countSmileys = (arr: string[]): number => {
  return arr.filter((x) => {
    if (x.length > 3) return false;
    const eye = x.slice(0, 1);
    const mouth = x.slice(-1);
    const hasNose = x.length >= 3;
    const isValidEye = eye === ":" || eye === ";";
    const isValidMouth = mouth === ")" || mouth === "D";
    if (hasNose) {
      const nose = x.slice(1, 2);
      const isValidNose = nose === "-" || nose === "~";
      return isValidEye && isValidNose && isValidMouth;
    }
    return isValidEye && isValidMouth;
  }).length;
};

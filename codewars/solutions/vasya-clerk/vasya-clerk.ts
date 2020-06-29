// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript

export const tickets = (peopleInLine: number[]): "YES" | "NO" => {
  let earnings = 0;
  let d25 = 0;
  let d50 = 0;
  let d100 = 0;
  for (let i = 0;i < peopleInLine.length;i++) {
    if (peopleInLine[i] - 25 > earnings) return "NO";
    if (peopleInLine[i] === 25) d25++;
    if (peopleInLine[i] === 50) {
      if (d25 === 0) return "NO";
      d50++;
      d25--;
    }
    if (peopleInLine[i] === 100) {
      if ((d50 === 0 && d25 < 3)) return "NO";
      if ((d50 > 0 && d25 === 0)) return "NO";
      d100++;
      if (d50 > 0) {
        d50--;
        d25--;
      } else if (d25 >= 3) {
        d25 = d25 - 3;
      }
    }
    earnings += 25;
  }
  return "YES";
};

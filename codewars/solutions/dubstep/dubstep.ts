// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript

export const songDecoder = (song: string): string => {
  return song.split("WUB").filter(x => x !== "").join(" ").trim();
};

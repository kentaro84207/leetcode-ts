// https://leetcode.com/problems/two-sum/

export const numUniqueEmails = (emails: string[]): number => {
  const emailSet = new Set<string>();
  for (let i = 0; i < emails.length; i++) {
    const arr = emails[i].split('@');
    arr[0] = arr[0].split('.').join('');
    const plusIndex = arr[0].indexOf('+');
    if (plusIndex !== -1) arr[0] = arr[0].slice(0, plusIndex);
    emailSet.add(arr.join('@'));
  }
  return emailSet.size;
};

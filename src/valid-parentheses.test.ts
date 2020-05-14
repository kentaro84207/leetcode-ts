import { isValid } from './valid-parentheses';

describe('20. Valid Parentheses', () => {
  test('#1', () => {
    expect(isValid('()')).toEqual(true);
  });

  test('#2', () => {
    expect(isValid('()[]{}')).toEqual(true);
  });

  test('#3', () => {
    expect(isValid('(]')).toEqual(false);
  });

  test('#4', () => {
    expect(isValid('([)]')).toEqual(false);
  });

  test('#5', () => {
    expect(isValid('{[]}')).toEqual(true);
  });
})

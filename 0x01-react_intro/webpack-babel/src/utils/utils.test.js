import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns correct year', () => {
  const date = new Date();
  const currYear = date.getFullYear();
  expect(getFullYear()).toBe(currYear);
});

test('getFooterCopy returns the correct string', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the correct string', () => {
  expect(getLatestNotification())
    .toBe('<strong>Urgent requirement</strong> - complete by EOD');
});

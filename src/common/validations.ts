export const isPresent = (value: string): boolean =>
  value !== '' && value !== null && typeof value !== undefined;

export const isValidEmail = (value: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

export const isLengthAtLeast = (value: string, minLength: number): boolean =>
  value.length >= minLength;

export const isLengthAtMost = (value: string, maxLength: number): boolean =>
  value.length <= maxLength;

export const containsAtLeastNCharacters = (
  value: string,
  n: number,
  characterSet: string
): boolean => {
  let sum = 0;

  for (const character of characterSet) {
    if (isNaN(+character)) {
      sum += (value.match(new RegExp('\\' + character, 'g')) || []).length;
    } else {
      sum += (value.match(new RegExp(character, 'g')) || []).length;
    }
  }

  return sum >= n;
};

const Randomizer = (str: string): string => {
  const array = str.split("");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
};
export const numbers = Randomizer("0123456789");
export const upperCaseLetters = Randomizer("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
export const lowerCaseLetters = Randomizer("abcdefghijklmnopqrstuvwxyz");
export const specialLetters = Randomizer("!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é");

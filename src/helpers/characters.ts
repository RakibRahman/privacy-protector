const Randomizer = (str: string): string => {
  const newStr = str.split("");
  return newStr.sort(() => Math.random() - 0.5).join("");
};
export const numbers = Randomizer("0123456789");
export const upperCaseLetters = Randomizer("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
export const lowerCaseLetters = Randomizer("abcdefghijklmnopqrstuvwxyz");
export const specialLetters = Randomizer("!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é");

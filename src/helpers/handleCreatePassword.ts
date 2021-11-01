export const handleCreatePassword = (
  generatedPassword: string,
  range: number
): string => {
  let password = "";
  const passwordLength = generatedPassword.length;

  for (let i = 0; i < range; i++) {
    const passwordIndex = Math.round(Math.random() * passwordLength);
    password += generatedPassword.charAt(passwordIndex);
  }
  return password;
};

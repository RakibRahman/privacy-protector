import { useState, useEffect } from "react";

const regExpWeak = /[a-z]/;
const regExpMedium = /\d+/;
const regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

const oneLowerCaseLetter = /(?=.+[a-z])/;
const oneUpperCaseLetter = /(?=.+[A-Z])/;
const oneDigit = /(?=.+[0-9])/;
const oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
const minimumCharacters = /(?=.{8,})/;

const usePasswordChecker = (str: string) => {
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  useEffect(() => {
    const size = str.length;
    if (
      size <= 6 &&
      (regExpWeak.test(str) || regExpMedium.test(str) || regExpStrong.test(str))
    ) {
      setPasswordStrength("weak");
    }
    if (
      size >= 6 &&
      ((regExpWeak.test(str) && regExpMedium.test(str)) ||
        (regExpMedium.test(str) && regExpStrong.test(str)) ||
        (regExpWeak.test(str) && regExpStrong.test(str)))
    ) {
      setPasswordStrength("medium");
    }
    if (
      size >= 9 &&
      regExpWeak.test(str) &&
      regExpMedium.test(str) &&
      regExpStrong.test(str)
    ) {
      setPasswordStrength("strong");
    }

    if(oneLowerCaseLetter.test(password) &&
    oneUpperCaseLetter.test(password) &&
    oneDigit.test(password) &&
    oneSpecialCharacter.test(password) &&
    minimumCharacters.test(password))
  }, [str, passwordStrength]);
  return { passwordStrength };
};
export default usePasswordChecker;

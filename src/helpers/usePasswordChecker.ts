import { useState, useEffect } from "react";

const regExpWeak = /[a-z]/;
const regExpMedium = /\d+/;
const regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

const oneLowerCaseLetter = /(?=.+[a-z])/;
const oneUpperCaseLetter = /(?=.+[A-Z])/;
const oneDigit = /(?=.+[0-9])/;
const oneSpecialCharacter = /(?=.+[!,@,#,$,%,^,&,*,?,_,~,-,(,)])/;

const usePasswordChecker = (str: string) => {
  const [passwordStrength, setPasswordStrength] = useState<string>("");
  useEffect(() => {
    const size = str.length;
    if (
      size < 8 &&
      (regExpWeak.test(str) || regExpMedium.test(str) || regExpStrong.test(str))
    ) {
      setPasswordStrength("weak");
    }
    if (size >= 8 && oneLowerCaseLetter.test(str) && oneDigit.test(str)) {
      setPasswordStrength("medium");
    }
    if (
      size > 8 &&
      size < 16 &&
      regExpWeak.test(str) &&
      oneLowerCaseLetter.test(str) &&
      oneUpperCaseLetter.test(str) &&
      oneDigit.test(str)
    ) {
      setPasswordStrength("strong");
    }

    if (
      size >= 16 &&
      oneLowerCaseLetter.test(str) &&
      oneUpperCaseLetter.test(str) &&
      oneDigit.test(str) &&
      oneSpecialCharacter.test(str)
    ) {
      setPasswordStrength("best");
    }
  }, [str, passwordStrength]);
  return { passwordStrength };
};
export default usePasswordChecker;

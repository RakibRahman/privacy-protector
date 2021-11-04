import { useState, useEffect } from "react";
import { Password } from "../components/Password";
const regExpWeak = /[a-z]/;
const regExpMedium = /\d+/;
const regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

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
      size > 6 &&
      size <= 8 &&
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
    console.log(passwordStrength);
  }, [str, passwordStrength]);
  return { passwordStrength };
};
export default usePasswordChecker;

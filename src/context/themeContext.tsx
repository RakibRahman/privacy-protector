import React, { useContext, createContext, FC } from "react";
import { useColorModeValue } from "@chakra-ui/react";

interface ThemeProps {
  color: any;
  bg: any;
}

export const themeContext = createContext({} as ThemeProps);

export function useTheme() {
  return useContext(themeContext);
}

export const ThemeProvider: FC = ({ children }) => {
  const bg = useColorModeValue("#36C9C6", "#14591D");
  const color = useColorModeValue("gray.200", "#f5f5f5");
  

  const value: ThemeProps = { bg, color,  };
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};

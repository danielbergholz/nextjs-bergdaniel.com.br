import React, { createContext, useState, useCallback, useContext } from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';

interface ThemeContextData {
  theme: 'light' | 'dark';
  changeTheme(): void;
  lockScroll: boolean;
  lock(lockBool: boolean): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [lockScroll, setLockScroll] = useState(false);

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const changeTheme = useCallback(() => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [theme]);

  const lock = useCallback(
    (lockBool: boolean) => {
      if (lockBool) {
        setLockScroll(!lockScroll);
      } else {
        setLockScroll(lockBool);
      }
    },
    [lockScroll]
  );

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, lockScroll, lock }}>
      <GlobalStyle theme={theme} lock={lockScroll} />
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}

// EK HI FILE MAI KAR DIA PURA AUR CUSTOM HOOK BHI BNA LITYA

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){  // custom hooks
    return useContext(ThemeContext)
} 
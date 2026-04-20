"use client";
import { ThemeProvider } from "next-themes";
export const NextThemeProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;

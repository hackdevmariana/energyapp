import React from "react";
import AppNavigator from "../src/navigation/AppNavigator";
import { ThemeProvider } from "./theme";

export default function Index() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}

import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export const lightTheme = {
  ...MD3LightTheme, // ✅ Ahora está correctamente importado
  colors: {
    ...MD3LightTheme.colors,
    background: "#fafafa",
    text: "#0c0918",
    primary: "#463beb",
    secondary: "#eda71a",
    income: "#128c5b",
    expenses: "#db2c2c",
    nowhite: "#fafafa",
    noblack: "#0c0918",
  },
  typography: {
    general: {
      fontFamily: "Urbanist",
      fontSize: 16,
      fontWeight: "400",
    },
    featured: {
      fontFamily: "Anton",
      fontSize: 20,
      fontWeight: "700",
    },
  },
};

export const darkTheme = {
  ...MD3DarkTheme, // ✅ También correctamente importado
  colors: {
    ...MD3DarkTheme.colors,
    background: "#0c0918",
    text: "#fafafa",
    primary: "#463beb",
    secondary: "#eda71a",
    income: "#128c5b",
    expenses: "#db2c2c",
    nowhite: "#fafafa",
    noblack: "#0c0918",
  },
  typography: {
    general: {
      fontFamily: "Urbanist",
      fontSize: 16,
      fontWeight: "400",
    },
    featured: {
      fontFamily: "Anton",
      fontSize: 20,
      fontWeight: "700",
    },
  },
};

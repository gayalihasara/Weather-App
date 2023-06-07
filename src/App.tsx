import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./app.styled";
import { AppStore } from "./store/store";
import { darkTheme, lightTheme } from "./theme";
import { routes } from "./routes";
import Login from "./components/Login/Login";

const App: React.FC = () => {
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <GlobalStyles />
        
          <Routes>
            <Route path="/" element={<Login />} />
            {routes.map(({ element, path, name }) => (
              <Route
                key={name}
                path={path}
                element={element}
              />
            ))}
          </Routes>
        
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

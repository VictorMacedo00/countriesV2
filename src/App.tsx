import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Countrie from "./components/Countrie/Countrie";
import Header from "./components/Header/Header";
import Homepage from "./components/Hompage/Homepage";
import { ThemeProvider } from "styled-components";
import { Themes } from "./themes";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<boolean>(false);

  const switchTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? Themes.lightTheme : Themes.darkTheme}>
      <div className="App">
        <Header theme={theme} switchTheme={switchTheme} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage theme={theme} />} />
            <Route path="/countrie/:name" element={<Countrie />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

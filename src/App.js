import React from "react";
import { AppWrapper } from "./components/styled-components";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import FeaturePage from "./components/FeaturePage";
import theme from "./utils/theme";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import DialogBox from "./components/DialogBox";

/*<Helmet><title>Illustrator | Graphic Desiger | Eddie Lopez | Fresno CA</title>*/

function App() {



  return (
    <ThemeProvider theme={theme}>
      <DialogBox/>
      <AppWrapper className="App">
        <Navigation />
        <div className="right">
          <Routes>
            <Route
              path="/:category/:id"
              element={<FeaturePage/>}
            />
            <Route path="/:category" element={<Gallery />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

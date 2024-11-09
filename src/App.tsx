import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {useDarkMode} from "usehooks-ts";
import AppContext from "./AppContext.ts";
import Content from "./Content.tsx";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import {lightTheme,darkTheme} from "./styles/themes.ts";

function App() {

    const darkMode = useDarkMode({defaultValue: true});
    return (
      <AppContext.Provider value={darkMode}>
          <ThemeProvider theme={darkMode.isDarkMode ? darkTheme : lightTheme}>
              <GlobalStyles />
              <div className="App">
                  <BrowserRouter>
                      <Content />
                  </BrowserRouter>
              </div>
          </ThemeProvider>
      </AppContext.Provider>
    );


}


export default App;

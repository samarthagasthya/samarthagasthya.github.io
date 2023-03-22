import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import AppContext from './AppContext';
import Main from './Main';
import GlobalStyles from "./styles/GlobalStyles";
import {lightTheme,darkTheme} from "./styles/themes";

function App() {
  window.matchMedia=null;
  const darkMode = useDarkMode(true);
  return (
    <AppContext.Provider value={{darkMode}}>
      <ThemeProvider theme={darkMode.value?darkTheme:lightTheme}>
        <GlobalStyles />
        <div className='App'>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;

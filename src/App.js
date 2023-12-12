/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
/*
import React from 'react';
import Footer from './Components/Footer';
import Header from "./Components/Header";
import Home from './Components/Home';
import Main from './Components/Main';
function App() {
  return (
    <div >
      <h1 ><Header /></h1>
      
      <Home />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
*/

// dark mode code by using @materialui
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LetterAvatars from './LetterAvatars';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
      <br />
      <LetterAvatars/>
    </ThemeProvider>
    
    
  );
}

export default App;

import Layout from './layout/Layout';
import Profile from './components/Profile';
import Experience from './components/Experience';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme.js';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`

function App() {

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp>
      <GlobalStyles/>
      <Layout/>
      <Profile/>
      <Experience/>
      <button onClick={() => themeToggler()}>Dark Mode</button>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

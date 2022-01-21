import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/Global';
import theme from './styles/theme'; 
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projetos" element={<Projects />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { Home } from './pages/Home';
import { ThemeProvider } from './hooks/useTheme';

import { GlobalStyle } from './styles/theme';

function App() {
  return (    
    <ThemeProvider>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;

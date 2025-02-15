import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App.tsx';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'linear-gradient(to bottom right, cyan.50, teal.50, blue.50)',
        minHeight: '100vh'
      }
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
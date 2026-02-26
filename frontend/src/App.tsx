import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Yardage from './pages/Yardage';
import Guides from './pages/Guides';
import Calculators from './pages/Calculators';
import Types from './pages/Types';

const theme = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
      600: '#3182ce',
      500: '#4299e1',
      400: '#63b3ed',
      300: '#90cdf4',
      200: '#bee3f8',
      100: '#ebf8ff',
    },
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box minH="100vh" minW="100vw" >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/yardage" element={<Yardage />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/types" element={<Types />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Yardage from './pages/Calculators/Yardage';
import Calculators from './pages/Calculators/Calculators';
import HandNeedles from './pages/Tools/HandNeedles';
import MachineSewing from './pages/Tools/MachineSewing';
import Necklines from './pages/Styles/Necklines';
import Sleeves from './pages/Styles/Sleeves';
import Pants from './pages/Styles/Pants';
import Skirts from './pages/Styles/Skirts';
import Fabrics from './pages/Materials/Fabrics';
import FabricBehavior from './pages/Materials/FabricBehavior';
import HandStitches from './pages/StitchesTechniques/HandStitches';
import MachineStitches from './pages/StitchesTechniques/MachineStitches';
import GarmentStyles from './pages/Styles/GarmentStyles';
import TopsBlouses from './pages/Styles/TopsBlouses';
import Dresses from './pages/Styles/Dresses';
import Binding from './pages/Calculators/Binding';
import PleatsTucks from './pages/Calculators/PleatsTucks';
import ThreadConsumption from './pages/Calculators/ThreadConsumption';
import UnitConverter from './pages/Calculators/UnitConverter';
import CircleSkirt from './pages/Calculators/CircleSkirt';
import Materials from './pages/Materials/Materials';
import Tools from './pages/Tools/Tools';
import StitchesTechniques from './pages/StitchesTechniques/StitchesTechniques';
import ButtonHoleSpacing from './pages/Calculators/ButtonHoleSpacing';
import TrimYardage from './pages/Calculators/TrimYardage';
import Bobbin from './pages/Tools/Bobbin';
import Tension from './pages/Tools/Tension';
import MachineStitchLengthWidth from './pages/Tools/MachineStitchLengthWidth';
import MachineFeet from './pages/Tools/MachineFeet';
import MachineNeedles from './pages/Tools/MachineNeedles';

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
        <Box minH="100vh" minW="100vw">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Tools widget routes */}
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/hand-needles" element={<HandNeedles />} />

            {/* Machine sewing sub-routes */}
            <Route path="/tools/machine-sewing" element={<MachineSewing />} />
            <Route path="/tools/machine-needles" element={<MachineNeedles />} />
            <Route path="/tools/machine-feet" element={<MachineFeet />} />
            <Route
              path="/tools/machine-stitch-length-width"
              element={<MachineStitchLengthWidth />}
            />
            <Route path="/tools/tension" element={<Tension />} />
            <Route path="/tools/bobbin" element={<Bobbin />} />

            {/* Materials widget routes */}
            <Route path="/materials" element={<Materials />} />
            <Route path="/materials/fabrics" element={<Fabrics />} />
            <Route
              path="/materials/fabric-behavior"
              element={<FabricBehavior />}
            />

            {/* Calculators widget routes */}
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/calculators/yardage" element={<Yardage />} />
            <Route path="/calculators/circle-skirt" element={<CircleSkirt />} />
            <Route
              path="/calculators/unit-conversion"
              element={<UnitConverter />}
            />
            <Route
              path="/calculators/thread-consumption"
              element={<ThreadConsumption />}
            />
            <Route
              path="/calculators/pleated-tucks"
              element={<PleatsTucks />}
            />
            <Route path="/calculators/binding-fabric" element={<Binding />} />
            <Route path="/calculators/trim-yardage" element={<TrimYardage />} />
            <Route
              path="/calculators/buttonhole-spacing"
              element={<ButtonHoleSpacing />}
            />

            {/* Stitches and techniques widget routes */}
            <Route
              path="/stitches-techniques"
              element={<StitchesTechniques />}
            />
            <Route
              path="/stitches-techniques/hand-stitches"
              element={<HandStitches />}
            />
            <Route
              path="/stitches-techniques/machine-stitches"
              element={<MachineStitches />}
            />

            {/* Garment style routes */}
            <Route path="/styles" element={<GarmentStyles />} />
            <Route path="/styles/tops-blouses" element={<TopsBlouses />} />
            <Route path="/styles/dresses" element={<Dresses />} />
            <Route path="/styles/necklines" element={<Necklines />} />
            <Route path="/styles/sleeves" element={<Sleeves />} />
            <Route path="/styles/pants" element={<Pants />} />
            <Route path="/styles/skirts" element={<Skirts />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

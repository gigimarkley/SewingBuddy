import { useState, useMemo } from 'react';
import {
  Box,
  Select,
  Text,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import { convertYardage } from '../../data/helpers';
import UnitToggle from '../../components/UnitToggle';

const PART_YARDAGE: Record<string, Record<string, Record<string, number>>> = {
  Sleeve: {
    None: { XXS: 0, XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    'Short Sleeve Fitted': {
      XXS: 1.2,
      XS: 1.35,
      S: 1.5,
      M: 1.75,
      L: 2,
      XL: 2.25,
      XXL: 2.5,
    },
    'Short Sleeve Puffy': {
      XXS: 1.5,
      XS: 1.7,
      S: 2,
      M: 2.25,
      L: 2.5,
      XL: 2.75,
      XXL: 3,
    },
    'Long Sleeve Fitted': {
      XXS: 1.5,
      XS: 1.75,
      S: 2,
      M: 2.5,
      L: 3,
      XL: 3.5,
      XXL: 4,
    },
    'Long Sleeve Puffy': {
      XXS: 1.8,
      XS: 2,
      S: 2.5,
      M: 3,
      L: 3.5,
      XL: 4,
      XXL: 4.5,
    },
  },
  Bodice: {
    None: { XXS: 0, XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    'Fitted Bodice': {
      XXS: 1.2,
      XS: 1.4,
      S: 1.5,
      M: 1.75,
      L: 2,
      XL: 2.25,
      XXL: 2.5,
    },
    'Loose Bodice': {
      XXS: 1.5,
      XS: 1.75,
      S: 2,
      M: 2.25,
      L: 2.5,
      XL: 2.75,
      XXL: 3,
    },
  },
  Bottom: {
    None: { XXS: 0, XS: 0, S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    'Mini Skirt Fitted': {
      XXS: 0.8,
      XS: 1,
      S: 1,
      M: 1.25,
      L: 1.5,
      XL: 1.75,
      XXL: 2,
    },
    'Mini Skirt Gathered': {
      XXS: 1,
      XS: 1.2,
      S: 1.5,
      M: 1.75,
      L: 2,
      XL: 2.25,
      XXL: 2.5,
    },
    'Midi Skirt Fitted': {
      XXS: 1,
      XS: 1.2,
      S: 1.5,
      M: 1.75,
      L: 2,
      XL: 2.25,
      XXL: 2.5,
    },
    'Midi Skirt Gathered': {
      XXS: 1.2,
      XS: 1.5,
      S: 2,
      M: 2.25,
      L: 2.5,
      XL: 2.75,
      XXL: 3,
    },
    'Maxi Skirt Fitted': {
      XXS: 1.5,
      XS: 2,
      S: 2.5,
      M: 2.75,
      L: 3,
      XL: 3.25,
      XXL: 3.5,
    },
    'Maxi Skirt Gathered': {
      XXS: 2,
      XS: 2.25,
      S: 3,
      M: 3.25,
      L: 3.5,
      XL: 3.75,
      XXL: 4,
    },
    'Shorts Fitted': {
      XXS: 1,
      XS: 1.2,
      S: 1.5,
      M: 1.75,
      L: 2,
      XL: 2.25,
      XXL: 2.5,
    },
    'Shorts Gathered': {
      XXS: 1.2,
      XS: 1.5,
      S: 2,
      M: 2.25,
      L: 2.5,
      XL: 2.75,
      XXL: 3,
    },
    'Pants Fitted': {
      XXS: 1.5,
      XS: 1.75,
      S: 2.5,
      M: 2.75,
      L: 3,
      XL: 3.25,
      XXL: 3.5,
    },
    'Pants Gathered': {
      XXS: 2,
      XS: 2.25,
      S: 3,
      M: 3.25,
      L: 3.5,
      XL: 3.75,
      XXL: 4,
    },
  },
};

export default function Yardage() {
  const [size, setSize] = useState('M');
  const [fabricWidth, setFabricWidth] = useState(45);
  const [sleeve, setSleeve] = useState('None');
  const [bodice, setBodice] = useState('None');
  const [bottom, setBottom] = useState('None');
  const [unit, setUnit] = useState<'Yards' | 'Meters'>('Yards');
  const [extraMargin, setExtraMargin] = useState(0);

  const calculatedYardage = useMemo(() => {
    const sleeveYard = PART_YARDAGE.Sleeve[sleeve][size];
    const bodiceYard = PART_YARDAGE.Bodice[bodice][size];
    const bottomYard = PART_YARDAGE.Bottom[bottom][size];

    let total = sleeveYard + bodiceYard + bottomYard;
    if (fabricWidth === 60) total *= 0.8;
    total *= 1 + extraMargin / 100;

    return {
      sleeve: convertYardage[unit](sleeveYard * (1 + extraMargin / 100)),
      bodice: convertYardage[unit](bodiceYard * (1 + extraMargin / 100)),
      bottom: convertYardage[unit](bottomYard * (1 + extraMargin / 100)),
      total: convertYardage[unit](total),
    };
  }, [sleeve, bodice, bottom, size, fabricWidth, unit, extraMargin]);

  return (
    <PageWrapper title="Yardage Calculator">
      <Box
        p={6}
        maxW="500px"
        mx="auto"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
      >
        <Text mb={2}>
          Select parts to mix and match. Estimates update automatically.
        </Text>

        <UnitToggle
          unit={unit === 'Yards' ? 'in' : 'cm'}
          onUnitChange={(newUnit) =>
            setUnit(newUnit === 'in' ? 'Yards' : 'Meters')
          }
        />

        <Box mb={4}>
          <Text mb={1}>Sleeve:</Text>
          <Select value={sleeve} onChange={(e) => setSleeve(e.target.value)}>
            {Object.keys(PART_YARDAGE.Sleeve).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </Box>

        <Box mb={4}>
          <Text mb={1}>Bodice:</Text>
          <Select value={bodice} onChange={(e) => setBodice(e.target.value)}>
            {Object.keys(PART_YARDAGE.Bodice).map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
        </Box>

        <Box mb={4}>
          <Text mb={1}>Bottom:</Text>
          <Select value={bottom} onChange={(e) => setBottom(e.target.value)}>
            {Object.keys(PART_YARDAGE.Bottom).map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
        </Box>

        <Box mb={4}>
          <Text mb={1}>Size:</Text>
          <Text mb={1} fontSize="sm" color="gray.600">
            (These are American sizes based on general pattern estimates and may
            not fit all body types. Use the extra margin slider to adjust for
            your preferred fit and style.)
          </Text>
          <Box mb={4}>
            <Text mb={1}>Size:</Text>
            <Select value={size} onChange={(e) => setSize(e.target.value)}>
              {[
                { label: 'XXS (00)', value: 'XXS' },
                { label: 'XS (0-2)', value: 'XS' },
                { label: 'S (4-6)', value: 'S' },
                { label: 'M (8-10)', value: 'M' },
                { label: 'L (12-14)', value: 'L' },
                { label: 'XL (16-18)', value: 'XL' },
                { label: 'XXL (20-22)', value: 'XXL' },
              ].map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </Select>
          </Box>
        </Box>

        <Box mb={4}>
          <Text mb={1}>Fabric Width (inches):</Text>
          <Select
            value={fabricWidth}
            onChange={(e) => setFabricWidth(Number(e.target.value))}
          >
            <option value={45}>45"</option>
            <option value={60}>60"</option>
          </Select>
        </Box>

        <Box mb={6}>
          <Text mb={1}>Extra Fabric Margin: {extraMargin}%</Text>
          <Slider
            min={0}
            max={20}
            step={1}
            value={extraMargin}
            onChange={setExtraMargin}
          >
            <SliderTrack bg="gray.200">
              <SliderFilledTrack bg="teal.400" />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>

        <VStack align="start" spacing={1}>
          <Text fontWeight="bold">
            Sleeve: {calculatedYardage.sleeve.toFixed(2)} {unit.toLowerCase()}
          </Text>
          <Text fontWeight="bold">
            Bodice: {calculatedYardage.bodice.toFixed(2)} {unit.toLowerCase()}
          </Text>
          <Text fontWeight="bold">
            Bottom: {calculatedYardage.bottom.toFixed(2)} {unit.toLowerCase()}
          </Text>
          <Text fontWeight="bold" mt={2}>
            Total: {calculatedYardage.total.toFixed(2)} {unit.toLowerCase()}
          </Text>
        </VStack>
      </Box>
    </PageWrapper>
  );
}

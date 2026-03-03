import { useState } from 'react';
import { Box, Button, Select, Text, VStack } from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';

const STANDARD_SPOOL = 250; // 250 yd or meters depending on selected unit

// Estimated thread usage per part (in yards) for typical garments
const THREAD_ESTIMATES: Record<string, Record<string, number>> = {
  Sleeve: {
    None: 0,
    'Short Sleeve Fitted': 10,
    'Short Sleeve Puffy': 12,
    'Long Sleeve Fitted': 15,
    'Long Sleeve Puffy': 18,
  },
  Bodice: {
    None: 0,
    'Fitted Bodice': 20,
    'Loose Bodice': 25,
  },
  Bottom: {
    None: 0,
    'Mini Skirt Fitted': 12,
    'Mini Skirt Gathered': 15,
    'Midi Skirt Fitted': 15,
    'Midi Skirt Gathered': 18,
    'Maxi Skirt Fitted': 20,
    'Maxi Skirt Gathered': 25,
    'Shorts Fitted': 12,
    'Shorts Gathered': 15,
    'Pants Fitted': 20,
    'Pants Gathered': 25,
  },
};

// Conversion factors
const CONVERSIONS: Record<string, (yards: number) => number> = {
  Yards: (yards) => yards,
  Feet: (yards) => yards * 3,
  Meters: (yards) => yards * 0.9144,
};

export default function ThreadConsumption() {
  const [size, setSize] = useState('M');
  const [sleeve, setSleeve] = useState('None');
  const [bodice, setBodice] = useState('None');
  const [bottom, setBottom] = useState('None');
  const [unit, setUnit] = useState('Yards');
  const [threadUsed, setThreadUsed] = useState<{
    sleeve: number;
    bodice: number;
    bottom: number;
    total: number;
  } | null>(null);

  const handleCalculate = () => {
    // Size multipliers
    let sizeMultiplier = 1;
    if (size === 'M') sizeMultiplier = 1.1;
    else if (size === 'L') sizeMultiplier = 1.2;
    else if (size === 'XL') sizeMultiplier = 1.3;

    const sleeveYards = THREAD_ESTIMATES.Sleeve[sleeve] * sizeMultiplier;
    const bodiceYards = THREAD_ESTIMATES.Bodice[bodice] * sizeMultiplier;
    const bottomYards = THREAD_ESTIMATES.Bottom[bottom] * sizeMultiplier;
    const totalYards = sleeveYards + bodiceYards + bottomYards;

    const convert = CONVERSIONS[unit];

    setThreadUsed({
      sleeve: convert(sleeveYards),
      bodice: convert(bodiceYards),
      bottom: convert(bottomYards),
      total: convert(totalYards),
    });
  };

  const spoolsNeeded = threadUsed
    ? Math.ceil(threadUsed.total / STANDARD_SPOOL)
    : 0;

  return (
    <PageWrapper title="Thread Consumption Calculator">
      <Box
        p={6}
        maxW="500px"
        mx="auto"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
      >
        <Text mb={4}>
          Select garment parts to estimate thread consumption in your preferred
          unit.
        </Text>

        <Text mb={2} fontStyle="italic">
          Note: These are rough estimates based on typical patterns and may vary
          based on design details and fabric type.
        </Text>

        <Text fontSize="sm" color="gray.600">
          Tip: Standard home sewing thread spools commonly come in 100 yd (90
          m), 250 yd, 500 yd, and 1000 yd sizes. Cones for sergers or
          high-volume sewing may contain 2,000–6,000+ yards. Check your
          pattern’s total thread requirement against the spool size to avoid
          running short mid-project.
        </Text>

        <Box mb={4}>
          <Text mb={1}>Sleeve:</Text>
          <Select value={sleeve} onChange={(e) => setSleeve(e.target.value)}>
            {Object.keys(THREAD_ESTIMATES.Sleeve).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </Box>

        <Box mb={4}>
          <Text mb={1}>Bodice:</Text>
          <Select value={bodice} onChange={(e) => setBodice(e.target.value)}>
            {Object.keys(THREAD_ESTIMATES.Bodice).map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
        </Box>

        <Box mb={4}>
          <Text mb={1}>Bottom:</Text>
          <Select value={bottom} onChange={(e) => setBottom(e.target.value)}>
            {Object.keys(THREAD_ESTIMATES.Bottom).map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
        </Box>

        <Box mb={4}>
          <Text mb={1}>Size:</Text>
          <Select value={size} onChange={(e) => setSize(e.target.value)}>
            {['S', 'M', 'L', 'XL'].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </Box>

        <Box mb={4}>
          <Text mb={1}>Unit:</Text>
          <Select value={unit} onChange={(e) => setUnit(e.target.value)}>
            {Object.keys(CONVERSIONS).map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </Select>
        </Box>

        <Button colorScheme="teal" onClick={handleCalculate} mb={4}>
          Calculate Thread Needed
        </Button>

        {threadUsed && (
          <VStack align="start" spacing={1}>
            <Text fontWeight="bold">
              Sleeve: {threadUsed.sleeve.toFixed(1)} {unit.toLowerCase()}
            </Text>
            <Text fontWeight="bold">
              Bodice: {threadUsed.bodice.toFixed(1)} {unit.toLowerCase()}
            </Text>
            <Text fontWeight="bold">
              Bottom: {threadUsed.bottom.toFixed(1)} {unit.toLowerCase()}
            </Text>

            <Text fontWeight="bold" mt={2}>
              Total Thread Needed: {threadUsed.total.toFixed(1)}{' '}
              {unit.toLowerCase()}
            </Text>

            <Text fontSize="sm" color="gray.600">
              Approx. Spools Needed (250 {unit.toLowerCase()} each):{' '}
              <strong>{spoolsNeeded}</strong>
            </Text>
          </VStack>
        )}
      </Box>
    </PageWrapper>
  );
}

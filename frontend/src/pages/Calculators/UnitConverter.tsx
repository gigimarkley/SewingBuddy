import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  NumberInput,
  NumberInputField,
  Select,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';

const conversions: Record<string, Record<string, (v: number) => number>> = {
  inches: {
    cm: (v) => v * 2.54,
    mm: (v) => v * 25.4,
    yd: (v) => v / 36,
    m: (v) => v * 0.0254,
    inches: (v) => v,
    feet: (v) => v / 12,
  },
  cm: {
    inches: (v) => v / 2.54,
    mm: (v) => v * 10,
    yd: (v) => v / 91.44,
    m: (v) => v / 100,
    cm: (v) => v,
    feet: (v) => v / 30.48,
  },
  mm: {
    inches: (v) => v / 25.4,
    cm: (v) => v / 10,
    yd: (v) => v / 914.4,
    m: (v) => v / 1000,
    mm: (v) => v,
    feet: (v) => v / 304.8,
  },
  yd: {
    inches: (v) => v * 36,
    cm: (v) => v * 91.44,
    mm: (v) => v * 914.4,
    m: (v) => v * 0.9144,
    yd: (v) => v,
    feet: (v) => v * 3,
  },
  m: {
    inches: (v) => v / 0.0254,
    cm: (v) => v * 100,
    mm: (v) => v * 1000,
    yd: (v) => v / 0.9144,
    m: (v) => v,
    feet: (v) => v / 0.3048,
  },
  feet: {
    inches: (v) => v * 12,
    cm: (v) => v * 30.48,
    mm: (v) => v * 304.8,
    yd: (v) => v / 3,
    m: (v) => v * 0.3048,
    feet: (v) => v,
  },
};

const units = ['inches', 'cm', 'mm', 'yd', 'm', 'feet'];

export default function UnitConverter() {
  const [leftValue, setLeftValue] = useState(1);
  const [leftUnit, setLeftUnit] = useState<
    'inches' | 'cm' | 'mm' | 'yd' | 'm' | 'feet'
  >('inches');

  const [rightValue, setRightValue] = useState(2.54);
  const [rightUnit, setRightUnit] = useState<
    'inches' | 'cm' | 'mm' | 'yd' | 'm' | 'feet'
  >('cm');

  useEffect(() => {
    setRightValue(conversions[leftUnit][rightUnit](leftValue));
  }, [leftValue, leftUnit, rightUnit]);

  return (
    <PageWrapper title="Unit Converter">
      <Box
        p={6}
        maxW="500px"
        mx="auto"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
      >
        <HStack spacing={6} justify="center" align="start" mt={4}>
          {/* Left Box (Editable) */}
          <VStack spacing={2} w="120px">
            <NumberInput
              value={leftValue}
              min={0}
              onChange={(v) => setLeftValue(Number(v))}
            >
              <NumberInputField fontSize="lg" textAlign="center" />
            </NumberInput>
            <Select
              value={leftUnit}
              onChange={(e) => setLeftUnit(e.target.value as any)}
            >
              {units.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </Select>
          </VStack>

          {/* Right Box (Read-Only Value, Selectable Unit) */}
          <VStack spacing={2} w="120px">
            <NumberInput value={rightValue} isReadOnly>
              <NumberInputField
                fontSize="lg"
                textAlign="center"
                bg="gray.100"
                _readOnly={{ color: 'gray.600', cursor: 'not-allowed' }}
              />
            </NumberInput>
            <Select
              value={rightUnit}
              onChange={(e) => setRightUnit(e.target.value as any)}
            >
              {units.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </Select>
          </VStack>
        </HStack>
      </Box>
    </PageWrapper>
  );
}

import { useState, useMemo } from 'react';
import {
  Text,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Select,
  Switch,
  HStack,
  Box,
  Heading,
  Divider,
} from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';

export default function Binding() {
  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [perimeter, setPerimeter] = useState(120);
  const [extra, setExtra] = useState(10);
  const [stripWidth, setStripWidth] = useState(2.5);
  const [fabricWidth, setFabricWidth] = useState(44);
  const [type, setType] = useState<'straight' | 'bias'>('straight');

  const totalBinding = perimeter + extra;

  // Straight Grain
  const straightStrips = Math.ceil(totalBinding / fabricWidth);
  const straightFabricLength = straightStrips * stripWidth;

  // 45° Bias Efficiency (continuous bias method)
  const requiredSquareSide = Math.sqrt(totalBinding * stripWidth);

  const biasLengthFromSquare = (side: number) => (side * side) / stripWidth;

  const roundedSquare = Math.ceil(requiredSquareSide * 8) / 8; // round to nearest 1/8

  const inchesPerYard = unit === 'in' ? 36 : 91.44;
  const straightYardage = straightFabricLength / inchesPerYard;

  return (
    <PageWrapper title="Binding Fabric Calculator">
      <Box
        p={6}
        maxW="500px"
        mx="auto"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
      >
        <VStack align="stretch" spacing={6}>
          <Text>
            Calculate straight or 45° continuous bias binding, including square
            cutting layout and strip diagram.
          </Text>

          <HStack>
            <Text>Inches</Text>
            <Switch
              isChecked={unit === 'cm'}
              onChange={() => setUnit(unit === 'in' ? 'cm' : 'in')}
            />
            <Text>Centimeters</Text>
          </HStack>

          <FormControl>
            <FormLabel>Perimeter to Bind ({unit})</FormLabel>
            <Input
              type="number"
              value={perimeter}
              onChange={(e) => setPerimeter(Number(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Extra Allowance ({unit})</FormLabel>
            <Input
              type="number"
              value={extra}
              onChange={(e) => setExtra(Number(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Strip Width ({unit})</FormLabel>
            <Input
              type="number"
              value={stripWidth}
              onChange={(e) => setStripWidth(Number(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Fabric Width (WOF) ({unit})</FormLabel>
            <Input
              type="number"
              value={fabricWidth}
              onChange={(e) => setFabricWidth(Number(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Binding Type</FormLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value as 'straight' | 'bias')}
            >
              <option value="straight">Straight Grain</option>
              <option value="bias">Continuous 45° Bias</option>
            </Select>
          </FormControl>

          <Divider />

          <Heading size="md">Results</Heading>

          <Text>
            Total Binding Needed: {totalBinding.toFixed(2)} {unit}
          </Text>

          {type === 'straight' && (
            <>
              <Text>Strips Required: {straightStrips}</Text>
              <Text>
                Fabric Length Needed: {straightFabricLength.toFixed(2)} {unit}
              </Text>
              <Text fontWeight="bold">
                Approx Yardage: {straightYardage.toFixed(2)}{' '}
                {unit === 'in' ? 'yards' : 'meters'}
              </Text>
            </>
          )}

          {type === 'bias' && (
            <>
              <Text>
                Continuous Bias Square Size: {roundedSquare.toFixed(2)} {unit} ×{' '}
                {roundedSquare.toFixed(2)} {unit}
              </Text>

              <Text>
                Bias Length Produced:{' '}
                {biasLengthFromSquare(roundedSquare).toFixed(2)} {unit}
              </Text>
            </>
          )}

          <Divider />

          <Heading size="md">Strip Layout Diagram</Heading>

          {/* Straight Layout */}
          {type === 'straight' && (
            <Box border="1px solid #ccc" p={3} bg="white">
              <svg viewBox="0 0 600 200" width="100%" height="150">
                <rect x="0" y="0" width="600" height="200" fill="#f5f5f5" />

                {Array.from({ length: straightStrips }).map((_, i) => (
                  <line
                    key={i}
                    x1="0"
                    x2="600"
                    y1={(200 / straightStrips) * i}
                    y2={(200 / straightStrips) * i}
                    stroke="black"
                  />
                ))}
              </svg>
              <Text fontSize="sm" mt={2}>
                Horizontal lines represent straight grain strips across width of
                fabric.
              </Text>
            </Box>
          )}

          {/* Bias Layout */}
          {type === 'bias' && (
            <Box border="1px solid #ccc" p={3} bg="white">
              <svg viewBox="0 0 400 400" width="100%" height="200">
                <rect x="0" y="0" width="400" height="400" fill="#f5f5f5" />
                {Array.from({
                  length: Math.floor(400 / (stripWidth * 10)),
                }).map((_, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * stripWidth * 10}
                    x2="400"
                    y2={400 + i * stripWidth * 10}
                    stroke="black"
                  />
                ))}
              </svg>
              <Text fontSize="sm" mt={2}>
                45° continuous bias layout from square fabric.
              </Text>
            </Box>
          )}

          <Divider />

          <Text fontSize="sm" color="gray.600">
            Continuous bias uses geometric efficiency of 45° strip tiling:
            Square² ÷ Strip Width ≈ Total Bias Length.
          </Text>
        </VStack>
      </Box>
    </PageWrapper>
  );
}

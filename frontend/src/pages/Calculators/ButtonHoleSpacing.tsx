import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Stack,
} from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import UnitToggle from '../../components/UnitToggle';

export default function ButtonholeCalculator() {
  const [totalDistance, setTotalDistance] = useState<number>(20);
  const [numButtons, setNumButtons] = useState<number>(5);
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  const factor = unit === 'in' ? 1 : 2.54;

  // Convert values for display
  const displayValue = (value: number) => (value * factor).toFixed(1);

  // Calculate spacing in base units (inches)
  const spacing = numButtons > 1 ? totalDistance / (numButtons - 1) : 0;

  const svgHeight = 500;
  const svgWidth = 300;
  const paddingTop = 30;
  const paddingBottom = 30;

  const scale = (svgHeight - paddingTop - paddingBottom) / totalDistance;

  return (
    <PageWrapper title="Buttonhole Spacing Calculator">
      <Box
        p={6}
        maxW="500px"
        mx="auto"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
      >
        <Heading size="md" mb={4}>
          Buttonhole Spacing Calculator
        </Heading>

        {/* Unit Toggle */}
        <Box mb={4}>
          <UnitToggle unit={unit} onUnitChange={setUnit} />
        </Box>

        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Total Length ({unit})</FormLabel>
            <NumberInput
              value={displayValue(totalDistance)}
              min={1}
              onChange={(valueString) =>
                setTotalDistance(Number(valueString) / factor)
              }
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel>Number of Buttons</FormLabel>
            <NumberInput
              value={numButtons}
              min={1}
              onChange={(valueString) => setNumButtons(Number(valueString))}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>
        </Stack>

        <Box mt={4}>
          <Text>
            <strong>Spacing Between Buttonholes:</strong>{' '}
            {numButtons > 1 ? displayValue(spacing) : 'N/A'} {unit}
          </Text>
          {numButtons < 2 && (
            <Text fontSize="sm" color="red.500">
              Add at least 2 buttons to calculate spacing
            </Text>
          )}

          {totalDistance < 1 && (
            <Text fontSize="sm" color="red.500">
              Add at least 1 {unit} of total distance to calculate spacing
            </Text>
          )}
        </Box>

        {/* Diagram */}
        {numButtons > 1 && totalDistance >= 1 && (
          <Box mt={6} textAlign="center">
            <Text fontWeight="bold" mb={2}>
              Buttonhole Layout
            </Text>

            <svg width={svgWidth} height={svgHeight}>
              {/* Garment line */}
              <line
                x1={svgWidth / 2}
                y1={paddingTop}
                x2={svgWidth / 2}
                y2={svgHeight - paddingBottom}
                stroke="black"
                strokeWidth={2}
              />

              {/* Buttons */}
              {Array.from({ length: numButtons }).map((_, i) => {
                const y = paddingTop + i * spacing * scale;
                const labelOffsetX = i % 2 === 0 ? 10 : -10;
                const labelAnchor = i % 2 === 0 ? 'start' : 'end';

                return (
                  <g key={i}>
                    {/* Button circle */}
                    <circle cx={svgWidth / 2} cy={y} r={5} fill="blue" />

                    {/* Button label */}
                    <text
                      x={svgWidth / 2 + labelOffsetX}
                      y={y + 4}
                      fontSize="10"
                      fill="black"
                      textAnchor={labelAnchor}
                    >
                      Button {i + 1}
                    </text>

                    {/* Measurement to next button */}
                    {i < numButtons - 1 && (
                      <>
                        <line
                          x1={svgWidth / 2 + (i % 2 === 0 ? 15 : -15)}
                          y1={y}
                          x2={svgWidth / 2 + (i % 2 === 0 ? 15 : -15)}
                          y2={y + spacing * scale}
                          stroke="gray"
                          strokeWidth={1}
                          strokeDasharray="4,2"
                        />
                        <text
                          x={svgWidth / 2 + (i % 2 === 0 ? 20 : -20)}
                          y={y + (spacing * scale) / 2 + 3}
                          fontSize="10"
                          fill="gray"
                          textAnchor={i % 2 === 0 ? 'start' : 'end'}
                        >
                          {displayValue(spacing)} {unit}
                        </text>
                      </>
                    )}
                  </g>
                );
              })}
            </svg>
          </Box>
        )}
      </Box>
    </PageWrapper>
  );
}

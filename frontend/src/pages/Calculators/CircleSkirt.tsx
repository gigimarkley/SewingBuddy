import { useState } from 'react';
import {
  Box,
  Heading,
  RadioGroup,
  Radio,
  Stack,
  Text,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import UnitToggle from '../../components/UnitToggle';

export default function CircleSkirtCalculator() {
  const [waist, setWaist] = useState<number>(34);
  const [skirtLength, setSkirtLength] = useState<number>(26);
  const [fraction, setFraction] = useState<0.25 | 0.5 | 0.75 | 1>(1);

  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  // Conversion factor
  const factor = unit === 'in' ? 1 : 2.54;

  const correctionFactor = 0.941;
  const waistRadius = ((waist / (2 * Math.PI)) * correctionFactor) / fraction;
  const seamAllowance = 8;

  const svgSize = 400;
  const center = svgSize / 2;
  const scale = svgSize / (2 * (waistRadius + skirtLength + seamAllowance));

  const waistR = waistRadius * scale;
  const skirtR = (waistRadius + skirtLength) * scale;
  const angle = fraction * 360;

  const radians = (angle * Math.PI) / 180;
  const x = center + skirtR * Math.cos(radians);
  const y = center + skirtR * Math.sin(radians);
  const largeArc = angle > 180 ? 1 : 0;
  const skirtPath = `
    M ${center} ${center}
    L ${center + skirtR} ${center}
    A ${skirtR} ${skirtR} 0 ${largeArc} 1 ${x} ${y}
    Z
  `;

  const totalRadius = waistRadius + skirtLength;
  const panelSize = totalRadius * scale * 2;

  const displayValue = (value: number) => (value * factor).toFixed(1);

  return (
    <PageWrapper title="Circle Skirt Calculator">
      <Box
        p={6}
        maxW="500px"
        mx="auto"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
      >
        <Heading size="md" mb={4}>
          Circle Skirt Calculator
        </Heading>
        {/* Unit Toggle */}
        <Box mb={4}>
          <UnitToggle unit={unit} onUnitChange={setUnit} />
        </Box>
        {/* Inputs */}
        <FormControl mb={4}>
          <FormLabel>Waist Measurement ({unit})</FormLabel>
          <NumberInput
            value={displayValue(waist)}
            min={10}
            onChange={(valueString) => setWaist(Number(valueString) / factor)}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Skirt Length ({unit})</FormLabel>
          <NumberInput
            value={displayValue(skirtLength)}
            min={1}
            onChange={(valueString) =>
              setSkirtLength(Number(valueString) / factor)
            }
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Skirt Fraction</FormLabel>
          <RadioGroup
            onChange={(value) =>
              setFraction(Number(value) as 0.25 | 0.5 | 0.75 | 1)
            }
            value={fraction.toString()}
          >
            <Stack direction="row">
              <Radio value="0.25">1/4</Radio>
              <Radio value="0.5">1/2</Radio>
              <Radio value="0.75">3/4</Radio>
              <Radio value="1">Full</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        {/* Results */}
        <Box mt={6} p={4} bg="gray.50" borderRadius="md" textAlign="center">
          <Text>
            <strong>Waist Radius:</strong> {displayValue(waistRadius)} {unit}
          </Text>

          {/* Diagram */}
          <Box mt={4}>
            <svg width={svgSize} height={svgSize}>
              {fraction === 1 ? (
                <circle
                  cx={center}
                  cy={center}
                  r={skirtR}
                  fill="rgba(135,206,250,0.3)"
                  stroke="blue"
                  strokeWidth="2"
                />
              ) : (
                <path
                  d={skirtPath}
                  fill="rgba(135,206,250,0.3)"
                  stroke="blue"
                  strokeWidth="2"
                />
              )}

              <circle
                cx={center}
                cy={center}
                r={waistR}
                fill="none"
                stroke="red"
                strokeWidth="2"
              />
              <line
                x1={center}
                y1={center}
                x2={center + waistR}
                y2={center}
                stroke="red"
                strokeWidth="2"
              />
              <text
                x={center + waistR / 2}
                y={center - 5}
                fontSize="12"
                fill="red"
              >
                {displayValue(waistRadius)} {unit}
              </text>

              <line
                x1={center + waistR}
                y1={center}
                x2={center + skirtR}
                y2={center}
                stroke="blue"
                strokeWidth="2"
              />
              <text
                x={center + waistR + (skirtR - waistR) / 2}
                y={center - 5}
                fontSize="12"
                fill="blue"
              >
                {displayValue(skirtLength)} {unit}
              </text>
            </svg>
          </Box>
        </Box>
        Cutting Diagram
        <Box mt={6} p={4} bg="gray.50" borderRadius="md" textAlign="center">
          <Text>
            <strong>Cutting Diagram</strong>
          </Text>

          {/* Diagram */}
          <Box mt={4}>
            {/* Diagram */}
            <svg width={svgSize} height={svgSize}>
              {/* Panel */}
              {fraction === 1 || fraction === 0.75 ? (
                // panel for full and 3/4 circle
                <>
                  <rect
                    x={center - panelSize / 2}
                    y={center - panelSize / 2}
                    width={panelSize}
                    height={panelSize}
                    fill="rgba(255,255,255,1)"
                    stroke="black"
                    strokeWidth={1}
                  />
                  <text
                    x={center - panelSize / 2 + 5}
                    y={center - panelSize / 2 + 15}
                    fontSize="12"
                  >
                    Fabric Panel
                  </text>

                  {/* Panel labels */}
                  <text
                    x={center}
                    y={center - panelSize / 2 - 8}
                    fontSize="12"
                    textAnchor="middle"
                  >
                    {displayValue(totalRadius)} {unit}
                  </text>

                  <text
                    x={center - panelSize / 2 - 8}
                    y={center}
                    fontSize="12"
                    textAnchor="middle"
                    transform={`rotate(-90, ${center - panelSize / 2 - 8}, ${center})`}
                  >
                    {displayValue(totalRadius)} {unit}
                  </text>
                </>
              ) : null}

              {fraction === 0.5 && (
                <>
                  {/* Half-circle panel */}
                  <rect
                    x={center - panelSize / 2}
                    y={center}
                    width={panelSize}
                    height={panelSize / 2}
                    fill="rgba(255,255,255,1)"
                    stroke="black"
                    strokeWidth={1}
                  />
                  <text
                    x={center - panelSize / 2 + 5}
                    y={center + panelSize / 4}
                    fontSize="12"
                  >
                    Fabric Panel
                  </text>

                  {/* Panel labels */}
                  {/* Horizontal top edge */}
                  <text
                    x={center}
                    y={center - 8}
                    fontSize="12"
                    textAnchor="middle"
                  >
                    {displayValue(totalRadius)} {unit}
                  </text>

                  {/* Vertical left edge */}
                  <text
                    x={center - panelSize / 2 - 8}
                    y={center + panelSize / 4}
                    fontSize="12"
                    textAnchor="middle"
                    transform={`rotate(-90, ${center - panelSize / 2 - 8}, ${center + panelSize / 4})`}
                  >
                    {displayValue(totalRadius)} {unit}
                  </text>
                </>
              )}

              {fraction === 0.25 && (
                <>
                  {/* Quarter-circle panel */}
                  <rect
                    x={center}
                    y={center}
                    width={panelSize / 2}
                    height={panelSize / 2}
                    fill="rgba(255,255,255,1)"
                    stroke="black"
                    strokeWidth={1}
                  />
                  <text x={center + 5} y={center + panelSize / 4} fontSize="12">
                    Fabric Panel
                  </text>

                  {/* Panel labels */}
                  {/* Horizontal top edge */}
                  <text
                    x={center + panelSize / 4}
                    y={center - 5}
                    fontSize="12"
                    textAnchor="middle"
                  >
                    {displayValue(totalRadius)} {unit}
                  </text>

                  {/* Vertical left edge */}
                  <text
                    x={center - 5}
                    y={center + panelSize / 4}
                    fontSize="12"
                    textAnchor="end"
                    transform={`rotate(-90, ${center - 5}, ${center + panelSize / 4})`}
                  >
                    {displayValue(totalRadius)} {unit}
                  </text>
                </>
              )}

              {/* Full circle */}
              {fraction === 1 ? (
                <circle
                  cx={center}
                  cy={center}
                  r={skirtR}
                  fill="rgba(135,206,250,0.3)"
                  stroke="blue"
                  strokeWidth="2"
                />
              ) : (
                // Fractional skirt
                <path
                  d={skirtPath}
                  fill="rgba(135,206,250,0.3)"
                  stroke="blue"
                  strokeWidth="2"
                />
              )}

              {/* Waist circle */}
              <circle
                cx={center}
                cy={center}
                r={waistR}
                fill="none"
                stroke="red"
                strokeWidth="2"
              />

              {/* Waist radius line */}
              <line
                x1={center}
                y1={center}
                x2={center + waistR}
                y2={center}
                stroke="red"
                strokeWidth="2"
              />
              <text
                x={center + waistR / 2}
                y={center - 5}
                fontSize="12"
                fill="red"
              >
                {displayValue(waistRadius)} {unit}
              </text>

              {/* Skirt length line */}
              <line
                x1={center + waistR}
                y1={center}
                x2={center + skirtR}
                y2={center}
                stroke="blue"
                strokeWidth="2"
              />
              <text
                x={center + waistR + (skirtR - waistR) / 2}
                y={center - 5}
                fontSize="12"
                fill="blue"
              >
                {displayValue(skirtLength)} {unit}
              </text>
            </svg>
          </Box>
        </Box>
      </Box>
      {/* TODO: Add image of cutting pattern */}
    </PageWrapper>
  );
}

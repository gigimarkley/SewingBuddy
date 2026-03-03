import { useState, useMemo } from 'react';
import {
  Text,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Checkbox,
  HStack,
  Box,
  Heading,
  Divider,
  Switch,
} from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import UnitToggle from '../../components/UnitToggle';

export default function TrimYardage() {
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  const [neckline, setNeckline] = useState(24);
  const [armhole, setArmhole] = useState(18);
  const [wrist, setWrist] = useState(8);
  const [skirtHem, setSkirtHem] = useState(60);
  const [waist, setWaist] = useState(30);

  const [useNeck, setUseNeck] = useState(false);
  const [useArm, setUseArm] = useState(false);
  const [useWrist, setUseWrist] = useState(false);
  const [useSkirtHem, setUseSkirtHem] = useState(false);
  const [useWaist, setUseWaist] = useState(false);

  const [extraPercent, setExtraPercent] = useState(10); // overlap & joining allowance

  const totalTrim = useMemo(() => {
    let total = 0;

    if (useNeck) total += neckline;
    if (useArm) total += armhole * 2;
    if (useWrist) total += wrist * 2;
    if (useSkirtHem) total += skirtHem;
    if (useWaist) total += waist;

    total += total * (extraPercent / 100);

    return total;
  }, [
    useNeck,
    useArm,
    useWrist,
    useSkirtHem,
    useWaist,
    neckline,
    armhole,
    wrist,
    skirtHem,
    waist,
    extraPercent,
  ]);

  const inchesPerYard = unit === 'in' ? 36 : 91.44;

  const yardage = Math.ceil((totalTrim / inchesPerYard) * 100) / 100;

  return (
    <PageWrapper title="Trim Yardage Calculator" showHeaderButtons>
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
            Estimate how much trim, lace, ribbon, or piping you’ll need based on
            garment areas.
          </Text>

          <UnitToggle
            unit={unit}
            onUnitChange={(newUnit) => setUnit(newUnit)}
          />

          <Divider />

          {/* Neckline */}
          <Checkbox
            isChecked={useNeck}
            onChange={(e) => setUseNeck(e.target.checked)}
          >
            Neckline
          </Checkbox>
          {useNeck && (
            <FormControl>
              <FormLabel>Neckline Circumference ({unit})</FormLabel>
              <Input
                type="number"
                value={neckline}
                onChange={(e) => setNeckline(Number(e.target.value))}
              />
            </FormControl>
          )}

          {/* Armholes */}
          <Checkbox
            isChecked={useArm}
            onChange={(e) => setUseArm(e.target.checked)}
          >
            Armholes (2)
          </Checkbox>
          {useArm && (
            <FormControl>
              <FormLabel>One Armhole ({unit})</FormLabel>
              <Input
                type="number"
                value={armhole}
                onChange={(e) => setArmhole(Number(e.target.value))}
              />
            </FormControl>
          )}

          {/* Wrists */}
          <Checkbox
            isChecked={useWrist}
            onChange={(e) => setUseWrist(e.target.checked)}
          >
            Wrists (2)
          </Checkbox>
          {useWrist && (
            <FormControl>
              <FormLabel>One Wrist ({unit})</FormLabel>
              <Input
                type="number"
                value={wrist}
                onChange={(e) => setWrist(Number(e.target.value))}
              />
            </FormControl>
          )}

          {/* Skirt Hem */}
          <Checkbox
            isChecked={useSkirtHem}
            onChange={(e) => setUseSkirtHem(e.target.checked)}
          >
            Skirt Hem
          </Checkbox>
          {useSkirtHem && (
            <FormControl>
              <FormLabel>Hem Circumference ({unit})</FormLabel>
              <Input
                type="number"
                value={skirtHem}
                onChange={(e) => setSkirtHem(Number(e.target.value))}
              />
            </FormControl>
          )}

          {/* Waist */}
          <Checkbox
            isChecked={useWaist}
            onChange={(e) => setUseWaist(e.target.checked)}
          >
            Waistline
          </Checkbox>
          {useWaist && (
            <FormControl>
              <FormLabel>Waist Circumference ({unit})</FormLabel>
              <Input
                type="number"
                value={waist}
                onChange={(e) => setWaist(Number(e.target.value))}
              />
            </FormControl>
          )}

          <Divider />

          <FormControl>
            <FormLabel>Extra Percentage for Overlap / Seams (%)</FormLabel>
            <Input
              type="number"
              value={extraPercent}
              onChange={(e) => setExtraPercent(Number(e.target.value))}
            />
          </FormControl>

          <Divider />

          <Box>
            <Heading size="md">Estimated Trim Needed</Heading>

            <Text mt={2}>
              Total Length: {totalTrim.toFixed(2)} {unit}
            </Text>

            <Text fontWeight="bold">
              Approximate Yardage: {yardage}{' '}
              {unit === 'in' ? 'yards' : 'meters'}
            </Text>
          </Box>

          <Text fontSize="sm" color="gray.600">
            Tip: Always round up when purchasing trim. Lace and decorative trims
            often require additional length for pattern matching.
          </Text>
        </VStack>
      </Box>
    </PageWrapper>
  );
}

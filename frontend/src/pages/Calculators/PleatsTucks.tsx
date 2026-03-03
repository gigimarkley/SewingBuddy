import { useState, useMemo } from 'react';
import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Heading,
  Select,
  HStack,
  Switch,
  Divider,
} from '@chakra-ui/react';
import PageWrapper from '../../components/PageWrapper';
import { convertInchCm } from '../../data/helpers';

export default function PleatsTucks() {
  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [style, setStyle] = useState<'knife' | 'box' | 'inverted' | 'tuck'>(
    'knife'
  );
  const [finishedWidth, setFinishedWidth] = useState(60);
  const [pleatDepth, setPleatDepth] = useState(2);
  const [numPleats, setNumPleats] = useState(5);
  const [seamAllowance, setSeamAllowance] = useState(1);

  const pleatWidth = useMemo(() => {
    if (style === 'knife' || style === 'tuck') return pleatDepth * 1;
    // Box and inverted use double pleat fold per pleat
    return pleatDepth * 2;
  }, [style, pleatDepth]);

  const totalPleatFabric = pleatWidth * numPleats * 2; // Each pleat uses double fold
  const fabricNeeded =
    convertInchCm(finishedWidth, unit) +
    totalPleatFabric +
    convertInchCm(seamAllowance || 0, unit);

  const spacing =
    numPleats > 1
      ? convertInchCm(finishedWidth, unit) / (numPleats + 1)
      : convertInchCm(finishedWidth, unit);

  return (
    <PageWrapper title="Pleats & Tucks Calculator">
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
            Calculate fabric requirements for pleats and tucks, with spacing and
            seam allowance.
          </Text>

          {/* Unit Toggle */}
          <HStack>
            <Text>Inches</Text>
            <Switch
              isChecked={unit === 'cm'}
              onChange={() => setUnit(unit === 'in' ? 'cm' : 'in')}
            />
            <Text>Centimeters</Text>
          </HStack>

          {/* Style */}
          <FormControl>
            <FormLabel>Pleat / Tuck Style</FormLabel>
            <Select
              value={style}
              onChange={(e) =>
                setStyle(
                  e.target.value as 'knife' | 'box' | 'inverted' | 'tuck'
                )
              }
            >
              <option value="knife">Knife Pleats</option>
              <option value="box">Box Pleats</option>
              <option value="inverted">Inverted Pleats</option>
              <option value="tuck">Tucks</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Finished Width ({unit})</FormLabel>
            <Input
              type="number"
              value={finishedWidth}
              onChange={(e) => setFinishedWidth(Number(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>
              Depth per Pleat / Tuck ({unit}) — measure from fold to fabric back
            </FormLabel>
            <Input
              type="number"
              value={pleatDepth}
              onChange={(e) => setPleatDepth(Number(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Number of Pleats / Tucks</FormLabel>
            <Input
              type="number"
              value={numPleats}
              onChange={(e) => setNumPleats(Number(e.target.value))}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Seam Allowance ({unit})</FormLabel>
            <Input
              type="number"
              value={seamAllowance}
              onChange={(e) => setSeamAllowance(Number(e.target.value))}
            />
          </FormControl>

          <Divider />

          <Box>
            <Heading size="md">Results</Heading>
            <Text mt={2}>
              Total additional fabric used for pleats/tucks:{' '}
              {totalPleatFabric.toFixed(2)} {unit}
            </Text>
            <Text>
              Even spacing between pleats/tucks: {spacing.toFixed(2)} {unit}
            </Text>
            <Text fontWeight="bold">
              Total Fabric Required (including seam allowance):{' '}
              {fabricNeeded.toFixed(2)} {unit}
            </Text>
          </Box>

          <Divider />

          {/* TODO: Add diagram for each pleat style */}
        </VStack>
      </Box>
    </PageWrapper>
  );
}

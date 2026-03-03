import { HStack, Text, Switch } from '@chakra-ui/react';

type Unit = 'in' | 'cm';

interface UnitToggleProps {
  unit: Unit; // current unit from parent
  onUnitChange: (unit: Unit) => void; // callback to update parent
}

export default function UnitToggle({ unit, onUnitChange }: UnitToggleProps) {
  const handleChange = () => {
    const newUnit = unit === 'in' ? 'cm' : 'in';
    onUnitChange(newUnit);
  };

  return (
    <HStack>
      <Text>Inches</Text>
      <Switch isChecked={unit === 'cm'} onChange={handleChange} />
      <Text>Centimeters</Text>
    </HStack>
  );
}

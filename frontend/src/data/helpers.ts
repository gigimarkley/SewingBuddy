export const convertInchCm = (value: number, unit: 'in' | 'cm') =>
  unit === 'in' ? value : value * 2.54;

export const convertYardage = {
  Yards: (value: number) => value,
  Meters: (value: number) => value * 0.9144,
};

import { Box, Grid, Text } from '@chakra-ui/react';
import Widget from './Widget';
import { WidgetData } from '../types';
import {
  homeWidgets,
  toolsWidgets,
  materialsWidgets,
  garmentWidgets,
  stitchesTechniquesWidgets,
  calculatorsWidgets,
  machineSewingWidgets,
} from '../data/widgets';

interface SearchContentProps {
  searchTerm: string;
}

export default function SearchContent({ searchTerm }: SearchContentProps) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  // Combine all widget arrays into one list
  const allWidgets: WidgetData[] = [
    ...homeWidgets,
    ...toolsWidgets,
    ...materialsWidgets,
    ...garmentWidgets,
    ...stitchesTechniquesWidgets,
    ...calculatorsWidgets,
    ...machineSewingWidgets,
  ];

  const filteredWidgets = allWidgets.filter((widget) => {
    const inTitle = widget.title.toLowerCase().includes(normalizedSearch);
    const inDescription = widget.description
      .toLowerCase()
      .includes(normalizedSearch);

    const inKeywords =
      widget.keywords?.some((keyword) =>
        keyword.toLowerCase().includes(normalizedSearch),
      ) ?? false;

    return inTitle || inDescription || inKeywords;
  });

  return (
    <Box>
      {filteredWidgets.length === 0 ? (
        <Text>No results found for "{searchTerm}"</Text>
      ) : (
        <Grid
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap={{ base: 3, md: 4 }}
        >
          {filteredWidgets.map((widget) => (
            <Widget
              key={widget.id}
              title={widget.title}
              description={widget.description}
              path={widget.path}
              bgColor="brand.700"
              color="white"
              shadowColor="black"
            />
          ))}
        </Grid>
      )}
    </Box>
  );
}

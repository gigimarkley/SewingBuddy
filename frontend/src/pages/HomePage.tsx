import { useState } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import Widget from '../components/Widget';
import PageWrapper from '../components/PageWrapper';
import SearchContent from '../components/SearchContent';
import SearchBar from '../components/SearchBar';
import { homeWidgets } from '../data/widgets';
import { useBackendHealth } from '../hooks/useBackendHealth';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  // const { message, loading, error } = useBackendHealth();

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <PageWrapper showHeaderButtons={false}>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {/* <Box mb={4} color="gray.500">
        Backend Status: {message}
      </Box> */}

      {searchTerm ? (
        <SearchContent searchTerm={searchTerm} />
      ) : (
        <Grid
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap={{ base: 3, md: 4 }}
        >
          {homeWidgets.map((widget) => (
            <Widget
              key={widget.id}
              title={widget.title}
              description={widget.description}
              path={widget.path}
              bgColor="brand.300"
              shadowColor="black"
            />
          ))}
        </Grid>
      )}
    </PageWrapper>
  );
}

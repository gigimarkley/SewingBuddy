import { Box, Heading, Text, BoxProps } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface WidgetProps extends BoxProps {
  title: string;
  description: string;
  path?: string;
  bgColor?: string;
  shadowColor?: string;
}

export default function Widget({
  title,
  description,
  path,
  bgColor = 'brand.700',
  shadowColor = 'black',
  ...props
}: WidgetProps) {
  const navigate = useNavigate();

  return (
    <Box
      p={{ base: 3, md: 4 }}
      bg={bgColor}
      color="black"
      border="1px solid"
      borderColor={shadowColor}
      borderRadius="md"
      boxShadow={`4px 4px 0px ${shadowColor}`}
      textAlign="center"
      cursor={path ? 'pointer' : 'default'}
      transition="transform 120ms"
      _hover={
        path
          ? {
              transform: 'translate(-2px, -2px)',
            }
          : undefined
      }
      _active={
        path
          ? {
              transform: 'translate(0, 0)',
              boxShadow: `4px 4px 0px ${shadowColor}`,
            }
          : undefined
      }
      onClick={path ? () => navigate(path) : undefined}
      {...props}
    >
      <Heading size="sm" mb={2}>
        {title}
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }}>{description}</Text>
    </Box>
  );
}

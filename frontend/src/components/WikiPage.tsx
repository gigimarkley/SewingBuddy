import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
} from '@chakra-ui/react';
import { WikiSection } from '../types';

interface WikiPageProps {
  title: string;
  sections: WikiSection[];
}

export default function WikiPage({ title, sections }: WikiPageProps) {
  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      {sections.map((section) => (
        <AccordionItem key={section.id}>
          <AccordionButton>
            <AccordionIcon />
            <Heading size="md">{section.title}</Heading>
          </AccordionButton>
          <AccordionPanel pb={4}>
            {section.image && (
              <Image
                src={section.image}
                alt={section.title}
                mb={2}
                borderRadius="md"
                maxH="250px"
                objectFit="contain"
              />
            )}
            <Text mb={2}>{section.content}</Text>
            {section.subsections &&
              section.subsections.map((sub) => (
                <Box key={sub.id} mt={4} pl={4} borderLeft="2px solid gray">
                  <Heading size="sm">{sub.title}</Heading>
                  <Text mt={2}>{sub.content}</Text>
                </Box>
              ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

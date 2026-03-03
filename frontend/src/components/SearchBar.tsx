import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
}: SearchBarProps) {
  return (
    <InputGroup mb={6}>
      <Input
        placeholder={placeholder}
        bg="white"
        borderRadius="md"
        boxShadow="sm"
        _placeholder={{ color: 'gray.400' }}
        _focus={{ outline: 'none', boxShadow: 'outline' }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <InputRightElement>
          <IconButton
            aria-label="Clear search"
            icon={<CloseIcon />}
            size="sm"
            variant="ghost"
            onClick={() => onChange('')}
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
}

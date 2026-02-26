import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaBars } from 'react-icons/fa';

interface AppButtonProps {
  children?: ReactNode;
  variantType?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  [key: string]: any;
}

export default function AppButton({
  children,
  variantType = 'primary',
  fullWidth = false,
  ...props
}: AppButtonProps) {
  const variantStyles = {
    primary: {
      bg: 'brand.700',
      color: 'white',
      border: '1px solid',
      borderColor: 'black',
      boxShadow: '4px 4px 0px black',
      _hover: {
        bg: 'brand.600',
        transform: 'translate(-2px, -2px)',
        border: '1px solid',
        borderColor: 'black',
      },
      _active: {
        transform: 'translate(0, 0)',
        boxShadow: '4px 4px 0px black',
        border: '1px solid',
        borderColor: 'black',
      },
      _focus: {
        outline: 'none',
        boxShadow: '4px 4px 0px black',
        border: '1px solid',
        borderColor: 'black',
      },
      _focusVisible: {
        outline: 'none',
        boxShadow: '4px 4px 0px black',
        border: '1px solid',
        borderColor: 'black',
      },
    },
    secondary: {
      bg: 'brand.300',
      color: 'black',
      border: '1px solid',
      borderColor: 'black',
      boxShadow: '4px 4px 0px black',
      _hover: {
        bg: 'brand.400',
        transform: 'translate(-2px, -2px)',
        border: '1px solid',
        borderColor: 'black',
      },
      _active: {
        transform: 'translate(0, 0)',
        boxShadow: '4px 4px 0px black',
        border: '1px solid',
        borderColor: 'black',
      },
      _focus: {
        outline: 'none',
        boxShadow: '4px 4px 0px black',
        border: '1px solid',
        borderColor: 'black',
      },
      _focusVisible: {
        outline: 'none',
        boxShadow: '4px 4px 0px black',
        border: '1px solid',
        borderColor: 'black',
      },
    },
    outline: {
      bg: 'transparent',
      color: 'black',
      border: '1px solid',
      borderColor: 'black',
      boxShadow: '4px 4px 0px black',
      _hover: {
        bg: 'brand.100',
        transform: 'translate(-2px, -2px)',
        border: '1px solid',
        borderColor: 'black',
      },
      _active: {
        transform: 'translate(0, 0)',
        boxShadow: '4px 4px 0px black',
        border: '1px solid',
        borderColor: 'black',
      },
      _focus: {
        outline: 'none',
        boxShadow: '4px 4px 0px black',
        border: '1px solid',
        borderColor: 'black',
      },
      _focusVisible: {
        outline: 'none',
        boxShadow: '4px 4px 0px black',
        border: '1px solid',
        borderColor: 'black',
      },
    },
  };

  return (
    <Button
      borderRadius="md"
      px={6}
      py={5}
      fontWeight="semibold"
      width={fullWidth ? '100%' : 'auto'}
      {...variantStyles[variantType]}
      {...props}
    >
      {children}
    </Button>
  );
}

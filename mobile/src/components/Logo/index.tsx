import logo from '@assets/logo.png';
import { ComponentProps } from 'react';
import { Image } from 'react-native';

interface LogoProps extends Omit<ComponentProps<typeof Image>, 'source'>{}

export function Logo(props: LogoProps) {
  return (
    <Image
      {...props}
      source={logo}
    />
  
  )
}
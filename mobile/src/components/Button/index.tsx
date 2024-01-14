import { ComponentProps, ReactNode } from 'react';
import * as Styled from './styled';

interface ButtonProps extends ComponentProps<typeof Styled.Button>{
  text: string;
  icon?: ReactNode;
}

export function Button({
  variant,
  text,
  icon,
  ...props
}: ButtonProps) {
  return (
    <Styled.Button variant={variant} {...props}>
      {icon && icon}
      <Styled.Text variant={variant}>{ text }</Styled.Text>
    </Styled.Button>
  )
  
}
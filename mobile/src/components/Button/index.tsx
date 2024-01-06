import { ComponentProps } from 'react';
import * as Styled from './styled';

interface ButtonProps extends ComponentProps<typeof Styled.Button>{
  text: string
}

export function Button({
  variant,
  text,
  ...props
}: ButtonProps) {
  return (
    <Styled.Button variant={variant} {...props}>
      <Styled.Text variant={variant}>{ text }</Styled.Text>
    </Styled.Button>
  )
  
}
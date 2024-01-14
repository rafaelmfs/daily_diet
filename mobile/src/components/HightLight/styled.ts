import styled from "styled-components/native";

export const Title = styled.Text<{ variant: 'lg' | 'md'}>`
  font-size: ${({ theme, variant }) => variant === 'lg' ?  theme.FONT_SIZE["2xl"] : theme.FONT_SIZE.xl};
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.COLORS['gray-1']};
`

export const Subtitle = styled.Text`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  
  color: ${({ theme }) => theme.COLORS['gray-1']};
`
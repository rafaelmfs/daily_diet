import styled from "styled-components/native";

type TitleVariants = 'lg' | 'md' | 'sm'

export const Title = styled.Text<{ variant: TitleVariants}>`
  font-weight: 700;
  text-align: center;
  ${({ theme, variant }) => {
    const fontSize = () => {
      switch(variant){
        case 'lg': {
          return theme.FONT_SIZE["2xl"]
        }
        case "md": {
          return theme.FONT_SIZE.lg
        }
        case 'sm': {
          return theme.FONT_SIZE.md
        }
      }
    }
    return `
      color: ${theme.COLORS['gray-1']};
      font-size: ${fontSize()};
    `
  }}
`

export const Subtitle = styled.Text<{center?: boolean}>`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  text-align: ${({center}) => center ? 'center' : 'left'};
  
  color: ${({ theme }) => theme.COLORS['gray-1']};
`
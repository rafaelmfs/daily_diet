import styled from "styled-components/native";

type TextAlgin =  "start" | "end" | "left" | "right" | "center" | "justify" 

type TitleProps = {
  variant: 'lg' | 'md' | 'sm'
  align?: TextAlgin
}
export const Title = styled.Text<TitleProps>`
  font-weight: 700;
  ${({ theme, variant, align }) => {
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
      text-align: ${align ?? "center"};
    `
  }}
`

export const Subtitle = styled.Text<{align?: TextAlgin}>`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  text-align: ${({ align }) => align ?? 'left'};
  
  color: ${({ theme }) => theme.COLORS['gray-1']};
`
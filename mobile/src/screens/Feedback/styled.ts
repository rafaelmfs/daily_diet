import styled, { css } from "styled-components/native";

export const FeedbackContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  gap: 40px;
`

export const Title = styled.Text<{ success?: boolean}>`
  ${({ theme, success}) => css`
    font-size: ${theme.FONT_SIZE.xl};
    font-weight: bold;
    color: ${success ? theme.COLORS["green-dark"] : theme.COLORS["red-dark"]};
  `}
`

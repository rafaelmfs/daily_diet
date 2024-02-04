import styled from "styled-components/native";

type DividerProps = {
  height?: string
}

export const VerticalDivider = styled.View<DividerProps>`
  width: 1px;
  height: ${({ height }) => height ?? "16px"};
  background-color: ${({ theme }) => theme.COLORS["gray-4"]};
`
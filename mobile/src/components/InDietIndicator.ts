import styled from "styled-components/native";

export const InDietIndicator = styled.View<{ variant: "success" | "danger"}>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({ theme, variant }) => variant == "success" ? theme.COLORS["green-dark"] : theme.COLORS["red-dark"]};
`

import styled from "styled-components/native";

export const ErrorLabel = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.error}
`
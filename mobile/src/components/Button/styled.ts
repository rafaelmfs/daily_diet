import { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

interface ButtonProps extends ComponentProps<typeof TouchableOpacity>{
  variant?: 'outline' | 'default';
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  border-radius: 6px;
  padding: 16px 24px;
  gap: 12px;
  align-items: center;
  justify-content: center;


  ${({ theme, variant, disabled }) => {
    if (variant == 'outline') {
      return css`
        background-color: ${disabled ? theme.COLORS["gray-5"] : 'transparent' };
        border: 1px solid ${theme.COLORS["gray-1"]};
      `
    }

    return css`
      background-color: ${disabled ? theme.COLORS["gray-2"] : theme.COLORS["gray-1"]};
    `
  }}`;

export const Text = styled.Text<{ variant?: string }>`
  font-weight: bold;
  font-size: 14px;
  
  ${({ theme, variant }) => {
    if (variant == 'outline') {
      return css`
        color: ${theme.COLORS["gray-1"]};
      `
    }
    return css`
      color: ${theme.COLORS.white};
    `
  }}
`
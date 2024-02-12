import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const MealContaier = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS["gray-5"]};
`

export const MealHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 32px;

`

export const MealContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: 20px;
  padding: 40px 32px 32px;
  justify-content: space-between;
`
export const InputLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS["gray-1"]};
    font-size: ${theme.FONT_SIZE.sm};
    font-weight: 500;
    margin: 4px 2px; 
  `}
`

export const Grid = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const InDietIndicator = styled.View<{ variant: "success" | "danger"}>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({ theme, variant }) => variant == "success" ? theme.COLORS["green-dark"] : theme.COLORS["red-dark"]};
`

export const InDietButton = styled.Pressable<{ variant: "success" | "danger" | "default"}>`
  ${({ theme, variant}) => {
    const colors = {
      'default': {
        background: theme.COLORS["gray-6"],
        border: theme.COLORS["gray-6"]
      },
      'danger': {
        background: theme.COLORS["red-light"],
        border: theme.COLORS["red-dark"]
      },
      'success': {
        background: theme.COLORS["green-light"],
        border: theme.COLORS["green-dark"]
      }
    }
    
    return css`
      width: 50%;
      padding: 16px;
      background-color: ${colors[variant].background};
      border: 1px solid ${colors[variant].border};
      border-radius: 6px;

      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 4px;
      
    `
  }}
`

export const FormContainer = styled.View`
  gap: 24px;
`
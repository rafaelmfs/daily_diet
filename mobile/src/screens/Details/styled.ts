import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


export const DetailsContainer = styled(SafeAreaView)<{ success: boolean}>`
  flex: 1;
  background-color: ${({ theme, success}) => success ? theme.COLORS["green-light"] : theme.COLORS["red-light"]};
  padding-top: 32px;
  gap: 32px;
`

export const Header = styled.View`
  padding: 0 32px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

`

export const MealDetails = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: 20px;
  padding: 36px 32px 40px;
  gap: 24px;
`

export const Title = styled.Text<{ size: string}>`
  font-weight: 500;
  font-size: ${({ size}) => size+'px'};
  margin: 4px 0;
`

export const InDiet = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS["gray-6"]};
  padding: 8px 16px;
  width: 144px;
  border-radius: 100px;
`
export const ButtonContainer = styled.View`
  gap: 8px;
  margin-top: auto;

`

export const DeleteModalContainer = styled.View`
  align-items: center;
  justify-content: center;
  
  width: 100%;
  padding: 24px;
  gap: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.white};
`
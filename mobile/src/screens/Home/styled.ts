import { ArrowUpRight } from 'phosphor-react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


export const HomeContainer = styled(SafeAreaView)`
  padding: 24px;
  flex-direction: column;
  gap: 32px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Profile = styled.TouchableOpacity`
  position: relative;
  width: 40px;
  height: 40px;
  
  border-radius: 999px;
  border: 2px solid black;
  
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS["gray-6"]};
  z-index: 10;
`
type StatisticsProps = {
  variant: "success" | "danger"
}

export const Statistics = styled.TouchableOpacity<StatisticsProps>`
  position: relative;
  padding: 16px;
  
  align-items: center;
  justify-content: center;
  
  border-radius: 8px;
  background-color: ${({ theme, variant }) => variant === "success" ? theme.COLORS["green-light"] : theme.COLORS["red-light"]};
`

export const StatisticsOpenButton = styled(ArrowUpRight) <StatisticsProps>`
  width: 24px;
  height: 24px;
  color: ${({ theme, variant }) => variant === "success" ? theme.COLORS['green-dark'] : theme.COLORS['red-dark']};

  position: absolute;
  right: 8px;
  top: 8px;
`

export const MealsHistoryTitle = styled.Text`
  ${({ theme }) => `
    font-size: ${theme.FONT_SIZE.xl}px;
    font-weight: bold;
    color: ${theme.COLORS['gray-1']};
    letter-spacing: -2px;
  `}
`
export const MealsHistoryItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS['gray-4']};
  border-radius: 6px;
  padding: 16px;
  margin: 4px 0;
` 
export const MealsHistoryItemStatus = styled.View`
  flex-direction: row; 
  flex: 1;
  align-items: center; 
  justify-content: space-between;
`

export const MealsHistoryItemStatusIndicator = styled.View<{ in_diet: boolean}>`
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background-color: ${({ theme, in_diet}) => in_diet ? theme.COLORS['green-mid'] : theme.COLORS['red-mid']};
  margin-left: auto;
`

export const DropDownContainer = styled.View`
  position: absolute;
  bottom: -100%;
  right: 0;
  width: 80px;
  background: ${({ theme }) => theme.COLORS.white};
  padding: 8px;
  border-radius: 6px;
  elevation: 5;
`

export const DropDownItem = styled.Pressable`
  background: transparent;
  width: 100%;
  flex-direction: row;
  gap: 4px;
`
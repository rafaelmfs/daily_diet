import { ArrowUpRight } from 'phosphor-react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


export const HomeContainer = styled(SafeAreaView)`
  padding: 24px 24px 0;
  flex-direction: column;
  gap: 32px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Profile = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  
  border-radius: 999px;
  border: 2px solid black;
  
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS["gray-6"]};
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

export const MealsHistoryContainer = styled.View`
  
`

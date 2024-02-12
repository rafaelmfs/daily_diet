import styled from "styled-components/native";

export const OverviewContainer = styled.View<{success?: boolean}>`
  flex-direction: column;
  gap: 32px;
  padding-top: 32px;
  background-color: ${({success, theme}) => success ? theme.COLORS["green-light"] : theme.COLORS["red-light"]}
`

export const OverviewHeader = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
`

export const EstatisticsContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 32px 24px;
  background-color: #FFF;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  gap: 24px;
`

export const CardContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`

type CardProps = {
  variant: 'success' | 'danger' | 'light',
  fullWidth?: boolean
}

export const Card = styled.View<CardProps>`
  ${({ theme, variant, fullWidth}) => {
    const backgroundColor = () => {
      switch(variant){
        case 'danger': {
          return theme.COLORS["red-light"]
        }
        case 'success': {
          return theme.COLORS["green-light"]
        }
        default:{
          return theme.COLORS["gray-6"]
        }
      }
    }

    return`
      background-color: ${backgroundColor()};
      padding: 16px;
      border-radius: 8px;
      width: ${fullWidth ? '100%' : '48%'}
    `
  }}
`

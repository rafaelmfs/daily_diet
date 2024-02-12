import { useTheme } from "styled-components/native";
import { BackButton } from "../../components/BackButton";
import { HightLight } from "../../components/HightLight";
import { Card, CardContainer, EstatisticsContainer, OverviewContainer, OverviewHeader } from "./styled";

export function Overview(){
  const theme = useTheme()

  return (
    <OverviewContainer success>
      <OverviewHeader>
        <BackButton color={theme.COLORS["green-dark"]} style={{ marginRight: 'auto' }} />

        <HightLight
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          variant="lg"
          center
        />
      </OverviewHeader>

      <EstatisticsContainer>
        <HightLight
          title="Estatísticas gerais"
          variant="sm"
        />

        <CardContainer>
          <Card fullWidth variant="light">
            <HightLight
              title="22"
              subtitle="melhor sequência de pratos dentro da dieta"
              center
              variant="lg"
            />
          </Card>
          <Card fullWidth variant="light">
            <HightLight
              variant="lg"
              title="22"
              subtitle="melhor sequencia de pratos dentro da dieta"
              center
            />
          </Card>
          <Card fullWidth variant="light">
            <HightLight
              variant="lg"
              title="109"
              subtitle="refeições registradas"
              center
            />
          </Card>
          <Card variant="success">
            <HightLight
              variant="lg"
              title="99"
              subtitle="refeições dentro da dieta"
              center
            />
          </Card>
          <Card variant="danger">
            <HightLight
              variant="lg"
              title="10"
              subtitle="refeições fora da dieta"
              center
            />
          </Card>
        </CardContainer>
      </EstatisticsContainer>
    </OverviewContainer>
  )
}
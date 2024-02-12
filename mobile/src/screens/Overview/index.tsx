import { useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { BackButton } from "../../components/BackButton";
import { HightLight } from "../../components/HightLight";
import { Card, CardContainer, EstatisticsContainer, OverviewContainer, OverviewHeader } from "./styled";

type Statiscts = {
  percentage: number;
  bestSequence: number;
  mealsCount: number;
  mealsInDiet: number;
}

export function Overview(){
  const theme = useTheme()
  const route: any = useRoute()
  const statistics: Statiscts  = route.params
  const success = statistics.percentage >= 60

  return (
    <OverviewContainer success={success}>
      <OverviewHeader>
        <BackButton color={success ? theme.COLORS["green-dark"] : theme.COLORS["red-dark"]} style={{ marginRight: 'auto' }} />

        <HightLight
          title={`${statistics.percentage.toFixed(2)}%`}
          subtitle="das refeições dentro da dieta"
          variant="lg"
          subTitleAlign="center"
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
              title={String(statistics.bestSequence)}
              subtitle="melhor sequência de pratos dentro da dieta"
              subTitleAlign="center"
              variant="lg"
            />
          </Card>
          <Card fullWidth variant="light">
            <HightLight
              variant="lg"
              title={String(statistics.bestSequence)}
              subtitle="melhor sequencia de pratos dentro da dieta"
              subTitleAlign="center"
            />
          </Card>
          <Card fullWidth variant="light">
            <HightLight
              variant="lg"
              title={String(statistics.mealsCount)}
              subtitle="refeições registradas"
              subTitleAlign="center"
            />
          </Card>
          <Card variant="success">
            <HightLight
              variant="lg"
              title={String(statistics.mealsInDiet)}
              subtitle="refeições dentro da dieta"
              subTitleAlign="center"
            />
          </Card>
          <Card variant="danger">
            <HightLight
              variant="lg"
              title={String(statistics.mealsCount - statistics.mealsInDiet)}
              subtitle="refeições fora da dieta"
              subTitleAlign="center"
            />
          </Card>
        </CardContainer>
      </EstatisticsContainer>
    </OverviewContainer>
  )
}
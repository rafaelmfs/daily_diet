import { useNavigation } from "@react-navigation/native";
import { Plus, User } from "phosphor-react-native";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";
import { HightLight } from "../../components/HightLight";
import { Logo } from "../../components/Logo";
import { MealsHistory } from "./MealsHistory";
import { Header, HomeContainer, Profile, Statistics, StatisticsOpenButton } from "./styled";

export function Home() {
  const navigation = useNavigation()

  return (
    <HomeContainer>
        <Header>
          <Logo />
          <Profile>
            <User />
          </Profile>
        </Header>
        
        <Statistics variant="success" onPress={() => navigation.navigate('overview')}>
          <StatisticsOpenButton variant="success" />
          <HightLight
            title="90,86%"
            subtitle="das refeições dentro da dieta"
            variant="lg"
          />
        </Statistics>

        <View>
          <Text style={{
            marginBottom: 8,
            fontSize: 18
          }}>
            Refeições
          </Text>
          <Button
            onPress={() => navigation.navigate("meal", {
              meal: {
                id: "1",
                in_diet: 0,
                name: "Abacaxis",
                time: "2024-02-24 08:00",
                description: "AAAAAAAAAAAAAA"
              }
            })}
            activeOpacity={0.7}
            text="Nova refeição"
            icon={
              <Plus
                color="white"
              />
            }
          />
        </View>

      <MealsHistory />
    </HomeContainer>

  )
}
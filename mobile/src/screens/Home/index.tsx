import { Plus, User } from "phosphor-react-native";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";
import { HightLight } from "../../components/HightLight";
import { Logo } from "../../components/Logo";
import { Header, HomeContainer, Profile, Statistics, StatisticsOpenButton } from "./styled";

export function Home() {
  return (
    <HomeContainer>
      <Header>
        <Logo />
        <Profile>
          <User />
        </Profile>
      </Header>
      
      <Statistics variant="success">
        <StatisticsOpenButton variant="success" />
        <HightLight
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          variant="lg"
        />
      </Statistics>

      <View>
        <Text style={{
          marginBottom: 8
        }}>
          Refeições
        </Text>
        <Button
          activeOpacity={0.7}
          text="Nova refeição"
          icon={
            <Plus
              color="white"
            />
          }
        />
      </View>
    </HomeContainer>
  
  )
}
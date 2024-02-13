import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Plus, SignOut, User } from "phosphor-react-native";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { logout } from "../../api/CRUD/AUTH";
import { getAllMeals } from "../../api/CRUD/MEALS/getAllMeals";
import { getBestSequenceMealsInDiet } from "../../api/CRUD/MEALS/getBestSequenceMealsInDiet";
import { getMealsInDietCount } from "../../api/CRUD/MEALS/getMealsInDietCount";
import { Button } from "../../components/Button";
import { HightLight } from "../../components/HightLight";
import { Logo } from "../../components/Logo";
import { Skeleton } from "../../components/Skeleton";
import { Meal } from "../../interfaces/Meal";
import { removeToken } from "../../storage/auth/removeToken";
import { MealsHistory } from "./MealsHistory";
import { DropDownContainer, DropDownItem, Header, HomeContainer, Profile, Statistics, StatisticsOpenButton } from "./styled";

export function Home() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)

  const [meals, setMeals] = useState<Meal[]>([]);
  const [mealsCount, setMealsCount] = useState(0);
  const [mealsInDiet, setMealsInDiet] = useState(0);
  const [bestSequence, setBestSequence] = useState(0);

  const [openDropDown, setOpenDropDown] = useState(false)

  const percentage = () => {
    if(mealsInDiet > 0 && mealsCount > 0){
      return (mealsInDiet / mealsCount)* 100
    }

    return 0
  }

  async function loadMeals(){
    try {
      const { meals, total } = await getAllMeals()
      if(meals){
        setMealsCount(total)
        setMeals(meals)
      }
      
    } catch (error) {
      await removeToken()
      navigation.navigate("login", {
        session_expired: true
      })
    }
  }

  async function loadMealsInDietCount(){
    try {
      const { count } = await getMealsInDietCount()
      if(count){
        setMealsInDiet(count)
      }
    } catch (error) {
      await removeToken()
      navigation.navigate("login", {
        session_expired: true
      })
    }
  }

  async function loadBestSequence(){
    try {
      const { data } = await  getBestSequenceMealsInDiet()
      if(data.bestSequence){
        setBestSequence(data.bestSequence)
      }
    } catch (error) {
      await removeToken()
      navigation.navigate("login", {
        session_expired: true
      })
      
    }
  }

  async function loadMealsData(){
    try {
      await Promise.all([
        loadMeals(),
        loadMealsInDietCount(),
        loadBestSequence()
      ])
      setIsLoading(false)
    } catch (error: any) {
      console.error(error)
    }
  }

  async function handleLogout(){
    await logout()
    await removeToken()
    navigation.navigate("login", {
      session_expired: true
    })
  }

  useFocusEffect(useCallback(() => {
    loadMealsData()
  }, []))

  return (
    <HomeContainer>
        <Header>
          <Logo />
          <Profile activeOpacity={0.9} onPress={() => setOpenDropDown(!openDropDown)}>
            <User />
            {
              openDropDown && (
                <DropDownContainer>
                   <DropDownItem onPress={handleLogout}>
                      <SignOut />
                      <Text>Sair</Text>
                    </DropDownItem>
                </DropDownContainer>
              )
            }
          </Profile>
        </Header>
        {
          isLoading ? <Skeleton height={'80px'} /> : (
          <Statistics variant={percentage() >= 60 ? "success" : "danger"} onPress={() => navigation.navigate('overview', {
            bestSequence,
            mealsInDiet,
            mealsCount,
            percentage: percentage()
          })}>
            <StatisticsOpenButton variant={percentage() >= 60 ? "success" : "danger"} />
            <HightLight
              title={`${percentage() > 0 ? Number(percentage()).toFixed(2) : 0}%`}
              subtitle="das refeições dentro da dieta"
              variant="lg"
            />
          </Statistics>
          )
        }

        <View>
          <Text style={{
            marginBottom: 8,
            fontSize: 18
          }}>
            Refeições
          </Text>
          <Button
            onPress={() => navigation.navigate("meal")}
            activeOpacity={0.7}
            text="Nova refeição"
            icon={
              <Plus
                color="white"
              />
            }
          />
        </View>

        {
          isLoading ? <Skeleton height="300px" /> : 
          <MealsHistory meals={meals} />
        }
      
    </HomeContainer>

  )
}
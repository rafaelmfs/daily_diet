import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getAllMeals } from "../../api/CRUD/MEALS/getAllMeals";
import { Button } from "../../components/Button";
import { VerticalDivider } from "../../components/VerticalDivider";
import { useAuthUser } from "../../context/UserContext";
import { Meal } from "../../interfaces/Meal";
import theme from "../../theme";
import { MealsHistoryItem, MealsHistoryItemStatus, MealsHistoryItemStatusIndicator, MealsHistoryTitle } from "./styled";

export function MealsHistory() {
  const [meals, setMeals] = useState<Meal[]>([])
  const { authToken } = useAuthUser()
  const mealsByDate: { [date: string]: Meal[] } = {};

// Organizar refeições por data
  meals.forEach(meal => {
    const mealDate = dayjs(meal.time).startOf("day").format("DD.MM.YY");
    if (!mealsByDate[mealDate]) {
      mealsByDate[mealDate] = [];
    }
    mealsByDate[mealDate].push(meal);
  });

  // Redução para criar o histórico de refeições
  const displayMealsHistory = Object.entries(mealsByDate).map(([date, mealsWithSameDate]) => ({
    date,
    items: mealsWithSameDate.map(item => ({
      id: item.id,
      name: item.name,
      description: item.description,
      in_diet: !!item.in_diet,
      time: dayjs(item.time).format("HH:mm")
    }))
  }));

  async function loadMeals(){
    const { meals } = await getAllMeals(authToken ?? '')
    
    if(meals){
      setMeals(meals)
    }
  }

  useEffect(() => {
    if(authToken){
      loadMeals()
    }
  }, [authToken])


  return (
    <FlatList 
      data={displayMealsHistory}
      style={{
        marginBottom: 64
      }}
      renderItem={({ item, index }) => (
        <>
          <MealsHistoryTitle style={{ fontSize: 32 }}>{item.date}</MealsHistoryTitle>
          {item.items.map(meal => (
            <MealsHistoryItem key={meal.id}>
              <Text style={{ fontSize: 16, fontWeight: "700"  ,color: theme.COLORS["gray-1"]}}>{meal.time}</Text>
              <VerticalDivider />
              <MealsHistoryItemStatus>
                <Text style={{fontSize: 18}}>{meal.name}</Text>
                <MealsHistoryItemStatusIndicator in_diet={meal.in_diet}  />
              </MealsHistoryItemStatus>
            </MealsHistoryItem>
          ))}

          { index === displayMealsHistory.length - 1 && <View style={{ height: 300, backgroundColor: theme.COLORS["gray-6"] }} />}
        </>
      )}
      ListEmptyComponent={(
        <View style={{
          width: '100%',
          padding: 16,
          backgroundColor: theme.COLORS["gray-5"],
          borderWidth: 1,
          borderColor: theme.COLORS["gray-4"],
          borderRadius: 6

        }}>
          <Text>Nehuma refeição cadastrada!</Text>
          <Button
            variant="text"
            text="Clique para cadastrar uma nova refeição"
          />
        </View>
      )}
      keyExtractor={item => item.date}
    />
  )
}
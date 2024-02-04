import { Meal } from "../../../interfaces/Meal";
import { api } from "../../axios";
import { MEALS_API_ENDPOINT } from './mealsApiConstants';

export async function getAllMeals(authToken: string){
  try {
    const mealsResponse = await api.get<{
      meals: Meal[],
      total: number;
    }>(MEALS_API_ENDPOINT, {
      headers: {
        Authorization: authToken
      }
    })

    return mealsResponse.data

  } catch (error) {
    throw error
  }
}
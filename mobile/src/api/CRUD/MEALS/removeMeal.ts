import { api } from "../../axios"

export async function removeMeal(mealId: string){
  try {
    const response = await api.delete(`/meals/${mealId}`)

    return response
  } catch (error) {
    throw error
  }
}
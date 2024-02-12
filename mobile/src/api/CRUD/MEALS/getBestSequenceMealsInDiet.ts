import { api } from "../../axios";

export async function getBestSequenceMealsInDiet(){
  try {
    const response = await api.get<{bestSequence: number}>("/meals/best_sequence")

    if(response.status !== 200){
      throw new Error("Falha ao buscar dados!")
    }

    return response
  } catch (error) {
    throw error
  }
}
import { Meal } from "../interfaces/Meal";
export declare global{
  namespace ReactNavigation{
    interface RootParamList{
      login: undefined | { session_expired: boolean};
      register: undefined;
      home: undefined;
      overview: {
        percentage: number;
        bestSequence: number;
        mealsCount: number;
        mealsInDiet: number;
      };
      meal: { meal: Meal } | undefined;
      details: { meal: Meal };
      feedback: { success: boolean };
    }
  }
}
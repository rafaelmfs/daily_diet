import { Meal } from "../interfaces/Meal";

export declare global{
  namespace ReactNavigation{
    interface RootParamList{
      login: undefined;
      register: undefined;
      home: undefined;
      overview: undefined;
      meal: { meal: Meal } | undefined;
    }
  }
}
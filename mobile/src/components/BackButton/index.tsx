import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";

interface BackButtonProps extends ComponentProps<typeof ArrowLeft>{
  backFunction?: () => void
  href?: string;
}

export function BackButton({
  backFunction,
  href,
  ...props
}: BackButtonProps) {
  const navigation = useNavigation()

  function handleClick() {
    navigation.goBack()
  }
  
  return (
    <TouchableOpacity
      onPress={() => {
        if (backFunction) {
          backFunction()
        } else {
          handleClick()
        }
      }}
    >
      <ArrowLeft
        {...props}
      />
    </TouchableOpacity>
  )
}
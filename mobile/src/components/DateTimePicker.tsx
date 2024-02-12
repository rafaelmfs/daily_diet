import RNDateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { useState } from "react";
import { View } from "react-native";
import { StyledInput } from "./TextInput";

interface DateTimePickerProps{
  dateValue: Date;
  onDateChange: (date: string) => void;
}


export function DateTimePicker({ dateValue, onDateChange }: DateTimePickerProps){
  const [openPicker, setOpenPicker] = useState(false);
  const [currentValue, setCurrentValue] = useState(dateValue)

 return(
   <View>
     <StyledInput value={dayjs(currentValue).format("HH:mm")} onFocus={() => setOpenPicker(true)} />
     {
       openPicker && <RNDateTimePicker locale="ptBR" mode="time" value={dateValue} onChange={(event, dateChanged) => {
        if(dateChanged){
          setCurrentValue(dateChanged)
          onDateChange(dayjs(dateChanged).format("HH:mm"))
        }
         setOpenPicker(false)
       }} />
     }
   </View>
 )
} 
import RNDateTimePicker from "@react-native-community/datetimepicker"
import dayjs from "dayjs"
import { useState } from "react"
import { View } from "react-native"
import { StyledInput } from "./TextInput"

interface DatePickerProps{
  dateValue: Date;
  onDateChange: (date: string) => void;
}

export function DatePicker({ dateValue, onDateChange }: DatePickerProps){
   const [openPicker, setOpenPicker] = useState(false)
   const [currentValue, setCurrentValue] = useState(dateValue)

  return(
    <View>
      <StyledInput value={dayjs(currentValue).format("DD/MM/YYYY")} onFocus={() => {
        if(!openPicker){
          setOpenPicker(true)
        }
      }} />
      {
        openPicker && <RNDateTimePicker locale="ptBR" value={dateValue} onChange={(event, dateChanged) => {
          if(dateChanged){
            const changedValue = dayjs(dateChanged).startOf('day').format("YYYY-MM-DD")

            onDateChange(changedValue)
            setCurrentValue(dateChanged)
          }
          setOpenPicker(false)
        }} />
      }
    </View>
  )
}
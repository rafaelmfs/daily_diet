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
      <StyledInput 
        value={dayjs(currentValue).format("DD/MM/YYYY")} 
        onBlur={() => setOpenPicker(false)} 
        onFocus={() => setOpenPicker(true)} 
      />
      {
        openPicker && (
          <RNDateTimePicker 
            locale="ptBR" 
            value={dateValue}             
            onChange={(event, dateChanged) => {
              setOpenPicker(false)
              if(dateChanged){
                const changedValue = dayjs(dateChanged).startOf('day')
    
                onDateChange(changedValue.format("YYYY-MM-DD"))
                setCurrentValue(dateChanged)
              }
            }} 
          />
        )
      }
    </View>
  )
}
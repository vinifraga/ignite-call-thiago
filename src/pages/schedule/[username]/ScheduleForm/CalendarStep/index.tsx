import { useState } from 'react'
import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimerPicker,
  TimerPickerHeader,
  TimerPickerItem,
  TimerPickerList,
} from './styles'
import dayjs from 'dayjs'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const isDateSelected = !!selectedDate
  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimerPicker>
          <TimerPickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimerPickerHeader>

          <TimerPickerList>
            <TimerPickerItem>08:00h</TimerPickerItem>
            <TimerPickerItem>08:30h</TimerPickerItem>
            <TimerPickerItem>09:00h</TimerPickerItem>
            <TimerPickerItem>09:30h</TimerPickerItem>
            <TimerPickerItem>10:00h</TimerPickerItem>
            <TimerPickerItem>10:30h</TimerPickerItem>
            <TimerPickerItem>11:00h</TimerPickerItem>
            <TimerPickerItem>11:30h</TimerPickerItem>
            <TimerPickerItem>12:00h</TimerPickerItem>
            <TimerPickerItem>12:30h</TimerPickerItem>
            <TimerPickerItem>13:00h</TimerPickerItem>
            <TimerPickerItem>13:30h</TimerPickerItem>
            <TimerPickerItem>14:00h</TimerPickerItem>
            <TimerPickerItem>14:30h</TimerPickerItem>
          </TimerPickerList>
        </TimerPicker>
      )}
    </Container>
  )
}

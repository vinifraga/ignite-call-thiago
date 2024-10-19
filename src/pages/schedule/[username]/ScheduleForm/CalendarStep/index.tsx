import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimerPicker,
  TimerPickerHeader,
  TimerPickerItem,
  TimerPickerList,
} from './styles'

export function CalendarStep() {
  const isDateSelected = true

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <TimerPicker>
          <TimerPickerHeader>
            Domingo <span>10 de Outubro</span>
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

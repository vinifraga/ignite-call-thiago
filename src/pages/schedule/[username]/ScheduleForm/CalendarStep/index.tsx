import { useState } from 'react'
import { Calendar } from '../../../../../components/Calendar'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { api } from '../../../../../lib/axios'
import {
  Container,
  TimerPicker,
  TimerPickerHeader,
  TimerPickerItem,
  TimerPickerList,
} from './styles'

interface Availability {
  possibleTimes: number[]
  availableTimes: number[]
}

interface CalendarStepProps {
  onTimeSelected: (date: Date) => void
}

export function CalendarStep({ onTimeSelected }: CalendarStepProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const router = useRouter()

  const isDateSelected = !!selectedDate
  const username = String(router.query.username)

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  const selectedDateWithoutTime = selectedDate
    ? dayjs(selectedDate).format('YYYY-MM-DD')
    : null

  const { data: availability } = useQuery<Availability>({
    queryKey: ['availability', selectedDateWithoutTime],
    queryFn: async () => {
      const response = await api.get(`/users/${username}/availability`, {
        params: {
          date: selectedDateWithoutTime,
          timezoneOffset: selectedDate ? selectedDate.getTimezoneOffset() : 0,
        },
      })

      return response.data
    },
    enabled: !!selectedDate,
  })

  function handleSelectTime(hour: number) {
    const dateWithTime = dayjs(selectedDate)
      .set('hour', hour)
      .startOf('hour')
      .toDate()

    onTimeSelected(dateWithTime)
  }

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimerPicker>
          <TimerPickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimerPickerHeader>

          <TimerPickerList>
            {availability?.possibleTimes?.map((hour) => {
              return (
                <TimerPickerItem
                  key={hour}
                  onClick={() => handleSelectTime(hour)}
                  disabled={!availability.availableTimes.includes(hour)}
                >
                  {String(hour).padStart(2, '0')}:00h
                </TimerPickerItem>
              )
            })}
          </TimerPickerList>
        </TimerPicker>
      )}
    </Container>
  )
}

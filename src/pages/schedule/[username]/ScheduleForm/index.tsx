import { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>()

  function handleClearSelectedTime() {
    setSelectedDateTime(null)
  }

  if (selectedDateTime) {
    return (
      <ConfirmStep
        onCancelConfirmation={handleClearSelectedTime}
        schedulingDate={selectedDateTime}
      />
    )
  }
  return <CalendarStep onTimeSelected={setSelectedDateTime} />
}

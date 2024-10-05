export function convertTimeStringToMinutes(timeString: string) {
  const [hours, minutes] = timeString.split(':').map(Number)
  const minutesAmount = hours * 60 + minutes
  return minutesAmount
}

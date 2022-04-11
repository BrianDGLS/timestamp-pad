export const addLeadingZero = (n: number): string => n.toString().padStart(2, '0')

export const getTimeFromDate = (date: Date) => {
  const hours = addLeadingZero(date.getHours())
  const minutes = addLeadingZero(date.getMinutes())
  const seconds = addLeadingZero(date.getSeconds())
  return `${hours}:${minutes}:${seconds}`
}
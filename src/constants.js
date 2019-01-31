export const CALENDAR = {
  PRODID: 'angeloashmore/mypage-to-ics',
  VERSION: 2
}

export const EVENT = {
  LOCATION: 'Apple, Trinity Leeds',
  SUMMARY: (startTime, endTime) => `Work ${startTime} - ${endTime}`
}

export const ALARM = {
  ACTION: 'DISPLAY',
  DESCRIPTION: 'Event Reminder'
}

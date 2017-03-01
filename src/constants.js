export const CALENDAR = {
  PRODID: 'angeloashmore/mypage-to-ics',
  VERSION: 2
}

export const EVENT = {
  LOCATION: 'Apple Store',
  SUMMARY: (startTime, endTime) => `You work ${startTime} - ${endTime}`
}

export const ALARM = {
  ACTION: 'DISPLAY',
  DESCRIPTION: 'Event Reminder'
}

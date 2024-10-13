import { getLocalTimeZone, ZonedDateTime } from '@internationalized/date';
import { Dayjs } from 'dayjs';

export default function formatDayjsToZoned(dayjsDate: Dayjs) {
  const year = dayjsDate.year();
  const month = dayjsDate.month() + 1; // dayjs에서 월은 0부터 시작하므로 +1
  const day = dayjsDate.date();
  const hour = dayjsDate.hour();
  const minute = dayjsDate.minute();

  return new ZonedDateTime(year, month, day, getLocalTimeZone(), 32400000, hour, minute);
}

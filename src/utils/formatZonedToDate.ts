import { ZonedDateTime } from '@internationalized/date';

/**
 * @param zonedTime zonedTime 객체
 * @returns yyyy-mm-dd hh:mm 형식의 문자열
 */
export default function formatZonedToDate(zonedDateTime: ZonedDateTime): string {
  const { year, month, day, hour, minute } = zonedDateTime;

  // 월과 일이 한 자리 수인 경우 앞에 0을 추가
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
  const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;

  return `${year}-${formattedMonth}-${formattedDay} ${formattedHour}:${formattedMinute}`;
}

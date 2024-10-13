import { getLocalTimeZone, ZonedDateTime } from '@internationalized/date';

/**
 * @param year 연도
 * @param month 월
 * @param day 일
 * @param hour 시간
 * @param minute 분
 * @returns ZonedDateTime으로 변환된 날짜와 시간
 */
export default function formatDateToZoned(year: number, month: number, day: number, hour: number, minute: number) {
  // ZonedDateTime으로 변환
  const dateTime = new ZonedDateTime(
    year, // 연도
    month, // 월 (0부터 시작하므로 +1)
    day, // 일
    getLocalTimeZone(), // 로컬 시간대
    32400000, // UTC +9 시간대 오프셋 (밀리초 단위)
    hour, // 시간 (23시)
    minute // 분 (59분)
  );

  return dateTime;
}

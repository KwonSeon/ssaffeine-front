import formatDateToZoned from './formatDateToZoned';

/**
 * @returns 다음 주 월요일 09:00 ZonedDateTime으로 변환된 날짜와 시간
 */
export default function getNextMonday() {
  const now = new Date(); // 현재 날짜와 시간 가져오기
  const dayOfWeek = now.getDay(); // 현재 요일 가져오기 (0: 일요일 ~ 6: 토요일)

  // 다음 주 월요일까지 남은 일수 계산 (1: 월요일)
  const daysUntilNextMonday = (1 - dayOfWeek + 7) % 7 || 7;

  // 다음 주 월요일 날짜로 설정
  const nextMondayDate = new Date(now);
  nextMondayDate.setDate(now.getDate() + daysUntilNextMonday);

  // ZonedDateTime으로 변환
  const dateTime = formatDateToZoned(
    nextMondayDate.getFullYear(), // 연도
    nextMondayDate.getMonth() + 1, // 월 (0부터 시작하므로 +1)
    nextMondayDate.getDate(), // 일
    9, // 시간 (9시)
    0 // 분 (0분)
  );

  return dateTime;
}

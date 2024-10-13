import formatDateToZoned from './formatDateToZoned';

/**
 * @returns 다음 주 금요일 23:59 ZonedDateTime으로 변환된 날짜와 시간
 */
export default function getNextFriday() {
  const now = new Date(); // 현재 날짜와 시간 가져오기
  const dayOfWeek = now.getDay(); // 현재 요일 가져오기 (0: 일요일 ~ 6: 토요일)

  // 다음 주 금요일까지 남은 일수 계산 (5: 금요일)
  const daysUntilNextFriday = (5 - dayOfWeek + 7) % 7 || 7;

  // 다음 주 금요일 날짜로 설정
  const nextFridayDate = new Date(now);
  nextFridayDate.setDate(now.getDate() + daysUntilNextFriday);

  // ZonedDateTime으로 변환
  const dateTime = formatDateToZoned(
    nextFridayDate.getFullYear(), // 연도
    nextFridayDate.getMonth() + 1, // 월 (0부터 시작하므로 +1)
    nextFridayDate.getDate(), // 일
    23, // 시간 (23시)
    59 // 분 (59분));
  );

  return dateTime;
}

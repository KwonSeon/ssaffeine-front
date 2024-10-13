/**
 * @param binaryValue 0부터 6까지의 숫자를 2진수로 표현한 값
 * @returns 2진수로 표현된 값을 요일 배열로 변환
 */
export default function formatNumToDayArray(binaryValue: number) {
  const weekdays: string[] = [];

  // 0부터 6까지의 숫자에 대해 확인
  for (let i = 0; i < 7; i++) {
    // 2^i 자리의 비트가 켜져 있는지 확인
    if (binaryValue & (1 << i)) {
      weekdays.push(String(i + 1)); // 요일은 1부터 시작하므로 i+1을 사용
    }
  }

  return weekdays;
}

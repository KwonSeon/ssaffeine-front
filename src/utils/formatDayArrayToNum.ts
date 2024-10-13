/**
 * @param arr 요일을 나타내는 숫자 배열
 * @returns 요일을 나타내는 숫자 배열을 2진수로 변환한 후 합산한 값
 */
export default function formatDayArrayToNum(arr: string[]) {
  // 배열을 순회하며 2^(n-1)을 계산한 후 합산
  return arr.reduce((sum: number, value: string) => sum + Math.pow(2, Number(value) - 1), 0);
}

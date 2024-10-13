/**
 * @param num 요일을 나타내는 숫자 0 ~ 5
 * @returns ['전체', '월요일', '화요일', '수요일', '목요일', '금요일']
 */
export default function formatNumberToDay(num: number) {
  switch (num) {
    case 0:
      return '전체';
    case 1:
      return '월요일';
    case 2:
      return '화요일';
    case 3:
      return '수요일';
    case 4:
      return '목요일';
    case 5:
      return '금요일';
  }
}

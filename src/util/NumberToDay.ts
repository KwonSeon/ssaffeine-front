export default function NumberToDay(num: number) {
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

const SECONDS_IN_WEEK = 604800;
const SECONDS_IN_DAY = 86400;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

/**
 * @returns 일주일 중 일요일까지 남은 시간(초)을 반환
 */
export default function getLastSecondToSun() {
  const date = new Date();
  return (
    SECONDS_IN_WEEK -
    (((date.getDay() + 6) % 7) * SECONDS_IN_DAY +
      date.getHours() * SECONDS_IN_HOUR +
      date.getMinutes() * SECONDS_IN_MINUTE +
      date.getSeconds())
  );
}

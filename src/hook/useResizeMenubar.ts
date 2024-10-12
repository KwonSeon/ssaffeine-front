import { useEffect, useState } from 'react';

export default function useResizeMenubar() {
  // 화면 크기에 따라 isVertical을 동적으로 설정
  const [isVertical, setIsVertical] = useState(true);

  // 화면 크기 감지 및 설정
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg 이상
        setIsVertical(true);
      } else {
        // sm 이하
        setIsVertical(false);
      }
    };

    // 초기 화면 크기 설정
    handleResize();

    // 창 크기가 변경될 때마다 호출
    window.addEventListener('resize', handleResize);

    // 클린업 함수
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isVertical;
}

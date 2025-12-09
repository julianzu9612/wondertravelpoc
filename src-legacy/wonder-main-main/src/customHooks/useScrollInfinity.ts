'use client';
import { useEffect } from 'react';
import { RefObject } from 'react';
const calculatePercentage = (current: HTMLElement) => {
  const tallSection = current.clientHeight;
  const scrollActual = window.scrollY;
  const scrollInSection = scrollActual - current.offsetTop;
  const percentageScrollInSection =
    (scrollInSection / (tallSection - window.innerHeight)) * 100;
  return percentageScrollInSection;
};
interface IScrollInfinity {
  refContainer: RefObject<HTMLElement>;
  nextOffset: number;
  countParams: number;
  isLoading: boolean;
  getData: () => Promise<void>;
}
const useScrollInfinity = ({
  refContainer,
  countParams,
  nextOffset,
  isLoading,
  getData,
}: IScrollInfinity) => {
  const onScroll = async () => {
    const rect = refContainer.current?.getBoundingClientRect();
    const { current } = refContainer;
    if (rect && current) {
      const percentageScrollInSection = calculatePercentage(current);
      const roundPercentage = Math.round(percentageScrollInSection);
      const validatePercentage = roundPercentage >= 100 && roundPercentage;
      if (!isLoading && validatePercentage) {
        await getData();
      }
    }
  };
  useEffect(() => {
    const { current } = refContainer;
    if (nextOffset <= countParams) {
      if (current) {
        window.addEventListener('scroll', onScroll);
      }
    } else {
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll, refContainer]);
  return null;
};

export default useScrollInfinity;

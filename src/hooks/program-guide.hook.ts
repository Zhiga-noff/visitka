'use client';
import { getProgramGuide, setActive, setShowMore } from 'store/slices/program-guide.slices';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const useProgramQuide = () => {
  const { active, showMore, currentDate } = useAppSelector(getProgramGuide);

  const dispath = useAppDispatch();

  const onActive = (date: string) => {
    if (!showMore) {
      dispath(setShowMore());
    }
    dispath(setActive(date));
  };

  return {
    active,
    onActive,
    currentDate,
    showMore,
  };
};

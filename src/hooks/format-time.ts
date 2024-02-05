'use client';
import { useEffect, useState } from 'react';

/* Хук менят вид отображения даты создания на привычную дд.ммм.ггг */
export const useFormatTime = (date: string | undefined) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    if (date) {
      setTime(
        Intl.DateTimeFormat('ru', { day: 'numeric', month: 'long', year: 'numeric' }).format(
          new Date(date)
        )
      );
    }
  }, [date]);

  return { time };
};

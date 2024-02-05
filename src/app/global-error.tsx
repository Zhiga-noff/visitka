'use client';

interface IProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: IProps) {
  const onReset = () => reset();
  const onReload = () => window.location.reload();

  return (
    <html lang='ru'>
      <body>
        <h2>Что-то пошло не так!</h2>
        <button onClick={onReset}>Попробовать исправить</button>
        <button onClick={onReload}>Обновить страницу</button>
      </body>
    </html>
  );
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

/* Функция для создания рандомных строковых значений.
* В зависимости от переданных аргументов будет возвращен
* либо массив из указанного количества элементов(count)
* либо одна строка, если count не был передана.
* length - длин сгенерированных строк */

function random(length: number): string;
function random(length: number, count: number): string[];

function random(length: number, count?: number): string[] | string {
  if (count) {
    const res: string[] = [];
    for (let i = 0; i < count; i++) {
      res.push(random(length));
    }
    return res;
  }

  let result = '';
  let counter = 0;

  while (counter < length) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
    counter += 1;
  }

  return result;
}

export { random };

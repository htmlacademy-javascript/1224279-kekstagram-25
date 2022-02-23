const MAX_LENGTH = 140;
const ALERT_MESSAGE = 'Передайте число больше 0 для min';

// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.

const getRandomNumber = (min, max) => {
  if (min <= 0 || min >= max) {
    throw new Error(ALERT_MESSAGE);
  }
  const inner_number = Math.random() * (max - min) + min;
  return Math.floor(inner_number);
};
getRandomNumber(-2, 100);

// Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна. Пример использования функции:
// имя_функции(проверяемая_строка, максимальная_длина); // Результат: true, если строка проходит по длине, и false — если не проходит

function isStringLength(str, maxLength) {
  return (str.length < maxLength);
}
isStringLength('efwefwefweff', MAX_LENGTH);

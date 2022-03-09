const MAX_LENGTH = 140;
const ALERT_MESSAGE = 'Передайте число больше 0 для min';

// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.

const getRandomNumber = (min, max) => {
  if (min <= 0 || min >= max) {
    throw new Error(ALERT_MESSAGE);
  }
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
};
getRandomNumber();

// Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна. Пример использования функции:
// имя_функции(проверяемая_строка, максимальная_длина); // Результат: true, если строка проходит по длине, и false — если не проходит

function isStringLength(str, maxLength) {
  return (str.length < maxLength);
}
isStringLength('efwefwefweff', MAX_LENGTH);

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES_ARR = [
  'Алекс',
  'Фил',
  'Кэт',
  'Джон',
  'Лео',
  'Сильвия',
];

const createObjects = () => {
  const randomId = getRandomNumber(1, 25);
  const bigRandomId = getRandomNumber(15, 200);
  const minRandomId = getRandomNumber(1, 6);

  return {
    id: randomId,
    url: `photos/${randomId}.jpg`,
    description: 'Моя новая фотка',
    likes: bigRandomId,
    comments: COMMENTS[getRandomNumber(1, COMMENTS.length - 1)],
    avatar: `img/avatar${minRandomId}.svg`,
    message: COMMENTS[getRandomNumber(1, COMMENTS.length - 1)],
    name: NAMES_ARR[getRandomNumber(1, NAMES_ARR.length - 1)]
  };
};

console.log(createObjects());

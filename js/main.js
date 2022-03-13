// const MAX_LENGTH = 140;
const ALERT_MESSAGE = 'Передайте число больше 0 для min';
const PICTURES_AMOUNT = 25;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Алекс',
  'Фил',
  'Кэт',
  'Джон',
  'Лео',
  'Сильвия',
];

const getRandomNumber = (min, max) => {
  if (min <= 0 || min >= max) {
    throw new Error(ALERT_MESSAGE);
  }
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
};

// const checkStringLength = (str, maxLength) => str.length < maxLength;
// checkStringLength('efwefwefweff', MAX_LENGTH);

// comments: COMMENTS[getRandomNumber(1, COMMENTS.length - 1)],
// avatar: `img/avatar${minRandomId}.svg`,
// message: COMMENTS[getRandomNumber(1, COMMENTS.length - 1)],
// name: NAMES[getRandomNumber(1, NAMES.length - 1)]

const createComment = (index) => { //! Создает комментарий с id, avatar, message, name
  const randomPictureNumber = getRandomNumber(1, 6);

  return {
    id: index,
    avatar: `img/avatar${randomPictureNumber}.svg`,
    message: COMMENTS[getRandomNumber(1, COMMENTS.length - 1)],
    name: NAMES[getRandomNumber(1, NAMES.length - 1)],
  };
};

const createComments = () => {
  const comments = [];

  for (let i = 0; i < 10; i++) {
    comments.push(createComment(i));
  }

  return comments;
};

const createPicture = (index) => {
  const randomId = getRandomNumber(1, 25);

  return {
    id: index,
    url: `photos/${randomId}.jpg`,
    description: 'Моя новая фотка',
    likes: getRandomNumber(15, 200),
    comments: createComments(),
  };
};

const createPictures = () => {
  const pictures = [];

  for (let i = 0; i < PICTURES_AMOUNT; i++) {
    pictures.push(createPicture(i));
  }

  return pictures;
};

createPictures();

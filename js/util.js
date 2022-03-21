const getRandomNumber = (min, max) => {
  if (min <= 0 || min >= max) {
    throw new Error(ALERT_MESSAGE);
  }
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
};

export {getRandomNumber};

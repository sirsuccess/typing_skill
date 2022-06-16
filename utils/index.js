const getScore = (typedTextArray, paragraphArray) => {
  let score = 0;

  typedTextArray.forEach((word, index) => {
    console.log(word, paragraphArray[index]);
    if (word == paragraphArray[index]) {
      score += 1;
    }
  });

  return score;
};

const getAccuracyAndSpeed = (score, typedText, paragraphArray, time) => {
  const accuracy = (score / paragraphArray.length) * 100;
  const speed = typedText.length / time / 5;
  return { accuracy, speed };
};

export { getScore, getAccuracyAndSpeed };

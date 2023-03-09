export const stringFormattingForInputId = string => {
  const currentWordsInString = string.split(' ');

  if (currentWordsInString.length > 1) {
    const secondWord =
      currentWordsInString[1].charAt(0).toUpperCase() + currentWordsInString[1].slice(1);
    return currentWordsInString[0] + secondWord;
  }

  return string;
};

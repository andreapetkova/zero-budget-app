export const stringFormattingForInputTitle = string => {
  const currentWordsInString = string.split(' ');

  if (currentWordsInString.length > 1) {
    return currentWordsInString.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getHyphenDate = (date: Date | undefined) => {
  if (date instanceof Date) {
    return date.toJSON().slice(0, 10);
  }

  if (typeof date === "string") {
    return new Date(date).toJSON().slice(0, 10);
  }

  return date;
};

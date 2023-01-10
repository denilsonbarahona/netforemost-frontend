export const getHyphenDate = (date: Date | undefined) => {
  if (date instanceof Date) {
    return date.toJSON().slice(0, 10);
  }

  if (typeof date === "string") {
    const newDate = new Date(date);
    if (newDate instanceof Date && !isNaN(newDate.valueOf())) {
      return newDate.toJSON().slice(0, 10);
    }
  }

  return "Invalid Date";
};

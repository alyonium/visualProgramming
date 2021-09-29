export const convertDate = (date) => {
  const currentDate = new Date(date);

  const d = currentDate.getDate();
  const m = currentDate.getMonth();
  const y = currentDate.getFullYear();

  return `${d}-${m + 1}-${y}`;
};

export const player = () => {
  let sign;
  let score;

  const setSign = (string) => (sign = string);
  const getSigh = () => sign;
  const setScore = () => score++;

  return { setSign, getSigh, setScore };
};

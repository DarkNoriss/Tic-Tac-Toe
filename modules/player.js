export const player = () => {
  let sign;
  const setSign = (string) => {
    sign = string;
  };
  const getSigh = () => sign;

  return { setSign, getSigh };
};

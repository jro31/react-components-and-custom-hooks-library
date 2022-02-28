const useArrayOfNumbers = () => {
  // prettier-ignore
  const arrayOfNumbers = (amountOfNumbers, startingNumber = 1, increment = 1) => {
    return Array.from(new Array(amountOfNumbers), (_, i) => (i + startingNumber) + (i * (increment - 1)))
  };

  return arrayOfNumbers;
};

export default useArrayOfNumbers;

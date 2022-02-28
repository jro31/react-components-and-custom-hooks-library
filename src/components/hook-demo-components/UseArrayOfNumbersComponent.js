import useArrayOfNumbers from '../../hooks/use-array-of-numbers';

const UseArrayOfNumbersComponent = () => {
  const arrayOfNumbers = useArrayOfNumbers();

  return (
    <div>
      <h2>useArrayOfNumbers</h2>
      <div>arrayOfNumbers(amountOfNumbers, startingNumber = 1, increment = 1)</div>
      <div>arrayOfNumbers(10) = [{arrayOfNumbers(10).join(', ')}]</div>
      <div>arrayOfNumbers(10, 5) = [{arrayOfNumbers(10, 5).join(', ')}]</div>
      <div>arrayOfNumbers(10, 5, 3) = [{arrayOfNumbers(10, 5, 3).join(', ')}]</div>
    </div>
  );
};

export default UseArrayOfNumbersComponent;

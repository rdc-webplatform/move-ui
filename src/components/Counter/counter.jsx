import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  background-color: lightblue;
  border-radius: 4px;
  border-color: darkblue;
  cursor: pointer;
  padding-top: 3px;
  padding-right: 3px;
  padding-bottom: 3px;
  padding-left: 3px;
  width: 80px;
`;

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const increment = document.getElementById('increment');
    const decrement = document.getElementById('decrement');
    const reset = document.getElementById('reset');

    increment.addEventListener('click', () => {
      let currentCount = count;
      currentCount++;
      setCount(currentCount);
    });

    decrement.addEventListener('click', () => {
      let currentCount = count;
      currentCount--;
      setCount(currentCount);
    });

    reset.addEventListener('click', () => {
      setCount(0);
    });

    if(!props.label) {
      setLabel('Count: ');
    } else {
      setLabel(props.label);
    }
  });

  return (
    <div>
      {label}
      {count}
      <StyledButton id="increment">Increment</StyledButton>
      <StyledButton id="decrement">Decrement</StyledButton>
      <StyledButton id="reset">Reset</StyledButton>
    </div>
  )
};

export default Counter;
import { useEffect, useState } from "react";

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
      <div id="increment">Increment</div>
      <div id="decrement">Decrement</div>
      <div id="reset">Reset</div>
    </div>
  )
};

export default Counter;
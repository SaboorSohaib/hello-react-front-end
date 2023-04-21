import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showGreeting } from '../redux/greetings/greetings';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greet);

  useEffect(() => {
    dispatch(showGreeting());
  }, [dispatch]);

  const generates = () => {
    dispatch(showGreeting());
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={generates} type="button">Generate New Greeting</button>
    </div>
  );
}

export default Greeting;

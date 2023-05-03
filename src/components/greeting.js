import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showGreeting } from '../redux/greetings/greetings';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greet.greeting);

  useEffect(() => {
    dispatch(showGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>
        Some One Says
        {greeting}
      </h1>
    </div>
  );
}

export default Greeting;

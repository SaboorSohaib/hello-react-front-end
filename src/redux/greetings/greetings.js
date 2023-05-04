import { configureStore } from '@reduxjs/toolkit';

const SHOW_MESSAGE = 'SHOW_MESSAGE';
const LINK = 'http://127.0.0.1:3000/api/greeting';

export function Data(payload) {
  return {
    type: SHOW_MESSAGE,
    payload,
  };
}

export default function Greet(state = [], action = {}) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return [
        action.payload,
      ];
    default:
      return state;
  }
}

export const fetchData = () => async (dispatch) => {
  let greeting = [];
  await fetch(LINK)
    .then((response) => response.json())
    .then((data) => {
      greeting = data.greeting;
    });
  dispatch(Data(greeting));
};

export const store = configureStore({ reducer: { greeting: Greet } });

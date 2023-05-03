const SHOW_GREETING = 'greetings/greetings/SHOW_GREETING';
const LINK = 'http://127.0.0.1:3000/api/greeting';

const initialState = {
  greeting: '',
};

export default function greetReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_GREETING:
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
}

const setGreetings = (greeting) => ({
  type: SHOW_GREETING,
  payload: greeting,
});

function showGreeting() {
  return (dispatch) => fetch(LINK)
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: SHOW_GREETING,
        payload: json.greeting,
      });
    });
}

export { showGreeting, setGreetings };

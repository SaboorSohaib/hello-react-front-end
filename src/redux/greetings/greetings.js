const SHOW_GREETING = 'greetings/greetings/SHOW_MESSAGE';
const LINK = 'http://127.0.0.1:3000/api/greeting';

const initialState = {
  greeting: '',
};

export default function greetReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_GREETING:
      return {
        ...state,
        greeting: action.payload.greeting_text,
      };

    default:
      return state;
  }
}

const setGreetings = (greetingObj) => ({
  type: SHOW_GREETING,
  payload: greetingObj,
});

const showGreeting = () => async (dispatch) => {
  await fetch(LINK, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((result) => result.json())
    .then((res) => {
      const msg = {
        greeting_text: res.greeting_text,
      };
      dispatch(setGreetings(msg));
    });
};

export { showGreeting, setGreetings };

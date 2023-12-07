//  Check out IMMER library and run some example and see how you can make mutating updates like state.amount++ inside reducer logic. And still it work perfectly in redux. Immer Link: https://immerjs.github.io/immer/

import {produce} from 'immer';

const initialState = {
  amount: 1,
};
const history =[]

const reducer = (state = initialState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case 'INCREMENT':
        draftState.amount += 1;
        break;

      case 'DECREMENT':
        draftState.amount -= 1;
        break;

        case 'INCREMENT_BY_AMOUNT':
        draftState.amount = draftState.amount+ action.value;
        break;

      // Other cases...

      default:
        // No changes
        break;
    }
  });
};

// Example action creators
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });
const incrementByAmount = (value) => ({ type: 'INCREMENT_BY_AMOUNT', value: value});


// // Usage
// const nextState = reducer(initialState, increment());
// console.log(nextState);
i=0
setInterval(() => {
  whie(i<10){
  const nextState = reducer(initialState, incrementByAmount(2));
  history.push(nextState)
  console.log(nextState);
  i++
}
}, 2000);

import produce from 'immer';
import * as actions from '../actions'

//accountReducer using immer
function accountReducer(state = { amount: 0 }, action) {
    return produce(state, draftState => {
      switch (action.type) {
        case actions.incAm:
          draftState.amount += 1;
          break;
  
        case actions.dec:
          draftState.amount -= 1;
          break;
  
        case actions.incByAmount:
          draftState.amount += action.payload;
          break;
  
        case actions.decByAmount:
          if (action.payload <= draftState.amount) {
            draftState.amount -= action.payload;
          } else {
            draftState.error = action.error;
          }
          break;
  
        case actions.getUserAccFulfilled:
          draftState.amount = action.payload;
          draftState.pending = false;
          break;
  
        case actions.getUserAccRejected:
          draftState.error = action.error;
          draftState.pending = false;
          break;
  
        case actions.getUserAccPending:
          draftState.pending = true;
          break;
  
        default:
          // No changes
          break;
      }
    });
  }
  
  export default accountReducer;
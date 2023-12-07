import * as actions from '../actions'

//accountReducer
function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case actions.inc:
            //immmutable state: state read-ony
            return { amount: state.amount + 1 }

        case actions.dec:
            return { amount: state.amount - 1 }

        case actions.incByAmount:
            return { amount: state.amount + action.payload }

        default:
            return state
    }
}

export default accountReducer;
import * as actions from '../actions'

//accountReducer
function accountReducer(state = { amount: 0 }, action) {
    switch (action.type) {
        case actions.incAm:
            //immmutable state: state read-ony
            return { amount: state.amount + 1 }

        case actions.dec:
            return { amount: state.amount - 1 }

        case actions.incByAmount:
            return { amount: state.amount + action.payload }

        case actions.getUserAccFulfilled:
            return { amount: action.payload, pending: false }

        case actions.getUserAccRejected:
            return { ...state, error: action.error, pending: false }

        case actions.getUserAccPending:
            return { ...state, pending: true }

        default:
            return state
    }
}

export default accountReducer;
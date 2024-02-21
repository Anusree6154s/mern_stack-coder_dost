import produce from 'immer';
import { incPnt, incByAmount } from '../actions'

//bonusReducer
export function bonusReducer(state = { points: 0 }, action) {
    const newState = produce(state, draftState => {
        switch (action.type) {
            case incPnt:
                draftState.points += 1
                break;

            case incByAmount:
                if (action.payload >= 100) {
                    draftState.points += (action.payload/100)
                }
                break;

            default:
                break;
        }
    })

    return newState
}


import { init, inc } from '../actions'

//bonusReducer
export function bonusReducer(state = { points: 1 }, action) {
    switch (action.type) {
        case init:
            return { points: action.payload }

        case inc:
            //immmutable state: state read-ony
            return { points: state.points + 1 }

        default:
            return state
    }
}


import { incPnt} from '../actions'

//bonusReducer
export function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incPnt:
            //immmutable state: state read-ony
            return { points: state.points + 1 }

        default:
            return state
    }
}


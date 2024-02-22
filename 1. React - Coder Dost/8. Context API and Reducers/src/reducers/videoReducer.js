// Action types
const ADD = 'add';
const DELETE = 'delete';
const UPDATE = 'update';

// Action creators
const add = (value) => ({ type: ADD, payload: value });
const del = (value) => ({ type: DELETE, payload: parseInt(value.target.id) });
const update = (value) => ({ type: UPDATE, payload: value });

// Reducer function
const videoReducer = (state, action) => {
    switch (action.type) {
        case ADD:
            return [...state, { ...action.payload, id: state.length + 1 }]

        case DELETE:
            return state.filter(item => item.id !== action.payload)

        case UPDATE:
            const index = state.findIndex(item => item.id === action.payload.id)
            const copy = [...state]
            copy.splice(index, 1, action.payload)
            return copy

        default:
            return state;
    }
};



export { add, del, update, videoReducer}
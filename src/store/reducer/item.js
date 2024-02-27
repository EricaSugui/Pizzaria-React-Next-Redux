import * as PizzaConstants from '../actions/item'
export const initialState = {
    list: []
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case PizzaConstants.ADD_ITEM:
            return { 
                ...state, 
                list: [ ...state.list, action.payload]
            };
        case PizzaConstants.REMOVE_ITEM:
            const itemIndex = state.list.findIndex(item => item.id === action.payload.id)
            return { 
                ...state, 
                list: [...state.list.slice(0, itemIndex), ...state.list.slice(itemIndex + 1)]
            }
        case PizzaConstants.UPDATE_ITEM:
            const oldItem = state.list.findIndex(item => item.id === action.payload.id)
            const updateList = [...state.list.slice(0, oldItem), action.payload, ...state.list.slice(oldItem + 1)]
            return {...state, list: [...updateList]}
        default:
            return state;
    }
}
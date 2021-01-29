import { ADD_TO_CART, REMOVE_TO_CART } from '../constants';


export default function cartItems (state=[], action){
    switch(action.type){
    case ADD_TO_CART:
           
        return [
            ...state,
            {cartData: action.data}
        ]
        case REMOVE_TO_CART:
          
            return [
                ...state.slice(0, action.data),
                ...state.slice(action.data + 1)
            ]
             
        default: 
        return state

    }
}

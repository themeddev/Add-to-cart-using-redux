import { produce } from "immer";

const initialState = {
  items: [],
};

const Reducer = (state = initialState, action) => {
  
  const existProductIndex = state.items.findIndex((item) => item.id === action.payload.id);

  switch (action.type) {
    case 'ADD_TO_CART':
      if (existProductIndex !== -1) {
        return produce(state, (draftState) => {
          draftState.items[existProductIndex].quantity += 1;
        });
      } else {
        return produce(state, (draftState) => {
          draftState.items.push({ ...action.payload, quantity: 1 });
        });
      }

    case 'REMOVE_FROM_CART':
      if (existProductIndex !== -1) {
        return produce(state, (draftState) => {
          if (draftState.items[existProductIndex].quantity > 1) {
            draftState.items[existProductIndex].quantity -= 1;
          } else {
            draftState.items.splice(existProductIndex, 1)
          }
        });
      }
      return state; 
      
    default:
      return state;
  }
};

export default Reducer;

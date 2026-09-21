import { cartReducer } from './CartSlice';

const store = {
  cart: cartReducer(undefined, { type: '@@INIT' }),
};

export default store;

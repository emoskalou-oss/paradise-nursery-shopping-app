const initialState = {
  items: [],
};

export const addItem = (state, product) => {
  const { name, image, cost } = product;
  const existingItem = state.items.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({ name, image, cost, quantity: 1 });
  }

  return state;
};

export const removeItem = (state, itemName) => {
  const nextState = {
    ...state,
    items: state.items.filter((item) => item.name !== itemName),
  };

  return nextState;
};

export const updateQuantity = (state, itemName, quantity) => {
  const nextState = {
    ...state,
    items: state.items.map((item) =>
      item.name === itemName ? { ...item, quantity } : item,
    ),
  };

  return nextState;
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addItem':
      return addItem({ ...state }, action.payload);
    case 'removeItem':
      return removeItem(state, action.payload);
    case 'updateQuantity':
      return updateQuantity(state, action.payload.name, action.payload.quantity);
    default:
      return state;
  }
};

export const store = {
  cart: initialState,
};

export default cartReducer;

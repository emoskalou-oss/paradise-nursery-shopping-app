const initialState = {
  items: [],
};

export const addItem = (state, product) => {
  const safeState = state ?? initialState;
  const { name, image, cost } = product;
  const existingItem = safeState.items.find((item) => item.name === name);

  if (existingItem) {
    return {
      ...safeState,
      items: safeState.items.map((item) =>
        item.name === name ? { ...item, quantity: Number(item.quantity || 0) + 1 } : item,
      ),
    };
  }

  return {
    ...safeState,
    items: [...safeState.items, { name, image, cost, quantity: 1 }],
  };
};

export const removeItem = (state, itemName) => {
  const safeState = state ?? initialState;
  return {
    ...safeState,
    items: safeState.items.filter((item) => item.name !== itemName),
  };
};

export const updateQuantity = (state, itemName, quantity) => {
  const safeState = state ?? initialState;
  const safeQuantity = Math.max(0, Number(quantity) || 0);

  if (safeQuantity === 0) {
    return removeItem(safeState, itemName);
  }

  return {
    ...safeState,
    items: safeState.items.map((item) =>
      item.name === itemName ? { ...item, quantity: safeQuantity } : item,
    ),
  };
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addItem':
      return addItem(state, action.payload);
    case 'removeItem':
      return removeItem(state, action.payload);
    case 'updateQuantity':
      return updateQuantity(state, action.payload.name, action.payload.quantity);
    default:
      return state;
  }
};

export default cartReducer;

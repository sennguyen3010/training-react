const initialState = {
  burger: [
    { id: 'salad', price: 10, quantity: 2 },
    { id: 'cheese', price: 5, quantity: 3 },
    { id: 'beef', price: 20, quantity: 2 },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_TOPPING': {
      const { id, quantity } = payload;
      let burgerUpdate = [...state.burger];
      let item = burgerUpdate.find((it) => it.id === id);
      if (item) {
        item.quantity += quantity;
        if (item.quantity === 0) {
          alert('số lượng tối thiểu 1');
          item.quantity = 1;
        }
      }
      state.burger = burgerUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};

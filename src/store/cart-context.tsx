import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: {
    id: string;
    name: string;
    amount: number;
    price: number;
  }) => {},
  removeItem: (id: string) => {},
});

export default CartContext;

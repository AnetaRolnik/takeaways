import React from "react";

const CartContext = React.createContext<{
  items: {
    id: string;
    name: string;
    amount: number;
    price: number;
  }[];
  totalAmount: number;
  addItem: (item: {
    id: string;
    name: string;
    amount: number;
    price: number;
  }) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}>({
  items: [],
  totalAmount: 0,
  addItem: (item: {
    id: string;
    name: string;
    amount: number;
    price: number;
  }) => {},
  removeItem: (id: string) => {},
  clearCart: () => {},
});

export default CartContext;

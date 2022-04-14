import CartContext from "./cart-context";

const CartProvider: React.FC = (props) => {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: (item: {
      id: string;
      name: string;
      amount: number;
      price: number;
    }) => {},
    removeItem: (id: string) => {},
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

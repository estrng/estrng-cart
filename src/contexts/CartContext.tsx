import { useContext, createContext, useReducer } from "react";
import { CartReducer } from "../reducers/Cart/reducer";
import { CartState } from "../@types/Cart";
import { v4 as uuidv4 } from 'uuid';
import { addToCart, emptyCart, removeFromCart } from "../reducers/Cart/actions";
import { SelectedItem } from "../@types/Operation";

interface CartContextProps {
  cartState: CartState;
  addToCartAction: (product: any) => void;
  removeFromCartAction: (product: any) => void;
  clearCartAction: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }: Props) {
  const [cartState, dispatchCartAction] = useReducer(CartReducer, { id: uuidv4(), items: [] });

  function addToCartAction(product: SelectedItem) {
    dispatchCartAction(addToCart(product));
  }

  function removeFromCartAction(product: any) {
    dispatchCartAction(removeFromCart(product));
  }

  function clearCartAction() {
    dispatchCartAction(emptyCart());
  }

  return (
    <CartContext.Provider value={{ cartState, addToCartAction, removeFromCartAction, clearCartAction }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.displayName = "CartProvider";
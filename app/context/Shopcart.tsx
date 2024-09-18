import { create } from 'zustand';



type State = {
  shopCart: TShopProduct[];
};

type Action = {
  addProduct: (product: TProduct) => void;
  deleteProduct: (id: number) => void;
  decrementProductQuantity: (id: number) => void;
  incrementProductQuantity: (id: number) => void;
  isProductInShopcart: (id: number) => boolean;
  reset: () => void;
  getTotal: () => number;
  getItems: () => TShopProduct[]; 
};

const initialValues: State = {
  shopCart: []
};

export const useShopcartStore = create<State & Action>((set, get) => ({
  ...initialValues,
  
  addProduct(product: TProduct) {
    const isAlreadyInShopCart = get().isProductInShopcart(product.id); // Usar get()
    if (isAlreadyInShopCart) {
      get().incrementProductQuantity(product.id);
    } else {
      const newArray:TShopProduct[] = [...get().shopCart, {...product,quantity:1}]; // Usar get()
      console.log(newArray)
      set(() => ({ shopCart: newArray }));
    }
  },
  
  deleteProduct(id: number) {
    const filtered = get().shopCart.filter(prod => prod.id !== id); // Usar get()
    set(() => ({ shopCart: filtered }));
  },
  
  decrementProductQuantity(id: number) {
    const newArray = get().shopCart.map(prod => { // Usar get()
      if (prod.id !== id) {
        return prod;
      } else {
        return { ...prod, quantity: prod.quantity - 1 };
      }
    });

    set(() => ({ shopCart: newArray }));
  },
  
  incrementProductQuantity(id: number) {
    const newArray = get().shopCart.map(prod => { // Usar get()
      if (prod.id !== id) {
        return prod;
      } else {
        return { ...prod, quantity: prod.quantity + 1 };
      }
    });

    set(() => ({ shopCart: newArray }));
  },
  
  isProductInShopcart(id: number) {
    return get().shopCart.some(prod => prod.id === id); // Usar get()
  },
  
  getTotal() {
    return get().shopCart.reduce((sum, prod) => sum + prod.quantity * prod.price, 0); // Usar get()
  },
  
  getItems() {
    return get().shopCart;
  },
  
  reset() {
    set(initialValues);
  }
}));


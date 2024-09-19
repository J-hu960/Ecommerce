import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

export const useShopcartStore = create<State & Action>()(
  persist(
    (set, get) => ({
      ...initialValues,
      
      addProduct(product: TProduct) {
        const isAlreadyInShopCart = get().isProductInShopcart(product.id);
        if (isAlreadyInShopCart) {
          get().incrementProductQuantity(product.id);
        } else {
          const newArray: TShopProduct[] = [...get().shopCart, { ...product, quantity: 1 }];
          set({ shopCart: newArray });
        }
      },
      
      deleteProduct(id: number) {
        const filtered = get().shopCart.filter(prod => prod.id !== id);
        set({ shopCart: filtered });
      },
      
      decrementProductQuantity(id: number) {
        const newArray = get().shopCart.map(prod => 
          prod.id === id ? prod.quantity> 1 ? { ...prod, quantity: prod.quantity - 1 } : { ...prod, quantity: prod.quantity - 1 }  : prod
        );
        set({ shopCart: newArray });
      },
      
      incrementProductQuantity(id: number) {
        const newArray = get().shopCart.map(prod => 
          prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod
        );
        set({ shopCart: newArray });
      },
      
      isProductInShopcart(id: number) {
        return get().shopCart.some(prod => prod.id === id);
      },
      
      getTotal() {
        return get().shopCart.reduce((sum, prod) => sum + prod.quantity * prod.price, 0);
      },
      
      getItems() {
        return get().shopCart;
      },
      
      reset() {
        set({ shopCart: [] }); // Reset sólo el shopCart
      }
    }),
    {
      name: "cart-storage", // Nombre del storage
    }
  )
);

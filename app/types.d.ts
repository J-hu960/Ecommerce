type TProduct = {
   id:number;
    name: string;
    description: string;
    imageSrc: string;
    price: number;
    quantity?: number;
  };
  
  type TShopProduct = TProduct & {
    quantity: number;
  };
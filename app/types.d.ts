type TProduct = {
  stripe_id:string;
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
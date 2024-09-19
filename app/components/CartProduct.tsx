"use client";

import React from 'react';
import Image from 'next/image';
import { useShopcartStore } from '../context/Shopcart';


interface props{
    product:TShopProduct,
    setProducts: React.Dispatch<React.SetStateAction<TShopProduct[] | undefined>>,
}

const CartProduct = ({product,setProducts}:props) => {
    const getStoreProducts = useShopcartStore((state) => state.getItems);
    const incrementProductQuant = useShopcartStore((state)=>state.incrementProductQuantity)
    const decrementProductQuant = useShopcartStore((state)=>state.decrementProductQuantity)
    const eliminateProductFromCart = useShopcartStore((state)=>state.deleteProduct)

    const handleDecrementButton=()=>{
        if(product.quantity>1){
            decrementProductQuant(product.id)
            setProducts(getStoreProducts())
        }else{
            eliminateProductFromCart(product.id)
            setProducts(getStoreProducts())
        }
    }

    const handleIncrementButton=()=>{
        if(product.quantity>100){
            return
        }else{
          incrementProductQuant(product.id)
          setProducts(getStoreProducts())
        }
    }





  return (
    <div key={product.name} className="flex items-center mb-4 border-b pb-4">
        <div className='flex flex-col items-cenetr justify-start'>
          <Image src={product.imageSrc} alt={product.name} width={100} height={100} className="rounded-lg" />
          <div className='w-full flex items-center justify-around text-3xl mt-2'>
            <button onClick={handleIncrementButton}>+</button>
            <button onClick={handleDecrementButton}>-</button>
          </div>
        </div>
    <div className="ml-4">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-lg">Precio: ${product.price.toFixed(2)}</p>
      <p className="text-lg">Cantidad: {product.quantity}</p>
      <p className="text-lg font-bold">Total: ${(product.price * product.quantity).toFixed(2)}</p>
    </div>


  </div>

  )
}

export default CartProduct
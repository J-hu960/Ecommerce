"use client";

import React, {  useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useShopcartStore } from '../context/Shopcart'; // Cambia la ruta según la ubicación de tu store
import CartProduct from '../components/CartProduct';
import axios from 'axios'

const Page = () => {
  const router = useRouter();
  const [products,setProducts]= useState<TShopProduct[]>()
  const getStoreProducts = useShopcartStore((state) => state.getItems);
  const getPrice = useShopcartStore((state) => state.getTotal);
  const resetCart = useShopcartStore((state)=>state.reset)

  
  const handleResetCart = ()=>{
    resetCart()
    setProducts(getStoreProducts())
  }

  const getItems =useCallback(()=>{
    const storeProds = getStoreProducts
    setProducts(storeProds)

  },[getStoreProducts])

  useEffect(()=>{
    getItems()
  },[getItems])
  

  

  // Manejador para pagar (aquí iría tu lógica de pago)
  const handleCheckout = async () => {
    try {
      const { data } = await axios.post('/api/stripe', {items: products});
  
      // Redirigir a la URL de Stripe que recibimos de la API
      window.location.href = data.url;
    } catch (error) {
      console.error('Error durante el checkout:', error);
    }
  };

  // Manejador para volver atrás
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto p-8 mt-24">
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>

      {products?.length === 0 ? (
        <p className="text-lg text-gray-600">No tienes productos en tu carrito.</p>
      ) : (
        <div>
          {products && products.length > 0 && products.map((product) => (
           <CartProduct setProducts={setProducts} key={product.id} product={product} />
          ))}
          
          <div className="mt-6 text-2xl font-bold">
            <h2>Total del Carrito: ${getPrice()}</h2>
          </div>

          <div className="flex mt-8 space-x-4">
            <button 
              onClick={handleGoBack} 
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
            >
              Volver Atrás
            </button>
            <button 
              onClick={handleCheckout} 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Pagar
            </button>
            <button 
              onClick={()=>handleResetCart()} 
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Resetear carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

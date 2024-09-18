"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useShopcartStore } from '../context/Shopcart'; // Cambia la ruta según la ubicación de tu store

const Page = () => {
  const router = useRouter();
  
  const products = useShopcartStore((state) => state.getItems);
  const getPrice = useShopcartStore((state) => state.getTotal);

  useEffect(()=>{
    if(products().length>0){
      console.log(products())
   }

  },[products()])

  // Manejador para pagar (aquí iría tu lógica de pago)
  const handleCheckout = () => {
    alert('Llevándote al proceso de pago...');
    // Redirigir a página de pago, etc.
  };

  // Manejador para volver atrás
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto p-8 mt-24">
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>

      {products().length === 0 ? (
        <p className="text-lg text-gray-600">No tienes productos en tu carrito.</p>
      ) : (
        <div>
          {products() && products().length > 0 && products().map((product) => (
            <div key={product.name} className="flex items-center mb-4 border-b pb-4">
              <Image src={product.imageSrc} alt={product.name} width={100} height={100} className="rounded-lg" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.description}</p>
                <p className="text-lg">Precio: ${product.price.toFixed(2)}</p>
                <p className="text-lg">Cantidad: {product.quantity}</p>
                <p className="text-lg font-bold">Total: ${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            </div>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

import Stripe from 'stripe';
import { NextResponse } from 'next/server';
interface Item{
  stripe_priceId:string;
  stripe_id:string;
  id:number;
  name: string;
  description: string;
  imageSrc: string;
  price: number;
  quantity: number;
}
const stripe = new Stripe('sk_test_51PNdhiLloXrIyDr3IvYCuW6LxIIjlRq26QMXRc3Cxvuj5SKcmA02l2pSUqi3WifD7RQHJrdMBOhiq9iEiPcaNe9x00GwXefLnH', { apiVersion: '2024-06-20' });

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'El carrito está vacío.' }, { status: 400 });
    }

    // Formatear los items para Stripe
    items.forEach((el:Item) => {
        console.log(el.stripe_id)
    });
    const line_items = items.map((item: Item) => ({
      price: item.stripe_priceId,
      quantity: item.quantity || 1,
    }));

    // Crear la sesión de Stripe
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `http://localhost:3000/succesful-payment`,
      cancel_url: `http://localhost:3000/error-payment`,
  
    });

    // Enviar la URL de la sesión de Stripe al frontend
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error al crear la sesión de Stripe:', error);
    return NextResponse.json({ error: 'Error procesando el pago.' }, { status: 500 });
  }
}

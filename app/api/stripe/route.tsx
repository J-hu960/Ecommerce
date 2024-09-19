// Asumimos que tienes la clave secreta de Stripe como una variable de entorno
const secret_Stripe_apikey = process.env.STRIPE_SECRET_KEY || 'sk_test_51PNdhiLloXrIyDr3IvYCuW6LxIIjlRq26QMXRc3Cxvuj5SKcmA02l2pSUqi3WifD7RQHJrdMBOhiq9iEiPcaNe9x00GwXefLnH';

import Stripe from 'stripe';
const stripe = new Stripe(secret_Stripe_apikey, { apiVersion: '2024-06-20' });

export default async function handler(req: Request, res) {
  if (req.method === 'POST') {
    try {
      // Se espera que `req.body` contenga los items del carrito
      const { items } = await req.json();

      if (!items || items.length === 0) {
        return res.status(400).json({ error: 'El carrito está vacío.' });
      }

      // Formateamos los items del carrito para Stripe
      const line_items = items.map((item) => ({
        price: item.priceId, // Se espera que `priceId` esté en cada item del carrito
        quantity: item.quantity || 1, // Asumimos que cada item tiene una cantidad
      }));

      // Crear la sesión de Stripe para el checkout
      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `http://localhost:3000/succesful-payment`,
        cancel_url: `http://localhost:3000/error-payment`,
      });

      res.redirect(303, session.url);
    } catch (err) {
      console.error('Error al crear la sesión de Stripe:', err);
      res.status(500).json({ error: 'Error procesando el pago.' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

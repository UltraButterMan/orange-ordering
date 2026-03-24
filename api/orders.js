import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const corsHeaders = {
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
};

export default async (req, res) => {
  Object.entries(corsHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'POST') {
      const { userId, items, totalPrice, shippingAddress } = req.body;

      const { data, error } = await supabase
        .from('orders')
        .insert([{
          user_id: userId,
          items,
          total_price: totalPrice,
          shipping_address: shippingAddress,
          status: 'pending',
          payment_status: 'pending'
        }])
        .select();

      if (error) throw error;
      res.status(201).json(data[0]);
    }
    else if (req.method === 'GET') {
      const { userId } = req.query;

      let query = supabase.from('orders').select('*');

      if (userId) {
        query = query.eq('user_id', userId);
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw error;
      res.status(200).json(data);
    }
    else if (req.method === 'PUT') {
      const { id, status, paymentStatus } = req.body;

      const updateData = {};
      if (status) updateData.status = status;
      if (paymentStatus) updateData.payment_status = paymentStatus;

      const { data, error } = await supabase
        .from('orders')
        .update(updateData)
        .eq('id', id)
        .select();

      if (error) throw error;
      res.status(200).json(data[0]);
    }
    else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

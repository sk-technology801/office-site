// src/app/api/contact/route.js
import { connectToDB } from '../../../../lib/mongo';
import Contact from '../../../../models/Contact';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    await connectToDB();
    await Contact.create({ name, email, message });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('DB error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

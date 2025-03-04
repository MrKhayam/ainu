
import axios from 'axios';
export async function POST(req) {
  const { prompt } = await req.json();

  if (!prompt) {
    return new Response(JSON.stringify({ error: 'Prompt is required' }), {
      status: 400,
    });
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'google/gemma-2-9b-it:free',
        messages: [
          { role: 'system', content: 'You are a skilled eCommerce copywriter.' },
          { role: 'user', content: prompt },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PIGEON_API_URL}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const description = response.data.choices[0].message.content;
    return new Response(JSON.stringify({ description }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to generate description' }),
      { status: 500 }
    );
  }
}
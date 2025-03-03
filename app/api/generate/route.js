import axios from 'axios';

// Pre-configured axios client for efficiency
const apiClient = axios.create({
  baseURL: 'https://openrouter.ai/api/v1',
  headers: { 'Content-Type': 'application/json' },
  timeout: 25000, // 25s timeout to avoid Vercel’s 30s gateway limit
});

export async function POST(req) {
  // Parse and validate request body
  let prompt;
  try {
    ({ prompt } = await req.json());
    if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
      return new Response(
        JSON.stringify({ error: 'Prompt is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch {
    return new Response(
      JSON.stringify({ error: 'Prompt is required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { data } = await apiClient.post(
      '/chat/completions',
      {
        model: 'deepseek/deepseek-r1:free',
        messages: [
          { role: 'system', content: 'You are a skilled eCommerce copywriter.' },
          { role: 'user', content: prompt.trim() },
        ],
        max_tokens: 500, // Limit output size for speed
      },
      {
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_URL}` },
      }
    );

    const description = data.choices[0].message.content.trim();
    return new Response(
      JSON.stringify({ description }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    if (axios.isAxiosError(error) && (error.code === 'ECONNABORTED' || error.response?.status === 504)) {
      console.warn('API request timed out');
      return new Response(
        JSON.stringify({ error: 'Request timed out, please try again' }),
        { status: 504, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.error('API Error:', error.message);
    return new Response(
      JSON.stringify({ error: 'Failed to generate description' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Vercel runtime config
export const config = {
  maxDuration: 30, // Vercel Pro timeout limit
};
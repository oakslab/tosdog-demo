import { createClient } from 'redis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let redis;

  try {
    const { markdown, type } = await request.json();

    // Validate type
    if (type !== 'tos' && type !== 'privacy') {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    const key = type === 'tos' ? 'tos_content' : 'privacy_content';

    redis = createClient({ url: process.env.REDIS_URL });
    await redis.connect();
    await redis.set(key, markdown);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  } finally {
    if (redis) {
      await redis.quit();
    }
  }
}

import { NextRequest, NextResponse } from 'next/server';

export function proxy(req: NextRequest) {
  const auth = req.headers.get('authorization');
  const expected = 'Basic ' + Buffer.from(`${process.env.STUDIO_USER}:${process.env.STUDIO_PASSWORD}`).toString('base64');

  if (auth !== expected) {
    return new NextResponse('Auth required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Studio"' },
    });
  }
}

export const config = { matcher: '/studio/:path*' };

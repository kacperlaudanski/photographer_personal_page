import { createHash, timingSafeEqual } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';

const unauthorized = () => new NextResponse('Auth required', {
  status: 401,
  headers: { 'WWW-Authenticate': 'Basic realm="Studio", charset="UTF-8"' },
});

const safeEqual = (a: string, b: string) => {
  const hashA = createHash('sha256').update(a).digest();
  const hashB = createHash('sha256').update(b).digest();

  return timingSafeEqual(hashA, hashB);
};


export function proxy(req: NextRequest) {
  const user = process.env.STUDIO_USER;
  const password = process.env.STUDIO_PASSWORD;

  if (!user || !password) {
    console.error('STUDIO_USER / STUDIO_PASSWORD are not set – access to /studio is blocked.');

    return new NextResponse('Studio is not configured', { status: 503 });
  }

  const auth = req.headers.get('authorization');
  if (!auth?.startsWith('Basic ')) {
    return unauthorized();
  }

  const credentials = Buffer.from(auth.slice('Basic '.length), 'base64').toString('utf-8');
  const separatorIndex = credentials.indexOf(':');

  if (separatorIndex === -1) {
    return unauthorized();
  }

  const givenUser = credentials.slice(0, separatorIndex);
  const givenPassword = credentials.slice(separatorIndex + 1);
  const isUserValid = safeEqual(givenUser, user);
  const isPasswordValid = safeEqual(givenPassword, password);

  if (!isUserValid || !isPasswordValid) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = { matcher: '/studio/:path*' };

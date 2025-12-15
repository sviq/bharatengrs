import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    console.log('Catalog downloaded', {
      ip: request.headers.get('x-forwarded-for'),
      userAgent: request.headers.get('user-agent'),
    });
  } catch (e) {
    // never block download
  }

  // ✅ Build absolute URL safely
  const origin = request.nextUrl.origin;
  const fileUrl = `${origin}/assets/Bharat_profile.pdf`;

  return NextResponse.redirect(fileUrl, {
    status: 302,
    headers: {
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}

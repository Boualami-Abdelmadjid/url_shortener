import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

 
export function middleware(request: NextRequest) {
  const sessionId = request.cookies.has('sessionId')
  if (!sessionId) {
    return  NextResponse.redirect(new URL(`/login/?next=${request.nextUrl.pathname}`,request.url))
  }
}
 
export const config = {
  matcher: ['/shortener/','/history/'],
}
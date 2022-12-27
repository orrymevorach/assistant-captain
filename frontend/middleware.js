import { NextResponse } from 'next/server';

export const config = {
    matcher: [
      '/',
      '/dashboard',
      '/login',
    ],
  }

export const middleware = (req) => {
    let verify = req.cookies.get('uid');
    let url = req.url
    
    if (verify === undefined && url === 'http://localhost:3000/') {
        return;
    }

    if(verify === undefined && (url.includes('/dashboard') || url.includes('/login'))){
        return NextResponse.redirect('http://localhost:3000/');
    }

    if (verify.value && (url === 'http://localhost:3000/' || url.includes('/login'))) {
      return NextResponse.redirect('http://localhost:3000/dashboard');
    }
}
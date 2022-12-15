import { NextResponse } from "next/server";
import { auth } from "./firebase/config";
import { getAuth, getRedirectResult } from "firebase/auth";



export const config = {
    matcher: [
      '/',
      '/dashboard',
    //   '/login'
    ],
  }

export const middleware = (req) => {
    
    let verify = req.cookies.get("uid");
    let url = req.url
    
    if (verify === undefined && url === "http://localhost:3000/") {
        return;
    }

    if((verify === undefined || verify.value === 'false') && url.includes('/dashboard')){
        return NextResponse.redirect("http://localhost:3000/");
    }

    if (verify.value !== 'false' && url === "http://localhost:3000/") {
      return NextResponse.redirect("http://localhost:3000/dashboard");
    }
}
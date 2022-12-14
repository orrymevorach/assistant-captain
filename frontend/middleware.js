import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export const middleware = (req) => {
    let verify = req.cookies.get("isLoggedIn");
    let url = req.url
    
    if (verify === undefined) {
        let res = NextResponse.next();
        res.cookies.set('temp-cookie', 'false', { maxAge: 60 });
        verify = res.cookies.get('temp-cookie');
    }

    if(verify.value === 'false' && url.includes('/dashboard')){
        return NextResponse.redirect("http://localhost:3000/");
    }

    if (verify.value === 'true' && url === "http://localhost:3000/") {
      return NextResponse.redirect("http://localhost:3000/dashboard");
    }
}
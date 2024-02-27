import { NextResponse } from "next/server";


export function middleware(request){
   const login = true;
   const { pathname } = request.nextUrl;
   if(!login){
      return NextResponse.redirect( new URL("/login", pathname));
   }
}

export const config ={
   matcher: ["/product/:path*","/"],
}

// opsi

// export function middleware(request) {
//    if (request.nextUrl.pathname.startsWith('/about')) {
//      return NextResponse.rewrite(new URL('/about-2', request.url))
//    }
  
//    if (request.nextUrl.pathname.startsWith('/dashboard')) {
//      return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//    }
//  }
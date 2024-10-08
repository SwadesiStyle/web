"use client";

import { ReactNode } from 'react';
import './globals.css';

const { SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

// export const metadata = {
//   metadataBase: new URL(baseUrl),
//   title: {
//     default: SITE_NAME!,
//     template: `%s | ${SITE_NAME}`
//   },
//   robots: {
//     follow: true,
//     index: true
//   },
// };

export default async function RootLayout({ children }: { children: ReactNode }) {
  // const cartId = cookies().get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  // const cart = getCart(cartId);

  return (
    <html lang="en">
      <body className="font-sans">
        {/* <CartProvider cartPromise={cart}> */}
          {/* <NavMenu /> */}
          <main>
            {children}
            {/* <Toaster closeButton /> */}
            {/* <WelcomeToast /> */}
          </main>
        {/* </CartProvider> */}
      </body>
    </html>
  );
}

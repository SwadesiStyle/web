"use client";

import { ReactNode } from "react";

import Carousel from 'src/components/HomepageCarousel';

// import { ThreeItemGrid } from 'components/grid/three-items';
// import Footer from 'components/layout/footer';

// export const metadata = {
//   description: 'Swadesi is a community of creators, artists and conscious consumers united by shared ideas of sustainability, simplicity and thoughtful fashion',
//   openGraph: {
//     type: 'website'
//   }
// };

export default function HomePage({ children }: { children: ReactNode }) {
  return (
    <>
      <Carousel />
      {children}
      {/* <ThreeItemGrid collection='nature' />
      <Carousel /> */}
      {/* <Footer /> */}
    </>
  );
}

// "use client";
// import { getMenu } from 'lib/shopify';
// import { Button, Navbar } from 'react-daisyui';
// const { SITE_NAME } = process.env;

import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import LogoIcon from "components/icons/logo";
export async function NavMenu() {
  // const menu = await getMenu('main-menu');

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          {/* <Popover className="relative">
            <PopoverButton><Bars3Icon className="w-4 h-4" /></PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col">
              <a href="/analytics">Analytics</a>
              <a href="/engagement">Engagement</a>
              <a href="/security">Security</a>
              <a href="/integrations">Integrations</a>
            </PopoverPanel>
          </Popover> */}
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Bars3Icon className="w-4 h-4" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">
          <LogoIcon />
        </a>
      </div>
      <div className="navbar-end">
        <MagnifyingGlassIcon className="w-4 h-4" />
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <ShoppingBagIcon className="w-4 h-4" />
            {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
          </div>
        </button>
      </div>
    </div>
  );
  // return (
  //   <Navbar>
  //     <div className="flex-none">
  //       <Button shape="square" color="ghost">
  //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
  //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  //         </svg>
  //       </Button>
  //     </div>
  //     <div className="flex-1">
  //       <LogoIcon />
  //     </div>
  //     <div className="flex-none">
  //       <Button shape="square" color="ghost">
  //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
  //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
  //         </svg>
  //       </Button>
  //     </div>
  //   </Navbar>
  // );
  // return (
  //   <nav className="relative flex items-center justify-between overflow-hidden">
  //     <div className="block flex-none md:hidden">
  //       <Suspense fallback={null}>
  //         <MobileMenu menu={menu} />
  //       </Suspense>
  //     </div>
  //     <div className="flex w-full items-center">
  //       <div className="flex w-full md:w-1/3">
  //         <Link
  //           href="/"
  //           prefetch={true}
  //           className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
  //         >
  //           <LogoIcon />
  //           {/* <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
  //             {SITE_NAME}
  //           </div> */}
  //         </Link>
  //         {menu.length ? (
  //           <ul className="hidden gap-6 text-sm md:flex md:items-center">
  //             {menu.map((item: Menu) => (
  //               <li key={item.title}>
  //                 <Link
  //                   href={item.path}
  //                   prefetch={true}
  //                   className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
  //                 >
  //                   {item.title}
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>
  //         ) : null}
  //       </div>
  //       <div className="hidden justify-center md:flex md:w-1/3">
  //         <Suspense fallback={<SearchSkeleton />}>
  //           <Search />
  //         </Suspense>
  //       </div>
  //       <div className="flex justify-end md:w-1/3">
  //         <CartModal />
  //       </div>
  //     </div>
  //   </nav>
  // );
}

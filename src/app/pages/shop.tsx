// pages/shop.tsx
import Link from 'next/link';
import React from 'react';


const ShopPage = () => {
  return (
    <div className="w-full h-auto">
      {/* Header Section */}
      <header className="h-[38px] bg-red-800 w-full max-sm:w-[390px] max-sm:h-[34px]">
        <h2 className="w-[411px] h-[19px] relative top-2 left-1/2 transform -translate-x-1/2 text-white font-satoshi font-normal leading-[18.9px] text-[14px] max-sm:justify-start max-sm:bg-yellow-300 max-sm:w-[301px] max-sm:h-[16px] max-sm:left-[20px]">
          Sign up now to book your order.{" "}
          <b className="underline cursor-pointer">Sign Up</b>
        </h2>
      </header>

      {/* Main Content */}
      <div className="h-auto w-full text-white mt-[24px] px-[32px] flex justify-between items-center">
        {/* Left Section (KASWA.FASHION) */}
        <div className="font-bold text-[32px] leading-[34.8px] tracking-[0px]">
          <Link href="/" aria-label="Go to homepage">
            KASWA.FASHION
          </Link>
        </div>

        {/* Right Section (Navigation Links + Search Button) */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 font-normal text-[16px] leading-[21.6px] tracking-[0px]">
            {/* Search Button */}
            <button
              className="bg-blue-500 text-white py-1 px-9 rounded-lg border border-gray-300 hover:bg-white hover:text-gray-500 focus:outline-none transition-all duration-300"
              aria-label="Search"
            >
              Search here
            </button>

            {/* Navigation Links */}
            <Link href="/shop" aria-label="Shop" className="hover:underline">
              Shop
            </Link>
            <Link href="/on-sale" aria-label="On Sale" className="hover:underline">
              On Sale
            </Link>
            <Link href="/new-arrivals" aria-label="New Arrivals" className="hover:underline">
              New Arrivals
            </Link>
            <Link href="/brands" aria-label="Brands" className="hover:underline">
              Brands
            </Link>
          </nav>

          {/* Cart Link */}
          <Link href="/cart" aria-label="Cart" className="hover:underline">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;


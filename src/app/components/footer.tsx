import Image from "next/image";
import Link from "next/link";
import { RiTwitterLine, RiFacebookLine, RiInstagramLine, RiGithubLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="mt-6">
      {/* "Stay Connected With Us" Section with Deep Purple Background */}
      <div className="w-full h-[180px] bg-[#4B0082] flex items-center justify-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h3>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-6">
        <Link
          href="https://www.twitter.com"
          target="_blank"
          className="text-4xl bg-black text-white p-4 rounded-full hover:text-[#1DA1F2] transition-all duration-300"
        >
          <RiTwitterLine />
        </Link>
        <Link
          href="https://www.facebook.com"
          target="_blank"
          className="text-4xl bg-black text-white p-4 rounded-full hover:text-[#1877F2] transition-all duration-300"
        >
          <RiFacebookLine />
        </Link>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          className="text-4xl bg-black text-white p-4 rounded-full hover:text-[#E4405F] transition-all duration-300"
        >
          <RiInstagramLine />
        </Link>
        <Link
          href="https://www.github.com"
          target="_blank"
          className="text-4xl bg-black text-white p-4 rounded-full hover:text-[#333333] transition-all duration-300"
        >
          <RiGithubLine />
        </Link>
      </div>

      {/* Footer Links Section with Black Background and White Font */}
      <div className="flex justify-around mt-12 bg-black py-8">
        {/* Company */}
        <div className="text-center text-white">
          <h3 className="font-bold text-lg">COMPANY</h3>
          <ul className="list-none mt-4">
            <li className="font-normal text-sm">About</li>
            <li className="mt-2">Features</li>
            <li className="mt-2">Works</li>
            <li className="mt-2">Careers</li>
          </ul>
        </div>

        {/* Help */}
        <div className="text-center text-white">
          <h3 className="font-bold text-lg">HELP</h3>
          <ul className="list-none mt-4">
            <li className="font-normal text-sm">Customer Support</li>
            <li className="mt-2">Delivery Details</li>
            <li className="mt-2">Terms & Conditions</li>
            <li className="mt-2">Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="text-center text-white">
          <h3 className="font-bold text-lg">FAQ</h3>
          <ul className="list-none mt-4">
            <li className="font-normal text-sm">Account</li>
            <li className="mt-2">Manage Deliveries</li>
            <li className="mt-2">Orders</li>
            <li className="mt-2">Payments</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="text-center text-white">
          <h3 className="font-bold text-lg">RESOURCES</h3>
          <ul className="list-none mt-4">
            <li className="font-normal text-sm">Free eBooks</li>
            <li className="mt-2">Development Tutorials</li>
            <li className="mt-2">How-to Blog</li>
            <li className="mt-2">YouTube Playlist</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1.5px] bg-black mt-12"></div>

      {/* Rights Reserved Section */}
      <div className="bg-white py-4 mt-4">
        <p className="text-center text-sm text-black">
          kaswa.fashion © 2000-2023, All Rights Reserved
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Image
            className="w-[46.61px] h-[30.03px] rounded-lg"
            src="/Badge.png"
            alt="icon image"
            width={70.61}
            height={30.03}
          />
          <Image
            className="w-[46.61px] h-[30.03px] rounded-lg"
            src="/Badge (1).png"
            alt="icon image"
            width={46.61}
            height={30.03}
          />
          <Image
            className="w-[46.61px] h-[30.03px] rounded-lg"
            src="/Badge (2).png"
            alt="icon image"
            width={76.61}
            height={50.03}
          />
        </div>
      </div>
    </div>
  );
}


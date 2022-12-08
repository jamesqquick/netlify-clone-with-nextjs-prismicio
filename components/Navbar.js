import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <div className="flex py-4 px-10 justify-between tracking-tight fixed w-full text-md z-50 bg-[rgba(255,255,255,0.99)]">
      <ul className="flex gap-4 items-center">
        <li>
          <Image
            width="70"
            height="30"
            className="h-5"
            src="/logo.png"
            alt="Netlify Logo"
          />
        </li>
        <li>Platform</li>
        <li>Solutions</li>
        <li>Integrations</li>
        <li>Start Building</li>
        <li>Docs</li>
        <li>Pricing</li>
      </ul>
      <ul className="flex gap-4 items-center">
        <li>
          <svg
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            className="fill-gray-800"
          >
            <path d="M9.41345,0.47253 C14.4289798,0.47253 18.49487,4.53842023 18.49487,9.55395 C18.49487,12.0451846 17.4917537,14.3021289 15.8674001,15.9429038 L21.392653,21.4668327 L19.271347,23.5881673 L13.3990455,17.7163323 C12.1958116,18.3049607 10.8432164,18.63537 9.41345,18.63537 C4.39792023,18.63537 0.33203,14.5694798 0.33203,9.55395 C0.33203,4.53842023 4.39792023,0.47253 9.41345,0.47253 Z M9.41345,3.47253 C6.05477448,3.47253 3.33203,6.19527448 3.33203,9.55395 C3.33203,12.9126255 6.05477448,15.63537 9.41345,15.63537 C12.7721255,15.63537 15.49487,12.9126255 15.49487,9.55395 C15.49487,6.19527448 12.7721255,3.47253 9.41345,3.47253 Z"></path>
          </svg>
        </li>
        <li>Contact</li>
        <li>Log in</li>
        <li>
          <button className="bg-blue-700 text-blue-100 rounded py-[6px] px-5">
            Sign up
          </button>
        </li>
      </ul>
    </div>
  );
}

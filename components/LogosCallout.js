import React from 'react';
import Pattern from './Pattern';
import Image from 'next/image';
import IconLineThing from './LineItemThingy';
const LogosCallout = () => {
  return (
    <div
      className="rounded-xl text-white text-center bg-gradient-to-r from-teal-800 
      via-blue-800 to-purple-800 py-20 relative -z-20"
    >
      <h2 className="text-6xl font-bold translate-y-20">Make your work flow</h2>
      <IconLineThing />
      <div className="max-w-2xl mx-auto mb-20">
        <p className="text-4xl -translate-y-20">{`"With Netlify, now our teams deploy changes 10-15× a day."`}</p>
        <div className="flex gap-4 max-w-xl mx-auto justify-center items-center">
          <Image
            src="/headshot.jpeg"
            height={60}
            width={60}
            className="rounded-full"
            alt="Headshot from..."
          />
          <div className="text-left">
            <p> HARRISON HARNISCH,</p>
            <p> PRINCIPAL SOFTWARE ENGINEER, TWILIO</p>
          </div>
        </div>
      </div>
      <div className="flex gap-20 justify-center fill-white items-center">
        <Image
          src="/netlify-white.png"
          height={40}
          width={160}
          alt="Netlify Logo"
        />
        <Image
          src="/prismic-white.svg"
          height={40}
          width={40}
          alt="Prismic Logo"
        />
        <Image
          src="/twilio-white.png"
          height={40}
          width={160}
          alt="Twilio Logo"
        />
        <Image
          src="/nextjs-white-1.png"
          height={40}
          width={160}
          alt="Next Logo"
        />
      </div>
      <Pattern />
    </div>
  );
};
export default LogosCallout;

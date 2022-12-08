import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Pattern from '../../components/Pattern';
import Image from 'next/image';
import IconLineThing from '../../components/LineItemThingy';
/**
 * @typedef {import("@prismicio/client").Content.IconLineThingSlice} IconLineThingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IconLineThingSlice>} IconLineThingProps
 * @param { IconLineThingProps }
 */
const LogosCallout = ({ slice }) => {
  return (
    <div
      className="rounded-xl text-white text-center bg-gradient-to-r from-teal-800 
    via-blue-800 to-purple-800 py-20 relative -z-20"
    >
      <span className="text-6xl font-bold ">
        <PrismicRichText field={slice.primary.title} />
      </span>
      <IconLineThing icon1={slice.primary.icon1} />
      <div className="max-w-2xl mx-auto mb-20">
        <p className="text-4xl -translate-y-20">"{slice.primary.body}"</p>
        <div className="flex gap-4 max-w-xl mx-auto justify-center items-center">
          <Image
            src="/headshot.jpeg"
            height={60}
            width={60}
            className="rounded-full"
            alt="Headshot from..."
          />
          <div className="text-left">
            <p> {slice.primary.quoteName},</p>
            <p> {slice.primary.quoteTitle}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-20 justify-center fill-white items-center">
        {slice?.items?.map((item, i) => (
          <Image
            src={item.logo.url}
            height={40}
            width={160}
            alt={item.logo.alt}
          />
        ))}
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

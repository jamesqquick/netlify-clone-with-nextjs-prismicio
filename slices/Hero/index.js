import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import HomepageIcon from '../../components/HomepageIcon';
import Image from 'next/image';

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => {
  return (
    <section className="py-10 px-10 min-h-screen flex justify-center flex-col">
      <div className="relative mx-auto max-w-4xl z-10">
        <PrismicRichText field={slice.primary.title} />
        <div class="mb-8">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <div className="w-[110px] h-20 bg-gray-100 rounded absolute -top-[60%] -left-[30%]"></div>
        <div className="w-[110px] h-20 bg-gray-100 rounded absolute -top-[80px] -right-60"></div>
        <div className="w-[110px] h-20 bg-gray-100 rounded absolute -top-[170px] right-0"></div>
        <div className="w-[110px] h-20 bg-gray-100 rounded absolute -bottom-[150px] -right-[100px]"></div>
        <div className="w-[110px] h-20 bg-gray-100 rounded absolute -bottom-[150px] -left-[200px]"></div>
        <div className="w-[110px] h-20 bg-gray-100 rounded absolute -bottom-[280px] -left-[20px]"></div>
      </div>
      <div className="flex gap-4 justify-center">
        <a
          href="slice.primary.primaryButtonLink"
          className="bg-blue-700 text-blue-100 rounded py-[6px] px-5"
        >
          {slice.primary.primaryButtonText}
        </a>
        <a
          href="slice.primary.secondaryButtonLink"
          className="bg-transparent border border-blue-700 text-blue-700 rounded py-[6px] px-5"
        >
          {slice.primary.secondaryButtonText}
        </a>
      </div>
      <div className="grid gap-3 max-w-xl absolute -right-[120px]">
        <div className="ml-40">
          <HomepageIcon src="/logo-react.svg" alt="React Logo" />
          <Image
            alt="Vertical Teal"
            loading="lazy"
            src="/vertical-teal.jpeg"
            width="135"
            height="237"
            className="rounded mt-4"
          />
        </div>
        <div className="flex gap-4 items-baseline">
          <HomepageIcon src="/logo-11ty.svg" alt="11ty Logo" />
          <Image
            alt="Vertical Pink"
            loading="lazy"
            src="/vertical-pink.jpeg"
            width="135"
            height="237"
            className="rounded"
          />

          <Image
            alt="Vertical Organge"
            loading="lazy"
            src="/vertical-orange.jpeg"
            width="135"
            height="237"
            className="rounded"
          />
        </div>
        <div className="flex items-start gap-4 ml-40">
          <HomepageIcon src="/logo-sanity.svg" alt="Sanity Logo" />

          <Image
            alt="Vertical Purple"
            loading="lazy"
            src="/vertical-purple.jpeg"
            width="135"
            height="237"
            className="rounded"
          />
        </div>
      </div>

      <div className="flex gap-4 flex-col max-w-[200px] absolute -left-6 -translate-y-20">
        <HomepageIcon src="/logo-postgresql.svg" alt="Postgresql Logo" />
        <Image
          alt="Planning Board"
          loading="lazy"
          src="/horizontal-dashboard.jpeg"
          width="180"
          height="95"
          className="rounded"
        />
        <HomepageIcon
          src="/logo-nextjs.svg"
          alt="Next.js Logo"
          className="self-end"
        />
      </div>

      <div className="flex flex-col gap-4 absolute bottom-4 -left-20">
        <HomepageIcon
          src={`/logo-${slice.primary.icon1}.svg`}
          alt={`${slice.primary.icon1} Logo`}
          size={35}
          className="ml-[90px]"
        />
        <div className="flex gap-4">
          <Image
            alt="horizontal-orange"
            loading="lazy"
            src="/horizontal-orange.jpeg"
            width="180"
            height="95"
            className="rounded"
          />
          <Image
            alt="Horizontal teal"
            loading="lazy"
            src="/horizontal-teal.jpeg"
            width="180"
            height="95"
            className="rounded"
          />
        </div>
        <div className="flex items-start gap-4">
          <Image
            alt="Horizontal Purple"
            loading="lazy"
            src="/horizontal-purple.jpeg"
            width="180"
            height="95"
            className="rounded ml-10"
          />
          <HomepageIcon src="/logo-datadog.svg" alt="Datadog Logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

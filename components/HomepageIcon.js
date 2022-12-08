import Image from 'next/image';

export default function HomepageIcon({ src, alt, className, size = 30 }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`color-transparent rounded shadow-[0px_2px_6px_rgba(51,55,59,0.1)] p-2 box-content ${className}`}
    />
  );
}

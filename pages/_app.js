import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '../prismicio';
import '../styles/globals.css';

const richTextComponents = {
  heading1: ({ children }) => (
    <h1 className="text-4xl font-bold text-center mb-6">{children}</h1>
  ),
  paragraph: ({ children }) => (
    <p className="text-xl text-center max-w-xl mx-auto leading-8 tracking-wider">
      {children}
    </p>
  ),
};

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={(props) => <Link {...props} />}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}

import * as React from 'react';

function SvgProducts(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <path
        d="M57.6 67.4h7.7a1.78 1.78 0 001.9-1.9v-31a1.78 1.78 0 00-1.9-1.9h-7.7a1.78 1.78 0 00-1.9 1.9v31a1.78 1.78 0 001.9 1.9zM75 67.4h3.9a1.78 1.78 0 001.9-1.9v-31a1.78 1.78 0 00-1.9-1.9H75a1.78 1.78 0 00-1.9 1.9v31a1.84 1.84 0 001.9 1.9zM48.7 67.4a1.81 1.81 0 002-1.9v-31a1.78 1.78 0 00-1.9-1.9h-.1a1.78 1.78 0 00-1.9 1.9v31a1.73 1.73 0 001.9 1.9zM37.8 67.4h1.9a1.78 1.78 0 001.9-1.9v-31a1.78 1.78 0 00-1.9-1.9h-1.9a1.78 1.78 0 00-1.9 1.9v31a1.73 1.73 0 001.9 1.9zM21.1 67.4h7.7a1.78 1.78 0 001.9-1.9v-31a1.78 1.78 0 00-1.9-1.9h-7.7a1.78 1.78 0 00-1.9 1.9v31a1.84 1.84 0 001.9 1.9z"
        fill="unset"
      />
    </svg>
  );
}

export default SvgProducts;
import * as React from 'react';

function SvgTarget(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" viewBox="0 0 52 52" aria-hidden="true" {...props}>
      <path
        d="M26.2 2.3H26A18.74 18.74 0 007.3 21v.2c0 13 13.4 25 17.6 28.1a2 2 0 002.5 0c4.2-3.3 17.5-15.1 17.5-28.1A19 19 0 0026.2 2.3zM26 7.5a13.53 13.53 0 0110.6 21.9c-1.1-1.6-3.4-2.8-5.6-3.7a.37.37 0 00-.3-.1.85.85 0 00-.7 0 8.12 8.12 0 01-4 1.2 7 7 0 01-4-1.2.85.85 0 00-.7 0 .37.37 0 01-.3.1c-2.2 1-4.5 2.1-5.6 3.8A13.6 13.6 0 0126 7.5z"
        fill="unset"
      />
      <ellipse cx={26} cy={18.3} rx={5.6} ry={6.2} fill="unset" />
    </svg>
  );
}

export default SvgTarget;

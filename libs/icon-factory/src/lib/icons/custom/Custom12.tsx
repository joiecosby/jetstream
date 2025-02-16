import * as React from 'react';

function SvgCustom12(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <circle fill="unset" cx={50} cy={50} r={30} />
    </svg>
  );
}

export default SvgCustom12;

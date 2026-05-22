import React from 'react';
import branchLeft from '../../assets/sakura-letter-desk/sakura-branch-left.png';
import branchRight from '../../assets/sakura-letter-desk/sakura-branch-right.png';

export default function SakuraBranch() {
  return (
    <>
      <img
        src={branchLeft}
        alt=""
        aria-hidden="true"
        className="sakura-branch-left"
      />
      <img
        src={branchRight}
        alt=""
        aria-hidden="true"
        className="sakura-branch-right"
      />
    </>
  );
}

import { useState } from "react";
import * as React from "react";

export default function Menu() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer"
    >
      <path
        d="M4 8H28M4 16H28M4 24H28"
        stroke="#2F2F2F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

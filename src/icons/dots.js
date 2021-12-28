import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="131"
      height="119"
      fill="none"
      viewBox="0 0 131 119">
      <filter
        id="a"
        width="131"
        height="118.375"
        x="0"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
        <feOffset dy="1"></feOffset>
        <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0.230606 0 0 0 0 0.208819 0 0 0 0 0.258333 0 0 0 0.6 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          mode="multiply"
          result="effect1_dropShadow_238_189"></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_238_189"
          result="shape"></feBlend>
      </filter>
      <linearGradient
        id="b"
        x1="65.5"
        x2="65.5"
        y1="14"
        y2="102.375"
        gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#8a388b"></stop>
        <stop offset="1" stopColor="#6331a2"></stop>
      </linearGradient>
      <g filter="url(#a)">
        <path
          fill="url(#b)"
          d="M65.5 14C37.607 14 15 32.365 15 55.031c0 9.785 4.221 18.74 11.244 25.783-2.466 9.942-10.711 18.8-10.81 18.898a1.568 1.568 0 00-.296 1.716c.256.592.809.947 1.44.947 13.079 0 22.883-6.273 27.736-10.14A60.16 60.16 0 0065.5 96.062c27.893 0 50.5-18.365 50.5-41.03C116 32.364 93.393 14 65.5 14zM40.25 61.344a6.306 6.306 0 01-6.313-6.313c0-3.491 2.821-6.312 6.313-6.312s6.313 2.82 6.313 6.312a6.306 6.306 0 01-6.313 6.313zm25.25 0a6.306 6.306 0 01-6.313-6.313c0-3.491 2.821-6.312 6.313-6.312s6.313 2.82 6.313 6.312a6.306 6.306 0 01-6.313 6.313zm25.25 0a6.306 6.306 0 01-6.313-6.313c0-3.491 2.821-6.312 6.313-6.312s6.313 2.82 6.313 6.312a6.306 6.306 0 01-6.313 6.313z"></path>
      </g>
      <g fill="#fff">
        <path d="M40.25 61.344a6.306 6.306 0 01-6.313-6.313c0-3.491 2.821-6.312 6.313-6.312s6.313 2.82 6.313 6.312a6.306 6.306 0 01-6.313 6.313zM65.5 61.344a6.306 6.306 0 01-6.313-6.313c0-3.491 2.821-6.312 6.313-6.312s6.313 2.82 6.313 6.312a6.306 6.306 0 01-6.313 6.313zM90.75 61.344a6.306 6.306 0 01-6.313-6.313c0-3.491 2.821-6.312 6.313-6.312s6.313 2.82 6.313 6.312a6.306 6.306 0 01-6.313 6.313z"></path>
      </g>
    </svg>
  );
}

export default Icon;

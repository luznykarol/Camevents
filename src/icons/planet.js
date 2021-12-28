import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="131"
      height="120"
      fill="none"
      viewBox="0 0 131 120">
      <filter
        id="a"
        width="131"
        height="118.375"
        x="0"
        y="0.813"
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
          result="effect1_dropShadow_43_91"></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_43_91"
          result="shape"></feBlend>
      </filter>
      <linearGradient
        id="b"
        x1="65.5"
        x2="65.5"
        y1="14.813"
        y2="103.188"
        gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#8a388b"></stop>
        <stop offset="1" stopColor="#6331a2"></stop>
      </linearGradient>
      <g filter="url(#a)">
        <path
          fill="url(#b)"
          d="M65.5 14.813c-27.893 0-50.5 18.365-50.5 41.03 0 9.785 4.221 18.741 11.244 25.783-2.466 9.943-10.711 18.8-10.81 18.898a1.57 1.57 0 00-.296 1.717c.256.591.809.947 1.44.947 13.079 0 22.883-6.274 27.736-10.14A60.16 60.16 0 0065.5 96.875c27.893 0 50.5-18.365 50.5-41.031S93.393 14.812 65.5 14.812z"></path>
      </g>
      <path
        fill="#fff"
        d="M66 32.234c-12.703 0-23 10.193-23 22.766s10.297 22.766 23 22.766S89 67.573 89 55 78.703 32.234 66 32.234zm-1.052 22.053a1.487 1.487 0 01-1.272.713h-.029c-.393 0-.77.155-1.049.43l-.525.52a.73.73 0 000 1.038l.525.52c.279.275.435.649.435 1.038v.86c0 .812-.664 1.469-1.484 1.469h-.566a1.484 1.484 0 01-1.327-.812l-2.098-4.152a.746.746 0 00-1.188-.191l-1.806 1.786c-.278.275-.656.43-1.049.43h-5.803a18.139 18.139 0 01-.26-2.936c0-10.123 8.32-18.36 18.548-18.36 1.995 0 3.914.323 5.716.902l-4.652 3.537a.73.73 0 00.08 1.268l1.004.496c.503.25.82.758.82 1.314v7.171a.738.738 0 01-.742.735h-.284a.741.741 0 01-.663-.406.413.413 0 00-.72-.028zm15.89 10.116c0 .389-.156.763-.434 1.038l-.888.878c-.278.276-.656.431-1.049.431h-1.406c-.393 0-.77-.155-1.049-.43l-1.206-1.195a2.507 2.507 0 00-2.357-.646l-1.973.488c-.118.03-.239.044-.36.044h-.96c-.392 0-.77-.155-1.048-.43l-1.105-1.093a.73.73 0 01-.217-.52v-.936c0-.3.185-.57.467-.682l3.648-1.445c.184-.073.358-.167.519-.28l2.199-1.55a.745.745 0 01.43-.137h1.121c.3 0 .57.179.686.453l.496 1.18a.368.368 0 00.342.225h.352a.37.37 0 00.357-.264l.39-1.328a.37.37 0 01.355-.265h.562c.205 0 .371.165.371.368v1.186c0 .195.078.382.217.52l1.105 1.093c.278.276.435.65.435 1.039v2.258z"></path>
    </svg>
  );
}

export default Icon;

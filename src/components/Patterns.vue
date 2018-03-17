<template>
  <svg
    style="display: block;"
    width="0"
    height="0"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1">
    <defs>
      <pattern
        id="stripes1"
        patternTransform="translate(0,0) scale(3,3), rotate(-45)"
        height="1"
        width="3"
        patternUnits="userSpaceOnUse">
        <rect
          height="2"
          width="1"
          y="-0.5"
          x="0" />
      </pattern>
      <pattern
        id="stripes2"
        patternTransform="translate(0,0) scale(3,3), rotate(-15)"
        height="1"
        width="3"
        patternUnits="userSpaceOnUse">
        <rect
          height="2"
          width="1"
          y="-0.5"
          x="0" />
      </pattern>
      <!-- <filter
        id="shadow1"
        style="color-interpolation-filters:sRGB;">
        <feFlood
          flood-opacity="0.87"
          flood-color="rgb(0,0,0)"
          result="flood" />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="in"
          result="composite1" />
        <feGaussianBlur
          in="composite1"
          stdDeviation="1.25"
          result="blur" />
        <feOffset
          dx="0"
          dy="1"
          result="offset" />
        <feComposite
          in="SourceGraphic"
          in2="offset"
          operator="over"
          result="composite2" />
      </filter>
      <filter
        id="shadow2"
        style="color-interpolation-filters:sRGB;">
        <feFlood
          flood-opacity="0.5"
          flood-color="rgb(255,255,255)"
          result="flood" />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="in"
          result="composite1" />
        <feGaussianBlur
          in="composite1"
          stdDeviation="1.25"
          result="blur" />
        <feOffset
          dx="0"
          dy="0"
          result="offset" />
        <feComposite
          in="SourceGraphic"
          in2="offset"
          operator="over"
          result="composite2" />
      </filter> -->
    </defs>
  </svg>
</template>

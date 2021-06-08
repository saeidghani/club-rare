import React from 'react';

export const CryptoIcon = () => (
  <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path
        opacity="0.6"
        d="M5.49803 0L5.37793 0.38729V11.6256L5.49803 11.7393L10.9964 8.65573L5.49803 0Z"
        fill="#1B3142"
      />
      <path opacity="0.2" d="M5.49837 0L0 8.65573L5.49837 11.7393V6.28462V0Z" fill="#1B3142" />
      <path
        opacity="0.8"
        d="M5.49834 12.727L5.43066 12.8053V16.8086L5.49834 16.9962L11 9.64502L5.49834 12.727Z"
        fill="#1B3142"
      />
      <path opacity="0.2" d="M5.49837 16.9961V12.7269L0 9.6449L5.49837 16.9961Z" fill="#1B3142" />
      <path d="M5.49805 11.7393L10.9963 8.65578L5.49805 6.28467V11.7393Z" fill="#1B3142" />
      <path opacity="0.6" d="M0 8.65578L5.49828 11.7393V6.28467L0 8.65578Z" fill="#1B3142" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="11" height="17" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Arrow = ({ stroke }) => (
  <svg width="36" height="21" viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.4002 10.2122H1.50024"
      stroke={stroke || 'white'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M34.7079 10.2004C34.7079 7.68839 21.9799 -0.341614 20.5359 1.10239C19.0919 2.54639 18.9539 17.7164 20.5359 19.2984C22.1199 20.8804 34.7079 12.7104 34.7079 10.2004Z"
      stroke={stroke || 'white'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

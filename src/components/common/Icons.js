import React from 'react';

export const CryptoIcon = ({ fill, size }) => (
  <svg
    width={size || '11'}
    height={size || '17'}
    viewBox="0 0 11 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        opacity="0.6"
        d="M5.49803 0L5.37793 0.38729V11.6256L5.49803 11.7393L10.9964 8.65573L5.49803 0Z"
        fill={fill || '#1B3142'}
      />
      <path
        opacity="0.2"
        d="M5.49837 0L0 8.65573L5.49837 11.7393V6.28462V0Z"
        fill={fill || '#1B3142'}
      />
      <path
        opacity="0.8"
        d="M5.49834 12.727L5.43066 12.8053V16.8086L5.49834 16.9962L11 9.64502L5.49834 12.727Z"
        fill={fill || '#1B3142'}
      />
      <path
        opacity="0.2"
        d="M5.49837 16.9961V12.7269L0 9.6449L5.49837 16.9961Z"
        fill={fill || '#1B3142'}
      />
      <path
        d="M5.49805 11.7393L10.9963 8.65578L5.49805 6.28467V11.7393Z"
        fill={fill || '#1B3142'}
      />
      <path
        opacity="0.6"
        d="M0 8.65578L5.49828 11.7393V6.28467L0 8.65578Z"
        fill={fill || '#1B3142'}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="11" height="17" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CryptoIcon2 = ({ fill }) => (
  <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7">
      <path
        d="M6.9977 0L6.84485 0.531561V15.9562L6.9977 16.1124L13.9954 11.8801L6.9977 0Z"
        fill={fill || '#377CF6'}
      />
      <path d="M6.99775 0L0 11.8801L6.99775 16.1124V8.62573V0Z" fill={fill || '#377CF6'} />
      <path
        d="M6.998 17.4678L6.91187 17.5752V23.0698L6.998 23.3272L14 13.2377L6.998 17.4678Z"
        fill={fill || '#377CF6'}
      />
      <path d="M6.99775 23.3273V17.4678L0 13.2377L6.99775 23.3273Z" fill={fill || '#377CF6'} />
      <path
        d="M6.99829 16.1124L13.9959 11.8802L6.99829 8.62579V16.1124Z"
        fill={fill || '#377CF6'}
      />
      <path d="M0 11.8802L6.99764 16.1124V8.62579L0 11.8802Z" fill={fill || '#377CF6'} />
    </g>
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

import { Icons } from 'next/dist/lib/metadata/types/metadata-types';

import faviconIco from 'assets/favicon/favicon.ico';
import favicon16 from 'assets/favicon/favicon-16x16.png';
import favicon32 from 'assets/favicon/favicon-32x32.png';

import appleTouchIcon from 'assets/favicon/apple-touch-icon.png';
import appleTouchIcon57 from 'assets/favicon/apple-touch-icon-57x57.png';
import appleTouchIcon76 from 'assets/favicon/apple-touch-icon-76x76.png';
import appleTouchIcon120 from 'assets/favicon/apple-touch-icon-120x120.png';
import appleTouchIcon152 from 'assets/favicon/apple-touch-icon-152x152.png';
import appleTouchIcon180 from 'assets/favicon/apple-touch-icon-180x180.png';

import appleTouchIconPrecomposed from 'assets/favicon/apple-touch-icon-precomposed.png';
import appleTouchIconPrecomposed57 from 'assets/favicon/apple-touch-icon-57x57-precomposed.png';
import appleTouchIconPrecomposed76 from 'assets/favicon/apple-touch-icon-76x76-precomposed.png';
import appleTouchIconPrecomposed120 from 'assets/favicon/apple-touch-icon-120x120-precomposed.png';
import appleTouchIconPrecomposed152 from 'assets/favicon/apple-touch-icon-152x152-precomposed.png';
import appleTouchIconPrecomposed180 from 'assets/favicon/apple-touch-icon-180x180-precomposed.png';

import androidChrome192 from 'assets/favicon/android-chrome-192x192.png';
import androidChrome256 from 'assets/favicon/android-chrome-256x256.png';

import mstile from 'assets/favicon/mstile-150x150.png';

export const faviconConstant: Icons = {
  icon: [
    {
      url: faviconIco.src,
      sizes: 'any',
    },
    {
      url: favicon16.src,
      type: 'image/png',
      sizes: '16x16',
    },
    {
      url: favicon32.src,
      type: 'image/png',
      sizes: '32x32',
    },
  ],
  apple: [
    {
      url: appleTouchIcon.src,
      type: 'image/png',
      sizes: '180x180',
    },
    {
      url: appleTouchIconPrecomposed.src,
      type: 'image/png',
      sizes: '180x180',
    },
    {
      url: appleTouchIcon57.src,
      type: 'image/png',
      sizes: '57x57',
    },
    {
      url: appleTouchIconPrecomposed57.src,
      type: 'image/png',
      sizes: '57x57',
    },
    {
      url: appleTouchIcon76.src,
      type: 'image/png',
      sizes: '76x76',
    },
    {
      url: appleTouchIconPrecomposed76.src,
      type: 'image/png',
      sizes: '76x76',
    },
    {
      url: appleTouchIcon120.src,
      type: 'image/png',
      sizes: '120x120',
    },
    {
      url: appleTouchIconPrecomposed120.src,
      type: 'image/png',
      sizes: '120x120',
    },
    {
      url: appleTouchIcon152.src,
      type: 'image/png',
      sizes: '152x152',
    },
    {
      url: appleTouchIconPrecomposed152.src,
      type: 'image/png',
      sizes: '152x152',
    },
    {
      url: appleTouchIcon180.src,
      type: 'image/png',
      sizes: '180x180',
    },
    {
      url: appleTouchIconPrecomposed180.src,
      type: 'image/png',
      sizes: '180x180',
    },
  ],
  other: [
    {
      url: androidChrome192.src,
      type: 'image/png',
      sizes: '192x192',
    },
    {
      url: androidChrome256.src,
      type: 'image/png',
      sizes: '256x256',
    },
    {
      url: mstile.src,
      type: 'image/png',
      sizes: '120x120',
    },
  ],
};

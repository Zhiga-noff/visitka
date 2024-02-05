import {Rubik} from 'next/font/google';
import localFont from 'next/font/local';

// export const rubik = Rubik({
//   subsets: ['latin', 'cyrillic'],
//   variable: '--font-rubik',
//   display: 'swap',
// });

export const rubik = localFont({
    src: [
        {
            path: '../../assets/fonts/rubik/Rubik-Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-BlackItalic.ttf',
            weight: '900',
            style: 'italic',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-ExtraBoldItalic.ttf',
            weight: '800',
            style: 'italic',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-SemiBoldItalic.ttf',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-MediumItalic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/rubik/Rubik-LightItalic.ttf',
            weight: '300',
            style: 'italic',
        },
    ],
    variable: '--font-rubik',
    display: 'swap',
});

export const fontFox2027 = localFont({
    src: [
        {
            path: '../../assets/fonts/vox-2017/voxmedium2017.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/vox-2017/voxbold2017.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/vox-2017/voxsemibold2017.otf',
            weight: '300',
            style: 'normal',
        },
    ],
    variable: '--font-vox-2027',
    display: 'swap',
});

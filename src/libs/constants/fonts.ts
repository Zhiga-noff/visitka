import localFont from 'next/font/local';


export const montserrat = localFont({
    src: [
        {
            path: '../../assets/fonts/montserrat/Montserrat-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/montserrat/Montserrat-MediumItalic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../assets/fonts/montserrat/Montserrat-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/montserrat/Montserrat-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },

    ],
    variable: '--montserrat',
    display: 'swap',
});

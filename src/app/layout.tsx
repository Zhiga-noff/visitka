import {MainLayout} from 'components/layouts';
import {montserrat} from 'libs/constants/fonts';
import {clsx} from 'clsx';

import 'assets/favicon.ico';
import '../assets/styles/global.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import {Metadata} from 'next';
import {faviconConstant} from '../libs/constants/favicon-constant';

interface IProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    icons: faviconConstant,
};

// Главная надстройка над всеми страницами
export default function RootLayout({children}: IProps) {
    return (
        <html lang="ru" className={clsx(montserrat.variable)}>
        <body>
        <MainLayout>{children}</MainLayout>
        {/* Кастомная надстройка для принимания страниц  */}
        </body>
        </html>
    );
}

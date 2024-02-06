import {FC, memo, ReactNode} from 'react';
import {Providers} from 'components/providers';
import styles from './MainLayout.module.scss';
import {Header} from "./header/Header";

interface IProps {
    children: ReactNode;
}

export const MainLayout: FC<IProps> = memo(function MainLayout({children}) {
    return (
        <Providers>
                <Header/>
                <main className={styles.container}>
                    {children} {/* Сюда помещается содержимое страниц */}
                </main>
        </Providers>
    );
});

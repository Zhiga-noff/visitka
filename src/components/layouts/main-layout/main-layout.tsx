import {FC, memo, ReactNode} from 'react';
import {Providers} from 'components/providers';
import styles from './main-layout.module.scss';

interface IProps {
    children: ReactNode;
}

export const MainLayout: FC<IProps> = memo(function MainLayout({children}) {
    return (
        <Providers>
            <section className={styles.wrapper}>
                <main className={styles.container}>
                    {children} {/* Сюда помещается содержимое страниц */}
                </main>
            </section>
        </Providers>
    );
});

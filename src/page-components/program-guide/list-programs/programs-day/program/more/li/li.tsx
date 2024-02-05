import { FC } from 'react';
import styles from './li.module.scss';

interface IProps {
  title: string;
  text: undefined | string;
}

export const Li: FC<IProps> = ({ title, text }) => {
  return (
    <>
      {text && (
        <li className={styles.li}>
          <span className={styles.bold}>{title}:</span> {text}
        </li>
      )}
    </>
  );
};

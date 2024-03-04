import React from 'react';
import styles from './ButtonDownloadMore.module.scss';

export const ButtonDownloadMore = ({clickFunction}) => {
    return <button className={styles.button} onClick={clickFunction}>Загрузить ещё</button>;
};

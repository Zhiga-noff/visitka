'use client';
import React, {useState} from 'react';
import styles from './Filter.module.scss';
import {Tabs} from './tabs/Tabs';
import {tabsMock} from "../../libs/constants/nav";

export const Filter = () => {
    const [typeInfo, setTypeInfo] = useState('');

    const clickButton = (type) => {
        setTypeInfo(type);
    };

    return (
        <article className={styles.wrapper}>
            <div className={styles.containerFilter}>
                <h3 className={styles.filter}>Фильтр</h3>
                {/*<nav className={styles.navigation}>*/}
                {/*    {filterMock.map((item, index) => {*/}
                {/*        return (*/}
                {/*            <Tabs*/}
                {/*                key={index}*/}
                {/*                active={styles.active}*/}
                {/*                item={item}*/}
                {/*                className={styles.filterButton}*/}
                {/*                typeInfo={typeInfo}*/}
                {/*            />*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</nav>*/}
            </div>
            <div className={styles.containerTabs}>
                {tabsMock.map((item, index) => {
                    return (
                        <Tabs
                            key={index}
                            active={styles.active}
                            item={item.title}
                            className={styles.tabsButton}
                            typeInfo={typeInfo}
                            link={item.link}
                        />
                    );
                })}
            </div>
        </article>
    );
};

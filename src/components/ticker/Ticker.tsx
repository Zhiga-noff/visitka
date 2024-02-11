import Marquee from 'react-fast-marquee';
import styles from './Ticker.module.scss';
import { partners } from '../../libs/constants/partners';

export const Ticker = () => {
  return (
    <Marquee className={styles.container}>
      {partners.map((item, index) => {
        return <a href={item.link} target="_blank" key={index} className={styles.imageContainer}>
          <img src={item.image} alt={item.alt} />
        </a>;
      })}
    </Marquee>
  );
};

import { useSelector } from 'react-redux';

import { selectArchive } from '../../redux/archive/selector';
import styles from './archive.module.scss';

export const Archive = () => {
  const state = useSelector(selectArchive);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span className={styles.item}>Side</span>
        <span className={styles.item}>Price</span>
        <span className={styles.item}>Instrument</span>
        <span className={styles.item}>Volume</span>
        <span className={styles.item}>TimeStamp</span>
      </div>
      <hr />
      {state.items.map((el) => (
        <div className={styles.row} key={el.time}>
          <span className={styles.item}>Sell</span>
          <span className={styles.item}>{el.price}</span>
          <span className={styles.item}>{el.instrument}</span>
          <span className={styles.item}>{el.volume}</span>
          <span className={styles.item}>{el.time}</span>
        </div>
      ))}
    </div>
  );
};

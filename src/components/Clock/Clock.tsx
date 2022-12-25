import { useEffect, useState } from 'react';

import styles from './clock.module.scss';

export const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2 className={styles.time}>{time}</h2>;
};

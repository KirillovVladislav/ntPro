import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';

import { addArchiveItem } from '../../redux/archive/archiveSlice';
import { TArchiveItem } from '../../redux/archive/types';
import styles from './modalContent.module.scss';

type ModalContentProps = {
  setVisible: (visible: boolean) => void;
  price: number;
  instrument: string;
  side: string;
};

export const ModalContent = ({
  setVisible,
  price,
  instrument,
  side,
}: ModalContentProps) => {
  const [volume, setVolume] = useState('');
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item: TArchiveItem = {
      side,
      volume,
      instrument,
      price,
      time: new Date().toLocaleString(),
    };
    dispatch(addArchiveItem(item));
    setVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.order}>
        <span>Make order</span>
        <span aria-hidden className={styles.close} onClick={() => setVisible(false)}>
          &times;
        </span>
      </div>
      <div className={styles.info}>
        <span color={side} className={styles.side}>
          {side}
        </span>
        <span>{price}</span>
        <span>{instrument}</span>
      </div>
      <div className={styles.volume}>
        <span>Volume </span>
        <input type="text" value={volume} onChange={(e) => setVolume(e.target.value)} />
      </div>
      <div className={styles.btn}>
        <button className={styles.btn_close} onClick={() => setVisible(false)}>
          Cancel
        </button>
        <button onClick={onClickAdd} className={styles.btn_ok}>
          OK
        </button>
      </div>
    </div>
  );
};

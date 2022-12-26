import { useEffect, useState } from 'react';

import { ModalContent } from '../ModalContent/ModalContent';
import { MyModal } from '../UI/MyModal/MyModal';
import styles from './price.module.scss';

type PriceProps = {
  price: number;
  instrument: string;
};

export const Price = ({ price, instrument }: PriceProps) => {
  const [modal, setModal] = useState(false);
  const [orderType, setOrderType] = useState('buy');
  const [sim, setSim] = useState<number>(0);

  const buyPrice = parseFloat((price + sim).toFixed(4)) || 0;
  const sellPrice = parseFloat((buyPrice * 0.95).toFixed(4)) || 0;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const randomNumber = Math.random();

      if (randomNumber >= 0.5) setSim(randomNumber * 0.3);
      else setSim(randomNumber * -0.3);
    }, 2500);
    return () => clearTimeout(timeOut);
  }, [sim]);

  useEffect(() => {
    setSim(0);
  }, [instrument]);

  const onOpenModal = (event) => {
    const type = event.target.innerHTML;
    setOrderType(type || 'buy');
    setModal(true);
    console.log(type);
  };

  return (
    <div className={styles.container}>
      <div className={styles.price_buy}>
        <h3 aria-hidden onClick={onOpenModal}>
          buy
        </h3>
        <span>{buyPrice}</span>
      </div>

      <div className={styles.price_sell}>
        <h3 onClick={onOpenModal} aria-hidden>
          sell
        </h3>
        <span>{sellPrice}</span>
      </div>
      {modal && (
        <MyModal visible={modal} setVisible={setModal}>
          <ModalContent
            setVisible={setModal}
            side={orderType}
            price={orderType === 'buy' ? buyPrice : sellPrice}
            instrument={instrument}
          />
        </MyModal>
      )}
    </div>
  );
};

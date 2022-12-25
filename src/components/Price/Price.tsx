import { useState } from 'react';

import { ModalContent } from '../ModalContent/ModalContent';
import { MyModal } from '../UI/MyModal/MyModal';
import styles from './price.module.scss';

type PriceProps = {
  price: number;
  instrument: string;
};

export const Price = ({ price, instrument }: PriceProps) => {
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.container}>
      <div aria-hidden onClick={() => setModal(true)}>
        {price}
      </div>
      <div>{123123} </div>
      {modal && (
        <MyModal visible={modal} setVisible={setModal}>
          <ModalContent setVisible={setModal} price={price} instrument={instrument} />
        </MyModal>
      )}
    </div>
  );
};

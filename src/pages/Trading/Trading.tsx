import { useState } from 'react';

import { Clock } from '../../components/Clock/Clock';
import { Price } from '../../components/Price/Price';
import { Select } from '../../components/UI/Select/Select';

const exchange = [
  { currency: 'usd/rub', price: 62.843 },
  { currency: 'usd/eur', price: 0.941 },
  { currency: 'usd/cad', price: 1.542 },
];

export const Trading = () => {
  const [select, setSelect] = useState<typeof exchange[0]>(exchange[0]);
  return (
    <>
      <Clock />
      <Select
        options={exchange}
        value={select}
        onChange={(option) => setSelect(option)}
      />
      <Price price={select.price} instrument={select.currency} />
    </>
  );
};

import { useState } from 'react';

import styles from './select.module.scss';

type SelectOption = {
  currency: string;
  price: number;
};

type SelectProps = {
  options: SelectOption[];
  onChange: (value: SelectOption) => void;
  value: SelectOption;
};

export const Select = ({ options, onChange, value }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option: SelectOption) => {
    onChange(option);
  };

  const isOptionSelected = (option: SelectOption) => {
    return option === value;
  };

  return (
    <div
      aria-hidden="true"
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      className={styles.container}
    >
      <span className={styles.value}>{value.currency}</span>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
        {options.map((option) => (
          <li
            aria-hidden="true"
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            key={option.currency}
            className={`${styles.option} ${
              isOptionSelected(option) ? styles.selected : ''
            } `}
          >
            {option.currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

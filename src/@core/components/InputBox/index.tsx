import React from 'react';
import styles from './InputBox.module.css';

interface InputBoxProps {
  type: 'text' | 'email' | 'password' | 'textarea';
  placeholder?: string;
  name?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>) => void;
  rows?: number;
}

const InputBox: React.FC<InputBoxProps> = ({ type, placeholder, value, onChange, rows, name }) => {
  const inputProps = {
    type,
    name,
    placeholder,
    value,
    onChange,
  };

  const inputElement = type === 'textarea' ? (
    <textarea className={styles.input} {...inputProps} rows={rows} />
  ) : (
    <input className={styles.input} {...inputProps} />
  );

  return (
    <div className={styles['input-container']}>
      {inputElement}
    </div>
  );
};

export default InputBox;

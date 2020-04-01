import React, { memo } from 'react';

import shortid from 'shortid';

import css from './input.module.scss';

const Input = ({value, onChange, title}, props) => {
  const id = shortid.generate();
  return (
    <label htmlFor={id}  className={css.label}>
      <input
        id={id}
        required
        type="text"
        name={title}
        value={value}
        title={title}
        className={css.input}
        onChange={onChange(title)}
        placeholder="Введите название города..."
        {...props}
      />
    </label>
  );
};

export default memo(Input);

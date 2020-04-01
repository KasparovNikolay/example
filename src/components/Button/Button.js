import React, { memo } from 'react';

import css from './Button.module.scss';

const Button = ({ onClick, title, type='button', className }, props) =>  (
  <button type={type} onClick={onClick} {...props} className={`${css.btn} ${className ? className : ''}`}>{title}</button>
);

export default memo(Button);

import React, { memo, useState } from 'react';

import shortid from 'shortid';

import Form from './components/Form/Form';
import Button from './components/Button/Button';

import css from './App.module.scss';

const App = () => {
  const [formArray, pushToFromArray] = useState([<Form key="first"/>]);
  const incrementCount = () => {
    const id = shortid.generate();
    formArray.length < 10 && pushToFromArray([...formArray, <Form key={id}/>]);
  };
  return (
    <div className={css.App}>
      <Button title="+" onClick={incrementCount} className={css.btnTop}/>
      <div className={css.formsWrap}>
        {formArray}
      </div>
    </div>
  );
};

export default memo(App);

import React, { useState, memo } from 'react';

import shortid from 'shortid';

import fetchData from '../../utils/fetchData';

import Input from '../Input/Input';
import Button from '../Button/Button';

import css from './form.module.scss';

const Form = () => {
  const [textResponse, setTextResponse] = useState([]);
  const [inputValues, setInputValues] = useState({
    origin: '',
    destiny: ''
  });

  const getData = (data) => setTextResponse([...textResponse, data]);
  const handleChange = (title) => (event) => {
    title === 'origin'
      ? setInputValues({...inputValues, origin: event.target.value})
      : setInputValues({...inputValues, destiny: event.target.value});
  };
  const handleSubmit = () => {
    fetchData(inputValues.origin, inputValues.destiny, getData)
  };
  const handleClearing = () => {
    setInputValues({
      origin: '',
      destiny: ''
    })
  };

  return (
    <>
      <form className={css.form}>
        <Input value={inputValues.origin} onChange={handleChange} title="origin" />
        <Input value={inputValues.destiny} onChange={handleChange} title="destination"/>
        <div className={css.buttonsWrap}>
          <Button title="Go" onClick={handleSubmit}/>
          <Button title="Clear" onClick={handleClearing}/>
        </div>
      </form>
      <div className={css.resultList}>
        Журнал запросов:
        {textResponse.map(item => {
          const id = shortid.generate();
          return <span key={id}>{item}</span>
        })}
      </div>
    </>
  )
};

export default memo(Form);
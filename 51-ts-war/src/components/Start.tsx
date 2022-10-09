import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changePage } from '../reducers/pageReducer';
import { changeName } from '../reducers/nameReducer';
import { createDeck } from '../reducers/deckReducer';

const Start = () => {

  const dispatch = useDispatch();
  const [name, setNewName] = useState('');

  const handleClickStart = () => {
    dispatch(changePage('game'));
    dispatch(changeName(name));
    dispatch(createDeck({}));
  }

  return (
    <div>
      <h1>Ready For War</h1>
      <input onChange={(e) => setNewName(e.target.value.trim().toUpperCase())} value={name} type='text' placeholder='Enter your name' />
      <button onClick={handleClickStart}>Start</button>
    </div>
  )


}

export default Start
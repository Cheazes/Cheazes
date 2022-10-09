import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createDeck } from '../reducers/deckReducer';
import { changePage } from '../reducers/pageReducer';
import resultReducer, { resetResult } from '../reducers/resultReducer';
import { RootState } from '../store/configureStore';

const Result = () => {

  const dispatch = useDispatch();
  const {userScore} = useSelector<RootState, ReturnType<typeof resultReducer>>(store => store.result);
  const {compScore} = useSelector<RootState, ReturnType<typeof resultReducer>>(store => store.result);
  const {result} = useSelector<RootState, ReturnType<typeof resultReducer>>(store => store.result);

  const handleClickAgain = () => {
    dispatch(changePage('game'));
    dispatch(createDeck(null));
    dispatch(resetResult(null));
  }

  return (
    <div>
      <h2>{result}</h2>
      <h3>user : {userScore}- {compScore} : computer </h3>
      <button onClick={handleClickAgain}>Again ?</button>
    </div>
  )
}

export default Result
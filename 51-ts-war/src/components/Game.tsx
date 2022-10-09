import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import deckReducer, { getCompCard, getUserCard } from '../reducers/deckReducer';
import nameReducer from '../reducers/nameReducer';
import { changePage } from '../reducers/pageReducer';
import resultReducer, { setCompResult, setUserResult, winnerCheck } from '../reducers/resultReducer';
import { RootState } from '../store/configureStore';

const Game = () => {

  const dispatch = useDispatch();
  const name = useSelector<RootState, ReturnType<typeof nameReducer>>(state => state.name);
  const {userDeck, compDeck} = useSelector<RootState, ReturnType<typeof deckReducer>>(state => state.deck);
  const {userCard, compCard} = useSelector<RootState, ReturnType<typeof deckReducer>>(state => state.deck);
  const {compCurrentScore, userCurrentScore }= useSelector<RootState, ReturnType<typeof resultReducer>>(state => state.result);

  useEffect(() => {
    if (userCard.rank > compCard.rank) {
      dispatch(setUserResult(null));
    }
    if (userCard.rank < compCard.rank) {
      dispatch(setCompResult(null));
    }
  }, [userCard, compCard, dispatch])

  const handleClickNext = () => {
    if (userDeck.length || compDeck.length) {
      dispatch(getUserCard(null));
      dispatch(getCompCard(null));
    }
    else {
      dispatch(changePage('result'));
      dispatch(winnerCheck(null));
    }
  }

  return (
    <div>
      <h2>Computer ({compCurrentScore})</h2>
      <p>{`${compCard.rank} ${compCard.suit}`}</p>
      <p>{`${userCard.rank} ${userCard.suit}`}</p>
      <h2>{name} ({userCurrentScore})</h2>
      <button onClick={handleClickNext}>Next</button>
    </div>
  )
}

export default Game
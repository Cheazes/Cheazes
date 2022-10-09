import React from 'react';
import { useSelector } from 'react-redux';
import Game from './components/Game';
import Result from './components/Result';
import Start from './components/Start';
import pageReducer from './reducers/pageReducer';
import {RootState} from './store/configureStore';

const App =() => {

 const page = useSelector<RootState, ReturnType<typeof pageReducer>>(state => state.page);

 
    switch (page) {
      case 'game':
        return <Game />;
      case 'result':
        return <Result/>
      default:
        return <Start  />
    }
  }



export default App;

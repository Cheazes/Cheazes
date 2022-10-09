import { useState } from 'react';
import { fetchQuoteAction } from '../actionFunctions/quoteAction';
import { deposit, withdraw } from '../reducers/accountReducer';
import { useAppDispatch } from '../store/configureStore';

const Operation = () => {
    const [sum, setSum] = useState(1);
    const dispatch = useAppDispatch();

    const handleClickGetQuote = () => {
        dispatch(fetchQuoteAction())
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary btn-lg' onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
                <input
                    className='form-control-lg text-center'
                    onChange={e => setSum(+e.target.value)}
                    value={sum}
                    type='number'
                />
                <button className='btn btn-primary btn-lg' onClick={() => dispatch(deposit(sum))}>Deposit</button>
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={handleClickGetQuote} className='btn btn-info btn-lg'>Get Quote</button>
            </div>
        </div>
    )
}

export default Operation
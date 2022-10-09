import { putQuote } from "../reducers/quoteReducer";
import { AppDispatch } from "../store/configureStore";

export const fetchQuoteAction = () => {
    return (dispatch: AppDispatch) => {
        dispatch(putQuote("Pending..."));
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(body => dispatch(putQuote(body.sentence)))
            .catch(e => dispatch(putQuote("Error")));
    }
}
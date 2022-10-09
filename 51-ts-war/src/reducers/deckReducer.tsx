import { createSlice } from "@reduxjs/toolkit";

const defaultDeck = {
    fullDeck: [] as object[],
    userDeck: [] as object[],
    compDeck: [] as object[],
    userCard: {} as any,
    compCard: {} as any,
};

const deckSlice = createSlice({
    name: 'deck',
    initialState: defaultDeck,
    reducers: {
        createDeck(deck, action) {
           
            const suits = ['spade', 'club', 'diamond', 'heart'];
            if (deck.fullDeck.length < 52) {
                for (let i = 0; i < suits.length; i++) {
                    for (let j = 1; j <= 13; j++) {
                        deck.fullDeck.push({
                            rank: j,
                            suit: suits[i]
                        })
                    }
                }
            }
           
            deck.fullDeck.sort(() => Math.random() - 0.5);
            
            deck.userDeck = deck.fullDeck.slice(0, deck.fullDeck.length / 2);
            
            deck.compDeck = deck.fullDeck.slice(26, deck.fullDeck.length);
            deck.compCard = deck.compDeck.pop(); 
        },
        getUserCard(deck, action) {
            deck.userCard = deck.userDeck.pop();
        },
        getCompCard(deck, action) {
            deck.compCard = deck.compDeck.pop();
        }
    }
})

export const { createDeck, getUserCard, getCompCard } = deckSlice.actions;
export default deckSlice.reducer;
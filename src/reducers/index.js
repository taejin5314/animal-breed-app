/* State that controlled by redux */
const initialState = {
  breed1Total: 0,
  breed1Rank: {},
  breed2Total: 0,
  breed2Rank: {}
}

/* Action types */
const ADD_TO_RANK = 'ADD_TO_RANK';
const REMOVE_FROM_RANK = 'REMOVE_FROM_RANK';

/* Action function definitions */
export const addToRank = () => ({
  type: ADD_TO_RANK
})

export const removeFromRank = () => ({
  type: REMOVE_FROM_RANK
})

/* Reducer */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_RANK:
      return {
        ...state,
        breed1Total: state.breed1Total + 1
      };
    case REMOVE_FROM_RANK:
      return {
        ...state,
        rank1: 'remove from list'
      }
    default:
      return state;
  }
}
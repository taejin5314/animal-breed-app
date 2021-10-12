import createRank from "../helpers/createRank";

/* State that controlled by redux */
const initialState = {
  breed1Total: 0,
  breed1Rank: {},
  breed2Total: 0,
  breed2Rank: {}
}

/* Action types */
const SET_INITIAL_RANK = 'SET_INITIAL_RANK';
const ADD_TO_RANK = 'ADD_TO_RANK';
const REMOVE_FROM_RANK = 'REMOVE_FROM_RANK';

/* Action function definitions */
export const setInitialRank = (data) => ({ type: SET_INITIAL_RANK, payload: data })

export const addToRank = () => ({ type: ADD_TO_RANK })

export const removeFromRank = () => ({ type: REMOVE_FROM_RANK })

/* Reducer */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INITIAL_RANK:
      const { rank1, rank2 } = createRank(action.payload)
      return {
        ...state,
        breed1Total: 10,
        breed1Rank: rank1,
        breed2Total: 10,
        breed2Rank: rank2
      }
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
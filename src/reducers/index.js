import createRank from "../helpers/createRank";
import reorderData from "../helpers/reorderData";

/* State that controlled by redux */
const initialState = {
  breed1Total: 0,
  breed1Rank: {},
  breed2Total: 0,
  breed2Rank: {}
}

/* Action types */
const SET_INITIAL_RANK = 'SET_INITIAL_RANK';
const DRAG_AND_DROP = 'DRAG_AND_DROP';

/* Action function definitions */
export const setInitialRank = (data) => ({ type: SET_INITIAL_RANK, payload: data })

export const dragAndDrop = (order) => ({ type: DRAG_AND_DROP, payload: order })

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
    case DRAG_AND_DROP:
      const { startIndex, startColumn, endIndex, endColumn } = action.payload;
      const newState = reorderData(state, startIndex, startColumn, endIndex, endColumn);
      return {
        ...newState,
      };
    default:
      return state;
  }
}
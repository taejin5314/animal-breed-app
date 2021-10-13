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
const DND_IN_SAME_COLUMN = 'DND_IN_SAME_COLUMN';
const DND_IN_OTHER_COLUMN = 'DND_IN_OTHER_COLUMN';

/* Action function definitions */
export const setInitialRank = (data) => ({ type: SET_INITIAL_RANK, payload: data })

export const dndInSameColumn = (order) => ({ type: DND_IN_SAME_COLUMN, payload: order })

export const dndInOtherColumn = (order) => ({ type: DND_IN_OTHER_COLUMN, payload: order })

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
    case DND_IN_SAME_COLUMN:
      const { startIndex, startColumn, endIndex, endColumn } = action.payload;
      if (startColumn === 'Breed 1') {
        if (startIndex > endIndex) {
          const temp = state.breed1Rank[`rank${startIndex + 1}`];
          for (let i = startIndex + 1; i > endIndex + 1; i--) {
            console.log(i)
            state.breed1Rank[`rank${i}`] = state.breed1Rank[`rank${i - 1}`];
          }
          state.breed1Rank[`rank${endIndex + 1}`] = temp;
        } else if (startIndex < endIndex) {
          const temp = state.breed1Rank[`rank${startIndex + 1}`];
          for (let i = startIndex + 1; i < endIndex + 1; i++) {
            console.log(i)
            state.breed1Rank[`rank${i}`] = state.breed1Rank[`rank${i + 1}`];
          }
          state.breed1Rank[`rank${endIndex + 1}`] = temp;
        }
        return {
          ...state,
        };
      } else if (startColumn === 'Breed 2') {
        if (startIndex > endIndex) {
          const temp = state.breed2Rank[`rank${startIndex + 1}`];
          for (let i = startIndex + 1; i > endIndex + 1; i--) {
            console.log(i)
            state.breed2Rank[`rank${i}`] = state.breed2Rank[`rank${i - 1}`];
          }
          state.breed2Rank[`rank${endIndex + 1}`] = temp;
        } else if (startIndex < endIndex) {
          const temp = state.breed2Rank[`rank${startIndex + 1}`];
          for (let i = startIndex + 1; i < endIndex + 1; i++) {
            console.log(i)
            state.breed2Rank[`rank${i}`] = state.breed2Rank[`rank${i + 1}`];
          }
          state.breed2Rank[`rank${endIndex + 1}`] = temp;
        }
        return {
          ...state,
        };
      }
    case DND_IN_OTHER_COLUMN:
      return {
        ...state,
        rank1: 'remove from list'
      }
    default:
      return state;
  }
}
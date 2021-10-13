export default function reorderData(state, startIndex, startColumn, endIndex, endColumn) {
  console.log(startIndex, startColumn, endIndex, endColumn)
  if (startColumn === endColumn) {
    if (startColumn === 'Breed 1') {
      if (startIndex > endIndex) {
        const temp = state.breed1Rank[`rank${startIndex + 1}`];
        for (let i = startIndex + 1; i > endIndex + 1; i--) {
          state.breed1Rank[`rank${i}`] = state.breed1Rank[`rank${i - 1}`];
        }
        state.breed1Rank[`rank${endIndex + 1}`] = temp;
      } else if (startIndex < endIndex) {
        const temp = state.breed1Rank[`rank${startIndex + 1}`];
        for (let i = startIndex + 1; i < endIndex + 1; i++) {
          state.breed1Rank[`rank${i}`] = state.breed1Rank[`rank${i + 1}`];
        }
        state.breed1Rank[`rank${endIndex + 1}`] = temp;
      }
    } else if (startColumn === 'Breed 2') {
      if (startIndex > endIndex) {
        const temp = state.breed2Rank[`rank${startIndex + 1}`];
        for (let i = startIndex + 1; i > endIndex + 1; i--) {
          state.breed2Rank[`rank${i}`] = state.breed2Rank[`rank${i - 1}`];
        }
        state.breed2Rank[`rank${endIndex + 1}`] = temp;
      } else if (startIndex < endIndex) {
        const temp = state.breed2Rank[`rank${startIndex + 1}`];
        for (let i = startIndex + 1; i < endIndex + 1; i++) {
          state.breed2Rank[`rank${i}`] = state.breed2Rank[`rank${i + 1}`];
        }
        state.breed2Rank[`rank${endIndex + 1}`] = temp;
      }
    }
  } else {

  }

  return state;
}
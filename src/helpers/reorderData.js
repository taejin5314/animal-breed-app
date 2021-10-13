export default function reorderData(state, startIndex, startColumn, endIndex, endColumn) {
  // when drag and drop occurs in the same column
  if (startColumn === endColumn) {
    if (startColumn === 'Breed 1') { // in case drag and drop occurs in breed 1 table
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

    } else if (startColumn === 'Breed 2') { // in case drag and drop occurs in breed 2 table
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
    // in case drag from breed 1 table and drop to breed 2 table
    if (startColumn === 'Breed 1') {
      state.breed1Total--;
      const temp = state.breed1Rank[`rank${startIndex + 1}`];

      for (let i = startIndex + 1; i <= state.breed1Total; i++) {
        state.breed1Rank[`rank${i}`] = state.breed1Rank[`rank${i + 1}`]
      }

      delete state.breed1Rank[`rank${state.breed1Total + 1}`]

      state.breed2Total++;

      for (let i = state.breed2Total; i > endIndex + 1; i--) {
        state.breed2Rank[`rank${i}`] = state.breed2Rank[`rank${i - 1}`];
      }

      state.breed2Rank[`rank${endIndex + 1}`] = temp;

    } else if (startColumn === 'Breed 2') { // in case drag from breed 2 table and drop to breed 1 table
      state.breed2Total--;
      const temp = state.breed2Rank[`rank${startIndex + 1}`];

      for (let i = startIndex + 1; i <= state.breed2Total; i++) {
        state.breed2Rank[`rank${i}`] = state.breed2Rank[`rank${i + 1}`]
      }

      delete state.breed2Rank[`rank${state.breed2Total + 1}`]

      state.breed1Total++;

      for (let i = state.breed1Total; i > endIndex + 1; i--) {
        state.breed1Rank[`rank${i}`] = state.breed1Rank[`rank${i - 1}`];
      }

      state.breed1Rank[`rank${endIndex + 1}`] = temp;
    }
  }

  return state;
}
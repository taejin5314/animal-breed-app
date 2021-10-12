/* Create 2 breed rank lists */
export default function createRank(data) {
  const breedArray = [];
  const rank1 = {};
  const rank2 = {};

  Object.keys(data).forEach(breed => {
    if (data[breed].length !== 0) {
      data[breed].forEach(detail => {
        breedArray.push(`${breed}-${detail}`);
      })
    } else {
      breedArray.push(breed);
    }
  })

  for (let i = 1; i <= 10; i++) {
    const randomNum1 = Math.floor(Math.random() * breedArray.length);
    rank1[`rank${i}`] = breedArray[randomNum1];
    breedArray.splice(randomNum1, 1);
    const randomNum2 = Math.floor(Math.random() * breedArray.length);
    rank2[`rank${i}`] = breedArray[randomNum2];
    breedArray.splice(randomNum2, 1);
  }

  return {
    rank1,
    rank2
  }
}
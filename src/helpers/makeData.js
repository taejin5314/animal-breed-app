// convert object data to array which contains rank number and breed name
export default function makeData(data) {
  return Object.values(data).map((breed, i) => {
    return {
      rank: i + 1,
      breed
    }
  })
}
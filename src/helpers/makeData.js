export default function makeData(data) {
  return Object.values(data).map((breed, i) => {
    return {
      rank: i + 1,
      breed
    }
  })
}
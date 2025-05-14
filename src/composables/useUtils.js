export function useUtils() {
  function byId(a, b) {
    // sort asc
    return Math.sign(a.id - b.id)
  }

  function byName(a, b) {
    // sort asc
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  }

  function byRating(a, b) {
    // sort desc
    if (a.rating < b.rating) return 1
    if (a.rating > b.rating) return -1
    return byName(a, b)
  }

  return { byId, byName, byRating }
}

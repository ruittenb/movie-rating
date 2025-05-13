export function useUtils() {
  function byId(a, b) {
    return Math.sign(a.id - b.id)
  }

  function byName(a, b) {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  }

  return { byId, byName }
}

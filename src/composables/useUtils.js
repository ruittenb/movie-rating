export function useUtils() {
  function byId(a, b) {
    return Math.sign(a.id - b.id)
  }

  return { byId }
}

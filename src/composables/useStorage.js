const PREFIX = 'ruitjeRatings'
const storage = localStorage

export function useStorage() {
    function writeData(data) {
        storage.setItem(`${PREFIX}.items`, JSON.stringify(data))
    }

    function readData() {
        return JSON.parse(storage.getItem(`${PREFIX}.items`))
    }

    return { readData, writeData }
}

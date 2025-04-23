const PREFIX = 'ruitjeRatings'
const storage = localStorage

export function useStorage() {
    function storeData(data) {
        storage.setItem(`${PREFIX}.items`, JSON.stringify(data))
    }

    function retrieveData() {
        return JSON.parse(storage.getItem(`${PREFIX}.items`))
    }

    return { retrieveData, storeData }
}

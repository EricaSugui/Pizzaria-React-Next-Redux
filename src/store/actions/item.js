export function addItem(item) {
    return {
        type: 'ADD_ITEM',
        payload: {
            id: item.id,
            name: item.name
        }
    }
}
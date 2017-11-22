
export const addItem = (name, weight, title) =>({
    type: 'ADD_ITEM',
    name: name,
    weight: weight,
    title: title
})
export const updateItem = (itemState, index, title)=>({
    type: 'UPDATE_ITEM',
    name: itemState.name,
    weight: itemState.weight,
    title: title,
    index: index
})
export const deleteItem = (title, name, weight) =>({
    type: 'DELETE_ITEM',
    title: title,
    name: name,
    weight: weight
})
export const updateGoal = (value) =>({
type: 'UPDATE_GOAL',
value: value
})
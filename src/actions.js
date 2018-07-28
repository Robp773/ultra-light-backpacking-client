export const addItem = (name, weight, importance, title) =>({
    type: 'ADD_ITEM',
    name: name,
    weight: weight,
    title: title,
    importance: importance
});
export const updateItem = (itemState, index, title)=>({
    type: 'UPDATE_ITEM',
    name: itemState.name,
    weight: itemState.weight,
    title: title,
    index: index
});
export const deleteItem = (title, index) =>({
    type: 'DELETE_ITEM',
    title: title,
    index: index
});
export const updateGoal = (value) =>({
    type: 'UPDATE_GOAL',
    value: value
});

export const setListState = (listState)=>({
    type: 'SET_STATE',
    state: listState
});
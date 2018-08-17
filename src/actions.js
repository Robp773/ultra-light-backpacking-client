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
    importance: itemState.importance,
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

export const openClose = (uiName)=>({
    type: 'OPEN_CLOSE',
    name: uiName
})

export const switchChart = (prevChart, newChart)=>({
    type: 'SWITCH_CHART',
    newChart: newChart,
    prevChart: prevChart
})
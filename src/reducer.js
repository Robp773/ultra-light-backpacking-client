const initialState = {
  listName: "initialRender",
  weightGoal: 0,
  hiking: [],
  clothing: [],
  navigation: [],
  shelter: [],
  sleep: [],
  cooking: [],
  water: [],
  hygiene: [],
  firstaid: [],
  misc: [],
  ui: {
    chartsModal: false,
    chartSelect: {
      weight_Pie: false,
      category_Pie: false,
      impCat_Bar: true
    }
  }
};
export const reducer = (state = initialState, action) => {
  if (action.type === "SWITCH_CHART") {
    if (action.prevChart === action.newChart) {
      return state;
    }

    return Object.assign(
      {},
      state,
      (state.ui.chartSelect[action.newChart] = true),
      (state.ui.chartSelect[action.prevChart] = false)
    );
  }

  if (action.type === "OPEN_CLOSE") {
    return Object.assign(
      {},
      state,
      (state.ui[action.name] = !state.ui[action.name])
    );
  }

  if (action.type === "ADD_ITEM") {
    return Object.assign({}, state, {
      [action.title]: [
        ...state[action.title],
        {
          name: action.name,
          weight: action.weight,
          importance: action.importance
        }
      ]
    });
  }

  if (action.type === "UPDATE_ITEM") {
    return Object.assign(
      {},
      state,
      (state[action.title][action.index] = {
        name: action.name,
        weight: Number(action.weight),
        importance: action.importance
      })
    );
  }

  if (action.type === "DELETE_ITEM") {
    state[action.title] = state[action.title].filter((item, index) => {
      return action.index !== index;
    });

    return Object.assign({}, state);
  }

  if (action.type === "UPDATE_GOAL") {
    return Object.assign({}, state, { weightGoal: action.value });
  }

  if (action.type === "SET_STATE") {
    return Object.assign({}, state, action.state);
  }
  return state;
};

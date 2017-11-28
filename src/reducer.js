const initialState =
 {

		weightGoal: 15,
	hiking: [
        {
		name: 'Backpack',
		weight: 18
    },
    {
		name: 'Trekking Poles',
		weight: 12
    },
    {
		name: 'Pack Cover',
		weight: 4.4
		},
		{
			name: 'Pack Cover',
			weight: 4.4
			}
    ],

    clothing: [{
		name: 'Scarf',
		weight: 3
    },
    {
		name: 'Down Jacket',
		weight: 6
    },
    {
		name: 'Socks',
		weight: 5.3
	}],
    navigation: [{
		name: 'Map',
		weight: .1
    },
    {
		name: 'Compass',
		weight: 4
    },
    {
		name: 'GPS',
		weight: 3
	}],
    shelter: [{
		name: 'Tent',
		weight: 18
    },
    {
		name: 'Ground Cloth',
		weight: 4
    },
    {
		name: 'Guylines',
		weight: .5
	}],
    sleep: [{
		name: 'Sleeping Bag',
		weight: 12
    },
    {
		name: 'Pillow ',
		weight: 3
    },
    {
		name: 'Sleeping Pad',
		weight: 3
    }],
    cooking: [{
		name: 'Stove',
		weight: 6
    },
    {
		name: 'Fuel',
		weight: 4
    },
    {
		name: 'Lighter',
		weight: 1
    }],
    water: [{
		name: 'Filter',
		weight: 6
    },
    {
		name: 'Purification',
		weight: 1
    },
    {
		name: 'Water Bottle',
		weight: 4
	}],
    hygiene: [
        
        {
		name: 'Tooth Brush',
		weight: 3
    },
    {
		name: 'Soap',
		weight: 3
    },
    {
		name: 'Deoderant',
		weight: 3
    }],
    firstAid: [{
		name: 'Band Aids',
		weight: 1
    },
    {
		name: 'Advil',
		weight: 2
    },
    {
		name: 'Gauze',
		weight: 3
    }],
    misc: [{
		name: 'Headlamp',
		weight: 4
    },
    {
		name: 'Batteries',
		weight: 2
    },
    {
		name: 'Lip Balm',
		weight: 1
	}],
}

export const reducer =  (state = initialState, action) =>{

	if(action.type === 'ADD_ITEM'){

		return Object.assign({}, state, {[action.title]:[ ...state[action.title], {name: action.name, weight: action.weight}]})	
	}
	if(action.type === 'UPDATE_ITEM'){		
		// action.title = the category title the action came from ex. 'hiking'
		// action.name / action.weight make up the update object ex. {name: 'test', weight: 4} 
		// action.index = the index of the input being updated
		// assigning the update object to the same position in the state that the original object was in.
		return Object.assign({}, state, state[action.title][action.index] = {name: action.name, weight: Number(action.weight)})

	}
	if(action.type === 'DELETE_ITEM'){

	}
		if(action.type === 'UPDATE_GOAL'){
			return Object.assign({}, state, {weightGoal: action.value})
		}
return state;
}


    
    

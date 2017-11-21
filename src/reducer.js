const initialState = {
    totalWeight: 0,
		totalItems: 0,
		weightGoal: 240,
    // hiking clothing navigation shelter sleep cooking water hygiene first aid misc
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
		
		let title = action.title;
		let foundObj = state[title]
		console.log('add item')
		return Object.assign({}, state, {hiking:[ ...state.hiking, {name: action.name, weight: action.weight}]})	
	
	}
return state;
}


    
    

import {addItem, updateItem, updateGoal, deleteItem, setListState } from './actions';

describe('addItem', () => {
    it('Should return the action', () => {
        const title = 'hiking';
        const name= 'test';
        const weight = 3;
        const action = addItem(name, weight, title);
        expect(action.type).toEqual('ADD_ITEM');
        expect(action.title).toEqual(title);
        expect(action.weight).toEqual(weight);
        expect(action.name).toEqual(name);
    });
});
describe('updateItem', () => {
    it('Should return the action', () => {
        const title = 'hiking';
        const name = 'test';
        const weight = 3;
        const itemState = {name: name, weight: weight}
        const index = 1;
        const action = updateItem(itemState, index, title);
        expect(action.type).toEqual('UPDATE_ITEM');
        expect(action.title).toEqual(title);
        expect(action.weight).toEqual(itemState.weight);
        expect(action.name).toEqual(itemState.name);
        expect(action.index).toEqual(index)
    });
});

describe('deleteItem', () => {
    it('Should return the action', () => {
        const title = 'hiking';
        const index = 1;
        const action = deleteItem(title, index);
        expect(action.type).toEqual('DELETE_ITEM');
        expect(action.title).toEqual(title);
        expect(action.index).toEqual(index)
    });
});

describe('updateGoal', () => {
    it('Should return the action', () => {
        const value = 15;
        const action = updateGoal(value);
        expect(action.type).toEqual('UPDATE_GOAL');
        expect(action.value).toEqual(value);
    });
});

describe('setListState', () => {
    it('Should return the action', () => {
        const state = {}
        const action = setListState(state);
        expect(action.type).toEqual('SET_STATE');
        expect(action.state).toEqual(state)
    });
});
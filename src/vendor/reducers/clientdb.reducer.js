import { deepCopie } from "../services/utils";

export const clientDBInitValue = {};

export const _CLIENT_DB_ACTIONS = {
    _SET_SCHEMA: 'set-schema',
    _SET_COLLECTION_DATA: 'set-collection-data',
    _ADD_ITEM: 'add-item',
    _UPDATE_ITEM: 'update-item',
    _DELETE_ITEM: 'delete-item',
};

export function clientDBReducer(state, action) {
    switch (action.type) {
        case _CLIENT_DB_ACTIONS._SET_COLLECTION_DATA:
            return { ...state, [action.collection]: action.payload };
        case _CLIENT_DB_ACTIONS._SET_SCHEMA:
            const newState = { schema: { ...action.payload } };
            for (const attr in action.payload) {
                newState[attr] = [];
            }
            return newState;

        case _CLIENT_DB_ACTIONS._ADD_ITEM:
            return {
                ...state,
                [action.collection]: [...state[action.collection], action.payload]
            }

        case _CLIENT_DB_ACTIONS._UPDATE_ITEM:
            const index = state[action.collection].findIndex(it => it.id === action.payload.id);
            if (index === -1) return state;
            const newData = deepCopie(state[action.collection]);
            newData[index] = action.payload;
            return {
                ...state,
                [action.collection]: newData
            }

        case _CLIENT_DB_ACTIONS._DELETE_ITEM:
            return {
                ...state,
                [action.collection]: state[action.collection].filter(it => it.id !== action.payload.id)
            }
        default:
            return { ...state };
    }
}
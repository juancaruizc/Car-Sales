export const ADD_FEATURE = 'ADD_FEATURE';
export const CLEAR_FEATURE = 'CLEAR_FEATURE';

export const addFeature = (itemId) => {
    return({type: ADD_FEATURE, payload:itemId})
}

export const clearFeature = (itemId) => {
    return({type: CLEAR_FEATURE, payload:itemId})
}

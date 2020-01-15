//eslint-disable-next-line
import initialState from './initialState';

export const addSentence = sentence => ({
    type: 'ADD_SENTENCE',
    sentence,
});
export const removeSentence = sentence => ({
    type: 'REMOVE_SENTENCE',
    sentence,
});
export const fetchData = () => () => {
    return {
        type: 'FETCH_DATA',
        initialState
    };
};
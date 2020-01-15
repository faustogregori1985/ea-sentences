import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    const { sentences } = state;
    switch (action.type) {
        case 'ADD_SENTENCE': {
            if (sentences[action.sentence.parentId]) {
                sentences[action.sentence.parentId].push(action.sentence);
            } else {
                sentences[action.sentence.parentId] = [{ ...action.sentence }];
            }
            return {
                ...state,
                sentences: { ...sentences },
            };
        }
        case 'REMOVE_SENTENCE': {
            sentences[action.sentence.parentId] = sentences[action.sentence.parentId]
                .filter(current => current.id !== action.sentence.id);
            return {
                ...state,
                sentences: { ...sentences },
            };
        }
        default:
            return state;
    }
};

export default reducer;


import { createStore } from "redux";

const initialState = {
    keyword: ''
}

const doKeyword = (state = initialState, action) => {
    switch (action.type) {
        case 'KEYWORD':
            return { keyword: action.keyword}
        default:
            return state
    }
}

const store = createStore(doKeyword);

export default store;
const initialState = { loading: false, error: '', searchedRes: [] };

const search = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            console.log(action.data)
            return ({ ...state, loading: false, error: '', searchedRes: action.data.results });
        case 'SEARCH_REQUEST':
            return ({ ...state, loading: true, error: '' });
        case 'SEARCH_FAILED':
            return ({ ...state, loading: false, error: 'Invalid Credentials. Please try Again.' });
        default:
            return ({ ...state });
    }
}

export default search;
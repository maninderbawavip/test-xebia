const initialState = { loading: false, error: '', loggedIn: '' };

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return ({ ...state, loading: false, loggedIn: 'Logged In', error: '' });
        case 'LOGIN_REQUEST':
            return ({ ...state, loading: true, error: '' });
        case 'LOGIN_FAILED':
            return ({ ...state, loading: false, error: 'Invalid Credentials. Please try Again.' });
        default:
            return ({ ...state });
    }
}

export default auth;